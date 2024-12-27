let content = document.querySelector("#incrementBtn")
// console.log(content);
let func1 = function() {
    
    let count = parseInt(document.getElementById("counter").textContent)
    count++
    document.getElementById("counter").innerText = count
}
content.addEventListener("click", func1);

let content2 = document.querySelector("#decrementBtn");


let func2 = function() {
    
    let count = parseInt(document.getElementById("counter").textContent)
    count--
    document.getElementById("counter").innerText = count
}
content2.addEventListener("click", func2);




