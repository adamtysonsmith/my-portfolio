(function(d3, queue, Transform, BubbleChart) {  
  // Load Data
  var csvUrl = 'https://docs.google.com/spreadsheets/d/1SkV0k9GK46mevUPr_sCtl0A3IEUBEXTryl-xcWUD9Jo/pub?output=csv';
  
  queue().defer(d3.csv, csvUrl)
    .await(init);
  
  // Initialization
  function init(err, data) {
    if (err) console.log('Error requesting spreadsheet data', err);
    
    // Transforms
    var categoryData = Transform.categoryData(data);
    var skillData = Transform.skillData(data, categoryData);
    
    console.log('OG Category data', categoryData)
    console.log('OG Skill data', skillData)
    
    // Run chart functions
    BubbleChart.init(categoryData);
  }
  
})(d3, queue, Transform, BubbleChart);