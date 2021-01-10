const liItem = document.querySelectorAll('ul li');
const items = document.querySelectorAll('div.item');


liItem.forEach(li => {
    li.onclick = function () {
        //active
        liItem.forEach(li => {
            li.className = "menu-option";
        })
        li.className = "active";
        //Filter 
        const value = li.textContent;
        console.log(value);
        items.forEach(item => {
            item.style.display = "none";
            console.log(item.getAttribute('data-filter'));
            if (item.getAttribute('data-filter') == value.toLowerCase() || value == "Menu") {
                item.style.display = "block";
            }
        })
    }
});
