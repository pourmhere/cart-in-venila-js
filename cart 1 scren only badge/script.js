// import data from "./data.js";
// console.log(data, "test");
let shop = document.getElementById("shop");

let data = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = data
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
<div id="product-id-${id}" class="item">
  <img width="246" src="./assets/${img}" alt="" />
  <div class="details">
    <h3>${name}</h3>
    <p>${desc}</p>
    <div class="price-quantity">
      <h2>$ ${price}</h2>
      <div class="buttons">
        <i onclick="decrementMethod(${id})" class="fa-solid fa-minus"></i>

        <div id=${id} class="quanity">0</div>
        <i onclick="incrementMethod(${id})" class="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>
</div>
      `;
    })
    .join(""));
};

generateShop();

function incrementMethod(id) {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  //
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item++;
  }
  updateMethod(selectedItem.id);
  // console.log(basket); //test
}

function decrementMethod(id) {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  //
  if (search.item === 0) {
    return;
  } else {
    search.item--;
  }
  updateMethod(selectedItem.id);
  // console.log(basket); //test
}
function updateMethod(id) {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerText = search.item;
  calculate();
}

function calculate() {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((sum, item) => sum + item, 0);
  // console.log();
}
