const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

// inputText.addEventListener("input", onInput);

// function onInput(event) {
//   spanText.textContent = event.currentTarget.value;
//   if (spanText.value === "") {
//     return (spanText.textContent = "Anonymous");
//   }
// }

inputText.addEventListener("input", (event) => {
  inputText.textContent = event.currentTarget.value;
});
