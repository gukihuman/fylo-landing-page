import "./style.sass";
import { resizeAnimationStopper } from "./modules/resize-anim-stop.mjs";
import { CustomValidation } from "./modules/custom-validation.mjs";
import { saveScrollPosition } from "./modules/save-scroll-position.mjs";

const headerForm = document.querySelector("header form");
class headerCustomValidation extends CustomValidation {
    constructor(form) {
        super(form);
        this.message.style.alignSelf = "baseline";
    };
};
let headerValidation = new headerCustomValidation(headerForm);
headerValidation.render()

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
secondCallValidation.render()

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

document.querySelector('body').style.opacity = '0%';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('body').style.opacity = '100%';
    }, 0);
});

saveScrollPosition();

resizeAnimationStopper();