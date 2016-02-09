$(document).ready(function() {
  // Make mobile menu update hash on select change
  $('#mobile-nav').change(function() {
    location = $(this).find('option:selected').val();
  });
  
  // Initialize sections with content hidden
  $('.hidden-dev').hide();
  $('.hidden-seo').hide();
  $('.hidden-data').hide();
  $('.hidden-skills-details').hide();
  
  toggleHandler('dev');
  toggleHandler('seo');
  toggleHandler('data');

  // Register events for experience sections
  function toggleHandler(section) {
    $('.toggle-' + section).click(function() {
      $('.hidden-' + section).slideToggle(300, function() {
        // Update Button Text based on State
        if ($('.hidden-' + section).is(':hidden')) {
          $('.toggle-' + section).text('Learn More');
        } else {
          $('.toggle-' + section).text('Hide');
        }
      });
    });
  }

  // Conditionally add novalidate to contact form if JavaScript is enabled
  $('form').attr('novalidate', '');
});