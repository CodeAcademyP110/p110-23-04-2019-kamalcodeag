window.addEventListener("load", function(){
    const basket = JSON.parse(localStorage.getItem("basket"));
    
    if(basket.length === 0)
    {
        document.querySelector('.checkout-alert').classList.remove("d-none");
    }
    else
    {
        const table = document.querySelector('#checkout-table');

        basket.forEach(product => {
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            const tdImage = document.createElement('td');
            const tdQnt = document.createElement('td');
            
            tdName.innerText = product.name;
            tdQnt.innerText = product.count;

            const img = document.createElement('img');
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

})