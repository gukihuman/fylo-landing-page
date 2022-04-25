import "./style.sass";
import { ResizeAnimationStopper } from "./modules/resize-anim-stop.mjs";

ResizeAnimationStopper()

const body = require("./body.pug");
document.querySelector("body").innerHTML = body();

const headerButton = document.querySelector("header button");
const headerInput = document.querySelector("header input");
const headerParent = document.querySelector("header div.container div.flex div:first-child");

const secondCallButton = document.querySelector("section.second-call button");
const secondCallInput = document.querySelector("section.second-call input");
const secondCallParent = document.querySelector("section.second-call div.container div.flex div:last-child");

const headerMessage = document.createElement("p");
headerMessage.className = "default-message";
headerMessage.innerText = "Please check your email";
const secondCallMessage = headerMessage.cloneNode(true)
secondCallMessage.classList.add("second-call-message");


const errorEmailEvent = (
    button, input, parent, message, animateButton
    ) => {
    parent.appendChild(message);
    parent.style.transition = "500ms";
    button.addEventListener('click', () => {
        if (input.checkValidity() === false) {
            input.style.border = "1px solid red";
            message.classList.remove("show");
            message.classList.add("transition-off");
            setTimeout( () => {
                message.classList.add("show");
                message.classList.remove("transition-off");
            }, 0);
            if (animateButton || window.innerWidth <= 768) {
                button.classList.add("button-animation");
            }
        } else {
            input.style.border = "1px solid black";
            message.classList.remove("show");
            button.classList.remove("button-animation");
        };
    });
};

errorEmailEvent(
    headerButton,
    headerInput,
    headerParent,
    headerMessage,
    false
);

errorEmailEvent(
    secondCallButton,
    secondCallInput,
    secondCallParent,
    secondCallMessage,
    true
);
