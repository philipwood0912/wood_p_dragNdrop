(() => {
	// variables always come first
	// set up puzzle pieces and board
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// const never changes
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate puzzle pieces for left hand side
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePieces = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`

			piecesBoard.innerHTML += newPuzzlePieces;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`

		initDrag();
	}

	// drag n drop functionality goes here
	
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				// e.preventDefault();
				console.log('draggin...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	// handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('you dragged over me!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped something on me');

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});



	function resetPuzzlePieces() {
		// empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//event handling goes at the bottom
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener('click', resetPuzzlePieces));

	createPuzzlePieces(0);
	
	
})();