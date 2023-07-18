const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const mainContainer = document.querySelector(".carousel-container");
const thumbsContainer = document.querySelector(".carousel-thumbs-container");
const btnNext = document.getElementById("next-btn");
const btnPrev = document.getElementById("prev-btn");
let imgIndex = 0;
let imagesListEl = []
let thumbsListEl = []


images.forEach((element, i) => {

    const div = document.createElement("div")
    div.classList.add("carousel-image-container")
    div.innerHTML = `<img src="${element.image}" class="carousel-image" alt="">
    <div class="container-description">
    <p class="fw-bold fs-4 mb-2">${element.title}</p>
    <div class="w-75 ms-auto">
    <p class="text-carousel fs-6 ">${element.text}</p>
    </div>
    </div>`

    if (i === imgIndex) {
        div.classList.add("active");
        const bgDescription = document.createElement("div")
        bgDescription.innerHTML = ``
    }

    mainContainer.append(div);

    imagesListEl.push(div);

});


images.forEach((element, i) => {
    const div = document.createElement("div");
    div.classList.add("carousel-img-thumb-container", "d-flex");
    div.innerHTML = `<img src="${element.image}" alt="" class="carousel-img-thumb">`;

    if (i === imgIndex) {
        div.classList.add("active");
    }

    thumbsContainer.append(div);

    thumbsListEl.push(div);

});

console.log(imagesListEl)



btnNext.addEventListener("click", function () {

    imagesListEl[imgIndex].classList.remove("active");
    thumbsListEl[imgIndex].classList.remove("active");


    if (imgIndex < 4) {

        imgIndex++;
    }
    else {
        imgIndex = 0
    }

    imagesListEl[imgIndex].classList.add("active");
    thumbsListEl[imgIndex].classList.add("active");
})


btnPrev.addEventListener("click", function () {

    imagesListEl[imgIndex].classList.remove("active");
    thumbsListEl[imgIndex].classList.remove("active");
    if (imgIndex > 0) {

        imgIndex--
    }
    else {
        imgIndex = 4
    }


    imagesListEl[imgIndex].classList.add("active");
    thumbsListEl[imgIndex].classList.add("active");
})


// const mainContainer = document.querySelector(".container")
// const containerCarosel = document.createElement("div")
// containerCarosel.classList.add("container-carosel", "m-auto", "d-flex")

// const mainContainerCarosel = document.createElement("div")
// mainContainerCarosel.classList.add("main-container-carosel")


// const mainImgCarosel = document.createElement("div")
// mainImgCarosel.classList.add("main-img-carosel")


// const asideContainerCarosel = document.createElement("div")
// asideContainerCarosel.classList.add("aside-container-carosel")

// const asideImgCarosel = document.createElement("div")
// asideImgCarosel.classList.add("aside-img-carosel")



// mainContainerCarosel.append(mainImgCarosel)
// asideContainerCarosel.append(asideImgCarosel)
// containerCarosel.append(mainContainerCarosel, asideContainerCarosel)
// mainContainer.append(containerCarosel)



// // images.forEach((singleGame, i) => {
// for (let key in images) {



//     mainImgCarosel.innerHTML +=
//         `<div class="main-img-carosel">
//     <img src="${images[key].image}" class="carosel-img" alt="">
//     <div class="description-container">
//     <p class="description-title mt-3 mb-1">${images[key].title}</p>
//     <span class="description-game">${images[key].text}</span>
//     </div>
//     </div>
//     `


//     //asideImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img-thumb" alt="">`

// };



// const mainContainer = document.querySelector(".container")
// const containerCarosel = document.createElement("container-carosel")
// mainContainer.classList.add("m-auto", "d-flex")


// //MAIN
// const mainContainerCarosel = document.createElement("div")
// mainContainerCarosel.classList.add("main-container-carosel")

// const mainImgCarosel = document.createElement("div")
// mainImgCarosel.classList.add("main-img-carosel")

// const descriptionCarosel = document.createElement("p")
// descriptionCarosel.classList.add("description-container")

// //DESCRIPTION
// const containerDescriptionImg = document.createElement("div")
// const descriptionImg = document.createElement("p")
// descriptionImg.classList.add("description-title")







// //BUTTONS
// const prevBtn = document.getElementById("btn-prev")
// const nextBtn = document.getElementById("btn-next")



// containerDescriptionImg.append(descriptionImg)
// mainContainerCarosel.append(mainImgCarosel,containerDescriptionImg)
// containerCarosel.append(mainContainerCarosel)


// //ASIDE
// const asideContainerCarosel = document.createElement("div")
// asideContainerCarosel.classList.add("aside-container-carosel")



// const asideImgCarosel = document.createElement("div")
// asideImgCarosel.classList.add("aside-img-carosel")

// asideContainerCarosel.append(asideImgCarosel)
// containerCarosel.append(asideContainerCarosel)


// images.forEach(singleImg => {
//     mainImgCarosel.innerText += `${singleImg.title} ${singleImg.text}`
//     mainImgCarosel.innerHTML += `<img src="${singleImg.image}" class="carosel-img-1" alt="">`
//     asideImgCarosel.innerHTML += `<img src="${singleImg.image}" class="carosel-img-2" alt="">`
// });


// for (let key in images) {

//     mainImgCarosel.innerText += `${images[key].title} ${images[key].text}`
//     mainImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img" alt="">`
//     asideImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img-thumb" alt="">`

    //     mainImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img" alt="">`

//}
