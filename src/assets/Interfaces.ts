export interface SpaceXData {
    rocket: string;
    flight_number: number;
    date_utc: Date
    id: string;
    title: string;
    event_date_utc: Date;
    details: string;
    article: string;
    links: {article: string, reddit: string, wikipedia: string}
    success: boolean
    crew: []
    ships: []
    capsules: []
    launchpad: string
    name: string
}