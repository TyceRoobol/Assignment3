// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submitButton = document.getElementById("submit-button");
var main = document.getElementById("contact-page");
submitButton.addEventListener("click", changeMessage);
main = document.getElementById("contact-page");
function changeMessage() {
    main.innerHTML = "<p>Thank you for your message</p>";
    main.style.fontSize = "24px";
    main.style.paddingLeft = "30px";
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

