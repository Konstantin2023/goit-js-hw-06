const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const body = document.body;
// const pGoBack = body.firstElementChild;
// const ulIngredients = pGoBack.nextElementSibling;
const ulIngredients = document.querySelector("#ingredients");

const makeList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.insertAdjacentHTML("afterbegin", "<li>");
    listEl.textContent = ingredient;
    listEl.classList.add("item");
    return listEl;
  });
};
// const Li1 = document.createElement("Li");
// Li1.classList.add("item");
// Li1.textContent = ingredients[0];
// const Li2 = document.createElement("Li");
// Li2.classList.add("item");
// Li2.textContent = ingredients[1];
// const Li3 = document.createElement("Li");
// Li3.classList.add("item");
// Li3.textContent = ingredients[2];
// const Li4 = document.createElement("Li");
// Li4.classList.add("item");
// Li4.textContent = ingredients[3];
// const Li5 = document.createElement("Li");
// Li5.classList.add("item");
// Li5.textContent = ingredients[4];
// const Li6 = document.createElement("Li");
// Li6.classList.add("item");
// Li6.textContent = ingredients[5];

// ulIngredients.after(Li1, Li2, Li3, Li4, Li5, Li6);
const elements = makeList(ingredients);
ulIngredients.append(...elements);
