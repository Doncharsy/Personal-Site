const welcome = document.querySelector(".welcome");
setTimeout(() => {
    welcome.style.opacity = '0.5'
}, 3000);
setTimeout(() => {
    welcome.style.opacity = '0.08'
}, 3500);
setTimeout(() => {
    welcome.style.opacity = '0.03'
}, 4500);
setTimeout(() => {
    welcome.style.opacity = '0.01'
}, 5000);
setTimeout(() => {
    welcome.style.opacity = '0.002'
}, 5500);

const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// TYPE METHOD
setTimeout(() => {
    TypeWriter.prototype.type = function () {
        const i = this.wordIndex % this.words.length;
        const fullTxt = this.words[i]
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false
            this.wordIndex++;
            typeSpeed = 500;
        }
        setTimeout(() => {
            this.type()
        }, typeSpeed);
    }
}, 8000);
// 
setTimeout(() => {
    init()
}, 8000);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait')

    new TypeWriter(txtElement, words, wait);
}


// 
const contactBtn = document.querySelector(".contact");
const contactPopUp = document.querySelector(".pop-up");
const popUpCloseBtn = document.querySelector(".popup-close");
contactBtn.addEventListener('click', () => {
    contactPopUp.classList.add("hidden")
})
popUpCloseBtn.addEventListener('click', _ => {
    contactPopUp.classList.remove("hidden");
});
const navCloseBtn = document.querySelector(".nav-close");
const navOpen = document.querySelector(".nav-open");
const navPopUp = document.querySelector(".nav-popUp");
const main = document.querySelector(".main");
const container = document.querySelector(".container")
navOpen.addEventListener("click", _ => {
    navPopUp.classList.add("display")
    navOpen.style.display = "none"
    main.classList.add("blur")
})
navCloseBtn.addEventListener('click', (e) => {
    navPopUp.classList.remove("display")
    navOpen.style.display = "block"
    main.classList.remove("blur")
    e.preventDefault()
})


// Form Validation
const sendBtn = document.querySelector(".send");
let yourName = document.querySelector(".your-name");
let yourEmail = document.querySelector(".your-email");
let yourMessage = document.querySelector(".your-message");
sendBtn.addEventListener('click', () => {
    setTimeout(() => {
        yourName.value = "";
        yourEmail.value = "";
        yourMessage.value = "";
    }, 2000);
})
yourEmail.addEventListener('click', () => {
    yourEmail.classList.add('rubberBand')
    setTimeout(() => {
        yourEmail.classList.remove('rubberBand')
    }, 1000);
})
yourName.addEventListener('click', () => {
    yourName.classList.add('rubberBand')
    setTimeout(() => {
        yourName.classList.remove('rubberBand')
    }, 1000);
})