

// ALL JS CODE TAKEN and ADAPTED FROM
//  https://www.youtube.com/watch?v=flItyHiDm7E


const hamburger = document.querySelector(".hamburger");
const navMenu1 = document.querySelector(".container-bottom-nav-bar");
const navMenu2 = document.querySelector(".container-top-nav-bar");

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

const careContainer=document.querySelector(".description-care");
const care=document.querySelector(".block-product-description-care-text");
const careText=document.querySelector(".care-text");

const bodyListener= document.querySelector(".eventListner");

const plusDetails = document.querySelector(".vert-plus-details");
const plusFeatures = document.querySelector(".vert-plus-features");
const plusTechnology = document.querySelector(".vert-plus-technology");
const plusMaterials = document.querySelector(".vert-plus-materials");
const plusCare = document.querySelector(".vert-plus-care");




function activateNav(){
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");       
    navMenu2.classList.toggle("active");        
 
}

function activateDetails(){
    details.classList.toggle("active");
    detailsText.classList.toggle("active");
    plusDetails.classList.toggle("active");
}

function activateFeatures(){
        features.classList.toggle("active");
        featuresText.classList.toggle("active");   
        plusFeatures.classList.toggle("active");
 
}

function activateTechnology(){
        technology.classList.toggle("active");
        technologyText.classList.toggle("active");
        plusTechnology.classList.toggle("active");


}

function activateMaterials(){
        materials.classList.toggle("active");
        materialsText.classList.toggle("active");
        plusMaterials.classList.toggle("active");

}

function activateCare(){
        care.classList.toggle("active");
        careText.classList.toggle("active");
        plusCare.classList.toggle("active");

}










