
export function saveScrollPosition() {
    window.addEventListener('scroll', () => {
        sessionStorage.setItem('scroll-position', scrollY);
    });

    window.addEventListener('load', () => {
        window.scrollTo(0, sessionStorage.getItem('scroll-position')) || 0
    });
};