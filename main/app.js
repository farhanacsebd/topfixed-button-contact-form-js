function sendEmail(){
    (function(){
        emailjs.init("user_48v0v2ixexu0gGtiBREac");
     })();

 
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

     var templateParams = {
        form_Name: name,
        form_Email: email,
        form_Phone: phone,
        form_Subject: subject,
        form_Message: message,
        
    };
     
    emailjs.send('catseller', 'catsellerId', templateParams)
       /*  .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        }); */

        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Your work has been saved',
         showConfirmButton: false,
         timer: 1500
       })
}




// -- ---------------------------------------------------
//  ---------------------------------------------------
//  -----------------------Scroll Top START------------ --


  var scroll = document.querySelector('.scrollTop');
  window.addEventListener('scroll', function () {
      scroll.classList.toggle("active", window.scrollY > 100)
  })

  scroll.addEventListener('click', backToTop);

  function backToTop() {
      window.scrollTo(0, 0);
  }


// -- -----------------------Scroll Top END------------
// ---------------------------------------------------
// --------------------------------------------------- --







/* ------------------------------------------------------------------- */
/* ------------------------loading js start-------------------------- */
/* -------------------------------------------------------------------- */



let loader = document.getElementById('preloader');
  window.addEventListener('load',function(){
    loader.style.display = "none";
  })




/* ------------------------------------------------------------------- */
/* ------------------------loading js End-------------------------- */
/* -------------------------------------------------------------------- */



