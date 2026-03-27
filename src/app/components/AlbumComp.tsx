'use client'

import { useRouter } from "next/navigation"
import { Album } from "../types/types"
import "./AlbumComp.css"
import { useEffect, useState } from "react"
import { obtenerAlbumID } from "../lib/api/albums"
import { useFavoritos } from "@/context/favoritosContext"

type Params = {
    album?: Album,
    id?: number
}

const AlbumComp = ({ album, id }: Params) => {

    const router = useRouter()

    const [innerAlbum, setInnerAlbum] = useState<Album | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string|null>(null)

    const { addToFavoritos, favoritos, deleteFromFavoritos } = useFavoritos()

    useEffect(() => {
        if(album){
            setLoading(false)
            setInnerAlbum(album)
        } else if(id){
            setLoading(true)
            obtenerAlbumID(id).then((e) => setInnerAlbum(e))
            .catch(() => {setError("Error al cargar favorito. . .")})
            .finally(() => setLoading(false))
        }
    }, [album, id])

    const favorito = innerAlbum ? favoritos.includes(innerAlbum.collectionId) : false

    return (

        <>
        {!innerAlbum && loading && <h2>Loading. . .</h2>}
        { !loading && !error && innerAlbum && (
            <div className="contenedorDeAlbums">
                <h2>{innerAlbum.collectionName}</h2>
                <img src={innerAlbum.artworkUrl60}></img>
                <p onClick={() =>router.push(`albums/${innerAlbum.collectionId}`)}>VER PÁGINA</p>
                <button onClick={() =>{
                    if(id && favorito) {
                        deleteFromFavoritos(innerAlbum.collectionId)
                    } else if (album && !favorito) {
                        addToFavoritos(innerAlbum.collectionId)
                    }
                }}> { id && favorito ? "Quitar de favoritos" : favorito ? "Añadido a favoritos" : "Añadir a favoritos"}
                </button>
            </div>
        )}
        {error && <h2>{error}</h2>}
        </>

    )
}

export default AlbumComp