$(document).ready(function() {
    var images = [
        "logo1.png", "logo2.png", "logo3.png",
        "logo4.png", "logo5.png", "logo6.png",
        "logo7.png", "logo8.png", "logo9.png"
    ];

    var emptyIndex = 8;

    initializeGame();

    $("#gameBoard").on("click", "img", function() {
        var currentIndex = $(this).index();
        if (isMoveValid(currentIndex)) {
        swapTiles(currentIndex, emptyIndex);
        emptyIndex = currentIndex;
        if (checkWin()) {
            endGame();
        }
        }
    });

    $("#restartButton").click(function() {
        initializeGame();
    });

    function initializeGame() {
        shuffleImages();
        renderBoard();
        $("#message").empty().css("color", "");
        $("#restartButton").hide();
    }

    function shuffleImages() {
        for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
        }
    }

    function renderBoard() {
        var gameBoard = $("#gameBoard");
        gameBoard.empty();
        for (var i = 0; i < images.length; i++) {
        var img = $("<img>").attr("src", images[i]).attr("alt", "Image " + (i + 1));
        gameBoard.append(img);
        }
    }

    function isMoveValid(index) {
        var rowDiff = Math.floor(emptyIndex / 3) - Math.floor(index / 3);
        var colDiff = emptyIndex % 3 - index % 3;
        return (rowDiff === 0 && Math.abs(colDiff) === 1) || (colDiff === 0 && Math.abs(rowDiff) === 1);
    }

    function swapTiles(index1, index2) {
        [images[index1], images[index2]] = [images[index2], images[index1]];
        renderBoard();
    }

    function checkWin() {
        for (var i = 0; i < images.length; i++) {
        if (images[i] !== "logo" +(i + 1) + ".png") {
            return false;
        }
        }
        return true;
    }
    
    function endGame() {
        $("#message").text("Vous avez gagné").css("color", "green");
        $("#restartButton").show();
    }
});
