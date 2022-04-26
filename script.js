function animate() {
    $container = $('#text-effect');
    const text = $container.text();
    const $elements = text.split('').map(s => $(`<span>${s}</span>`));
  
    $container.html($elements);
    $container.show();
  
    $elements.forEach(function ($el, i) {
      $el.
      css({ top: -60, opacity: 0 }).
      delay(40 * i).
      animate({ top: 0, opacity: 1 }, 500, 'easeOutExpo');
    });
  }
  $(function () {
    animate();
  });