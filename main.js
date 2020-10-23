
(function () {
    let numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
    let a = Math.floor(Math.random() * numbers.length);
    document.querySelector("#number").innerHTML = `${numbers[a]}`;
    let symbols = ["♠", "♣", "♥", "♦"];
    let b = Math.floor(Math.random() * symbols.length);
    document.querySelector("#icono").innerHTML = `${symbols[b]}`;
    document.querySelector("#simbolo").innerHTML = `${symbols[b]}`;
    if (b == 2 || b == 3) {
        document.querySelector("#icono").style.color = "red";
        document.querySelector("#simbolo").style.color = "red";

    }
})()