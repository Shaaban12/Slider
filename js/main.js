// git slider items 
var sliderImgs = Array.from(document.querySelectorAll('.slider-container img'));
var slidersCount = sliderImgs.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slide-number');
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

// handel click on previous and next button
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// next slide function
function nextSlide(){
    console.log('next')
}
function prevSlide(){
    console.log('prev')
}


