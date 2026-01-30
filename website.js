const searchInput = getElementById("searchInput");
const books = document.querySelector(".book=card");

searchInput.addEventListener("keyup", function() {
    const value = searchInput.value.toLowerCase();

    books.foreach(book => {
        const text =  book.innerText.toLowerCase();
        book.style.display = text.Icludes(value) ? "flex" : "none"
    });
});