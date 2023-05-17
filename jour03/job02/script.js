$(document).ready(function() {
    $("#shuffleButton").click(function() {
        shuffleImages();
    });

    $("#imageContainer").sortable({
        update: checkOrder
    });

    function shuffleImages() {
        var images = $("#imageContainer").children();
        for (var i = 0; i < images.length; i++) {
        var target = Math.floor(Math.random() * images.length - 1) + 1;
        var target2 = Math.floor(Math.random() * images.length - 1) + 1;
        images.eq(target).before(images.eq(target2));
        }
    }

    function checkOrder() {
        var ordered = true;
        var images = $("#imageContainer").children();
        for (var i = 0; i < images.length; i++) {
        if (images.eq(i).attr("src") !== "img" + (i + 1) + ".png") {
            ordered = false;
            break;
        }
        }

        if (ordered) {
        $("#message").text("Vous avez gagné").css("color", "green");
        } else {
        $("#message").text("Vous avez perdu").css("color", "red");
        }
    }
});
