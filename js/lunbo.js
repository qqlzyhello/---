$(document).ready(function () {
    $(".custom-slider__carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["&#10094;", "&#10095;"]
    });

    $(".custom-slider__carousel").on('changed.owl.carousel', function (event) {
        var allText2 = $(".custom-slider__home .text_2");
        var currentItemIndex = event.item.index;
        var currentText2 = $(".custom-slider__home").eq(currentItemIndex).find('.text_2');

        allText2.removeClass('slideFromRight');
        setTimeout(function () {
            currentText2.addClass('slideFromRight');
        }, 50); // Adding a small delay to ensure the class addition triggers the animation
    });

    $(".custom-slider__carousel .item").on("click", function () {
        var backgroundImage = $(this).css('background-image');
        var imageUrl = backgroundImage.slice(5, -2).replace(/['"]+/g, ''); // 移除引号
        $('#modalImage').attr('src', imageUrl);
        $('#modal').show();
    });

    $(".close").on("click", function () {
        $('#modal').hide();
    });

    $('#modal').on("click", function (event) {
        if (event.target !== $('#modalImage')[0]) {
            $(this).hide();
        }
    });
});
