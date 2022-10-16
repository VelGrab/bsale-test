let orderAsc = document.getElementById("asc");
let orderDesc = document.getElementById("desc");

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

orderAsc.addEventListener("click", function () {
  getProductByAsc();
});

orderDesc.addEventListener("click", function () {
  getProductByDesc();
});
