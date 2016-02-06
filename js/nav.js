$(document).ready(function() {
  // Make Mobile Menu Functional on Select Change
  $('#mobile-nav').change(function() {
    location = $(this).find('option:selected').val();
  });
});