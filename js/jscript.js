/*alert("hello..i am js");
function validate(){

	var value = confirm("Are you sure");
	if (value == true) {
		return true;
	}else if ( value == false) {
		return false;
	}
}
*/
//BASIC VALIDATION 
function validate(){
	var firstname=document.myForm.Fname.value;
	var lastname=document.myForm.Lname.value;
	var mobileno = document.myForm.MobileNo.value;
	var email=document.myForm.Email.value;
	if(firstname==""){
		document.myForm.Fname.style.border="solid 1px red";
		document.myForm.Fname.focus() ;
		return false;
	}
	if(lastname==""){
		document.myForm.Lname.style.border="solid 1px red";
		document.myForm.Lname.focus() ;
		return false;
	}
	if(mobileno ==""){
		document.myForm.MobileNo.style.border="solid 1px red";
		document.myForm.MobileNo.focus();
		return false;
	}
	if(email==""){
		document.myForm.Email.style.border="solid 1px red";
		document.myForm.Email.focus();
		return false;
	}
}
//DATA VALIDATION