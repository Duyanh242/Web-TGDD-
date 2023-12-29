const adressBtn = document.querySelector('#adress-form');
const adressClose = document.querySelector('#adress-close');
console.log(adressClose);
adressBtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex";
})
adressClose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none";
})
// Slider 0
const btnRight = document.querySelector('.fa-chevron-right');
const btnLeft = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
let index = 0;
btnRight.addEventListener("click", function(){
    index += 1;
    if(index > imgNumber.length-1) {
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index*100+"%";
})
btnLeft.addEventListener("click", function(){
    index -= 1;
    if(index < 0) {
        index = imgNumber.length-1;
    }
    document.querySelector('.slider-content-left-top').style.right = index*100+"%";
})
// Slider 1
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');
imgNumberLi.forEach(function(image, index){
image.addEventListener("click", function(){
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index*100+"%";
    image.classList.add("active");
})
})
function removeActive() {
let activeRm = document.querySelector('.active');
activeRm.classList.remove("active");
}
//Slider 2
function imgAutoYes() {
    index++;
    if(index > imgNumber.length -1) {
        index = 0;
    }
    removeActive();
    document.querySelector('.slider-content-left-top').style.right = index*100+"%";
    imgNumberLi[index].classList.add("active");
}
setInterval(imgAutoYes, 5000);
//Slider Product
const btnRightTwo = document.querySelector('.fa-chevron-right-two');
const btnLeftTwo = document.querySelector('.fa-chevron-left-two');
const imgNumberTwo = document.querySelectorAll('.slider-product-one-content-items');
btnRightTwo.addEventListener("click", function(){
    index += 1;
    if(index > imgNumberTwo.length-1) {
        index = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100+"%";
})
btnLeftTwo.addEventListener("click", function(){
    index -= 1;
    if(index < 0) {
        index = imgNumberTwo.length-1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100+"%";
})
// Adress Contact
const adressBtn1 = document.querySelector('#adress-form1');
const adressClose1 = document.querySelector('#adress-close1');
adressBtn1.addEventListener("click", function(){
    document.querySelector('.adress-form1').style.display = "flex";
})
adressClose1.addEventListener("click", function(){
    document.querySelector('.adress-form1').style.display = "none";
})