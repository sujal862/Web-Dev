h1 = document.querySelector('h1');

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function change() {
    await colorChange("red", 1000);
    await colorChange("blue", 1000);
    await colorChange("yellow", 1000);
    colorChange("purple", 1000);
}

change();
