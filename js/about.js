// ABOUT PAGE
let dateObj = new Date;
let greeting = document.querySelector(".Greeting");
if (dateObj.getHours() < 12) {
    greeting.innerHTML = `Ohayou Gozaimasu!`
}
else if (dateObj.getHours() >= 12 && dateObj.getHours() < 17) {
    greeting.innerHTML = `Kon'nichiwa!`
}
else if (dateObj.getHours() > 17 && dateObj.getHours() < 21) {
    greeting.innerHTML = `Konbanwa!`
}
else if (dateObj.getHours() > 21 && dateObj.getHours() < 24) {
    greeting.innerHTML = `Oyasumi!`
}
// Making the carousel
let images = ["my-photos/close-up.jpg",
    "my-photos/Me-in-native.jpg",
    "my-photos/me-in-blue.jpg",
    "my-photos/me-in-church.jpg",
    "my-photos/me-in-school.jpg"]

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const mainImg = document.querySelector(".my-pic")
next.addEventListener('click', (e) => {

    if (mainImg.src.includes(`${images[0]}`)) {
        mainImg.src = `${images[1]}`
    }
    else if (mainImg.src.includes(`${images[1]}`)) {
        mainImg.src = `${images[2]}`
    }
    else if (mainImg.src.includes(`${images[2]}`)) {
        mainImg.src = `${images[3]}`
    }
    else if (mainImg.src.includes(`${images[3]}`)) {
        mainImg.src = `${images[4]}`
    }
    else if (mainImg.src.includes(`${images[4]}`)) {
        mainImg.src = `${images[0]}`
    }
})

previous.addEventListener('click', () => {
    if (mainImg.src.includes(`${images[1]}`)) {
        mainImg.src = `${images[0]}`
    }
    else if (mainImg.src.includes(`${images[2]}`)) {
        mainImg.src = `${images[1]}`
    }
    else if (mainImg.src.includes(`${images[3]}`)) {
        mainImg.src = `${images[2]}`
    }
    else if (mainImg.src.includes(`${images[4]}`)) {
        mainImg.src = `${images[3]}`
    }
    else if (mainImg.src.includes(`${images[0]}`)) {
        mainImg.src = `${images[4]}`
    }
})

let child = document.querySelector(".child");
setInterval(() => {
    let num = Math.floor((Math.random() * 4) + 1);
    child.src = `${images[num]}`
}, 15000);
