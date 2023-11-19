/*sidebar*/

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
    } else {
      sidebar.style.width = '250px';
    }
  }

/*Website Artikel*/
document.addEventListener('DOMContentLoaded', function () {
  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
          event.preventDefault();
          const articleLink = this.getAttribute('href');
          window.location.href = articleLink;
      });
  });
});


let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }
