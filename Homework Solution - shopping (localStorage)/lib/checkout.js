"use strict";

window.addEventListener("load", function () {
  var basket = JSON.parse(localStorage.getItem("basket"));

  if (basket.length === 0) {
    document.querySelector('.checkout-alert').classList.remove("d-none");
  } else {
    var table = document.querySelector('#checkout-table');
    basket.forEach(function (product) {
      var tr = document.createElement('tr');
      var tdName = document.createElement('td');
      var tdImage = document.createElement('td');
      var tdQnt = document.createElement('td');
      tdName.innerText = product.name;
      tdQnt.innerText = product.count;
      var img = document.createElement('img');
      img.style.width = "100px";
      img.src = product.image;
      tdImage.appendChild(img);
      tr.appendChild(tdName);
      tr.appendChild(tdImage);
      tr.appendChild(tdQnt);
      table.lastElementChild.appendChild(tr);
    });
    table.classList.remove("d-none");
  }
});