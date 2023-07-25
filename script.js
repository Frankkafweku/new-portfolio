//Typing effect on first page
var data = [
    { text: "FRONT END DEVELOPER.", class: "title2" },
    { text: "I am a front-end developer with a strong passion of creating quality interactive websites that are easy to use and come with a great user experience.", class: "info" },
    { text: "And here is yet another class.", class: "yet-another-class" }
  ];
  
  function typeWriter(i) {
    if (i < data.length) {
      var currentData = data[i];
      var j = 0;
      var currentText = currentData.text;
      var currentSpeed = 20;
      
      function typingEffect() {
        if (j < currentText.length) {
          document.querySelector("." + currentData.class).innerHTML += currentText.charAt(j);
          j++;
          setTimeout(typingEffect, currentSpeed);
        }
      }
      
      typingEffect();
      i++;
      setTimeout(function () {
        typeWriter(i);
      }, currentText.length * currentSpeed + 100); // Add a delay after each class is typed completely
    }
  }
  
  // Call typeWriter() when the page finishes loading
  window.onload = function () {
    typeWriter(0);
  };
  



  //hamburger
  // script.js
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
