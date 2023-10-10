
// fires when user scrolls
window.addEventListener("scroll", function () {
    //current scroll offset
    var offset = this.window.scrollY;
    //parallax divs on page stored as array of variables
    var section = this.document.getElementsByClassName("parallaxSection");
    for (var i=0;i<section.length;i++) { //iterate through each parralax div
        var sectionHeight = section[i].offsetHeight; //height on the page of the parallax section
        section[i].style.backgroundPosition = "50% " + (offset / sectionHeight * -70) + "%"; //adjust the vertical position of the image background
        //divides the window offset by the height of the div, inverts it and adjusts by a constant value
    }


});

// fires when user scrolls
window.addEventListener("scroll", function () {
    //current scroll offset
    var offset = this.window.scrollY;
    //parallax video divs on page stored as array of variables
    var section = document.getElementsByClassName("parallaxVid");
    for (var i=0;i<section.length;i++) { //iterate through each parralax div
        var sectionHeight = section[i].offsetHeight;//height on the page of the parallax section
        section[i].style.transform = "translate(-50%," + ((offset / sectionHeight * 430)-120) + "px)";//video is absolutely positioned div, so 
        //the transform is altered in a similar way rather than background position
    }


});