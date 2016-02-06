////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Table of Contents                                                         //                                             //  I.   Configuration & Setup                                                //
//  II.  Visualization Functions                                              //
//  III. Table Creation Function                                              //
//  IV.  Control Flow for Navigating                                          //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

var util = {
  dataAccessor: function(data) {
    return {
      category: data.CATEGORY,
      skill: data.SKILLNAME,
      topic: data.TOPICNAME,
      score: data.TOPICSCORE
    }
  },
  sortDesc: function(data, prop) {
    return data.sort(function(a, b) {
      return b[prop] - a[prop];
    });
  },
  sortAsc: function(data, prop) {
    return data.sort(function(a, b) {
      return a[prop] - b[prop];
    });
  }
};

(function($, queue, util) {
  'use strict';
  
  //////////////////////////////////////
  // Load Data from public CSV
  //////////////////////////////////////
  var csvUrl = 'https://docs.google.com/spreadsheets/d/1SkV0k9GK46mevUPr_sCtl0A3IEUBEXTryl-xcWUD9Jo/pub?output=csv';
  
  queue().defer(d3.csv, csvUrl)
    .await(ready);
  
  function ready(err, rows) {
    // Data is received, initialize the chart!
    if (err) console.log('Error requesting spreadsheet data', err);
    var flatData = rows;
    var categoryData = transformCategoryData(flatData);
    var chartData = transformChartData(flatData);
  }
  
  function transformCategoryData(data) {
    return d3.nest()
      .key(function(d) { return d[d.CATEGORY] = d.CATEGORY; })
      .rollup(function(e) { return d3.sum(e, function(d) { return d.TOPICSCORE; }) / 10; })
      .entries(data);
  }
  
  function transformChartData(data) {
    // do stuff
  }
  
//////////////////////////////////////////////////
// I. Configuration & Setup                     //
//////////////////////////////////////////////////

if ($(window).width() < 550) {
    var width = 600;
    var height = 800;
} else {
    var width = 720;
    var height = 450;
}

var sortedData = categoryData.children.sort(function(a, b) {
    return b.size - a.size; // descending
});
    
var visualization = d3.select('#skills-chart').append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio','xMidYMid');

var packLayout = d3.layout.pack()
    .size([width, height])
    .padding(2) //Padding between big bubbles
    .value(function(d) {
        return d.size;
    });

var packNodes = packLayout.nodes(categoryData)
    .filter(function(d) {
        return !d.children;
    }); // Filters out the outer big bubble

var bubbleData = visualization.selectAll('circle')
    .data(packNodes, function(d) {
        return d.name;
    });

// Set the font size based on data value
var fontSize = function(d) {
    if (d.size > 20) {
        return 15;   
    } else if (d.size > 10) {
        return 14;
    } else {
        return 12;
    }
}

//////////////////////////////////////////////////
// II. Visualization Functions                  //
//////////////////////////////////////////////////
var bigBubbles = bubbleData.enter().append('circle')
    .attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
    })
    .attr('r','0')
    .attr('fill', function(d) {
        return d.color;
    })
    .attr('class', function(d) {
        return d.name + '-bubble';
    })
    .on('mouseover', function() {
        d3.select(this).style('opacity', 0.7).style('cursor', 'pointer');
    })
    .on('mouseout', function() {
        d3.select(this).style('opacity', 'initial');
    })
    .on('click', function(d){
        location.hash = '#' + d.name;
        shiftBubbles();
    });

// Animate the Big Bubbles
bigBubbles.transition()
    .attr('r',function(d) {
        return d.r;
    })
    .duration(1500)
    .ease('bounce');

// Create the Text
var bigBubblesText = bubbleData.enter().append('text')
    .text(function(d) {
        return d.name;
    })
    .attr('transform',function(d){
        return 'translate(' + d.x + ',' + d.y + ')';
    })
    .attr('fill','white')
    .attr('opacity',0)
    .attr('text-anchor','middle')
    .attr('font-family','helvetica')
    .attr('font-weight', 'lighter')
    .attr('font-size', fontSize);

// Animate the Text
bigBubblesText.transition()
    .attr('opacity', 1)
    .delay(1000)
    .ease('linear');



/*****  Bubble Transformation *******/                    
function shiftBubbles() {

    bigBubblesText.transition()
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
    }, 600);
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
                navigateBubbles(d);
            })
            .on('mouseover', function() {
                d3.select(this).style('opacity', 0.7).style('cursor', 'pointer');
            })
            .on('mouseout', function() {
                d3.select(this).style('opacity', 'initial');
            });
    
    // Adjust the Small Bubble Positioning
    var smallBubbleY = 700;
    
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
    
    // Draw the small bubble text
    var smallBubbleText = visualization.selectAll('text')
        .data(sortedData).enter()
        .append('text')
            .text(function(d) {
                return d.name;
            })
            .attr('x', '100')
            .attr('class', function(d) {
                return 'small-bubble-text-' + d.name;
            })
            .attr('fill','white')
            .attr('text-anchor','middle')
            .attr('font-family','helvetica')
            .attr('font-size', fontSize);
    
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
    
    // Call the Bar Chart to instantiate
    setTimeout(function() {
        drawBarChart();
    }, 300);
}

// Setup some global vars so we can remove chart later
var horizontalBarChart;
    
function drawBarChart() {

    // Load the data based on URL hash
    switch (location.hash) {
        case '#Data':
            var barData = skillData.Data;
            break;
        case '#Design':
            var barData = skillData.Design;
            break;
        case '#Development':
            var barData = skillData.Development;
            break;
        case '#SEO':
            var barData = skillData.SEO;
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
    horizontalBarChart = d3.select('#skills-chart > svg')
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
            })
            // Still chaining the same chart, add some events
            .on('mouseover', function() {
                d3.select(this).style('opacity', 0.4).style('cursor', 'pointer');
            })
            .on('mouseout', function() {
                d3.select(this).style('opacity', 'initial');
            })
            .on('click', function(data) {
                console.log(data.category + ' was clicked! Place function to display skill detail data here');
                displaySkillDetails(data);
                $('.hidden-skills-details').show(300, function () {
                    console.log('Skills Detail is now shown');
                });
            }); // End horizontalBarChart



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
    
    
    horizontalBarChart.transition()
        .attr('width', barWidth)
        .delay(function(d, i) {
            return i * 50;
        })
        .duration(1000)
        .ease('elastic');

} // End drawBarChart

    

//////////////////////////////////////////////////
// III. Table Creation Function                 //
//////////////////////////////////////////////////
    
// Access d.topics.item and d.topics.topicScore  
var tableData;

function displaySkillDetails(d) {
    
    if (tableData !== undefined) {
        tableData.remove();
    }
    
    d3.select('#skills-details-title').html('Skill Details for ' + d.skillName);
    
    tableData = d3.select('#skills-details-table').selectAll('tr').data(d.topics).enter()
        .append('tr');

    tableData.append('td').html(function(d) {
        return d.topicName;
    });
    
    tableData.append('td').attr('class', 'topic-score').append('svg')
        .attr('width', '210')
        .attr('height', '20');
    
    
    var bars = d3.selectAll(".topic-score > svg");
    
    bars.each(function(d) {
        var score = d.topicScore;
        
        if (score > 8) {
            var count = 0;
            for (var i = 0; i < 5; i++) {
                d3.select(this).append('rect')
                .attr('width', '0')
                .attr('height', '20')
                .attr('fill', '#99cc33')
                .attr('x', count)
                    .transition()
                    .attr('width', '40');
                count = count + 42;
            }
            
        } else if (score > 6) {
            var count = 0;
            for (var i = 0; i < 4; i++) {
                d3.select(this).append('rect')
                .attr('width', '0')
                .attr('height', '20')
                .attr('fill', '#b6d636')
                .attr('x', count)
                    .transition()
                    .attr('width', '40');
                count = count + 42;
            }
            
        } else if (score > 4) {
            var count = 0;
            for (var i = 0; i < 3; i++) {
                d3.select(this).append('rect')
                .attr('width', '0')
                .attr('height', '20')
                .attr('fill', '#eecf6f')
                .attr('x', count)
                    .transition()
                    .attr('width', '40');
                count = count + 42;
            }

        } else if (score > 2) {
            var count = 0;
            for (var i = 0; i < 2; i++) {
                d3.select(this).append('rect')
                .attr('width', '0')
                .attr('height', '20')
                .attr('fill', '#f2c071')
                .attr('x', count)
                    .transition()
                    .attr('width', '40');
                count = count + 42;
            }
            
        } else {
            d3.select(this).append('rect')
            .attr('width', '0')
            .attr('height', '20')
            .attr('fill', '#f3ab71')
                .transition()
                .attr('width', '40');
        }
    });  // End each
}
    
    
    

//////////////////////////////////////////////////
// IV. Control Flow for Navigating              //
//////////////////////////////////////////////////

function navigateBubbles(d) {
    // Update the hash
    location.hash = '#' + d.name;
    
    // Remove the current chart, and toggle the skills details
    d3.select('#chart-y-axis').remove();
    d3.select('#chart-x-axis').remove();
    horizontalBarChart.remove();
    $('.hidden-skills-details').hide(300, function () {
        console.log('Skills Detail is now hidden');
    });
    
    drawBarChart();
    
    console.log(d.name + ' Bubble was clicked');
}

})(jQuery, queue, util); // End Closure