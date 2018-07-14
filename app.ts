import { Category } from './enums';
import { Book, DamageLogger, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';

function GetBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
    ];

    return books;
}

function LogFirstAvailable(books: Book[] = GetBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
        }
    }

    console.log('Number of books: ' + numberOfBooks);
    console.log('First available book: ' + firstAvailable);
}

function GetBookTitlesByCategory(category: Category = Category.Fiction): string[] {
    console.log('Getting books in category: ' + Category[category]);

    const books: Book[] = GetBooks();
    const bookTitles: string[] = [];

    for (let currentBook of books) {
        if (currentBook.category === category) {
            bookTitles.push(currentBook.title);
        }
    }

    return bookTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log('- ' + title);
    }
}

function GetBookById(id: number): Book {
    const books: Book[] = GetBooks();
    return books.filter(book => book.id == id)[0];
}

function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer: ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customerName: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for: ' + customerName);

    const checkedOutBookTitles: string[] = [];
    for (const id of bookIds) {
        const book: Book = GetBookById(id);

        if (book.available) {
            checkedOutBookTitles.push(book.title);
        }
    }

    return checkedOutBookTitles;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any): string[] {
    const books: any[] = GetBooks();
    const titles: string[] = [];

    if (typeof bookProperty === 'string') {
        for (const book of books) {
            if (book.author === bookProperty) {
                titles.push(book.title);
            }
        }
    }

    else if (typeof bookProperty === 'boolean') {
        for (const book of books) {
            if (book.available === bookProperty) {
                titles.push(book.title);
            }
        }
    }

    return titles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

// Test code.

// // Arrow functions.
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((value, index, array) => (index + 1) + ' - ' + value);

// // Function types.
// let numVariable: number;
// numVariable = 10;

// let funcVariable: (str: string, num: number) => string;

// funcVariable = CreateCustomerId;
// console.log(funcVariable('Daniel', 10));

// funcVariable = (str, num) => str + num;
// console.log(funcVariable('Daniel', 20));

// // Optional parameters.
// CreateCustomer('Michelle');
// CreateCustomer('Leigh', 6);
// CreateCustomer('Marie', 12, 'Atlanta');

// // Default parameters.
// const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(title => console.log(title));

// const fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// // Rest parameters.
// let checkedOutBookTitles = CheckoutBooks('Thorne');
// checkedOutBookTitles.forEach(title => console.log(title));

// checkedOutBookTitles = CheckoutBooks('Thorne', 1, 3);
// checkedOutBookTitles.forEach(title => console.log(title));

// // Function overloads.
// const hermanBookTitles = GetTitles('Herman Melville');
// hermanBookTitles.forEach(title => console.log(title));

// const checkedOutBookTitles = GetTitles(false);
// checkedOutBookTitles.forEach(title => console.log(title));

// // Interfaces.
// const myBook: Book = {
//     id: 5,
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages: 250,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// };

// PrintBook(myBook);
// myBook.markDamaged('Missing back cover');

// // Classes.
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');

const myReferenceItem: ReferenceItem = new ReferenceItem('Facts and Figures', 2016);
myReferenceItem.print();
myReferenceItem.publisher = 'Random Data Publishing';
console.log(myReferenceItem.publisher);