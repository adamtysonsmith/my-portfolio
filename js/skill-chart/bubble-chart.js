var BubbleChart = (function($, d3, Config) {
  this.exports = {
    init: initChart
  }
  
  // Bubble Chart
  function initChart(categoryData) {
  
    // Grab the chart selection
    var visualization = Config.svg;
    
    // D3 requires data to be in children property
    var packData = { children: categoryData };

    var packLayout = d3.layout.pack()
      .size([Config.width, Config.height])
      .padding(2)
      .value(function(d) {
        return d.values;
      });
    
    var packNodes = packLayout.nodes(packData)
      .filter(function(d) {
        // Filters out parent object
        return !d.children;
      }); 
    
    var data = visualization.selectAll('circle')
      .data(packNodes, function(d) {
        return d.key;
      });
    
    // Draw Big Bubbles
    var bigBubbles = data.enter()
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
      })
      .on('mouseover', function() {
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
    
    // Big Bubble Text
    var bigBubbleText = data.enter()
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
      .attr('font-size', fontSize)
      .transition()
      .attr('opacity', 1)
      .delay(1000)
      .ease('linear');
    
    //  Bubble Transformation           
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
        transformChart();
      }, 500);
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
  }
  
  function transformChart() {
    
    // Remove all the large text and big bubbles
    bigBubblesText.remove();
    bigBubbles.remove();
    
    // Next draw the small bubbles
    var smallBubbles = visualization.selectAll('circle')
      .data(sortedData).enter()
      .append('circle')
        .attr('cx', 100)
        .attr('cy', 250)
        .attr('r', function(d) {
          return d.size;
        })
        .attr('fill', function(d) {
          return d.color;
        })
        .attr('class', function(d) {
          return 'small-bubble-' + d.name;
        })
        .on('click', function(d) {
          switchBubbles(d);
        })
        .on('mouseover', function() {
          d3.select(this).style('opacity', 0.7).style('cursor', 'pointer');
        })
        .on('mouseout', function() {
          d3.select(this).style('opacity', 'initial');
        });
    
  }
  
  // private, triggered on click above
  // SIDE EFFECTS
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
  
  
  // Draw the small bubble text
  // No side effects
  function drawSmallBubbleText(categoryData) {
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

  // Now we need to instantiate the bar chart..
  // Should move this
  setTimeout(function() {
    drawBarChart();
  }, 300);
  
  // Return Functions
  return this.exports;

})(jQuery, d3, Configuration);