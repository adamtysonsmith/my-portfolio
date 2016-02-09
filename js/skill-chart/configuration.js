var Configuration = (function($, d3) {
  var width;
  var height;
  
  // Initial size settings
  if ($(window).width() < 550) {
    width = 600;
    height = 800;
  } else {
    width = 720;
    height = 450;
  }
  
  var visualization = d3.select('#skills-chart')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio','xMidYMid');
    
  return {
    svg: visualization,
    width: width,
    height: height,
  }

})(jQuery, d3);