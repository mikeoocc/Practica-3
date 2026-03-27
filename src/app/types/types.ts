export type Album = {
    collectionId: number,
    collectionName: string,
    artworkUrl60: string,
    artistName: string,
    collectionViewUrl: string
}

export type respuestaAPI = {
    resultCount: number,
    results: Album[]
}