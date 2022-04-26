import "./style.sass";
const body = require("./body.pug");
import { resizeAnimationStopper } from "./modules/resize-anim-stop.mjs";
import { removeInvalidMessage } from "./modules/remove-invalid-message.mjs";
import { EmailErrorMessage } from "./modules/email-error-message.mjs";

document.querySelector("body").innerHTML = body();

resizeAnimationStopper();

const headerInput = document.querySelector("header input");
removeInvalidMessage(headerInput);

const headerForm = document.querySelector("header form");
let headerEmailErrorMessage = new EmailErrorMessage(headerForm);
headerEmailErrorMessage.message.style.alignSelf = "baseline";
headerEmailErrorMessage.gap = 3.5;
headerEmailErrorMessage.add();

const secondCallInput = document.querySelector(".second-call input");
removeInvalidMessage(secondCallInput);

const secondCallForm = document.querySelector(".second-call form");
let secondCallEmailErrorMessage = new EmailErrorMessage(secondCallForm);
secondCallEmailErrorMessage.message.style.alignSelf = "baseline";
secondCallEmailErrorMessage.gap = 3.5;
secondCallEmailErrorMessage.color = "white";
secondCallEmailErrorMessage.add();

const headerButton = document.querySelector("header button");
headerButton.addEventListener('click', () => {
    if (headerInput.checkValidity() === false && window.innerWidth <= 768) {
        headerButton.classList.add("button-animation");
    } else {
        headerButton.classList.remove("button-animation");
    };
});

const secondCallButton = document.querySelector(".second-call button");
secondCallButton.addEventListener('click', () => {
    if (secondCallInput.checkValidity() === false) {
        secondCallButton.classList.add("button-animation");
    } else {
        secondCallButton.classList.remove("button-animation");
    };
});

window.addEventListener('resize', () => {
    if (headerInput.checkValidity() === false && window.innerWidth <= 768) {
        headerButton.classList.add("button-animation");
    } else {
        headerButton.classList.remove("button-animation");
    };
});
