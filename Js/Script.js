

window.addEventListener("scroll", function () {
    var offset = this.window.pageYOffset;
    var section = this.document.getElementsByClassName("parallaxSection")
    for (var i in section) {
        var sectionHeight = section[i].offsetHeight;
        section[i].style.backgroundPositionY = (offset / sectionHeight * -100) + "%";
    }

});

var loadLayoutTop = function () {
    $.ajax("LayoutTop.html", {
        success: function (response) {
            $("#TopContent").html(response);
        }
    });
};


$.ajax("LayoutTop.html", {
    success: function (response) {
        $("#TopContent").html(response);
    }
});

$.ajax("Footer.html", {
    success: function (response) {
        $("#Footer").html(response);
    }
}); 
