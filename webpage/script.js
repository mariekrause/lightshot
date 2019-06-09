$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.background').css('background-position-y', -(Math.abs(scrolled) * 0.025) + 'rem');
};

function show_hide() {
    document.getElementById("datenschutz").classList.toggle("visible")

}

function show_hide2() {
    document.getElementById("agb").classList.toggle("visible")

}