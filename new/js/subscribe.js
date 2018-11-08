

// PHP Validation script
var formUrl = "php/subscribe.php?value=";

// Your form's id
var formid2 = "subscribeForm";
			
			
			
var formError =  [];

// Launch the loadForm function while page is loading
window.onload = loadForm2;

function loadForm2() {

if(document.getElementById(formid2)!=null) 
{
	var form2 = document.getElementById(formid2);
 form2.reset();
	if (document.getElementsByTagName) {
		var formInput2 = document.getElementsByTagName("input");
		for (var formCount=0; formCount<formInput2.length; formCount++)
			formInput2[formCount].onblur = function() { return validation2(this); }
	}
	
	if (document.getElementsByTagName) {
		var formText2 = document.getElementsByTagName("textarea");
		for (var formCount=0; formCount<formText2.length; formCount++)
			formText2[formCount].onblur = function() { return validation2(this); }
	}
	
	var formButt2 = document.getElementById("submit2");
	if(formButt2) formButt2.onclick = function() { sendEmail2();  }
}
}
http = postHTTPObject2();

function postHTTPObject2() {

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
function validation2(formInput) {

	formId2 = formInput.id;
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

function sendEmail2()
{
	//alert('send');
	http.open("POST", "php/subscribe.php");
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  http.send("mail=1" + "&subscribe=" + (document.getElementById("subscribe").value));

	http.onreadystatechange = handleHttpResponse2;
}

function handleHttpResponse2() {

	if(http.readyState == 4) {

		if(http.responseText == "false") {

			var formInput = document.getElementById(formId2);

			formInput.style.border = "1px solid #d12f19";
			formError.push(formId);
		}
		else if(http.responseText == "true") {

			var formInput = document.getElementById(formId);

			formInput.style.border = "1px solid #338800";
		}
		else if(http.responseText == "none") {

			var formInput = document.getElementById(formId);

			formInput.style.border = "1px solid #aaa";
			formInput.style.background = "#ffffff";
		}
		else if(http.responseText) {
			
			document.getElementById("comment2").innerHTML= http.responseText;

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

