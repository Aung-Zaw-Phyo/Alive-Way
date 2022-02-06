const mubarTag = document.querySelector(".mubar");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayTag = document.querySelector(".overlay");


mubarTag.addEventListener("click", ()=>{
    if (mubarTag.classList.contains("opened")) {
        line2Tag.classList.remove("remove")
        line1Tag.classList.remove("line1Deg")
        line3Tag.classList.remove("line3Deg")
         mubarTag.classList.remove("opened")
        overlayTag.classList.remove("d-block")
    } else {
        line2Tag.classList.add("remove")
        line1Tag.classList.add("line1Deg")
        line3Tag.classList.add("line3Deg")
        mubarTag.classList.add("opened")
        overlayTag.classList.add("d-block")
    }
});

// back to top

const goTag=document.querySelector(".goTop");        
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset>100) {
        goTag.classList.remove("d-none")
    } else {
        goTag.classList.add("d-none")
    }
});    