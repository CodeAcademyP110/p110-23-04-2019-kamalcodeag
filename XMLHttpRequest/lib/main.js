"use strict";

window.onload = function () {
  var btnLoad = document.querySelector('#loadData');

  btnLoad.onclick = function () {
    var http = new XMLHttpRequest();

    http.onreadystatechange = function (e) {
      if (http.readyState === 4 && http.status === 200) {
        var data = JSON.parse(http.responseText);
        data.forEach(function (post) {
          var col = document.createElement('div');
          col.classList.add("col-md-4");
          var h3 = document.createElement('h3');
          h3.innerText = post.title.substring(0, 10);
          var p = document.createElement('p');
          p.innerText = post.body;
          col.appendChild(h3);
          col.appendChild(p);
          posts.appendChild(col);
        });
      }
    };

    http.open("GET", "https://jsonplaceholder.typicode.com/posts");
    http.send();
  };
};