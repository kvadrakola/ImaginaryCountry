var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.textContent = "Abrir";   
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.textContent = "Cerrar";  
    }
  });
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var icon = x.querySelector(".icon i");
  if (x.className === "topnav") {
    x.className += " responsive";
    icon.style.transform = "rotate(45deg)";
  } else {
    x.className = "topnav";
    icon.style.transform = "rotate(0deg)";
  }
}
