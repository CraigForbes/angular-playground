export interface Country {
    value: number;
    text: string;
    group: string;
}

export class CountryList {

    constructor() {}

    countries: Country[] = [
        { value: 1, text: 'South Africa', group: 'Africa' },
        { value: 2, text: 'Scotland', group: 'Europe' },
        { value: 3, text: 'Japan', group: 'Asia' },
    ];
}
