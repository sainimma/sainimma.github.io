var myImage = document.getElementById('main-pic');

var defaultMainPicCaption = "21st birthday - dec 2016";

setCaption(defaultMainPicCaption);

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/sai-main.jpg') {
		myImage.setAttribute ('src','images/desis-choice.PNG');
		setCaption("desis choice - apr 2015");
	} else {
		myImage.setAttribute ('src','images/sai-main.jpg');
		setCaption(defaultMainPicCaption);
	}	
}

function setCaption(caption) {
	document.querySelector("#main-pic-fig figcaption").innerHTML = caption;
}

var readingButton = document.querySelector("#reading-button");
var bookDisplayed = false;

readingButton.onclick = function() {
	if (!bookDisplayed) {
		var currentBook = "\"The Pleasure of Finding Things Out\" (a collection of works by Richard Feynman)";
		var newTextElement = document.createElement("p");
		newTextElement.appendChild(document.createTextNode(currentBook));
		newTextElement.style.fontSize = "14px";
		newTextElement.style.textAlign = "center";
		document.querySelector("#reading-button").style.marginBottom = "0";
		document.querySelector("#reading-section").appendChild(newTextElement);
		bookDisplayed = true;
	}
}
