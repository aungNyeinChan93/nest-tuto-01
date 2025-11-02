/* eslint-disable prettier/prettier */

interface Team {
    name: string;
    stadium: string;
    location?: string;
    manager: string;
    rank: number;
}

export class CreateTeamDto implements Team {
    id?: number;
    name: string;
    stadium: string;
    location?: string;
    manager: string;
    rank: number;
}
