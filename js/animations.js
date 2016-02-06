$(document).ready(function() {

  // Run animations
  animateCTA('#cta', 'bigEntrance');
  animateCTA('#resume', 'slideDown');
  animateDataGraph();
  animateBinaryCode();
  
  // Register events for CTA text and buttons
  function animateCTA(id, animation) {
    $(id).on('mousemove', function() {
      $(id + ' h2, ' + id + ' p').addClass(animation);
      $(id + ' .button-dark').addClass('slideUp');
    });
  }

  // Register event for data section animation
  function animateDataGraph() {
    $('.data-graph').css('bottom', '-200px').css('opacity', '0.25');
    $('#data').on('mousemove', graphAnimation);

    function graphAnimation(evt) {
      $('.data-graph').animate({
        opacity: 1,
        bottom: '0px'
      }, 1500);
    }
  }
  
  // Background Animation for Development Section
  function animateBinaryCode() {
    generateBinary();
    loopAnimationLeft();
    loopAnimationRight();
    
    // Generate the strings to be animated
    function generateBinary() {
      var top = 0;
      var $development = $('#development');
      var binary = '01000001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 01101001 01110011 00100000 01101100 01101111 01110110 01100101 00101100 00100000 01000001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 01101001 01110011 00100000 01101100 01101111 01110110 01100101 00101100 00100000 01101100 01101111 01110110 01100101 00100000 01101001 01110011 00100000 01100001 01101100 01101100 00100000 01111001 01101111 01110101 00100000 01101110 01100101 01100101 01100100 00100000 00111011 00101101 00101001';

      // First line of binary
      $development.append('<p class="binary">' + binary + '</p>');

      // All subsequent lines of binary code looped and positioned
      for (var i = 1; i < 60; i++) {
        top += 24;
        $development.append("<p class='binary " + i + "' style='top: " + top + "px;' >" + binary + "</p>");
      }
    }
    
    // Loop the Animation with recursion, alternating
    // the direction for each line of text
    function loopAnimationLeft() {
      $('.binary:even').css('right', '0px');
      $('.binary:even').animate({ right: '2000' }, 50000, 'linear', loopAnimationLeft);
    }
    
    function loopAnimationRight() {
      $('.binary:odd').css('left', '-4000px');
      $('.binary:odd').animate({ left: '4000' }, 200000, 'linear', loopAnimationRight);
    }
  }

});