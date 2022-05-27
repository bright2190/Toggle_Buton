// windows onload would check if the localstroge values are set if not nothing would be done
window.addEventListener('load', function() {
	let storedColor = localStorage.getItem("back-color");
	let storedLeft = localStorage.getItem("left");

	if(storedColor == "#000" && storedLeft == "45%") {
		const remainSignOut = document.querySelector(".sign-in");
		document.querySelector("body").style.backgroundColor = storedColor;
		remainSignOut.style.left = "45%";
		remainSignOut.style.right = "0";
		remainSignOut.style.backgroundColor = "rgb(224, 40, 40)";
		remainSignOut.innerHTML = " &rarr; Sign out";
		// set the attribute again so that initial state can also be achieved
		remainSignOut.setAttribute("onclick", "workRight()");
	}
})

//Select the sign in button
const signIn = document.querySelector(".sign-in");

const body = document.getElementsByTagName("body");

// adding and event listener to it
signIn.addEventListener("click", function(event) {

	turnedPageOn();

});

// This will execute when the sign button is clicked
function turnedPageOn() {

	signIn.style.right = "0";
	signIn.style.left = "45%";


	// set attribute for the sign out
	signIn.setAttribute("onclick", "workRight()");

	signIn.innerHTML = "&rarr; Sign out";
	
	signIn.classList.remove("left");

	signIn.classList.add("right");

	document.querySelector("body").style.backgroundColor = "#000";

	signIn.style.backgroundColor = "rgb(224, 40, 40)";

	localStorage.setItem("back-color", "#000");

	localStorage.setItem("left", "45%")

	localStorage.setItem("right", "0");

}


function workRight() {

	turnedPageOff();
}


// function to set the page to it's original state
function turnedPageOff() {

	signIn.style.right = "45%";
	signIn.style.left = "0";

	signIn.innerHTML = "Sign in &rarr;";

	signIn.removeAttribute("onclick", "workRight()");

	signIn.classList.remove("right")

	signIn.classList.add("left");


	document.querySelector("body").style.backgroundColor = "white";

	signIn.style.backgroundColor = "green"

	localStorage.setItem("back-color", "white");

	localStorage.setItem("right", "45%");

	localStorage.setItem("left", "0");

}


