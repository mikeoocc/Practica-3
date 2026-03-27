'use client'

import { useState } from "react"
import { Album } from "../types/types"
import { obtenerAlbumesPorArtista } from "../lib/api/albums"
import AlbumComp from "../components/AlbumComp"
import "./page.css"
import { useRouter } from "next/navigation"

const page = () => {

    const [ albums, setAlbums ] = useState<Album[] | null>(null)
    const [ name, setName ] = useState<string>("")
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string>("")

    const router = useRouter()

    const handler = () => {
        setLoading(true)
        obtenerAlbumesPorArtista(name)
        .then((e) => setAlbums(e))
        .catch(() => {setError("Error. . .")})
        .finally(() => {setLoading(false)})
    }

    return (
        <div className="contenedorPaginaAlbums">
            <h1>Escribe el nombre del artista musical</h1>
            <div className="contenedorBuscar">
                <button onClick={() => router.push("/")}>HOME</button>
                <input onChange={(e) => setName(e.target.value)}></input>
                <button onClick={handler}>BUSCAR</button>
            </div>
            <div className="listaAlbums">
                {!albums && loading && <h1>Loading. . .</h1>}
                {albums && albums.map((e) => <AlbumComp key={e.collectionId} album={e}/>)}
                {error && <h1>{error}</h1>}
            </div>
        </div>
    )
}

export default page
