
/*
window.addEventListener("scroll", function () {
    var offset = this.window.scrollY;
    var section = this.document.getElementsByClassName("parallaxSection");
    for (var i in section) {
        var sectionHeight = section[i].offsetHeight;
        section[i].style.backgroundPosition = "0% " + (offset / sectionHeight * -100) + "%";
    }


});
*/

window.addEventListener("scroll", function () {
    var offset = this.window.scrollY;
    var section = document.getElementsByClassName("parallaxVid");
    for (var i=0;i<section.length;i++) {
        var sectionHeight = section[i].offsetHeight;
        section[i].style.transform = "translateY(" + ((-offset / sectionHeight * -310)-120) + "px)";
    }


});