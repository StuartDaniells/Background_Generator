var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var c3 = document.querySelector(".c3");
var bg = document.querySelector("#bg");
var bgvalue = document.querySelector("h3");
var details = document.querySelector(".details");
var button = document.querySelector(".button");
var cb1 = document.querySelector(".colour-box1");
var cb2 = document.querySelector(".colour-box2");
var cb3 = document.querySelector(".colour-box3");

// Linear Gradient script (before selection of linear or radial gradient):

function linear(){

	// When page first loads it displays this colour scheme first:
	bg.style.background = "linear-gradient(to right, " 
							+c1.value 
							+", " 
							+c2.value 
							+", "
							+c3.value
							+")";

	// Displays the text of the CSS background style:
	bgvalue.textContent = "= " + "linear-gradient(to right, " 
								+c1.value 
								+", " 
								+c2.value +", "
								+c3.value+" )" 
								+ ";";
	// Displaying the colour scheme selected in the colour picker :
	function gradients(){
		bg.style.background = "linear-gradient(to right, " 
								+c1.value +", " 
								+c2.value +", "
								+c3.value+" )";
		details.innerHTML = "Selected CSS Background value:";
		// Displays the text of the CSS background style:
		bgvalue.textContent = "= " + bg.style.background + ";";
	}

	// Displaying the 3 Hex colour scheme's entered in the text box :
	function hexc(){
		bg.style.background = "linear-gradient(to right, " 
								+ cb1.value +", "
								+ cb2.value +", "
								+cb3.value+" )";
		details.innerHTML = "HEX CSS Background value:";
		bgvalue.textContent = "= " + bg.style.background + ";";
	}

	// Generating a random colour scheme when the "Random Colour" button is pressed:
	function random(){
		bg.style.background = "linear-gradient(to right, " +
								'#' + Math.floor(Math.random()*16777215).toString(16) +", "+ 
								'#' + Math.floor(Math.random()*16777215).toString(16) +", "+
								'#' + Math.floor(Math.random()*16777215).toString(16)+" )"; 
		bgvalue.textContent = "= " + bg.style.background + ";";
		details.innerHTML = "Random CSS Background value:";
	}

	c1.addEventListener("input", gradients);
	c2.addEventListener("input", gradients);
	c3.addEventListener("input", gradients);

	cb1.addEventListener("input", hexc);
	cb2.addEventListener("input", hexc);
	cb3.addEventListener("input", hexc);

	button.addEventListener("click", random);
}
linear();
btn.addEventListener("click", gradtype);

// Radial Gradient script (when selecting Radial-gradient from drop down list):

function gradtype(){
	var display = document.querySelector("#display").value;
	if (display === "Radial-Display") {

		// When Radial-gradient is selected it displays this colour scheme first:
		bg.style.background = "radial-gradient(" 
									+c1.value +" 23%, " 
									+c2.value +" 45%, "
									+c3.value+" )";
		// Displays the text of the CSS background style:
		bgvalue.textContent = "= " + "radial-gradient(" +c1.value +", " 
								+c2.value +", "
								+c3.value+" )" 
								+ " ;";

		// Displaying the colour scheme selected in the colour picker :
		function gradients(){
			bg.style.background = "radial-gradient(" +c1.value +" 23%, " 
									+c2.value +" 45%, "
									+c3.value+" )";
			details.innerHTML = "Selected CSS Background value:";
			bgvalue.textContent = "= " + bg.style.background + ";";
		}

		// Displaying the 3 Hex colour scheme's entered in the text box :
		function hexc(){
			bg.style.background = "radial-gradient(" + cb1.value +" 23%, "
									+ cb2.value +" 45%, "
									+cb3.value+" )";
			details.innerHTML = "Entered CSS Background value:";
			bgvalue.textContent = "= " + bg.style.background + ";";
		}

		// Generating a random colour scheme when the "Random Colour" button is pressed:
		function random(){
			bg.style.background = "radial-gradient(" +
									'#' + Math.floor(Math.random()*16777215).toString(16) +" 23%, "+ 
									'#' + Math.floor(Math.random()*16777215).toString(16) +" 45%, "+
									'#' + Math.floor(Math.random()*16777215).toString(16)+" )"; 
			bgvalue.textContent = "= " + bg.style.background + ";";
			details.innerHTML = "Random CSS Background value:";
		}

		c1.addEventListener("input", gradients);
		c2.addEventListener("input", gradients);
		c3.addEventListener("input", gradients);

		cb1.addEventListener("input", hexc);
		cb2.addEventListener("input", hexc);
		cb3.addEventListener("input", hexc);

		button.addEventListener("click", random);
	}
//back to Linear Gradient script (when selecting Linear-gradient from drop down list): 
	else if (display === "Linear-Display") {
		linear();
	}
}


