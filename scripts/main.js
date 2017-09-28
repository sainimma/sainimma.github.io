var myImage = document.getElementById('main-pic');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/sai-main.jpg') {
		myImage.setAttribute ('src','images/desis-choice.png');
	} else {
		myImage.setAttribute ('src','images/sai-main.jpg');
	}	
}

var readingButton = document.querySelector("#reading");

readingButton.onclick = function() {
	alert("\"The Pleasure of Finding Things Out\" (a collection of works by Richard Feynman)");
}
