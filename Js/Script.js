

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


// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 300);
    }
}


window.addEventListener("hashchange", offsetAnchor);

window.setTimeout(offsetAnchor, 1); 