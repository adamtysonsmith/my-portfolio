var Transform = (function(d3) { 
  this.exports = {
    categoryData: transformCategoryData,
    skillData: transformSkillData
  }
  
  // Data Transform Functions
  function transformCategoryData(data) {
    return d3.nest()
      .key(groupByCategory)
      .rollup(calcBubbleSize)
      .entries(data)
      .sort(sortBubblesDesc)
      .map(mapColors);
    
    function groupByCategory(data) {
      return data[data.CATEGORY] = data.CATEGORY;
    }
    
    function calcBubbleSize(data) {
      var sum = d3.sum(data, function(item) { 
        return item.TOPICSCORE; 
      });
      return sum / 10; 
    }
    
    function sortBubblesDesc(a, b) {
      return b.values - a.values;
    }
    
    function mapColors(data, index) {
      var colors = ['#66ccff', '#99cc33', '#ff9933', '#ff6666'];
      data.color = colors[index];
      return data;
    }
  }
  
  function transformSkillData(data, categories) {
    var reduced = data.reduce(transform, {});
    
    for (var key in reduced) {
      reduced[key].forEach(function(skill) {
        skill.skillScore = Math.floor(skill.skillScore / skill.topics.length);
      });
    }
    
    return reduced;
    
    // Private transform function
    function transform(result, item, index, array) {
      var category = item.CATEGORY.toLowerCase();
      var skill = item.SKILLNAME;
      var topic = item.TOPICNAME;
      var score = parseInt(item.TOPICSCORE, 10);
      
      // Unique category keys
      result[category] = result[category] || [];
      
      if (!result[category].find(findSkill)) {
        result[category].push({
          skillName: skill,
          skillScore: score,
          topics: [{
              topicName: topic,
              topicScore: score
            }]
        });
      } else {
        result[category].find(findSkill).topics.push({
          topicName: topic,
          topicScore: score
        });
        result[category].find(findSkill).skillScore += score;
      }
      
      return result;
      
      // private
      function findSkill(element, index) {
        return element.skillName === skill;
      }
    }
  }
  
  // Return Functions
  return this.exports;
  
})(d3);