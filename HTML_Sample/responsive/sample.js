$(function () {
    $('.page-top').click(function () {
        var target = $("#pageTop");
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 300, "swing");
        return false;
    });
});

$(function () {
    var menuState;
    $('#menu-trigger').click(function () {
        $('nav.hidden').toggle('show');
        menuState = $('.sp-menu-list').hasClass('opend');
        if (menuState === true) {
            $('.sp-menu-list').removeClass('opend');
            $('#menu-trigger').text('menu');
        } else {
            $('.sp-menu-list').addClass('opend');
            $('#menu-trigger').text('close');
        }
    });
});

