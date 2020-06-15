

function close_message_box() {
    let a = document.querySelectorAll('.message_box');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}

$("#form").validate({
    rules: {
        phone: {
            required: true,
            minlength: 7,
            maxlength: 20,
        },
        message: {
            required: true,
        },
    },
    submitHandler: function down_message_box() {
        let a = document.querySelectorAll('.message_box');
    for(let i = 0, l = a.length; i < l; i++){
    if ( a[i].style.display == 'block' )
    a[i].style.display = 'none'
    else
    a[i].style.display = 'block';
    }
    }
});


let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let circles = document.querySelectorAll('#circles .circle');
let currentCircle = 0;
let circleInterval = setInterval(nextCircle,3000);
 
function nextCircle() {
    circles[currentCircle].className = 'circle';
    currentCircle = (currentCircle+1)%circles.length;
    circles[currentCircle].className = 'circle show';
}