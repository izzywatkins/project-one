//document.getElementById('one').scrollTo({ behavior: 'smooth', top: 0 })
//$('#go').click(function () {

  setTimeout(function () {
    element = document.getElementById('two')
    element.scrollIntoView()
  }, 6000)
  
  
  setTimeout(function () {
    element = document.getElementById('three')
    element.scrollIntoView()
  }, 10000)
  
  setTimeout(function () {
    element = document.getElementById('four')
    element.scrollIntoView()
  }, 12000)

  setTimeout(function () {
    element = document.getElementById('five')
    element.scrollIntoView()
  }, 16000)

  setTimeout(function () {
    element = document.getElementById('six')
    element.scrollIntoView()
  }, 20000)

  setTimeout(function () {
    element = document.getElementById('seven')
    element.scrollIntoView()
  }, 24000)

  setTimeout(function () {
    element = document.getElementById('eight')
    element.scrollIntoView()
  }, 28000)

  $( function() {
    $( "#draggable" ).draggable();
  } );

  $(window).scroll(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});