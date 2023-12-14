document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('button');
    const dialog = document.getElementById('dialog');
    const close = dialog.querySelector('#close');
    const add = dialog.querySelector('#add');
    const nameInput = document.getElementById('name');
    const authInput = document.getElementById('auth');
    const pageInput = document.getElementById('page');
    const readInput = document.getElementById('read');

    button.addEventListener("click", () => {
        dialog.showModal();
    });

    close.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
        clearDialogInputs();
    });

    const myLibrary = [];

    function Book(n, a, p, r) {
        this.name = n;
        this.auth = a;
        this.page = p;
        this.read = r;
    }

    function addBookToLibrary() {
        let newBook = new Book(nameInput.value, authInput.value, pageInput.value, readInput.value);
        myLibrary.push(newBook);
        console.log(myLibrary);
    }

    add.addEventListener('click', function () {
        addBookToLibrary();
        dialog.close();
        clearDialogInputs();
    });

    function clearDialogInputs() {
        nameInput.value = "";
        authInput.value = "";
        pageInput.value = "";
        readInput.value = "";
    }
});
