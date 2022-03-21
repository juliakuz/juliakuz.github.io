$(document).ready(function () {
    // if js is alowed:
    $('body').addClass('js');

    // Init slider:
    $('.slider_top .slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.slider_product .slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Reduce amount of dots function:
    function dotsLimit() {
        let dots = $('.slider_product .slider__wrapper li');

        dots.click(function () {
            let $this = $(this);
            dots.removeClass('before after');

            $this
                .prev().addClass('before')
                .prev().addClass('before');

            $this
                .next().addClass('after')
                .next().addClass('after');

            if (!$this.prev().length) {
                $this.next().next().next()
                    .addClass('after').next()
                    .addClass('after');
            }

            if (!$this.prev().prev().length) {
                $this.next().next().next()
                    .addClass('after');
            }

            if (!$this.next().length) {
                $this.prev().prev().prev()
                    .addClass('before').prev()
                    .addClass('before');
            }

            if (!$this.next().next().length) {
                $this.prev().prev().prev()
                    .addClass('before');
            }
        });

        // Do click on 1st point
        dots.eq(0).click();
    }

    dotsLimit();

    $(window).resize(function () {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function () {
            dotsLimit();
        }, 250);
    });

    // Check touch/no-touch device
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        $('body').addClass('touch');
    }
});