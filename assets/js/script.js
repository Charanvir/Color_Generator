const button = document.querySelector("button");
const h2 = document.querySelector("h2");
const colorArea = document.querySelector(".colorBox")
const reset = document.querySelector("#reset")
button.addEventListener('click', function () {
    const newColor = randomColor();
    colorArea.style.backgroundColor = newColor;
    h2.innerText = newColor;
    const list = document.createElement("Li");
    list.innerText = randomColor();
    document.getElementById("nameColors").appendChild(list);
    list.style.color = newColor;
})


reset.addEventListener('click', function () {
    const resetColor = " ";
    const resetText = document.querySelector("#nameColors")
    resetText.innerText = resetColor;
    colorArea.style.backgroundColor = "white";
    h2.innerText = "Color RGB Value";
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}