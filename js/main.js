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




// انشاء قائمه واعطائها ID
// ul
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');


// اضافه العناصرالى القائمه
// li
for(var i= 1; i <= slidersCount; i++) {

    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    // added the li to ul
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);


// استدعاء القائمه
var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets
paginationBullets.forEach(function (bulletClicked) {
    bulletClicked.onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}); 

// Trigger The Checker Function
theChecker();

// next slide function
function nextSlide(){
    if (nextBtn.classList.contains('disabled')) {
        return false;
    }else {
        currentSlide++;
        theChecker()
        console.log(currentSlide);
    }
}
function prevSlide(){
    if (prevBtn.classList.contains('disabled')) {
        return false;
    }else {
    currentSlide--;
    theChecker()
    console.log(currentSlide);
    }
}

// created the checker function 
function theChecker() {
    removeAllActive();
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidersCount);
    sliderImgs[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    
    // check if current slide is the first
    if (currentSlide == 1) {
        prevBtn.classList.add('disabled');
    }else {
        prevBtn.classList.remove('disabled');
    }
    // check if current slide is the last
    if (currentSlide == slidersCount) {
        nextBtn.classList.add('disabled');
    }else {
        nextBtn.classList.remove('disabled');
    }

}


// Remove all active class 
function removeAllActive() {
    // loop throuth imgs 
    sliderImgs.forEach(function(img) {
        img.classList.remove('active');
    });
    // loop throuth Bullets 
    paginationBullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    });
}


