

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
