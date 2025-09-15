export interface Card {
    title: string,
    image: string,
    description: string
}
export interface Category {
    title: string,
    cards: Card[]
}
export interface Page {
    id: number,
    name: string,
    desc: string,
    img: string,
    categories: Category[]
}