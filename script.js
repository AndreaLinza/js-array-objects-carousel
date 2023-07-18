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

const containerCarosel = document.querySelector(".container-carosel")

//MAIN
const mainContainerCarosel = document.createElement("div")
mainContainerCarosel.classList.add("main-container-carosel")

const mainImgCarosel = document.createElement("div")
mainImgCarosel.classList.add("main-img-carosel")

const descriptionCarosel = document.createElement("p")
descriptionCarosel.classList.add("description-carosel")


mainContainerCarosel.append(mainImgCarosel)
containerCarosel.append(mainContainerCarosel)

//ASIDE
const asideContainerCarosel = document.createElement("div")
asideContainerCarosel.classList.add("aside-container-carosel")

const asideImgCarosel = document.createElement("div")
asideImgCarosel.classList.add("aside-img-carosel")

asideContainerCarosel.append(asideImgCarosel)
containerCarosel.append(asideContainerCarosel)


// images.forEach(element => {
//     mainImgCarosel.innerText += `${element.title} ${element.text}`
//     mainImgCarosel.innerHTML += `<img src="${element.image}" class="carosel-img-1" alt="">`
//     asideImgCarosel.innerHTML += `<img src="${element.image}" class="carosel-img-2" alt="">`
// });



for (let key in images) {
    mainImgCarosel.innerText += `${images[key].title} ${images[key].text}`
    mainImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img-1" alt="">`
    asideImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img-2" alt="">`

//     mainImgCarosel.innerHTML += `<img src="${images[key].image}" class="carosel-img" alt="">`

}



// const imagesList = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
// const carouselContainer = document.querySelector(".my-carousel-container");
// let currentImageIndex = 0; // valore iniziale

// for (let i = 0; i < imagesList.length; i++) {
//   // recupero l'immagine all'indice i
//   const currentImage = imagesList[i];
//   let imageClasses = "";

//   // i === 0 -> al primo giro del ciclo | alla prima immagine della lista
//   if (i === 0) {
//     // sto analizzando la prima immagine
//     imageClasses = "active";
//   }

//   /* Quando usiamo innerHTML, il codice all'interno di quell'elemento viene riscritto ogni volta che
//   concateniamo del nuovo html, usando +=
//   Siccome il codice viene riscritto, gli eventuali collegamenti a quegli elementi vengono persi e JS
//   non riesce a ricollegarsi dopo che l'html viene riscritto */
//   carouselContainer.innerHTML += `<div class="my-carousel-image-container ${imageClasses}">
//   <img src="imgs/${currentImage}" alt="" class="my-carousel-image">
// </div>`;

//   /* carouselContainer.innerHTML +=
//     '<div class="my-carousel-image-container">' +
//     '<img src="imgs/' + currentImage + '" alt="" class="my-carousel-image">' +
//     "</div>"; */
// }

// const prevBtn = document.getElementById("carousel-prev-btn");
// const nextBtn = document.getElementById("carousel-next-btn");

// nextBtn.addEventListener("click", function () {
//   console.log("cliccato pulsante NEXT");

//   // recupero TUTTi gli elementi che hanno la classe .my-carousel-image-container
//   // array di HTMLElement
//   const imageListElements = document.querySelectorAll(
//     ".my-carousel-image-container"
//   );

//   console.log(imageListElements[currentImageIndex]);

//   // dall'elemento attualmetne attivo, tolgo classe active
//   imageListElements[currentImageIndex].classList.remove("active");

//   // Incremento il contatore globale
//   currentImageIndex++;

//   if (currentImageIndex > imageListElements.length - 1) {
//     currentImageIndex = 0;
//   }

//   // Siccome ora currentImageIndex ha un numero diverso da prima, lo uso per assegnare la classe active
//   imageListElements[currentImageIndex].classList.add("active");

//   // prendo l'elemento subito dopo quello con classe active
//   // const nextEl = document.querySelector(".my-carousel-image-container.active + div");
//   // const nextEl = document.querySelector(".my-carousel-image-container.active + div");

//   // Tolgo la classe .active dall'elemento che ha questa classe
//   // document.querySelector(".my-carousel-image-container.active").classList.remove("active");

//   // prendere l'elemento successivo a quello che aveva la classe active,
//   // e mettere la classe su questo nuovo elemento

//   // aggiungo active sul nuovo elemento
//   // nextEl.classList.add("active");
// });

// prevBtn.addEventListener("click", function () {
//   console.log("cliccato pulsante PREVIOUS");

//   // recupero TUTTi gli elementi che hanno la classe .my-carousel-image-container
//   // array di HTMLElement
//   const imageListElements = document.querySelectorAll(
//     ".my-carousel-image-container"
//   );

//   console.log(imageListElements[currentImageIndex]);

//   // dall'elemento attualmetne attivo, tolgo classe active
//   imageListElements[currentImageIndex].classList.remove("active");

//   // Decremento il contatore globale
//   currentImageIndex--;

//   if(currentImageIndex < 0){
//     currentImageIndex = imageListElements.length - 1;
//   }

//   // Siccome ora currentImageIndex ha un numero diverso da prima, lo uso per assegnare la classe active
//   imageListElements[currentImageIndex].classList.add("active");
// });