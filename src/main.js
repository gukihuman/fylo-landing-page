import "./style.sass";
const body = require("./body.pug");
import { resizeAnimationStopper } from "./modules/resize-anim-stop.mjs";
import { CustomValidation } from "./modules/custom-validation.mjs";

document.querySelector("body").innerHTML = body();

const headerInput = document.querySelector("header input");
const headerForm = document.querySelector("header form");
class headerCustomValidation extends CustomValidation {
    constructor(form) {
        super(form);
        this.message.style.alignSelf = "baseline";
    };
};
let headerValidation = new headerCustomValidation(headerForm);
headerValidation.initiate()

const secondCallInput = document.querySelector(".second-call input");
const secondCallForm = document.querySelector(".second-call form");
class secondCallCustomValidation extends CustomValidation {
    constructor(form) {
        super(form);
        this.message.style.alignSelf = "baseline";
        this.colorError = "white";
        this.color = "white";
    };
};
let secondCallValidation = new secondCallCustomValidation(secondCallForm);
secondCallValidation.initiate()

let headerSubmitted = false;

let headerButton = headerForm.querySelector("button");
headerForm.addEventListener('submit', () => {
    if (window.innerWidth <= 768) {
        headerButton.classList.add("button-animation");
    };
    headerSubmitted = true;
});

let secondCallButton = secondCallForm.querySelector("button");
secondCallForm.addEventListener('submit', () => {
    secondCallButton.classList.add("button-animation");
});

window.addEventListener('resize', () => {
    if (headerSubmitted === true && window.innerWidth <= 768) {
        headerButton.classList.add("button-animation");
    } else {
        headerButton.classList.remove("button-animation");
    };
});

window.addEventListener('scroll', () => {
    sessionStorage.setItem('scroll-position', scrollY);
});

window.addEventListener('load', () => {
    window.scrollTo(0, sessionStorage.getItem('scroll-position')) || 0
});

resizeAnimationStopper();