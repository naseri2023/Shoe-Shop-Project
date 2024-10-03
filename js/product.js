let shoeInfo = [
    {
        id : 1,
        name : "Sport Shoe",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias? ",
        image : "1.png"
    },
    {
        id : 2,
        name : "Daily Shoe",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?",
        image : "2.png"
    },
    {
        id : 3,
        name : "Work Shoe" ,
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at nobis ipsum quas excepturi sed minus modi officia corrupti, veniam rem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias?",
        image : "3.png"
    },
]
let detailsElem =document.querySelector(".details")
let buttonElem = document.querySelector("button")

let locationSearchParams = new URLSearchParams(location.search)
let userIDParam = parseInt(locationSearchParams.get("id"))

let userID = shoeInfo.find(function (user) {
    return user.id === userIDParam
})

detailsElem.insertAdjacentHTML("afterbegin", `<div class="desc">
        <h1>${userID.name}</h1>
        <p>${userID.description}</p>
      </div>
      <div class="image">
        <img src="${userID.image}" />
      </div>`)

buttonElem.addEventListener("click",function () {
    history.back()
})