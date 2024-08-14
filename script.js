const library = [];
const bookContainer = document.querySelector(".library");
const addBookBtn = document.querySelector("#addBook");
const addBookDialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector('#bookForm');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readCheckbox = document.querySelector('#read');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readStatus = read? "read" : "unread";
    this.info = function() {
       return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`)
    };
}

function addBookToLibrary(book) {
    library.push(book);
}

function showBooks(){
    for (let i = 0; i < library.length; i++){
        let card = getCard(library[i]);
        card.setAttribute("data-index", i);
        bookContainer.appendChild(card);
    }
}

function getCard(book){
    let card = document.createElement("li");
    card.className = "card";

    let imgFiller = document.createElement("div");
    imgFiller.className = "imgFiller"
    imgFiller.style.backgroundColor = getRandomColor();

    let readStatus = document.createElement("button");
    readStatus.className = "readStatus";
    readStatus.classList.add(book.readStatus);
    readStatus.textContent = book.readStatus;
    imgFiller.appendChild(readStatus);

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

    let infoBottomLeft = document.createElement("div");
    infoBottomLeft.className = "infoBottomLeft";
    infoBottomLeft.append(author, pages);

    let deleteBook = document.createElement("button");
    deleteBook.className = "deleteBook";
    deleteBook.textContent = "Delete";

    let infoBottom = document.createElement("div");
    infoBottom.className = "infoBottom";
    infoBottom.append(infoBottomLeft, deleteBook);

    info.append(title, infoBottom);
    card.append(imgFiller, info);

    return card;
}

function getRandomColor() {
    const colorPalette = [
        '#907F9F',
        '#4B2142',
        '#E6E6FA', 
    ];
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
};

addBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});
  
closeDialogBtn.addEventListener("click", () => {
    addBookDialog.close();
});

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if (form.checkValidity()){
        let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readCheckbox.checked);
        addBookToLibrary(book);
        addBookDialog.close();
        form.reset();
        let card = getCard(book);
        card.setAttribute("data-index", library.length--);
        bookContainer.appendChild(card);
    }else{
        alert("Enter all book details");
    }  
});

addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));
addBookToLibrary(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
addBookToLibrary(new Book("Moby Dick", "Herman Melville", 635, false));
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 279, true));
addBookToLibrary(new Book("The Catcher in the Rye", "J.D. Salinger", 214, false));

showBooks();