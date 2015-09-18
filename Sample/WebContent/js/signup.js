$(document).ready(function() {

	console.log("hi");
	
	$("form").submit(function() {

		console.log("submit");
		var tmp = validateForm();
		if (tmp) {
			alert("success");
		}

	});


});


function validateForm() {
	var validEmail = true;
	var validPassword = true;
	var validPhone = true;

	var email = $("#email").val();
	var password = $("#password").val();
	var repassword = $("#password").val();
	var phone = $("#mobile").val();

	// validate Email

	if (email == "" || email == null || email == undefined) {
		$("#email").addClass(" error");
		validEmail = false;

	} else {

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (!emailReg.test(email)) {
			$("#email").addClass(" error");
			validEmail = false;
		}
	}

	// validate Password

	if (password == "" || password == null || password == undefined) {
		$("#password").addClass(" error");
		validPassword = false;

	} else {

		var passReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
		if (!passReg.test(password)) {
			$("#password").addClass(" error");
			validPassword = false;
		}
	}

	// validate RePassword

	if (repassword == "" || repassword == null || repassword == undefined) {
		$("#repassword").addClass(" error");
		validPassword = false;

	} else {
		if (repassword != password) {
			$("#repassword").addClass(" error");
			validPassword = false;
		}
	}

	// validate phone

	if (phone == "" || phone == null || phone == undefined) {
		$("#mobile").addClass(" error");
		validPhone = false;
	} else {

		var phoneReg = /^[0-9-+]+$/;
		if (!(phoneReg.test(phone))) {
			$("#mobile").addClass(" error");
			validPhone = false;
		}

	}

	if (validEmail && validPassword && validPhone) {
		return true;
	}
	return false;
}