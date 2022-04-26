export function removeInvalidMessage(input) {
    input.setAttribute("oninvalid", "this.setCustomValidity(' ')");
    input.setAttribute("onchange", "this.setCustomValidity('')");
    input.setAttribute("title", "");
}