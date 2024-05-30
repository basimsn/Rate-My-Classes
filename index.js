var prevScrollpos = window.pageYOffset;
var header = document.getElementsByTagName("header")[0];
var headerHeight = header.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = -headerHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}