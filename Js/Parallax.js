

window.addEventListener("scroll", function () {
    var offset = this.window.scrollY;
    var section = this.document.getElementsByClassName("parallaxSection");
    for (var i=0;i<section.length;i++) {
        var sectionHeight = section[i].offsetHeight;
        section[i].style.backgroundPosition = "0% " + (offset / sectionHeight * -70) + "%";
    }


});


window.addEventListener("scroll", function () {
    var offset = this.window.scrollY;
    var section = document.getElementsByClassName("parallaxVid");
    for (var i=0;i<section.length;i++) {
        var sectionHeight = section[i].offsetHeight;
        section[i].style.transform = "translate(-50%," + ((-offset / sectionHeight * -310)-120) + "px)";
    }


});