let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0 

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    let current = count + " - "
    saveEl.textContent += current
    countEl.textContent = 0
    count = 0 
}
 
function reset() {
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}