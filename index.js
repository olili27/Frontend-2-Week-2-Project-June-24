"use-strict"

document.addEventListener("DOMContentLoaded", () => {
    let decrementBtn = document.getElementById("decrement");
let incrementBtn = document.getElementById("increment");
let clearBtn = document.getElementById("clear");
let errorElement = document.getElementById("show-error")

// console.log(countElement);
incrementBtn.addEventListener("click", () => {
    errorElement.style.display = "none";
    let countElement = document.querySelector("#show-count span")
    countElement.textContent++;
});

decrementBtn.addEventListener("click", () => {
    let countElement = document.querySelector("#show-count span")
    let currentCount = countElement.textContent;

    if(currentCount == 0) {
        errorElement.style.display = "block";
    } else {
        countElement.textContent--;
    }
});
countElement = 
console.log("testing");
})
