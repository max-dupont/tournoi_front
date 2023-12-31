export interface Game {
    id?: number
    tower: number,
    number: number,
    first_player?: number,
    first_player_name?: string,
    second_player?: number,
    second_player_name?: string,
    winner?: number,
    room?: number,
    room_number?: number
}
