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