var nombre = document.getElementById('name');
var email = document.getElementById('email');
var messaje = document.getElementById('message');
var form = document.getElementById('contacForm');


function redir() {
    window.location.href = window.location.href;
   }
   
function clear(){
   document.getElementById('name').value='';
   document.getElementById('email').value='';
   document.getElementById('message').value='';
}


form.addEventListener('submit',function(e){
     
    e.preventDefault();
    var success = true;
    var msjEr = '';
  
    if(nombre.value === null || nombre.value === ''){
        msjEr = msjEr+'Complete Name';
        success = false;
    }

    if(email.value === null || email.value === ''){
        msjEr = msjEr+', Complete Email';
        success = false;
    }

    if(messaje.value === null || messaje.value === ''){
        msjEr = msjEr+', Complete Message';
        success = false;
    }

    
    if(success===true){
        toastr["success"]("Your Message was Sent","Successfully Completed");
        setTimeout("redir()", 3000);
        clear();
     
    }else{
        toastr["warning"](msjEr,"Fields missing");
    }

}); 



