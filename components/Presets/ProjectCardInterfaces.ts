export interface Card {
    title: string,
    image: string,
    description: string
}
export interface Category {
    title: string,
    cards: Card[]
}
export interface MainData {
    name: string,
    description: string,
    image: string,
}
export interface GameData {
    index: string,
    build: string,
    description: string,
    controls: string[]
}

export interface Page {
    id: number,
    main: MainData,
    game: GameData,
    categories: Category[]
}