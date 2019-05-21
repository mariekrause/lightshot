$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.background').css('background-position-y', -(Math.abs(scrolled) * 0.025) + 'rem');
};

function groesser() {
    document.getElementById("link").style.height = 500;
    document.getElementById("link").style.width = 500;
}