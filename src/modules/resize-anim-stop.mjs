export function resizeAnimationStopper() {

    const resizeAnimationStyle = document.createElement('style');
    resizeAnimationStyle.setAttribute('type', 'text/css');
    resizeAnimationStyle.innerHTML = `
    .resize-animation-stopper * {
        animation: none !important;
        transition: none !important;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(resizeAnimationStyle);
    
    let resizeTimer;

    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 100);
    });
};