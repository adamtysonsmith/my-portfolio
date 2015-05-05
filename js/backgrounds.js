$('document').ready(function () {
    
// Text Animation for Calls to Action
    $('#cta').on('mousemove', function() {
        $('#cta h2').addClass('bigEntrance');
        $('#cta p').addClass('bigEntrance');
        $('#cta a').addClass('bigEntrance');
    });
    
    $('#resume').on('mousemove', function() {
        $('#resume h2').addClass('slideDown');
        $('#resume p').addClass('slideDown');
        $('#resume button').addClass('slideUp');
    });
    
// Background Animation for Development Section
var binary = '01000001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 01101001 01110011 00100000 01101100 01101111 01110110 01100101 00101100 00100000 01000001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 01101001 01110011 00100000 01101100 01101111 01110110 01100101 00101100 00100000 01101100 01101111 01110110 01100101 00100000 01101001 01110011 00100000 01100001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 00111011 00101101 00101001';
             
var top = 0;
    
    // First Line of Binary Code
    $('#development').append('<p class="binary">' + binary + '</p>');
    
    // All Subsequent Lines of Binary Code looped, adding 14px to top each time
    for (var i = 1; i < 60; i++) {
        top += 24;
        $('#development').append("<p class='binary " + i + "' style='top: " + top + "px;' >" + binary + "</p>");
    }
    
    // Loop the Animation for each line, alternating the direction
    function loopAnimationLeft() {
        $('.binary:even')
            .css('right', '0px')

        $('.binary:even').animate ({
            right: '2000'},
            50000,
            'linear',
            function() {
                loopAnimationLeft();
            });
    }
    
    function loopAnimationRight() {
        $('.binary:odd')
            .css('left', '-4000px')

        $('.binary:odd').animate ({
            left: '4000'},
            200000,
            'linear',
            function() {
                loopAnimationRight();
            });
    }
    
    loopAnimationLeft();
    loopAnimationRight();

                 
// Background Animation for Data Section
    $('.data-graph').css('bottom', '-200px').css('opacity', '0.25');
    $('#data').on('mousemove', graphAnimation);
    
    function graphAnimation(evt) {
        $('.data-graph')
        .animate({
            opacity: 1,
            bottom: '0px'
        }, 1500);
    }

    // Conditionally Add novalidate to form if JavaScript is enabled
    $('form').attr('novalidate','');
    
}); // End Ready Function