let isVisible = true;
let btn = document.getElementById("btnToggleVisibility");
btn.addEventListener("click", function () {
  let myParagraph = document.getElementById("myParagraph");
  if (isVisible) {
    myParagraph.style.visibility = "hidden";
  } else {
    myParagraph.style.visibility = "visible";
  }
  isVisible = !isVisible;
});
