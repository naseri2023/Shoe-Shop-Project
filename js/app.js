let shoeInfo = [
    {id : 1, name : "Sport Shoe", price : "$50", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ", image : "1.png"},
    {id : 2, name : "Daily Shoe", price : "$90", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ", image : "2.png"},
    {id : 3, name : "Work Shoe", price : "$150", description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ", image : "3.png"},
]
let containerElem = document.querySelector(".container")

shoeInfo.forEach(function (item) {
    containerElem.insertAdjacentHTML('afterbegin', `<div class="product-card">
        <h1>${item.name}</h1><br>
        <p>${item.description}</p>
        <div class="product-pic" style="background-image:url('${item.image}');"></div>
        <div class="product-info">
          <div class="product-price">${item.price}</div>
          <a href="product.html?id=${item.id}" class="product-button">See More</a>
        </div></div>`)
})

