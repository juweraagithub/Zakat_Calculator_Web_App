const countDisplay = document.getElementById("count");
let count = Number(localStorage.getItem("tasbeeh")) || 0;
countDisplay.innerText = count;

document.getElementById("increment").onclick = () => {
    count++;
    countDisplay.innerText = count;
    localStorage.setItem("tasbeeh", count);
};

document.getElementById("reset").onclick = () => {
    count = 0;
    countDisplay.innerText = count;
    localStorage.setItem("tasbeeh", count);
};

// DARK MODE LOAD
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
