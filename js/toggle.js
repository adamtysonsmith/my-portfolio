$(document).ready(function() {
  // Initialize the page with the content hidden
  $('.hidden-dev').hide();
  $('.hidden-seo').hide();
  $('.hidden-data').hide();
  
  toggleHandler('dev');
  toggleHandler('seo');
  toggleHandler('data');

  // Registers click events and handles toggle
  // for each experience section
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

});