export class CustomValidation {

    #addDefaultStyles = (() => {
        if (typeof isDefaultStylesAdded === 'undefined') {
            const errorMessageStyle = document.createElement('style');
            errorMessageStyle.setAttribute('type', 'text/css');
            errorMessageStyle.innerHTML = `
                .error-message {
                    position: absolute;
                    font-size: 0.8em;
                    opacity: 0;
                    transition: opacity 500ms ease-in-out;
                }
            `;
            document.querySelector('head').appendChild(errorMessageStyle);
        };
    })();

    #isUsed = (() => {
        globalThis.isDefaultStylesAdded = true;
    })();

    #resetAnimation = (message) => {
        message.style.opacity = "0";
        message.style.transition = "none";
        setTimeout( () => {
            message.style.opacity = "1";
            this.message.style.transition = this.transition;
        }, 0);
    };

    #applyStyling = (border, text, color) => {
        this.input.style.border = border;
        this.message.innerText = text;
        this.message.style.color = color;
    };

    #currectEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    constructor(form) {
        this.form = form;
        this.submit = () => {};
        this.color = "green";
        this.colorError = "red";
        this.textError = "Please check your email";
        this.text = "Submitted successfully!";
        this.transition = "500ms ease-in-out";
        this.gap = 5;
        this.input = this.form.querySelector("input");
        this.inputBorder = "1px solid green";
        this.inputBorderError = "1px solid red";
        this.button = this.form.querySelector("button");
        this.message = document.createElement("div");
    };

    initiate = () => {
        this.form.setAttribute("novalidate", '');
        this.message.classList.add('error-message');
        this.form.insertBefore(this.message, this.input.nextSibling);
        this.form.style.position = "relative";
        this.message.style.top = `${this.input.clientHeight + this.gap}px`;
        
        this.form.addEventListener('submit', (event) => {
            if (this.checkEmail(this.input) === false) {
                event.preventDefault();
                this.#resetAnimation(this.message);
                this.#applyStyling(this.inputBorderError, this.textError, this.colorError)
            } else {
                this.submit();
                event.preventDefault();
                this.#resetAnimation(this.message);
                this.#applyStyling(this.inputBorder, this.text, this.color)
            };
        });
    };

    checkEmail = () => {
        if (this.input.value.match(this.#currectEmail)) {
            return true;
        } else {
            return false;
        };
    };
};