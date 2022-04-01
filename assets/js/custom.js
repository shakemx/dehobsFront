var btn = $('#topscroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// $(document).ready(function() {
//   $('#myCarousel').carousel({
//      interval: 3000,
//       pause: false
//   });
// });

// var pol = $('#prueba');
// pol.on('click', function(e) {
//   e.preventDefault();
//   document.getElementById('cinte').style.transform = 'translate3d(-25%, 0, 0)'

// });

// var pol = $('#prueba');
// var ele = document.getElementById('cinte');
// pol.on('click', function(e) {
//   e.preventDefault();
//   ele.animate({transform: 'translate3d(-25%, 0, 0)' }, 1000, function() {
//     if(Math.abs(ele.position) === 0){
//       ele.css({transform: 'translate3d(-25%, 0, 0)'});
//     }
//   });
//   console.log(ele.transform);


// });