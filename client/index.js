/* Getting the elements from the DOM. */
let categories = document.getElementById("category");
let section = document.getElementById("section__main");
let searchProduct = document.getElementById("search__input");
let search__button = document.getElementById("search__button");
let logo__store = document.getElementById("logo__store");

/**
 * It takes the value of the input, and then it fetches the data from the API, and then it creates a
 * div, an image, a title, a button and a price, and then it appends all of them to the div, and then
 * it appends the div to the section, and then it adds a class to the div
 */
function getProductByName() {
  let name = searchProduct.value;
  fetch(`https://bsale-shop-test.herokuapp.com/products/${name}`)
    .then((response) => response.json())
    .then((data) => {
      section.innerHTML = "";
      data.forEach((product) => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h4");
        let button = document.createElement("button");
        let price = document.createElement("p");
        title.innerHTML = product.name;
        image.src = product.url_image;
        price.innerHTML = product.price;
        button.innerText = "Agregar";
        div.append(image, title, price, button);
        section.append(div);
        div.classList.add("products__item");
      });
    })
    .catch((error) => console.log(error));
}

/**
 * It fetches the data from the API, then it loops through the data and creates an option element for
 * each category, then it appends the option element to the select element
 */
function getAllCategories() {
  fetch("https://bsale-shop-test.herokuapp.com/category")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((category) => {
        let option = document.createElement("option");
        option.innerHTML = category.name.toUpperCase();
        option.value = category.id;
        categories.append(option);
      });
    })
    .catch((error) => console.log(error));
}

/**
 * It takes the value of the category selected in the select element, and then it fetches the products
 * that belong to that category, and then it displays them in the section element
 */
function selectByCategory() {
  let category = categories.value;
  fetch(`https://bsale-shop-test.herokuapp.com/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
      section.innerHTML = "";
      data.forEach((product) => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h4");
        let button = document.createElement("button");
        let price = document.createElement("p");
        title.innerHTML = product.name;
        image.src = product.url_image;
        price.innerHTML = product.price;
        button.innerText = "Agregar";
        div.append(image, title, price, button);
        section.append(div);
        div.classList.add("products__item");
      });
    })
    .catch((error) => console.log(error));
}

/**
 * It fetches the data from the API, then it creates a div, an image, a title, a button and a price for
 * each product, and then it appends all of them to the section
 */
function getAllProducts() {
  fetch("https://bsale-shop-test.herokuapp.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        let div = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h4");
        let button = document.createElement("button");
        let price = document.createElement("p");
        title.innerHTML = product.name;
        image.src = product.url_image;
        price.innerHTML = product.price;
        button.innerText = "Agregar";
        div.append(image, title, price, button);
        section.append(div);
        div.classList.add("products__item");
      });
    });
}

/* Adding an event listener to the search button, and when the button is clicked, it checks if the
input is empty, and if it is, it shows an alert, and if it is not, it calls the getProductByName
function and clears the input. */
search__button.addEventListener("click", function () {
  if (searchProduct.value === "") {
    alert("Ingrese un producto");
  } else {
    getProductByName();
    searchProduct.value = "";
  }
});

/* Listening for the keypress event, and when the keycode is 13, it calls the getProductByName function
and clears the input. */
searchProduct.addEventListener("onKeyPress", function (e) {
  if (e.keyCode === 13) {
    getProductByName();
    searchProduct.value = "";
  }
});

/* Listening for a click event on the logo, and when the logo is clicked, it clears the section and
calls the getAllProducts function. */
logo__store.addEventListener("click", function () {
  section.innerHTML = "";
  getAllProducts();
});

/* Listening for a change event on the select element, and when the select element changes, it calls
the selectByCategory function. */
categories.addEventListener("change", function () {
  selectByCategory();
});

/* Calling the getAllProducts and getAllCategories functions when the window loads. */
window.onload = function () {
  getAllProducts();
  getAllCategories();
};
