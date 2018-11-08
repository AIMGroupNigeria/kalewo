

// PHP Validation script
var formUrl = "php/validate.php?value=";

// Your form's id
var formid = "contactForm";
			
			
			
var formError =  [];

function loadForm() {

if(document.getElementById(formid)!=null) 
{
	var form = document.getElementById(formid);
 form.reset();
 document.getElementById("comment").innerHTML="";
	if(document.getElementsByTagName) {
		var formInput = document.getElementsByTagName("input");
		for (var formCount=0; formCount<formInput.length; formCount++)
		{
			formInput[formCount].style.border = "1px solid black";
			formInput[formCount].onblur = function() { return validation(this); }
		}
	}
	
	if(document.getElementsByTagName) {
		var formText = document.getElementsByTagName("textarea");
		for (var formCount=0; formCount<formText.length; formCount++)
		{
			formText[formCount].style.border = "1px solid black";
			formText[formCount].onblur = function() { return validation(this); }
		}
	}
	
	var formButt = document.getElementById("submit");
	if(formButt) formButt.onclick = function() { sendEmail();  }
}
}
http = postHTTPObject();

function postHTTPObject() {

  var xmlhttp;
 
  /*@cc_on
 
  @if (@_jscript_version >= 5)
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
      try{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(E){
      xmlhttp = false;
    }
  }
  @else
    xmlhttp = false;
  @end @*/
 
  if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
    try {
      xmlhttp = new XMLHttpRequest();
    }catch(e){
      xmlhttp = false;
    }
  }
 
  return xmlhttp;

}

// The main validation function
function validation(formInput) {

	formId = formInput.id;
	formValue = formInput.value;

	getValue = formInput.className;
	if(getValue.indexOf(",") == -1 ) {
		formType = getValue;
		formRequired = "";
	} else {
		formRules = formInput.className.split(",");
		formRequired = formRules[0];
		formType = formRules[1];
	}

	var url = formUrl + (formValue) + "&required=" + (formRequired) + "&type=" + (formType);

	http.open("GET", url, true);

	http.onreadystatechange = handleHttpResponse;
	http.send(null);

}

function sendEmail()
{
	//alert('send');
	http.open("POST", "php/validate.php");
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  http.send("mail=1" + "&name=" + (document.getElementById("name").value) + "&email=" + (document.getElementById("email").value) + "&phone=" + (document.getElementById("phone").value) + "&message=" + (document.getElementById("message").value));

	http.onreadystatechange = handleHttpResponse;
}

function handleHttpResponse() {

	if(http.readyState == 4) {

		if(http.responseText == "false") {

			var formInput = document.getElementById(formId);

			formInput.style.border = "1px solid #d12f19";
			formError.push(formId);
		}
		else if(http.responseText == "true") {

			var formInput = document.getElementById(formId);

			formInput.style.border = "1px solid #338800";
		}
		else if(http.responseText == "none") {

		}
		else if(http.responseText) {
			
			document.getElementById("comment").innerHTML= http.responseText;

			//reload shadows
			var settings = {
		//showArrows: true,
		hijackInternalLinks: true
		}
			var pane = $('.scroll-pane')
	pane.jScrollPane(settings);
	var api = pane.data('jsp');
				
				api.reinitialise(); 
		}
	}
}

