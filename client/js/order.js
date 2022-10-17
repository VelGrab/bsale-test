/* Getting the elements with the id asc and desc. */
let orderAsc = document.getElementById("asc");
let orderDesc = document.getElementById("desc");

/**
 * It fetches the data from the API, then it creates a div, an image, a title, a button and a price,
 * then it appends the image, title, price and button to the div, then it appends the div to the
 * section, then it adds a class to the div
 */
function getProductByAsc() {
  fetch("https://bsale-shop-test.herokuapp.com/order/asc")
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
 * It fetches the data from the API, then it creates a div, an image, a title, a button and a price,
 * then it appends the image, title, price and button to the div, then it appends the div to the
 * section, then it adds a class to the div
 */
function getProductByDesc() {
  fetch("https://bsale-shop-test.herokuapp.com/order/desc")
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

/* Adding an event listener to the orderAsc button, so when the user clicks on it, it will call the
getProductByAsc function. */
orderAsc.addEventListener("click", function () {
  getProductByAsc();
});

/* Adding an event listener to the orderDesc button, so when the user clicks on it, it will call the
getProductByDesc function. */
orderDesc.addEventListener("click", function () {
  getProductByDesc();
});
