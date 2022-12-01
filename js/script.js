$('.venobox').venobox()

  // =========sticky menu part ========
var navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    navbar.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========


 // ========back to top part ======
 var back_to_top = document.querySelector(".back_to_top")

 window.addEventListener("scroll",function(){
 
   back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
 })
 // ========back to top part ======