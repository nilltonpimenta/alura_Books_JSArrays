function applyDiscounts(books) {
    const discount = 0.3;
    discountedBooks = books.map((book) => {
        return { ...book, preco: book.preco - book.preco * discount };
        //make a copy and only change the "preco"
    });

    return discountedBooks;
}
