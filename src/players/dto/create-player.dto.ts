/* eslint-disable prettier/prettier */


interface BasePalyer {
    name: string;
    team: string;
    number: number;
    age: number;
}

export class CreatePlayerDto implements BasePalyer {
    id?: number;
    name: string;
    team: string;
    number: number;
    age: number;

    // public goal() {
    //     console.log(` Goal : ${this.name} `)
    // }
}
