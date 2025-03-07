let books = [];
const endpointDaAPI =
    "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getSearchAPIBooks();

async function getSearchAPIBooks() {
    const res = await fetch(endpointDaAPI);
    books = await res.json();
    console.table(books);
    let discountedBooks = applyDiscounts(books);
    displayBooksOnScreen(discountedBooks);
}
