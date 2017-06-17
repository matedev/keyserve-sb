$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $("#trianglebox1").outerHeight();
        console.log(bodyheight);
        $("#triangle1").outerHeight(bodyheight);
        var triangle1Width = $("#triangle1").outerWidth();
        $("#triangle1").css({left: triangle1Width * (-1) + 1});
    }).resize();
});