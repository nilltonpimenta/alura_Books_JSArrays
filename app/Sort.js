let sortByP = document.getElementById("btnOrdenarPorPreco");
sortByP.addEventListener("click", sortBooks);

function sortBooks() {
    let orderedBooks = books.sort((a, b) => a.preco - b.preco);
    displayBooksOnScreen(orderedBooks);
}
