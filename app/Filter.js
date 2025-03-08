const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", filterBooks));

function filterBooks() {
    const elementBtn = document.getElementById(this.id);
    const valueCategoria = elementBtn.value;
    let filteredBooks =
        valueCategoria == "disponivel"
            ? books.filter((book) => book.quantidade > 0)
            : books.filter((book) => book.categoria == valueCategoria);
    displayBooksOnScreen(filteredBooks);

    if (valueCategoria == "disponivel") {
        let totalValue = calcTotalValue(filteredBooks);
        elementTotalBooksAvailable.innerHTML = `<div class="livros__disponiveis">
                <p>
                    Todos os livros disponíveis por R$
                    <span id="valor">${totalValue}</span>
                </p>
            </div>`;
    }
}
