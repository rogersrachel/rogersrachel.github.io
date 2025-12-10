function width2breakpointName(num){
    if (num < 576) {
        return "";
    } else if (num < 768) {
        return "sm";
    } else if (num < 992) {
        return "md";
    } else if (num < 1200) {
        return "lg";
    } else {
        return "xl";
    }
}

window.onload = (event) => {
    // console.log("page is fully loaded");
    // //FIXME comment after dev
    // initialTitle = document.title;
    // setInterval(function () {
    //     currWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //     currHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //     //document.title = initialTitle + " [" + currWidth + "x" + currHeight + "]";
    //     document.title = currWidth + "x" + currHeight + ": " + width2breakpointName(currWidth);
    // }, 1000)

    // Source - https://stackoverflow.com/a
    // Posted by joshmoto, modified by community. See post 'Timeline' for change history
    // Retrieved 2025-12-08, License - CC BY-SA 4.0

    // // scroll functions
    // $(window).scroll(function (e) {
    //     // add/remove class to navbar when scrolling to hide/show
    //     $('.navbar')[$(window).scrollTop() >= 150 ? 'addClass' : 'removeClass']('navbar-hide');
    // });
    var lastScrollTop = 0;
    $(window).scroll(function (e) {
        // console.log("scroll");
        // // add/remove class to navbar when scrolling to hide/show
        // var scroll = $(window).scrollTop();
        // if (scroll >= 150) {
        //     $('.navbar').addClass("navbar-hide");
        // } else {
        //     $('.navbar').removeClass("navbar-hide");
        // }
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            // downscroll code
            $('#mainNavbar').addClass("navbar-hide");
        } else if (st < lastScrollTop) {
            // upscroll code
            $('#mainNavbar').removeClass("navbar-hide");
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
};