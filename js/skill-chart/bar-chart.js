var BarChart = (function($, d3, Config, Table) {
  var exports = {
    init: initBarChart,
    clear: clearBarChart
  }
  
  // SIDE EFFECTS
  function initBarChart(width, height, skillData) {
    // Call the Bar Chart to instantiate
    setTimeout(function() {
      drawBarChart(width, height, skillData);
    }, 300);
  }
  
  
  // MONOLITHIC FUNCTION
  // MAD SIDE EFFECTS
  var horizontalBarChart;

  function drawBarChart(width, height, skillData) {
    console.log('The skill data', skillData)
    var barData;
      // Load the data based on URL hash
      switch (location.hash) {
          case '#Data':
              barData = skillData.data;
              break;
          case '#Design':
              barData = skillData.design;
              break;
          case '#Development':
              barData = skillData.development;
              break;
          case '#SEO':
              barData = skillData.seo;
              break;
      }

      // Use the margin convention
      if ($(window).width() < 550) {
          var margin = {top: 0, right: 50, bottom: 250, left: 160};
          var backgroundHeight = height - margin.top - margin.bottom;
          var backgroundWidth = width - margin.left - margin.right;
      } else {
          var margin = {top: 25, right: 35, bottom: 80, left: 310};
          var backgroundHeight = height - margin.top - margin.bottom;
          var backgroundWidth = width - margin.left - margin.right; 
      }

      // Use to set bar width based on each data value (horizontal bar)
      var barWidth = function(data) {
          return xScaleLinear(data.skillScore);
      }

      // The next set of functions configure our scales
      var yScaleOrdinal = d3.scale.ordinal()
          .domain(d3.range(0, barData.length)) 
          .rangeBands([0, backgroundHeight], 0.2);

      var xScaleLinear = d3.scale.linear()
          .domain([0, 10])
          .range([0, backgroundWidth]);

      // Function to create array of categories to be used in yScaleOrdinalCategories
      var categoryDomain = function () {
          var categoryArray = [];
          for (var a = 0; a < barData.length; a++) {
              categoryArray.push(barData[a].skillName);
          }
          return categoryArray;
      }

      // Ordinal Scale for Categories in y-axis
      var yScaleOrdinalCategories = d3.scale.ordinal()
          .domain(categoryDomain()) 
          .rangeBands([0, backgroundHeight], 0.2);

      // Draw the Chart
      function drawhorizontalBarChart() {
        return d3.select('#skills-chart > svg')
          .append('g')
          .attr('id', 'chart-data')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
          .selectAll('rect')
          .data(barData).enter()
          .append('rect')
          .style('fill', '#48D7DF')
          .attr('width', 0) // Set to zero now, animate later
          .attr('height', yScaleOrdinal.rangeBand())
          .attr('x', 0)
          .attr('y', function(data, index){
            return yScaleOrdinal(index);
          });
      }

      
      function registerBarChartEvents(horizontalBarChart) {
        horizontalBarChart.on('mouseover', function() {
          d3.select(this).style('opacity', 0.4).style('cursor', 'pointer');
        })
        .on('mouseout', function() {
          d3.select(this).style('opacity', 'initial');
        })
        .on('click', function(data) {
          console.log(data + ' was clicked! Place function to display skill detail data here');
          
          // @todo table data diplay here
          Table.init(data);
          $('.hidden-skills-details').show(300, function () {
            console.log('Skills Detail is now shown');
          });
        });
      }

      // Configure the y-axis
      var yAxis = d3.svg.axis()
          .scale(yScaleOrdinalCategories)
          .orient('left');

      var yAxisLayout = d3.select('#skills-chart > svg')
          .append('g')
          .attr('id', 'chart-y-axis')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      yAxis(yAxisLayout);


      // Configure the x-axis
      var xAxis = d3.svg.axis()
          .scale(xScaleLinear)
          .orient('bottom');

      var xAxisLayout = d3.select('#skills-chart > svg')
          .append('g')
          .attr('id', 'chart-x-axis')
          .attr('transform', 'translate(' + margin.left + ',' + (backgroundHeight + margin.top) + ')');

      xAxis(xAxisLayout);


      // Style the Axes Text
      if ($(window).width() < 550) {
        d3.selectAll('#chart-y-axis > .tick > text')
          .attr('font-weight', 'lighter')
          .attr('font-family', 'Helvetica')
          .attr('font-size', 15);

        d3.selectAll('#chart-x-axis > .tick > text')
          .attr('font-weight', 'lighter')
          .attr('font-family', 'Helvetica')
          .attr('font-size', 15);
      } else {
          d3.selectAll('#chart-y-axis > .tick > text')
            .attr('font-weight', 'lighter')
            .attr('font-family', 'Helvetica')
            .attr('font-size', 13);

          d3.selectAll('#chart-x-axis > .tick > text')
            .attr('font-weight', 'lighter')
            .attr('font-family', 'Helvetica')
            .attr('font-size', 13);   
      }

    
      // Animate on init and register events
      var barChart = drawhorizontalBarChart();
      barChart.transition()
        .attr('width', barWidth)
        .delay(function(d, i) {
          return i * 50;
        })
        .duration(1000)
        .ease('elastic');

      registerBarChartEvents(barChart);
  } // End drawBarChart
  

  function clearBarChart() {
    d3.selectAll('#chart-y-axis, #chart-x-axis, #chart-data').remove();
  }
  
  return exports;

})(jQuery, d3, Configuration, ChartTable);