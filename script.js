// ALL JS CODE TAKEN/ADAPTED FROM
// - https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const detailsContainer= document.querySelector(".description-details");
const details= document.querySelector(".block-product-description-details-text");
const detailsText=document.querySelector(".details-text")

const featuresContainer= document.querySelector(".description-features");
const features=document.querySelector(".block-product-description-features-text");
const featuresText=document.querySelector(".features-text");

const technologyContainer=document.querySelector(".description-technology");
const technology=document.querySelector(".block-product-description-technology-text");
const technologyText=document.querySelector(".technologies-text");

const materialsContainer=document.querySelector(".description-materials");
const materials=document.querySelector(".block-product-description-materials-text");
const materialsText=document.querySelector(".materials-text");

// const sustainability=document.querySelector(".description-sustainability");

const careContainer=document.querySelector(".description-care");
const care=document.querySelector(".block-product-description-care-text")
const careText=document.querySelector(".care-text")

const bodyListener= document.querySelector(".eventListner");

const plus = document.querySelector(".vert-plus")


bodyListener.addEventListener("click", event => {
    if(event.target=plus){
        plus.classList.toggle("active");
    }

    if(event.target=detailsContainer){
        details.classList.toggle("active");
        detailsText.classList.toggle("active");
    }

    if(event.target=featuresContainer){
        features.classList.toggle("active");
        featuresText.classList.toggle("active");
    }

    if(event.target=technologyContainer){
        technology.classList.toggle("active");
        technologyText.classList.toggle("active");
    }

    if(event.target=materialsContainer){
        materials.classList.toggle("active");
        materialsText.classList.toggle("active");

    }
    // if(event.target=sustainability){
    //     sustainability.classList.toggle("active");
    // }

    if(event.target=careContainer){
        care.classList.toggle("active");
        careText.classList.toggle("active");
    }

 


    if(event.target=hamburger){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");        
    }
})

// details.addEventListener("click", () => {
//     details.classList.toggle("active");
// })

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })




document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))








