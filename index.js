"use-strict"

document.addEventListener("DOMContentLoaded", () => {
    let decrementBtn = document.getElementById("decrement");
let incrementBtn = document.getElementById("increment");
let clearBtn = document.getElementById("clear");
let errorElement = document.getElementById("show-error")
let countElement = document.querySelector("#show-count span");

if(countElement.textContent == 0) {
    clearBtn.style.display = "none";
}

incrementBtn.addEventListener("click", () => {
    errorElement.style.display = "none";
    let countElement = document.querySelector("#show-count span")
    countElement.textContent++;
    clearBtn.style.display = "inline";
});

decrementBtn.addEventListener("click", () => {
    let countElement = document.querySelector("#show-count span")
    let currentCount = countElement.textContent;

    if(currentCount == 0) {
        errorElement.style.display = "block";
        clearBtn.style.display = "none";
    } else {
        countElement.textContent--;
    }
});

clearBtn.addEventListener("click", () => {
    errorElement.style.display = "none";
    let countElement = document.querySelector("#show-count span");
    countElement.textContent = 0;
    clearBtn.style.display = "none";
});
})
