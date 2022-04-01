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



(function () {
  emailjs.init("user_gGHZQEDHJmDEjuOwEPoep");
})();

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      var myModalGracias = new bootstrap.Modal(
        document.getElementById("modalGracias"),
        {}
      );
      var myModalError = new bootstrap.Modal(
        document.getElementById("modalError"),
        {}
      );
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            event.preventDefault();
            try {
              var template_params = {
                nombre_contacto: document.getElementById("nombre_contacto").value,
                correo_contacto: document.getElementById("correo_contacto").value,
                telefono_contacto:
                  document.getElementById("telefono_contacto").value,
                asunto_contacto: document.getElementById("asunto_contacto").value,
                mensaje_contacto:
                  document.getElementById("mensaje_contacto").value,
                medio_contacto: document.getElementById("medio_contacto").value,  
                'g-recaptcha-response': ' 6Ldg9zcfAAAAAJL97akoN2nLnOw-Ye4VbIMWo3Yq ',        
              };
              emailjs.send(
                "service_g8uwlxg",
                "template_7n0pmcc",
                template_params
              );
              myModalGracias.show();
              setTimeout(function () {
                myModalGracias.hide();
              }, 3000);
            } catch (error) {
              myModalError.show();
              setTimeout(function () {
                myModalError.hide();
              }, 3000);
              console.log(error);
            }
            nombre_contacto.value = "";
            correo_contacto.value = "";
            telefono_contacto.value = "";
            asunto_contacto.value = "";
            mensaje_contacto.value = "";
            medio_contacto.value = "";
            grecaptcha.reset();
          },
          false
        );
      });
    },
    false
  );
})();

// ------------------------------------------------------------
// Navbar Close
// ------------------------------------------------------------



const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('listaNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})