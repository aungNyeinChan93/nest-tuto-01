/* eslint-disable prettier/prettier */

export interface Quote {
    quote: string;
    author: string;
}


export class CreateQuotesDto implements Quote {
    id?: number;
    quote: string;
    author: string;
}

