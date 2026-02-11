const dynamicText = document.getElementById("dynamic-text");
const words = ['COMPLEXITY', 'INDIVIDUALITY', 'EXCELLENCE'];
let index = 0;

setInterval(() => {
    index++;

    if(index >= words.length) {
        index = 0;
    }

    dynamicText.textContent = "YOUR " + words[index];
}  , 1000);