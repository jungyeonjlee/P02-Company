// ALL JS CODE TAKEN/ADAPTED FROM
// - https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const details= document.querySelector(".first-description-details");
const bodyListener= document.querySelector(".eventListner");


bodyListener.addEventListener("click", event => {
    if(event.target=details){
        details.classList.toggle("active");
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








