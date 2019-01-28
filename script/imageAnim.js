(() => {
	// selects the elements you want to work with
	let theButton = document.querySelector('#buttonHolder img');
	// window.addEventListener('load', changeHeaderText);
	// function goes in the middle
	function changeHeaderText() {
		document.querySelector('h1').textContent = "hey there from javascript"
		document.querySelector('p').textContent = "wow so cool"
	}
	// event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	
	
})();