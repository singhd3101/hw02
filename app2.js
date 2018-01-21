function displayPopup () {
	var message = number.innerHTML;
	alert(message);
}

function addNumber () {
	var newnum = parseInt(number.innerHTML) +1;
	number.innerHTML = newnum;
}

function addPara() {
	var newPara = document.createElement("p");
	var newNode = document.createTextNode(number.innerHTML);
	newPara.appendChild(newNode);
	var newElement = document.getElementById("div2");
	newElement.appendChild(newPara);
}


