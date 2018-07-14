function GetBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
    ];

    return books;
}

function LogFirstAvailable(books: any[]): void {
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

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(category: Category): string[] {
    console.log('Getting books in category: ' + Category[category]);

    const books = GetBooks();
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

function GetBookById(id: number) {
    const books = GetBooks();
    return books.filter(book => book.id == id)[0];
}

function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

// Test code.

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((value, index, array) => (index + 1) + ' - ' + value);

let numVariable: number;
numVariable = 10;

let funcVariable: (str: string, num: number) => string;

funcVariable = CreateCustomerId;
console.log(funcVariable('Daniel', 10));

funcVariable = (str, num) => str + num;
console.log(funcVariable('Daniel', 20));
