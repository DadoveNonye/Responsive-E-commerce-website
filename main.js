const toggler = document.querySelector(".navbar-toggler");
const menNav = document.querySelector(".nav ul");
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);
const currentImg = document.querySelector(".full");
const allImg = document.querySelectorAll(".carousel-item-desktop img");
const opacity = 0.5;
const plus = document.getElementById("plus");
const zero = document.querySelector("#zero");
const minus = document.getElementById("minus");
const cart = document.querySelector(".fa-cart-plus");
const cartShown = document.querySelector(".show-cart");
const addCartBtn = document.querySelector(".add-to-cart-btn");
const orderValue = 0;
const productName = (document.querySelector(".product-name").textContent =
  "Fall Limited Edition Sneakers");
toggler.addEventListener("click", togglerBtn);

function togglerBtn() {
  toggler.classList.toggle("open-navbar-toggler");
  menNav.classList.toggle("open");
}

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

allImg[0].style.opacity = opacity;

allImg.forEach((imgg) => imgg.addEventListener("click", displayImg));

function displayImg(c) {
  allImg.forEach((imgg) => (imgg.style.opacity = 1));
  currentImg.src = c.target.src;
  currentImg.classList.add("fade-it");
  setTimeout(() => currentImg.classList.remove("fade-it"), 500);

  c.target.style.opacity = opacity;
}
let count = 0;
plus.addEventListener("click", increaseOrder);
minus.addEventListener("click", reduceOrder);

function increaseOrder() {
  count++;
  zero.innerText = count;
}
function reduceOrder() {
  if (count === 0) {
    count = 0;
  } else count--;
  zero.innerText = count;
}
mainAmount = "";
discount = "";
const originalAmt = document.querySelector(".original-amount");
let amtDiscount = document.querySelector(".discount");

function calcDiscount(mainAmount, discount) {
  newAmt = (mainAmount / 100) * discount;
  originalAmt.textContent = `$${mainAmount}`;
  amtDiscount.textContent = `${discount}%`;
}

calcDiscount(250, 50);
const showCarth6 = document.querySelector(".show-cart-h6");

addCartBtn.addEventListener("click", calcOrder);
function calcOrder() {
  zero.value = count;
  document.querySelector(".new-amount").textContent = `$${newAmt * count}`;
  if (!count == 0) {
    // classList.remove("show-cart-h6");
    document.querySelector(".show-cart-h6").style.display = "none";
    let html = `<div class="checkoutDiv">
    <p>${productName}</p>
    <h3>$${newAmt} * ${count} = $${newAmt * count} </h3>
    <button class="checkoutBtn">Checkout</button>
    </div>`;
    showCarth6.insertAdjacentHTML("afterend", html);
    addCartBtn.disabled = "true";
    addCartBtn.classList.add("removeCursor");
  }
}
calcOrder();
cart.addEventListener("click", function () {
  cartShown.classList.toggle("show-cartt");
  cartShown.classList.add("transition");
});
// const showCart = (document.querySelector(
//   ".show-cart-h6"
// ).textContent = `${productName}`);

console.log(showCarth6);
