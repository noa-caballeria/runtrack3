window.addEventListener('load', function() {
    function setBodyBackgroundColor(screenWidth) {
        var body = document.body;

        if (screenWidth >= 1680 && screenWidth <= 1920) {
            body.style.backgroundColor = '#ffca4b';
        } else if (screenWidth >= 1280 && screenWidth < 1680) {
            body.style.backgroundColor = '#275fa0';
        } else if (screenWidth < 1280) {
            body.style.backgroundColor = '#ffffff';
        } else {
            body.style.backgroundColor = '#88c1d0';
        }
    }

    function handleResize() {
        setBodyBackgroundColor(window.innerWidth);
    }

    setBodyBackgroundColor(window.innerWidth);

    window.addEventListener('resize', function() {
        handleResize();
    });

    window.matchMedia("(orientation: portrait)").addListener(function() {
        handleResize();
    });
});
