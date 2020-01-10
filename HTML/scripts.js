
function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone");
	var message = document.getElementById("message").value;
	var error = document.getElementById("error");
	var text;
	var a = /^(\+212)+([5-7]{1})+([0-9]{8})$/;

	

	//name
	if (name==""){
		document.getElementById('sname').innerHTML = "*Please Enter Valid Name";
	}
	else{
		document.getElementById('sname').innerHTML = "";
	}

	//email
	if (email==""){
		document.getElementById('semail').innerHTML = "*Please Enter Valid email";
	}
	else if (email.indexOf("@") ==-1 ) {
		document.getElementById('semail').innerHTML = "error";
	}
	else{
		// error.style.display="none";
		document.getElementById('semail').innerHTML = "";
	}
  
  //tel
   if ( phone.value == "")
   {
      document.getElementById('sphonnn').innerText="*this field must be filled";
      // document.getElementById('sphonnn ').style.color="yellow";
   }
   else if (!a.test(phone.value))
   {
      document.getElementById('sphonnn').innerText="*erreur";

   }
   else
   {
    document.getElementById('sphonnn').innerHTML="";
   }
	
}

