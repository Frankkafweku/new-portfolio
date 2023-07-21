var i = 0;
var txt = "I am a front end developer with a strong passion of creating quality interactive websites that are easy to use and come with a great user experience";
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("info").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Call typeWriter() when the page finishes loading
window.onload = function () {
  typeWriter();
};