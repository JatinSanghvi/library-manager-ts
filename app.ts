function GetBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
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

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);