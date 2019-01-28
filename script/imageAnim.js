(() => {
	// variables always come first
	// set up puzzle pieces and board
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// const never changes
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate puzzle pieces for left hand side
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePieces = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`

			piecesBoard.innerHTML += newPuzzlePieces;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`
	}

	function resetPuzzlePieces() {
		// empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//event handling goes at the bottom
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePieces(0);
	
	
})();