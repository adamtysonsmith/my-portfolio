var ChartTable = (function($, d3) {  

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
    });
}
  
})(jQuery, d3);