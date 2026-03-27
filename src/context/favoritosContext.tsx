'use client'

import { createContext, ReactNode, useContext, useState } from "react"

type FavoritosContextType = {
    favoritos: number[],
    addToFavoritos: (item: number) => void,
    deleteFromFavoritos: (item: number) => void
}

const FavoritosContext = createContext<FavoritosContextType | null>(null)

export const FavoritosProvider = ({ children }: {children: ReactNode}) => {
    const [favoritos, setFavoritos] = useState<number[]>([])

    const addToFavoritos = (item: number) => {
        setFavoritos([...favoritos, item])
    }

    const deleteFromFavoritos = (item: number) => {
        setFavoritos(favoritos.filter(e => e !== item))
    }

    return (
        <FavoritosContext.Provider value={{favoritos, addToFavoritos, deleteFromFavoritos}}>
            { children }
        </FavoritosContext.Provider>
    )
}

export const useFavoritos = () => {
    const context = useContext(FavoritosContext)
    if(!context){
        throw new Error("Picha estas fuera del proveedor")
    }
    return context
}