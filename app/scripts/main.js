$(document).ready(function() {
    gSlider();
});

function gSlider() {
var gLeft = $('#g-slider-control-left'),
    gRight = $('#g-slider-control-right'),
    gSliderNumber = $('#g-slider-images > ul > li').length,
    gActiveSlide = $('#g-slider-images > ul > li.g-image-active').index(),
    gDescription = $('#g-slider-desriptions > ul > li'),
    gImages = $('#g-slider-images > ul > li');

$('#g-slider-images > ul > li').each(function() {
    $(this).addClass('g-slider-image-' + $(this).index());
    $(this).attr('g-data-index', $(this).index() + 1);
});
$('#g-slider-desriptions > ul > li').each(function() {
    $(this).addClass('g-slider-desription-' + $(this).index());
    $(this).attr('g-data-index', $(this).index() + 1);
})


gLeft.on('click', function() {
	gImages.eq((gActiveSlide + 1) % gSliderNumber).removeClass('g-image-next-active');
    gImages.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');    
    gImages.eq(gActiveSlide).removeClass('g-image-active').addClass('g-image-next-active');
    // descrition index
    gDescription.eq((gActiveSlide - 1) % gSliderNumber).addClass('g-description-active');
    gDescription.eq(gActiveSlide).removeClass('g-description-active');
    gActiveSlide = (gActiveSlide - 1) % gSliderNumber;
    gSliderCount(gActiveSlide,gSliderNumber)

});

gRight.on('click', function() {
    // Image index	
    gImages.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-image-active').removeClass('g-image-next-active');
    gImages.eq((gActiveSlide + 2) % gSliderNumber).addClass('g-image-next-active');
    gImages.eq(gActiveSlide).removeClass('g-image-active');
    // descrition index
    gDescription.eq((gActiveSlide + 1) % gSliderNumber).addClass('g-description-active');
    gDescription.eq(gActiveSlide).removeClass('g-description-active');
    gActiveSlide = (gActiveSlide + 1) % gSliderNumber;
    gSliderCount(gActiveSlide,gSliderNumber)

});

}

function gSliderCount(nr,of) {
    $('#g-slider-nr').html(nr+1); 
	$('#g-slider-of').html('/0' + of);
}

