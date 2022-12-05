let inputtext = document.querySelector(".input");
let wordcounter = document.querySelector(".wordcount");
let lettercounter = document.querySelector(".lettercount");

inputtext.addEventListener("input", () => {
    lettercounter.textContent = inputtext.value.length;
    
    let text = inputtext.value.trim();
    
    wordcounter.textContent = text.split(/\s+/).filter(
        (item) => item).length;
    
});