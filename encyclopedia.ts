import { ReferenceItem } from './classes';

export default class extends ReferenceItem {
    constructor(title: string, year: number, private edition: number) {
        super(title, year);
    }

    print(): void {
        super.print();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
