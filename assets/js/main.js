$(() => {
    $(".form-icon").on("click", function () {
        if ($(".form-section").hasClass('seen')) {
            $(".form-section").animate({ right: '-325px' });
            $(".form-section").removeClass('seen');
            setTimeout(() => {
                $(".cabinet-btn button").removeClass('invisible');
            }, 300)
        } else {
            $(".cabinet-btn button").addClass('invisible');
            setTimeout(() => {
                $(".form-section").animate({ right: '0' });
                $(".form-section").addClass('seen');
            }, 300)
        }

    })

    function fixMenu() {
        let imgHeight = $(".header-img").height();
        if ($(window).scrollTop() > imgHeight) {
            $(".menu-section").css({ position: "fixed", top: "0" });
            $(".navbar").css({ "background-color": "rgba(20, 52, 99, .7)" });
            $(".dropdown-menu").css({ "background-color": "rgba(20, 52, 99, .7)" });
            $(".form-section").css({ "background-color": "rgba(20, 52, 99, .7)" });
        } else {
            $(".menu-section").css({ position: "static", top: "0" });
            $(".navbar").css({ "background-color": "rgba(20, 52, 99, 1)" });
            $(".dropdown-menu").css({ "background-color": "#375074" });
            $(".form-section").css({ "background-color": "#375074" });
        }
    }

    fixMenu();

    $(window).scroll(function () {
        fixMenu();
    })

    $(window).resize(function () {
        fixMenu();
    })

    new WOW().init();

    $('.owl-carousel1').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 60,
        nav: true,
        navText: ["<img src='../assets/img/announcement-left.svg'>", "<img src='../assets/img/announcement-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })

    $('.owl-carousel2').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='../assets/img/photo-right.svg'>", "<img src='../assets/img/photo-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 4
            }
        }
    })

    $('.owl-carousel3').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 4
            }
        }
    })


})