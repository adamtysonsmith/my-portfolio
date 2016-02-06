$(document).ready(function() {
  // Make Mobile Menu Functional on Select Change
  $('nav select').change(function() {
    location = $(this).find('option:selected').val();
  });
});