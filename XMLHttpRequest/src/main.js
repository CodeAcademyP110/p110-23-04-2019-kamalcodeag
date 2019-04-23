window.onload = function () {

    const btnLoad = document.querySelector('#loadData');

    btnLoad.onclick = function()
    {
        const http = new XMLHttpRequest();

        http.onreadystatechange = function(e)
        {
            if(http.readyState === 4 && http.status === 200)
            {
               const data = JSON.parse(http.responseText);

               data.forEach(post => {
                   const col = document.createElement('div');
                   col.classList.add("col-md-4");

                   const h3 = document.createElement('h3');
                   h3.innerText = post.title.substring(0, 10);

                   const p = document.createElement('p');
                   p.innerText = post.body;

                   col.appendChild(h3);
                   col.appendChild(p);

                    posts.appendChild(col);
               })
            }
        }
        
        http.open("GET", "https://jsonplaceholder.typicode.com/posts");
        http.send();
    }
}


