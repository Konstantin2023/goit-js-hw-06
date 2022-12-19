const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  spanText.textContent = event.currentTarget.value;
});
