const form = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const div = document.getElementById("title");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const greetName = nameInput.value;

    div.innerHTML = `, ${greetName}`;
});

//Color Box

const red_color_box = document.getElementById("red_box");
const blue_color_box = document.getElementById("blue_box");
const green_color_box = document.getElementById("green_box");
const yellow_color_box = document.getElementById("yellow_box")

red_color_box.addEventListener("click", function () {
        red_color_box.style.backgroundColor = "red";
        red_color_box.style.color = "white";

    });

    blue_color_box.addEventListener("click", function () {
        blue_color_box.style.backgroundColor = "blue";
        blue_color_box.style.color = "white";

    });

    green_color_box.addEventListener("click", function () {
        green_color_box.style.backgroundColor = "green";
        green_color_box.style.color = "white";

    });

    yellow_color_box.addEventListener("click", function () {
        yellow_color_box.style.backgroundColor = "yellow";
        yellow_color_box.style.color = "white";

    });