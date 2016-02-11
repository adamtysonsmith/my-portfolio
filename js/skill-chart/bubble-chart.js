var BubbleChart = (function($, d3, Config, Events) {
  var exports = {
    init: initBubbleChart
  }
  
  // Bubble Chart
  function initBubbleChart(categoryData) {
  
    // Grab the chart selection
    var visualization = Config.svg;
    var width = Config.width;
    var height = Config.height;
    
    // D3 requires data to be in children property
    var packData = { children: categoryData };
    var packNodes = createPackNodes(width, height, packData);
    var data = visualization.selectAll('circle')
      .data(packNodes, function(d) {
        return d.key;
      });
    
    var bigBubbles = drawBigBubbles(data, packNodes);
    var bigBubbleText = drawBigBubbleText(data);
    
    bigBubbleText.transition()
      .attr('opacity', 1)
      .delay(1000)
      .ease('linear');
    
    registerBigBubbleEvents(bigBubbles, bigBubbleText, transformBubbles);
    
    // @private
    function transformBubbles() {
      // Remove all the large text and big bubbles
      bigBubbleText.remove();
      bigBubbles.remove();
      drawSmallBubbles(visualization, categoryData)
      drawSmallBubbleText(visualization, categoryData)
      Events.positionSmallBubbles();
      // @todo - Events function
      // Events.transitionToBarChart
    }
  }
  
  function createPackNodes(width, height, packData) {
    var packLayout = d3.layout.pack()
      .size([width, height])
      .padding(2)
      .value(function(d) {
        return d.values;
      });
    
    return packLayout.nodes(packData)
      .filter(function(d) {
        // Filters out parent object
        return !d.children;
      }); 
  }

  
  function drawBigBubbles(data, packNodes) {
    return data.enter()
      .append('circle')
      .attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      })
      .attr('r', '0')
      .attr('fill', function(d) {
        return d.color;
      })
      .attr('class', function(d) {
        return d.key + '-bubble';
      });
  }
  
  
  function drawBigBubbleText(data) {
    return data.enter()
      .append('text')
      .text(function(d) {
        return d.key;
      })
      .attr('transform',function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      })
      .attr('fill', 'white')
      .attr('opacity', 0)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'helvetica')
      .attr('font-weight', 'lighter')
      .attr('font-size', fontSize);
  }
  
  // Likes sorted category data
  function drawSmallBubbles(visualization, categoryData) {
    return visualization.selectAll('circle')
      .data(categoryData).enter()
      .append('circle')
        .attr('cx', 100)
        .attr('cy', 250)
        .attr('r', function(d) {
          return d.values;
        })
        .attr('fill', function(d) {
          return d.color;
        })
        .attr('class', function(d) {
          return 'small-bubble-' + d.key;
        });
  }
  

  function drawSmallBubbleText(visualization, categoryData) {
    return visualization.selectAll('text')
      .data(categoryData)
      .enter()
      .append('text')
      .text(function(d) {
        return d.key;
      })
      .attr('x', '100')
      .attr('class', function(d) {
        return 'small-bubble-text-' + d.key;
      })
      .attr('fill','white')
      .attr('text-anchor','middle')
      .attr('font-family','helvetica')
      .attr('font-size', fontSize);
  }
  

  function registerBigBubbleEvents(bigBubbles, bigBubbleText, transformChartCB) {
    bigBubbles.on('mouseover', function() {
        d3.select(this).style('opacity', 0.7).style('cursor', 'pointer');
      })
      .on('mouseout', function() {
        d3.select(this).style('opacity', 'initial');
      })
      .on('click', function(d) {
        location.hash = '#' + d.key;
        shiftBubbles();
      })
      .transition()
      .attr('r', function(d) {
          return d.r;
      })
      .duration(1500)
      .ease('bounce');

    //  @private: Bubble Transformation           
    function shiftBubbles() {
      bigBubbleText.transition()
        .attr('opacity', 0);

      bigBubbles.transition()
        .attr('transform', 'translate(100, 250)')
        .attr('r', 40)
        .duration(600)
        .ease('linear')
        .each('end', function() {
          d3.select(this)
            .transition()
            .attr('opacity', 0)
        });

      setTimeout(function() {
        transformChartCB();
      }, 500);
    }
  }
  
  
  function registerSmallBubbleEvents(smallBubbles, switchBubblesCB) {
    smallBubbles.on('click', function(d) {
        switchBubblesCB(d);
      })
      .on('mouseover', function() {
        d3.select(this).style('opacity', 0.7).style('cursor', 'pointer');
      })
      .on('mouseout', function() {
        d3.select(this).style('opacity', 'initial');
      });
  }
  
  
  // @private: Set the font size based on data value
  function fontSize(d) {
    if (d.values > 20) {
      return 15;   
    } else if (d.values > 10) {
      return 14;
    } else {
      return 12;
    }
  }
  
  // private: redraws bar chart when small bubbles are selected
  // @todo - this function will become Events.transitionToBarChart
  function switchBubbles(d, horizontalBarChart, drawBarChartCB) {
    // Update the hash
    location.hash = '#' + d.name;

    // Remove the current chart
    d3.select('#chart-y-axis').remove();
    d3.select('#chart-x-axis').remove();
    horizontalBarChart.remove();

    // toggle the skills details
    $('.hidden-skills-details').hide(300);

    // redraw bar chart
    drawBarChartCB();
  }
  //=======================================================================
  
  
  
  
  
  

  // Now we need to instantiate the bar chart..
  // Should move this
//  setTimeout(function() {
//    drawBarChart();
//  }, 300);
  

  return exports;

})(jQuery, d3, Configuration, Events);