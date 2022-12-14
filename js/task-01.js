// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const body = document.body;
// const pGoBack = body.firstElementChild;
// const ulCategories = pGoBack.nextElementSibling;
// const ulCategories = document.querySelector("#categories");
// const item = document.querySelector(".item");

// const li1UlCategories = ulCategories.firstElementChild;
// const li2UlCategories = li1UlCategories.nextElementSibling;
// const li3UlCategories = ulCategories.lastElementChild;

// const h2Animals = li1UlCategories.firstElementChild;
// const ulAnimals = h2Animals.nextElementSibling;
// const liUlAnimals = ulAnimals.children;

// const h2Products = li2UlCategories.firstElementChild;
// const ulProducts = h2Products.nextElementSibling;
// const liUlProducts = ulProducts.children;

// const h2Technologies = li3UlCategories.firstElementChild;
// const ulTechnologies = h2Technologies.nextElementSibling;
// const liUlTechnologies = ulTechnologies.children;

const NumberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", NumberOfCategories.length);
NumberOfCategories.forEach((el) => {
  const categoriesTitle = el.querySelector("h2").innerHTML;
  console.log("Category:", categoriesTitle);
  const itemsLength = el.querySelectorAll("li").length;
  console.log(" Elements:", itemsLength);
});

// const numberOfCategories = document.querySelectorAll(".item");
// const elementsAnimals = ulAnimals.querySelectorAll("Li");
// const elementsProducts = ulProducts.querySelectorAll("Li");
// const elementsTechnologies = ulTechnologies.querySelectorAll("Li");

// const number = `Number of categories: ${numberOfCategories.length}`;
// const categoryElements1 = `Category: ${h2Animals.textContent}
// Elements: ${elementsAnimals.length}`;
// const categoryElements2 = `Category: ${h2Products.textContent}
// Elements: ${elementsProducts.length}`;
// const categoryElements3 = `Category: ${h2Technologies.textContent}
// Elements: ${elementsTechnologies.length}`;

// console.log(number);
// console.log(categoryElements1);
// console.log(categoryElements2);
// console.log(categoryElements3);
