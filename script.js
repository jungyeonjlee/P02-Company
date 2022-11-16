// ALL JS CODE TAKEN/ADAPTED FROM
// - https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const details= document.querySelector(".description-details");
const details= document.querySelector(".block-product-description-details-text");
const detailsText=document.querySelector(".details-text")
const features= document.querySelector(".description-features");
const technology=document.querySelector(".description-technology");
const materials=document.querySelector(".description-materials");
const sustainability=document.querySelector(".description-sustainability");
const care=document.querySelector(".description-care");

const bodyListener= document.querySelector(".eventListner");

const plus = document.querySelector(".vert-plus")


bodyListener.addEventListener("click", event => {
    if(event.target=details){
        details.classList.toggle("active");
        detailsText.classList.toggle("active");
    }
    // if(event.target=features){
    //     features.classList.toggle("active");
    // }
    // if(event.target=technology){
    //     technology.classList.toggle("active");
    // }
    // if(event.target=materials){
    //     materials.classList.toggle("active");
    // }
    // if(event.target=sustainability){
    //     sustainability.classList.toggle("active");
    // }
    // if(event.target=care){
    //     care.classList.toggle("active");
    // }

    if(event.target=plus){
        plus.classList.toggle("active");
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








