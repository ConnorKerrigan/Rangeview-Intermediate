

//loads the navigation bar html
$.ajax("LayoutTop.html", {
    success: function (response) {
        //if successful, insert html into #TopContent div
        $("#TopContent").html(response);
    }
});

//loads the footer html
$.ajax("Footer.html", {
    success: function (response) {
        //if successful, insert this html into #Footer div
        $("#Footer").html(response);
    }
}); 