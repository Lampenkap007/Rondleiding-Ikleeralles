let page = 1;

function next() {
  page++;
  if (page == 2) {
    document.getElementById("popup1").style.visibility = "hidden";
    document.getElementById("popup2").style.visibility = "visible";
    document.getElementById("arrow1").style.visibility = "hidden";
    document.getElementById("arrow2").style.visibility = "visible";
  }
  if (page == 3) {
    document.getElementById("popup2").style.visibility = "hidden";
    document.getElementById("popup3").style.visibility = "visible";
    document.getElementById("arrow2").style.visibility = "hidden";
    document.getElementById("arrow3").style.visibility = "visible";
  }
  if (page == 4) {
    document.getElementById("popup3").style.visibility = "hidden";
    document.getElementById("popup4").style.visibility = "visible";
    document.getElementById("arrow3").style.visibility = "hidden";
    document.getElementById("arrow4").style.visibility = "visible";
  }
  if (page == 5) {
    document.getElementById("opacityoverlay").style.visibility = "hidden";
    document.getElementById("popup4").style.visibility = "hidden";
    document.getElementById("arrow4").style.visibility = "hidden";
    document.getElementById("skip").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
  }
}
function skip() {
  document.getElementById("opacityoverlay").style.visibility = "hidden";
  document.getElementById("arrow4").style.visibility = "hidden";
  document.getElementById("popup3").style.visibility = "hidden";
  document.getElementById("popup2").style.visibility = "hidden";
  document.getElementById("popup1").style.visibility = "hidden";
  document.getElementById("arrow3").style.visibility = "hidden";
  document.getElementById("arrow2").style.visibility = "hidden";
  document.getElementById("arrow1").style.visibility = "hidden";
  document.getElementById("skip").style.visibility = "hidden";
  document.getElementById("next").style.visibility = "hidden";
}
