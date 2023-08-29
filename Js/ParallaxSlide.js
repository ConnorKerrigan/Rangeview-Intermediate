window.addEventListener("scroll", function () {
    var offset = this.window.scrollY;
    var slideParallax = this.document.getElementsByClassName("slideParallax");
    for (var i in slideParallax) {
        var sectionHeight = slideParallax[i].offsetHeight;
        slideParallax[i].style.backgroundPosition = (offset / sectionHeight * -100) + "% 0%";
    }
});