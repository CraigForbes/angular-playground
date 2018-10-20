export interface Hero {
    value: number;
    text: string;
    group: string;
}

export class HeroList {

    constructor() {}

    heroes: Hero[] = [
        { value: 1, text: 'Batman', group: 'DC' },
        { value: 2, text: 'Spiderman', group: 'Marvel' },
        { value: 3, text: 'Super-Man', group: 'DC' },
    ];
}
