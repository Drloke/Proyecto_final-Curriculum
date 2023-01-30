//BOTON UP
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Botones cambiar colores

document.getElementById("color_contraste").addEventListener("click", function () { 
  document.body.style.backgroundColor = "yellow";
  document.getElementById("cardss1").style.backgroundColor = "rgba(128, 0, 128, .5)";
  document.getElementById("cardss2").style.backgroundColor = "rgba(128, 0, 128, .5)";
  document.getElementById("cardss3").style.backgroundColor = "rgba(255, 128, 0, .5)";
  document.getElementById("cardss4").style.backgroundColor = "rgba(128, 0, 128, .6)";
  document.getElementById("cardss5").style.backgroundColor = "rgba(255, 128, 0, .6)";
  document.getElementById("cardss6").style.backgroundColor = "rgba(128, 0, 128, .7)";
  document.getElementById("cardss7").style.backgroundColor = "rgba(255, 128, 0, .7)";
  document.getElementById("cardss8").style.backgroundColor = "rgba(128, 0, 128, .8)";
  document.getElementById("cardss9").style.backgroundColor = "rgba(255, 128, 0, .8)";
  document.getElementById("navbar").style.backgroundColor = "orange";
  document.getElementById("navbar_bot").style.backgroundColor = "orange";
  document.getElementById("boton_mail").style.backgroundColor = "pink";
  document.getElementById("apellido").style.color = "purple";
  document.getElementById("color_original").style.display="block";
});

document.getElementById("color_original").addEventListener("click", function () { 
  document.body.style.backgroundColor = "rgb(223, 241, 248)";
  document.getElementById("cardss1").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss2").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss3").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss4").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss5").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss6").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss7").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss8").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("cardss9").style.backgroundColor = "rgba(164, 181, 238, .4)";
  document.getElementById("navbar").style.backgroundColor = "rgb(164, 181, 238)";
  document.getElementById("navbar_bot").style.backgroundColor = "rgb(164, 181, 238)";
  document.getElementById("boton_mail").style.backgroundColor = "rgb(81, 164, 241)";
  document.getElementById("apellido").style.color = "rgb(235, 132, 48)";
  document.getElementById("color_original").style.display="none";
});