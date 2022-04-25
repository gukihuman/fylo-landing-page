export function ResizeAnimationStopper() {

    let resizeTimer;
    const resizeAnimatianStyle = document.createElement('style');
    resizeAnimatianStyle.setAttribute('type', 'text/css');
    resizeAnimatianStyle.innerHTML = `
        .resize-animation-stopper * {
            animation: none !important;
            transition: none !important;
        }
    `;
    document.getElementsByTagName('head')[0].appendChild(resizeAnimatianStyle);

    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 100);
    });
}