const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    return (spanText.textContent = event.currentTarget.value);
  }
  if (event.currentTarget.value == "") {
    return (spanText.textContent = "Anonymous");
  }
});
