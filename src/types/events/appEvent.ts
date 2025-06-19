export type AppEvent = {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    image: string,
    date: Date,
    location: string,
    locationLink: string,
    organizer: string,
    tags?: string[],
    lat?: number,
    lon?: number
}