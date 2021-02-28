const input = document.getElementById("input");
const container = document.getElementById("container");
input.addEventListener("input", (e) => {
    const text = input.value;
    if (text == "Do a barrel roll") {
        container.style.animation = "barrel-roll 5s infinite";
    } else {
        container.style.removeProperty("animation");
    }
})