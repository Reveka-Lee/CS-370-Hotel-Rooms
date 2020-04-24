var index = 0;
next();

function next() {
  var i;
  var x = document.getElementById("pic");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  index++;
  if (index > x.length) {
    index = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}
