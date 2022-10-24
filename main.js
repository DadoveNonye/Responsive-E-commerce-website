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

  showCarth6.innerHTML = `
  <div>
  <div class="checkout-div">
              <img src="./images/image-product-1-thumbnail.jpg" alt="">
              <p>Fall Limited Edition Sneakers $${125}.00 x ${count} 
              <span>$${newAmt * count}.00</span>
              </p>
              </div>
              <div class="checkBtn">
              <button class="checkoutBtn">Checkout</button>
            </div>
            </div>
            `;
}

cart.addEventListener("click", function () {
  cartShown.classList.toggle("show-cartt");
  cartShown.classList.add("transition");
});
