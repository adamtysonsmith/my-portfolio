var Events = (function($, d3, BarChart) {
  
  var exports = {
    respondToScreen: registerScreenResizeEvent,
    positionSmallBubbles: positionSmallBubbles,
    transitionToBarChart: transitionToBarChart
  };
  
  // Register window resize event handler
  function registerScreenResizeEvent() {
    $(window).on('ready, resize', positionSmallBubbles);
  }
  
  function positionSmallBubbles() {
    var smallBubbleY = 700;
    
    if ($(window).width() < 550) {
      var width = 600;
      var height = 800;
    } else {
      var width = 720;
      var height = 450;
    }
    
    if ($(window).width() < 550) {
      // Positioning for Mobile
      d3.select('.small-bubble-Development')
          .attr('r', '80')
          .transition()
          .attr('cy', smallBubbleY)
          .attr('cx', '100')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-Data').transition()
          .attr('r', '70')
          .attr('cy', smallBubbleY)
          .attr('cx','270')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-Design').transition()
          .attr('r', '60')
          .attr('cy', smallBubbleY)
          .attr('cx','420')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-SEO').transition()
          .attr('r', '40')
          .attr('cy', smallBubbleY)
          .attr('cx','540')
          .duration(1000)
          .ease('elastic');
    } else {
      // Positioning for Tablet and Desktop
      d3.select('.small-bubble-SEO').transition()
          .attr('cy', '35')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-Design').transition()
          .attr('cy', '115')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-Data').transition()
          .attr('cy', '220')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-Development')
          .attr('r', '60')
          .transition()
          .attr('cy', '340')
          .duration(1000)
          .ease('elastic');
    }
    
    // Adjust the Small Bubble Text Positioning
    if ($(window).width() < 550) {
      // Positioning for Mobile
      d3.select('.small-bubble-text-Development').transition()
          .attr('y', smallBubbleY)
          .attr('x', '100')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-Data').transition()
          .attr('y', smallBubbleY)
          .attr('x', '270')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-Design').transition()
          .attr('y', smallBubbleY)
          .attr('x', '420')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-SEO').transition()
          .attr('y', smallBubbleY)
          .attr('x', '540')
          .duration(1000)
          .ease('elastic');
    } else {
      // Positioning for Tablet and Desktop
      d3.select('.small-bubble-text-SEO').transition()
          .attr('y', '37')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-Design').transition()
          .attr('y', '117')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-Data').transition()
          .attr('y', '222')
          .duration(1000)
          .ease('elastic');
      d3.select('.small-bubble-text-Development').transition()
          .attr('y', '342')
          .duration(1000)
          .ease('elastic');
    }
  }
  
  // Initializes animation to show the bar chart
  // was known as switchBubbles
  function transitionToBarChart(width, height, skillData) {
    BarChart.clear();
    $('.hidden-skills-details').hide(300);
    BarChart.init(width, height, skillData);
  }
  
  return exports;
  
})(jQuery, d3, BarChart);