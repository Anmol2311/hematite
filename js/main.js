$(document).ready(function () {
    $('.ct-slick-homepage').on('init', function (event, slick) {
        $('.animated').addClass('activate fadeInUp');
    });

    $('.ct-slick-homepage').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow: false,
        nextArrow: false
    });

    $('.ct-slick-homepage').on('afterChange', function (event, slick, currentSlide) {
        $('.animated').removeClass('off');
        $('.animated').addClass('activate fadeInUp');
    });

    $('.ct-slick-homepage').on('beforeChange', function (event, slick, currentSlide) {
        $('.animated').removeClass('activate fadeInUp');
        $('.animated').addClass('off');
    });
});

$(document).ready(function () {
    if ($('[data-background]').length > 0) {
        $('[data-background]').each(function () {
            var $background, $backgroundmobile, $this;
            $this = $(this);
            $background = $(this).attr('data-background');
            $backgroundmobile = $(this).attr('data-background-mobile');
            if ($this.attr('data-background').substr(0, 1) === '#') {
                return $this.css('background-color', $background);
            } else if ($this.attr('data-background-mobile') && device.mobile()) {
                return $this.css('background-image', 'url(' + $backgroundmobile + ')');
            } else {
                return $this.css('background-image', 'url(' + $background + ')');
            }
        });
    }

    // smooth scroll for one page website
    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 20 + 'px'
                }, 1000);
                return false;
            }
        }
    });

    // on scroll display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $('.btn-scroll').fadeIn();
        }
        else {
            $('.btn-scroll').fadeOut();
        }
    });

    // on button click scroll top
    $('.btn-scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

    // hide collapse on click nav-item
    // $('.nav-link').bind('click',function(){
    //     $('.navbar-toggler').addClass('collapsed');
    //     $('.navbar-collapse').removeClass('show');
    // })

});

//courses  code for panel + and -
// $(document).ready(function () {

    // $('#collapseHead1').addListerner('click',function(){

    // })

    // $('#collapseBody1').on('shown.bs.collapse', function () {
    //     // $(".servicedrop").removeClass('fa fa-plus');
    //     $(".servicedrop").removeClass('fa fa-plus').addClass('fa fa-minus');
    // });

    // $('#collapseBody1').on('hidden.bs.collapse', function () {
    //     // $(".servicedrop").removeClass('fa fa-minus');
    //     $(".servicedrop").removeClass('fa fa-minus').addClass('fa fa-plus');
    // });

    // $(".collapse").on('show.bs.collapse', function() {
    //     $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    //   }).on('hide.bs.collapse', function() {
    //     $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    //   });



// });

