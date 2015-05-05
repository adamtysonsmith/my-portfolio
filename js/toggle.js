$('document').ready(function () {
    
      // Initialize the page with the content hidden
      $('.hidden-dev').hide();
      $('.hidden-seo').hide();
      $('.hidden-data').hide();
      $('.hidden-skills-details').hide();
      // Toggle Hidden Skills Details is triggered by a d3 event listener
    
      // Handle the Toggle Button Click (Development)
      $('.toggle-dev').click(function () {
          $('.hidden-dev').slideToggle(300, function () {
            // Update Button Text based on State
            if ($('.hidden-dev').is(':hidden')) {
              $('.toggle-dev').text('Learn More');
            } else {
              $('.toggle-dev').text('Hide');
            }
          });
      });
    
      // Handle the Toggle Button Click (SEO)
      $('.toggle-seo').click(function () {
          $('.hidden-seo').slideToggle(300, function () {
            // Update Button Text based on State
            if ($('.hidden-seo').is(':hidden')) {
              $('.toggle-seo').text('Learn More');
            } else {
              $('.toggle-seo').text('Hide');
            }
          });
      });
    
      // Handle the Toggle Button Click (Data)
      $('.toggle-data').click(function () {
          $('.hidden-data').slideToggle(300, function () {
            // Update Button Text based on State
            if ($('.hidden-data').is(':hidden')) {
              $('.toggle-data').text('Learn More');
            } else {
              $('.toggle-data').text('Hide');
            }
          });
      });
    
  }); //End