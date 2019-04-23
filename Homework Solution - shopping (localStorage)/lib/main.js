"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
  }

  UpdateBasketIcon();
  var productButtons = document.querySelectorAll('.btn-product');

  _toConsumableArray(productButtons).forEach(function (pro) {
    pro.onclick = function (e) {
      e.preventDefault();
      var proId = this.parentElement.getAttribute("data-id");
      var image = this.parentElement.previousElementSibling.src;
      var proName = this.parentElement.firstElementChild.innerText;
      var basket = JSON.parse(localStorage.getItem("basket"));
      var basketElement = basket.find(function (el) {
        return el.id === proId;
      });

      if (basketElement === undefined) {
        basket.push({
          id: proId,
          image: image,
          name: proName,
          count: 1
        });
      } else {
        basketElement.count++;
      } //update localstorage to include new product


      localStorage.setItem("basket", JSON.stringify(basket));
      UpdateBasketIcon();
    };
  });
};

function UpdateBasketIcon() {
  var basket = JSON.parse(localStorage.getItem("basket"));
  document.querySelector('#basket-count').innerText = basket.length; // document.querySelector('#basket-count').innerText = basket.reduce((t, p) => t + p.count, 0);
}