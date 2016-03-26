var ChartTable = (function(d3) {  
  
  var exports = {
    init: initSkillDetails
  }
  
  function initSkillDetails(data) {
    var title = d3.select('#skills-details-title');
    var table = d3.select('#skills-details-table');
    
    title.html('Skill Details for ' + data.skillName);
    table.selectAll('tr').remove(); // Nuke and repave

    table.selectAll('tr')
      .data(data.topics)
      .enter()
      .append('tr')
      .append('td')
      .html(function(d) {
        return d.topicName;
      });
    
    table.selectAll('tr')
      .append('td')
      .attr('class', 'topic-score')
      .append('svg')
      .attr('width', '210')
      .attr('height', '20');
    
    d3.selectAll('.topic-score > svg').each(function(bar) {
      var score = bar.topicScore;
      var self  = d3.select(this);
      
      if (score > 8) drawScoreBars(self, 5, '#99cc33');
      else if (score > 6) drawScoreBars(self, 4, '#b6d636');
      else if (score > 4) drawScoreBars(self, 3, '#eecf6f');
      else if (score > 2) drawScoreBars(self, 2, '#f2c071');
      else drawScoreBars(self, 1, '#f3ab71');
    });
    
    // private
    function drawScoreBars(selection, n, color) {
      var count = 0;
      for (var i = 0; i < n; i++) {
        selection.append('rect')
          .attr('width', '0')
          .attr('height', '20')
          .attr('fill', color)
          .attr('x', count)
          .transition()
          .attr('width', '40');
        count += 42;
      }
    }
  }
  
  return exports;
  
})(d3);