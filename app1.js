function loadLorem() {
	document.getElementById("para1").innerHTML = 
	          "In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced."
                   +"<br><br>"+
                   "The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin."
                   +"<br><br>"+
                   "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s by Aldus Corporation, which employed it in graphics and word-processing templates for its desktop publishing program PageMaker."
                   +"<br><br>"+
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
function loadLast() {
	document.getElementById("para1").innerHTML 
		= "this is the third thing";
}
function loopBottles() {
	for(ctr=99;ctr>95;ctr--) {
	   if(ctr===99) {
	      document.getElementById("para1").innerHTML = 
              ctr + " bottles of beer on the wall, " + ctr +
	      " bottles of beer. Take one down, pass it around, "
	      +(ctr-1)+ " bottles of beer on the wall...";
           }
	   else {
	      document.getElementById("para1").innerHTML = 
              document.getElementById("para1").innerHTML +"<br>"+
              ctr + " bottles of beer on the wall, " + ctr +
              " bottles of beer. Take one down, pass it around, "
              +(ctr-1)+ " bottles of beer on the wall...";
	   }
	}
}
