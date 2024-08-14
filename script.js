const library = [];
const bookContainer = document.querySelector(".library");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read? "read" : "not read";
    this.info = function() {
       return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    };
}

function addBookToLibrary(book) {
    library.push(book);
}

function showBooks(){
    for (let book of library){
        let card = getCard(book);
        bookContainer.appendChild(card);
    }
}

function getCard(book){
    let card = document.createElement("li");
    card.className = "card";

    let imgFiller = document.createElement("div");
    imgFiller.className = "imgFiller"
    imgFiller.style.backgroundColor = getRandomColor();

    let info = document.createElement("div");
    info.className = "info";

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = book.title;

    let author = document.createElement("p");
    author.className = "author";
    author.textContent = book.author;

    let pages = document.createElement("p");
    pages.className = "pages";
    pages.textContent = `${book.pages} pages`;

    info.append(title, author, pages);
    card.append(imgFiller, info);

    return card;
}

const colorPalette = [
    '#FADCD9', // Soft Pink
    '#FCE4D6', // Light Peach
    '#D0E2FF', // Pale Blue
    '#E6E6FA', // Lavender
];

// Function to get a random color from the palette
function getRandomColor() {
    // Generate a random index to pick a color from the palette array
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
};


addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));
addBookToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
addBookToLibrary(new Book("Moby Dick", "Herman Melville", 635, false));
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 279, true));
addBookToLibrary(new Book("The Catcher in the Rye", "J.D. Salinger", 214, false));
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, true));
addBookToLibrary(new Book("War and Peace", "Leo Tolstoy", 1225, false));
addBookToLibrary(new Book("The Odyssey", "Homer", 541, true));
addBookToLibrary(new Book("Crime and Punishment", "Fyodor Dostoevsky", 671, false));

showBooks();