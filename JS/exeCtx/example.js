let color = "blue";

function changeColor() {
    let anotherColor = "red";

    function swapColor() {
        let temColor = anotherColor;
        anotherColor = color;
        color = temColor;
    }

    swapColor();

    console.log(anotherColor)
}

changeColor();

console.log(color)

