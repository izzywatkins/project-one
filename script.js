//document.getElementById('one').scrollTo({ behavior: 'smooth', top: 0 })
//$('#go').click(function () {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

$('#start-btn').click (function () {
  setTimeout(function () {
    element = document.getElementById('two')
    element.scrollIntoView()
  }, 1000)

  setTimeout(function () {
    element = document.getElementById('three')
    element.scrollIntoView()
  }, 7000)

  setTimeout(function () {
    element = document.getElementById('four')
    element.scrollIntoView()
  }, 14000)

  setTimeout(function () {
    element = document.getElementById('five')
    element.scrollIntoView()
  }, 21000)

  setTimeout(function () {
    element = document.getElementById('six')
    element.scrollIntoView()
  }, 28000)

  setTimeout(function () {
    element = document.getElementById('seven')
    element.scrollIntoView()
  }, 35000)

  setTimeout(function () {
    element = document.getElementById('eight')
    element.scrollIntoView()
  }, 42000)
})

$(function () {
  $('#draggable').draggable()
})