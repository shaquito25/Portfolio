var btn = document.querySelector(".submit-btn");
var error  = document.querySelector(".error-1");
var error1 = document.querySelector(".error-2");
var error2 = document.querySelector(".error-3");
var error3 = document.querySelector(".error-4");
var errorText = document.querySelector(".error-text-1");
var errorText2 = document.querySelector(".error-text-2");
var errorText3 = document.querySelector(".error-text-3");
var errorText4 = document.querySelector(".error-text-4");
var fname =document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var pass = document.getElementById("password");

function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", function(){
if(fname.value.trim() === "" || fname.value.trim() == "null"){
	errorText.classList.remove('hidden');
	error.classList.remove('hidden');
	fname.style.border = "2px solid red";
	fname.classList.add("placeholder-clr");
	

}else{
	errorText.classList.add("hidden");
	fname.style.border = "1px solid grey";
	error.classList.add("hidden");
	fname.classList.remove("placeholder-clr");
}

if(lname.value.trim() === "" || lname.value.trim() == "null"){
	errorText2.classList.remove("hidden");
	error1.classList.remove('hidden');
	lname.style.border = "2px solid red";
	lname.classList.add("placeholder-clr");
}
else{
	errorText2.classList.add("hidden");
	error1.classList.add("hidden");
	lname.style.border = "1px solid grey";
	lname.classList.remove("placeholder-clr");
}

if(email.value.trim() === "" || email.value.trim() == "null" || !isValid(email.value)){
	errorText3.classList.remove("hidden");
	error2.classList.remove('hidden');
	email.style.border = "2px solid red";
	email.classList.add("placeholder-clr");
	email.placeholder = "email@example.com"
}
else{
	errorText3.classList.add("hidden");
	error2.classList.add("hidden");
	email.style.border = "1px solid grey";
	email.classList.remove("placeholder-clr");
}

if(pass.value.trim() === "" || pass.value.trim() == "null"){
	errorText4.classList.remove("hidden");
	error3.classList.remove('hidden');
	pass.style.border = "2px solid red";
	pass.classList.add("placeholder-clr");
}
else{
	errorText4.classList.add("hidden");
	error3.classList.add("hidden");
	pass.style.border = "1px solid grey";
	pass.classList.remove("placeholder-clr");
}

});