'use client'

import { useFavoritos } from "@/context/favoritosContext";
import { useRouter } from "next/navigation";
import AlbumComp from "../components/AlbumComp";
import "./page.css"

const favoritos = () => {

    const { favoritos } = useFavoritos();
    const router = useRouter();
    
    return (
        <div className="contenedorPaginaFavoritos">
            <div className="menuFavoritos">
                <h1>Echa un vistazo a tus álbumes favoritos</h1>
                <button onClick={()=> router.push("/")}>HOME</button>
            </div>
            <div className="listaAlbumsFav">
                {favoritos.map((e) => <AlbumComp key={e} id={e}/>)}
            </div>
        </div>
    )
}

export default favoritos
