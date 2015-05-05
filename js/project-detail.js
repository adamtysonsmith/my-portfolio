$('document').ready(function () {
    // Function to hide all the hidden divs, essentially resetting them
    var reset = function() {
        $('.project-detail').css('display', 'none');
        $('#portfolio > .twelve.columns > ul > li').removeClass('project-detail-visible');
        console.log('Reset Triggered: Mousedown');
    }
    
    // Function to Show hidden divs on click
    $('#portfolio > .twelve.columns > ul > li').mousedown(function() {
        reset(); // Reset any hidden divs before opening a new one
        $(this).children('div').css('display', 'block');
        $(this).addClass('project-detail-visible');
        console.log('Click on List Item Triggered: Mousedown');
    });
    
    // Close the hidden div on button click
    $('.reset').mousedown(function() {
        reset();
        console.log('Reset Button Triggered');
    });
    
    // Close the hidden div when clicking outside of the div
    $('#featured, #cta, nav, .dev-container').mousedown(function() {
        reset();
        console.log('Click on Outer Section Triggered: Mousedown');
    });

});