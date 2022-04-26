export function EmailErrorMessage(form) {

    this.color = "red";
    this.text = "Please check your email";
    this.formHeight = 45;
    this.gap = 5;

    this.form = form;
    this.input = this.form.querySelector("input");
    this.button = this.form.querySelector("button");
    this.message = document.createElement("div");

    this.addDefaultStyles = (() => {
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

    this.add = () => {
        this.message.classList.add('error-message');
        this.message.innerText = this.text;
        this.form.insertBefore(this.message, this.input.nextSibling);

        this.form.style.position = "relative";
        this.message.style.top = `${this.formHeight + this.gap}px`;
        this.message.style.color = this.color;

        this.button.addEventListener('click', () => {
            console.log('eu');
            if (this.input.checkValidity() === false) {
                this.input.style.border = "1px solid red";
                this.message.style.opacity = "0";
                this.message.style.transition = "none";
                setTimeout( () => {
                    this.message.style.opacity = "1";
                    this.message.style.transition = "opacity 500ms ease-in-out";
                }, 0);
            } else {
                this.input.style.border = "1px solid black";
                this.message.style.opacity = "0";
            };
        });
    };

    this.isUsed = (() => {
        globalThis.isDefaultStylesAdded = true;
    })();
};
