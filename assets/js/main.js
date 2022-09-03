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
            $(".menu-section").css({ position: "sticky", top: "0" });
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

    $(document).on("click", ".menu-btn", () => {
        $("#menuContainer").css({ "margin-left": "0px", "margin-right": "0px", "min-width": "100vw", "max-width": "100vw" });
        $(".dropdown-menu").css({ "border-top-right-radius": "8px", "border-top-left-radius": "8px" });
        $(".navbar-toggler").removeClass("menu-btn");
        $(".navbar-toggler").addClass("menu-open");
        $(".menu-section").css({ "position": "sticky" });
        fixMenu();
    })

    $(document).on("click", ".menu-open", () => {
        $("#menuContainer").css({ "margin-left": "auto", "margin-right": "auto", "min-width": "auto", "max-width": "auto" });
        $(".dropdown-menu").css({ "border-top-right-radius": "0px", "border-top-left-radius": "0px" });
        $(".navbar-toggler").removeClass("menu-open");
        $(".navbar-toggler").addClass("menu-btn");
        $(".menu-section").css({ "position": "static" });
        fixMenu();
    })

    new WOW().init();

    $('.owl-carousel1').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 60,
        nav: true,
        navText: ["<img src='./assets/img/announcement-left.svg'>", "<img src='./assets/img/announcement-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
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
        navText: ["<img src='./assets/img/photo-right.svg'>", "<img src='./assets/img/photo-right.svg'>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
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
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


})