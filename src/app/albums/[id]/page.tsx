'use client'

import { obtenerAlbumID } from "@/app/lib/api/albums"
import { Album } from "@/app/types/types"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import "./page.css" 

const AlbumConId = () => {
    
    const { id } = useParams()
    const [ album, setAlbum ] = useState<Album | null>(null)
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string>("")

    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        obtenerAlbumID(Number(id))
        .then((e) => setAlbum(e))
        .catch(() => setError("Error. . ."))
        .finally(() => setLoading(false))
    }, [id])

    return (

        <div className="contenedorTotalDetalle">
            <button onClick={() => router.push("/albums")}>VOLVER</button>
            {!album && loading && <h1>Loading. . .</h1>}
            {!loading && !error && album && (
                <div className="contenedorDetalle">
                    <h1>{album.collectionName}</h1>
                    <h2>{album.artistName}</h2>
                    <img src={album.artworkUrl60}></img>
                </div>
            )}
            {error && <h1>{error}</h1>}
        </div>
    )

}

export default AlbumConId