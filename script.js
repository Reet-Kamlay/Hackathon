let wishList = [];
function setup() {
  console.log("Window Loaded");
  const products = document.querySelectorAll(".but");
  for (let i = 0; i < products.length; i++) {
    products[i].onclick = function (e) {
      addItem(e);
    };
  }
}
function addItem(e) {
  let productId = e.target.getAttribute("id");
  console.log("Product: ", productId);
  const productDiv = document.getElementById("p" + productId);
  
  const wishDiv = document.createElement("div");
  wishDiv.setAttribute("id", "p" + productId);
  wishDiv.setAttribute("class", "pro");
  wishDiv.innerHTML = productDiv.innerHTML;


  const removeBtn = document.createElement("button");
  removeBtn.innerText='Remove';
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("class","but5");
  removeBtn.onclick = function () {
    removeItem(productId);
  };
  wishDiv.appendChild(removeBtn);
  let div = document.getElementById("wrap");
  div.appendChild(wishDiv);
  wishList.push(productId);
  console.log(wishList);
}

function removeItem(productId) {}

window.addEventListener("load", setup);

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

const wrap = document.querySelector('#wrap');
const btPopup = document.querySelector('.btnWishlist-popup');
const icoClose = document.querySelector('.ico-close');

btPopup.onclick = () => {
    wrap.classList.add('activ-popup');
};

icoClose.onclick = () => {
    wrap.classList.remove('activ-popup');
    wrap.classList.remove('activ');
};