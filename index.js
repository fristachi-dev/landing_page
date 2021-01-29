

window.onscroll = function (ev) {

    if (window.scrollY > 1) {
        $('nav').addClass('navToggle');
    } else {
        $('nav').removeClass('navToggle');
    }

    // console.log(document.body.offsetHeight)
    // console.log(window.innerHeight)

};

let mobile = false;

$(document).ready(function () {

    $('.menu-button').on('click', function () {

        if (!mobile) {
            $('.mobile-menu').addClass('block');
            mobile = true;
        } else {
            $('.mobile-menu').removeClass('block');
            mobile = false;
        }
    });

});


