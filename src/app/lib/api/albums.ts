
import { Album, respuestaAPI } from "@/app/types/types";
import { api } from "./axios";


export const obtenerAlbumesPorArtista = async (artistName: string): Promise<Album[]> => {
    const response = await api.get<respuestaAPI>(`/search?term=${artistName}&entity=album&limit=20`)

    const data = response.data.results

    if (!data) throw new Error("Peticion a la api invalida")

    return data
}

export const obtenerAlbumID = async (id: number): Promise<Album> => {

    const response = await api.get<respuestaAPI>(`/lookup?id=${id}`)
    
    const data = response.data.results

    if (!data) throw new Error("Peticion a la api invalida")

    return data[0]
}
