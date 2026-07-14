export interface Category {
    categoryTitle: string,
    categoryDescription: string,
    categoryStyle: string,
    cards: Card[]
}
export interface Card {
    cardTitle: string,
    cardImage: string,
    cardDescription: string,
    cardHref: string,
    cardHrefPage: string
}
export interface MainData {
    projectName: string,
    projectDescription: string,
    projectImage: string,
}
export interface GameData {
    gameIndex: string,
    gameBuild: string,
    gameDescription: string,
    gameControls: string[]
}
export interface Page {
    id: number,
    main: MainData,
    game: GameData,
    categories: Category[]
}