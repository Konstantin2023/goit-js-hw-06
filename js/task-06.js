const input = document.querySelector("#validation-input");
console.dir(input);
const inputLength = Number.parseInt(input.getAttribute("data-length"));
console.log("Число", inputLength);

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  console.log(Number.parseInt(input.value.length));
  if (Number.parseInt(input.value.length) === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    console.log("OK");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    console.log(input.getAttribute("placeholder"));
  }
}
