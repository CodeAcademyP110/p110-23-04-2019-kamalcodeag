window.onload = function () 
{

    const btnLoad = document.querySelector('#loadData');

    btnLoad.onclick = function()
    {
        // const http = new XMLHttpRequest();

        // http.onreadystatechange = function(e)
        // {
        //     if(http.readyState === 4 && http.status === 200)
        //     {
        //        const data = JSON.parse(http.responseText);

        //        data.forEach(post => {
        //            const col = document.createElement('div');
        //            col.classList.add("col-md-4");

        //            const h3 = document.createElement('h3');
        //            h3.innerText = post.title.substring(0, 10);

        //            const p = document.createElement('p');
        //            p.innerText = post.body;

        //            col.appendChild(h3);
        //            col.appendChild(p);

        //             posts.appendChild(col);
        //        })
        //     }
        // }



        // --- PRACTICE ---

        let request = new XMLHttpRequest();

        request.onreadystatechange = function(e) // ??? onload ???
        {
            let received = JSON.parse(this.responseText);
            // console.log(received);
            // console.log(this.readyState);
            // console.log(e);

            received.forEach(rec =>
            {
                let col = document.querySelector(".col");
                let info = document.createElement("p");
                info.innerText = rec.title;
                col.appendChild(info);

            })
        }
        
        request.open("GET", "https://ghibliapi.herokuapp.com/films",true);
        request.send();
    }

        // --- PRACTICE ---
}


