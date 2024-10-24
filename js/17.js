$("#Phone").mask("?(999) 999 9999", {autoclear: false},);
$("#Phone").mask("?(999) 999 9999", {autoclear: false},);
$("#Rphone").mask("?(999) 999 9999", {autoclear: false},);
$("#Fphone").mask("?(999) 999 9999", {autoclear: false},);
$("#Ophone").mask("?(999) 999 9999", {autoclear: false},);

$("#NPhone").mask("?(999) 999 9999", {autoclear: false},);
$("#TPhone").mask("?(999) 999 9999", {autoclear: false},);
$("#BPhone").mask("?(999) 999 9999", {autoclear: false},);
$("#LPhone").mask("?(999) 999 9999", {autoclear: false},);
$("#RPhone").mask("?(999) 999 9999", {autoclear: false},);

$('#contact-us').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Is there anything we should know?": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Is there anything we should know?": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#get-a-quote').validate({
	rules: {
		Name: {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 10
		},
		"Select Service": {
                  	required: true
		},
		"Additional Comments": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		Name: {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Select Service": {
                  	required: "This field is required"
		},
		"Additional Comments": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#contact-form-friend').validate({
    rules: {
        "First Name": {
            required: true,
            maxlength: 100,
            regex: "^[a-zA-Z0-9'.\\s]+$"
        },
      "Last Name": {
            required: true,
            maxlength: 100,
            regex: "^[a-zA-Z0-9'.\\s]+$"
        },
        Email: {
            required: true,
            email: true,
            regex: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        },
        Phone: {
            required: true,
             minlength: 10
        },
         "Zip Code": {
            required: true,
            maxlength: 5,
            regex: "^[0-9'.\\s]+$"
        },
        "Friend's First Name": {
            required: true,
            maxlength: 100,
            regex: "^[a-zA-Z0-9'.\\s]+$"
        },
       "Friend's Last Name": {
            required: true,
            maxlength: 100,
            regex: "^[a-zA-Z0-9'.\\s]+$"
        },
        "Friend's Emails Address": {
            required: true,
            email: true,
            regex: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        },
        "Friend's Phone Number": {
            required: true,
            minlength: 10
        },
    },
    messages: {
        "First Name": {
            required: "Your first name is required",
            maxlength: "Maximum 100 characters allowed",
            regex: "Invalid Name"
        },
        "Last Name": {
            required: "Your last name is required",
            maxlength: "Maximum 100 characters allowed",
            regex: "Invalid Name"
        },
        Email: {
            required: "Your email is required",
            email: "Invalid Email",
            regex: "Invalid Email"
        },
        Phone: {
            required: "This field is required",
            minlength: "Please enter correct phone number"
        },
      "Zip Code": {
            required: "Zip Code is required",
            maxlength: "Maximum 5 characters allowed",
            regex: "Invalid zip-code"
        },
         "Friend's First Name": {
            required: "Friend's first name is required",
            maxlength: "Maximum 100 characters allowed",
            regex: "Invalid Name"
        },
      "Friend's Last Name": {
            required: "Friend's last name is required",
            maxlength: "Maximum 100 characters allowed",
            regex: "Invalid Name"
        },
        "Friend's Emails Address": {
            required: "Friend's email is required",
            email: "Invalid Email",
            regex: "Invalid Email"
        },
        "Friend's Phone Number": {
            required: "Friend's phone number is required",
            minlength: "Please enter correct phone number"
        },
    }
});

$('#feedback-form').validate({
	rules: {
          Comments: {
                        required: true,
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		},
		"First Name": {
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                "Last Name": {
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
                        minlength: 14
		}
		
	},
	messages: {
          Comments: {
                       required: "This field is required",
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		},
		"First Name": {
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid first name"
		},
                "Last Name": {
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid last name"
		},
                Email: {
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
                        minlength: "Please enter correct phone number"
		}
		
	}
});

$('#mc4wp-form-1').validate({
	rules: {
                EMAIL: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		}
	},
	messages: {
                EMAIL: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		}
	}
});


$('#nightclubs-inquiry').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Type of Coverage": {
                           required: true
		},
		"Is there anything we should know": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Type of Coverage": {
                  	required: "This field is required"
		},
		"Is there anything we should know": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#bars-taverns-inquiry').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Type of Coverage": {
                           required: true
		},
		"Is there anything we should know": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Type of Coverage": {
                  	required: "This field is required"
		},
		"Is there anything we should know": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#breweries-inquiry').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Type of Coverage": {
                           required: true
		},
		"Is there anything we should know": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Type of Coverage": {
                  	required: "This field is required"
		},
		"Is there anything we should know": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#lounges-hookah-lounges-inquiry').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Type of Coverage": {
                           required: true
		},
		"Is there anything we should know": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Type of Coverage": {
                  	required: "This field is required"
		},
		"Is there anything we should know": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$('#restaurants-inquiry').validate({
	rules: {
		"Your Name": {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
                Email: {
			required: true,
			email: true,
                        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		},
          	Phone: {
			required: true,
                        minlength: 14
		},
		"Type of Coverage": {
                           required: true
		},
		"Is there anything we should know": {
                  	maxlength: 800,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		"Your Name": {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
                Email: {
			required: "Email is required",
			email: "Invalid email",
                        regex: "Invalid email"
		},
          	Phone: {
			required: "This field is required",
                        minlength: "Please enter correct phone number"
		},
		"Type of Coverage": {
                  	required: "This field is required"
		},
		"Is there anything we should know": {
                  	maxlength: "Maximum 800 characters allowed",
                  	regex: "Sorry such characters(< and >) are not allowed"
		}
	}
});

$.validator.addMethod("regex", function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  }, "Invalid input");