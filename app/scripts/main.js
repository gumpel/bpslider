// $(document).ready(function() {
//     gSlider();
// });

// function gSlider() {
var gLeft = $('#g-slider-control-left'),
    gRight = $('#g-slider-control-right'),
    gSliderNumber = $('#g-slider-images > ul > li').length,
    gActiveSlide = $('#g-slider-images > ul > li.g-image-active').index(),
    gDescription = $('#g-slider-desriptions > ul > li'),
    gImages = $('#g-slider-images > ul > li'),
    gInterval,
    sliderPoused,
    haveBeenPoused = false,
    playButton = $('#g-slider-control-play'),
    pauseButton = $('#g-slider-control-pause');

gDescriptionHeight();

$('#g-slider-images > ul > li').each(function() {
    $(this).addClass('g-slider-image-' + $(this).index());
    $(this).attr('g-data-index', $(this).index() + 1);
});
$('#g-slider-desriptions > ul > li').each(function() {
    $(this).addClass('g-slider-desription-' + $(this).index());
    $(this).attr('g-data-index', $(this).index() + 1);
})


gInterval = setInterval(function() { gNext() }, 5000);

gLeft.on('click', function() {
    gPrev();
    clearInterval(gInterval);

});

gRight.on('click', function() {
    gNext();
    clearInterval(gInterval);
});

pauseButton.on('click', function() {
    haveBeenPoused = false;
    pouseButtonAnimation();
    clearInterval(gInterval);
});

playButton.on('click', function() {
    gNext();
    playSlider();
});

gDescription.on('mouseover', function() {
    clearInterval(gInterval);
    pouseButtonAnimation();
});

gImages.on('mouseover', function() {
    clearInterval(gInterval);
    pouseButtonAnimation();
});

function gDescriptionHeight() {
    var height = 0;
    gDescription.each(function() {
    	$(this).removeAttr('style');
    	$(this).width($('#g-slider-desriptions').width());
        if ($(this).height() > height) {
            height = $(this).height();
        }
    });           
       $('#g-slider-desriptions').height(height);
}

function playSlider() {
	clearInterval(gInterval);
    gInterval = setInterval(function() { gNext() }, 5000);
    haveBeenPoused = false;
}

function pouseButtonAnimation() {
    console.log(haveBeenPoused)
    if (!haveBeenPoused) {
        $('#g-slider-control-pouse').addClass('slider-poused')
        sliderPoused = setInterval(function() { $('#g-slider-control-pouse').removeClass('slider-poused') }, 4000);
        haveBeenPoused = true;
    }
}

function gPrev() {
    gImages.eq((gActiveSlide + 1) % gSliderNumber).removeClass('g-image-next-active');
    gImages.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');
    gImages.eq(gActiveSlide).removeClass('g-image-active').addClass('g-image-next-active');
    // descrition index
    gDescription.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-description-active');
    gDescription.eq(gActiveSlide).removeClass('g-description-active');
    gActiveSlide = gActiveSlide - 1 > 0 ? (gActiveSlide - 1) % gSliderNumber : (gActiveSlide + gSliderNumber - 1) % gSliderNumber;
    gSliderCount(gActiveSlide, gSliderNumber);
    console.log(gActiveSlide)
}

function gNext() {
    gImages.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');
    gImages.eq((gActiveSlide + 2) % gSliderNumber).addClass('g-image-next-active');
    gImages.eq(gActiveSlide).removeClass('g-image-active');
    // descrition index
    gDescription.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-description-active');
    gDescription.eq(gActiveSlide).removeClass('g-description-active');
    gActiveSlide = (gActiveSlide + 1) % gSliderNumber;
    gSliderCount(gActiveSlide, gSliderNumber);
}

function gSliderCount(nr, of) {
    $('#g-slider-nr').html(nr+1);
    $('#g-slider-of').html('/0' + of);
}
// }
