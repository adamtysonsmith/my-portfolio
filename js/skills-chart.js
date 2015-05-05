////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Table of Contents                                                         //
//  I.   Data Objects                                                         //
//  II.  Configuration & Setup                                                //
//  III. Visualization Functions                                              //
//  IV.  Table Creation Function                                              //
//  V.   Control Flow for Navigating                                          //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

(function() {
'use strict';

    
//////////////////////////////////////////////////
// I. Data Objects                              //
//////////////////////////////////////////////////
var categoryData = { name: 'skills',
  children: 
   [ { name: 'Data', size: 52, color: '#66ccff' },
     { name: 'Design', size: 46, color: '#99cc33' },
     { name: 'Development', size: 148, color: '#ff9933' },
     { name: 'SEO', size: 29, color: '#ff6666' } ] 
};
 
var skillData = { Data: 
   [ { category: 'Data',
       skillName: 'Data Visualization',
       skillScore: 8,
       topics: 
        [ { topicName: 'Analyzing Data for the Big Picture',
            topicScore: 8 },
          { topicName: 'Presenting Data to Reveal a Story',
            topicScore: 8 },
          { topicName: 'Convey Meaning with Color & Shapes',
            topicScore: 8 },
          { topicName: 'Interactive Visualization Best Practices',
            topicScore: 6 },
          { topicName: 'Using JavaScript Charting Libraries',
            topicScore: 6 },
          { topicName: 'Advanced Excel Charts', topicScore: 10 } ] },
     { category: 'Data',
       skillName: 'Excel',
       skillScore: 8,
       topics: 
        [ { topicName: 'Basic Formulas', topicScore: 10 },
          { topicName: 'Advanced Formulas', topicScore: 8 },
          { topicName: 'Custom Theme Styles', topicScore: 10 },
          { topicName: 'Working with Tables', topicScore: 10 },
          { topicName: 'Basic Charts', topicScore: 10 },
          { topicName: 'Advanced Charts', topicScore: 10 },
          { topicName: 'Building Automated Dashboards', topicScore: 7 },
          { topicName: 'Charts and Tables with Dropdown Controls',
            topicScore: 10 },
          { topicName: 'PivotTables', topicScore: 4 },
          { topicName: 'Named Variables', topicScore: 10 },
          { topicName: 'Writing VBA Macros', topicScore: 2 } ] },
     { category: 'Data',
       skillName: 'Google Analytics',
       skillScore: 9,
       topics: 
        [ { topicName: 'Defining Micro and Macro Conversions',
            topicScore: 10 },
          { topicName: 'Setting up Goals', topicScore: 10 },
          { topicName: 'Event Tracking', topicScore: 8 },
          { topicName: 'Segments and Filters', topicScore: 8 },
          { topicName: 'Dashboards', topicScore: 10 },
          { topicName: 'Utilizing Shortcuts', topicScore: 10 },
          { topicName: 'Account and Profile Administration',
            topicScore: 10 },
          { topicName: 'Advanced Admin Configuration', topicScore: 10 },
          { topicName: 'Integrating GWT and AdWords', topicScore: 10 },
          { topicName: 'Analyzing Data for Tracking Errors',
            topicScore: 5 },
          { topicName: 'Filtering Internal and Bot Traffic',
            topicScore: 6 },
          { topicName: 'Google Analytics API', topicScore: 7 } ] },
     { category: 'Data',
       skillName: 'NoSQL',
       skillScore: 3,
       topics: 
        [ { topicName: 'Understanding CAP Theorem', topicScore: 4 },
          { topicName: 'Document Stores', topicScore: 6 },
          { topicName: 'Tabular Databases', topicScore: 1 },
          { topicName: 'Key-Value Stores', topicScore: 1 },
          { topicName: 'Graph Databases', topicScore: 1 },
          { topicName: 'Querying with JavaScript', topicScore: 6 },
          { topicName: 'Map & Reduce Queries', topicScore: 4 },
          { topicName: 'Partitioning & Sharding', topicScore: 2 },
          { topicName: 'MongoDB', topicScore: 6 },
          { topicName: 'Cassandra', topicScore: 1 },
          { topicName: 'CouchDB', topicScore: 1 },
          { topicName: 'Redis', topicScore: 1 },
          { topicName: 'Riak', topicScore: 1 } ] },
     { category: 'Data',
       skillName: 'Google Tag Manager',
       skillScore: 9,
       topics: 
        [ { topicName: 'Working with Accounts and Containers',
            topicScore: 10 },
          { topicName: 'Leveraging Preconfigured Tags', topicScore: 10 },
          { topicName: 'Implementing Rules and Macros', topicScore: 10 },
          { topicName: 'Debugging Tags with GTM', topicScore: 10 },
          { topicName: 'Using Custom HTML Tags', topicScore: 10 },
          { topicName: 'Writing Custom JavaScript Tags', topicScore: 8 },
          { topicName: 'Implementing Data Layer Code', topicScore: 6 },
          { topicName: 'Using GTM Variables', topicScore: 6 },
          { topicName: 'Debugging Tags with Developer Tools',
            topicScore: 10 },
          { topicName: 'Implementing Event Tracking Tags', topicScore: 8 } ] } ],
  Design: 
   [ { category: 'Design',
       skillName: 'Photoshop',
       skillScore: 10,
       topics: 
        [ { topicName: 'Setting up Documents for Print and Web',
            topicScore: 10 },
          { topicName: 'Understanding Raster Graphics', topicScore: 8 },
          { topicName: 'Smart Organization of Layers and Groups',
            topicScore: 10 },
          { topicName: 'Creating and Editing Type', topicScore: 10 },
          { topicName: 'Advanced Selections and Refine Edge',
            topicScore: 8 },
          { topicName: 'Using Layer & Clipping Masks', topicScore: 10 },
          { topicName: 'Pen Tool and Paths', topicScore: 10 },
          { topicName: 'Layer Styles', topicScore: 10 },
          { topicName: 'Transforms', topicScore: 8 },
          { topicName: 'Working with Smart Objects', topicScore: 10 },
          { topicName: 'Managing Color Swatches', topicScore: 10 },
          { topicName: 'Using Grids', topicScore: 10 } ] },
     { category: 'Design',
       skillName: 'Illustrator',
       skillScore: 9,
       topics: 
        [ { topicName: 'Setting up Documents for Print', topicScore: 8 },
          { topicName: 'Understanding vector graphics', topicScore: 8 },
          { topicName: 'Smart Organization of Layers and Groups',
            topicScore: 10 },
          { topicName: 'Making detailed selections', topicScore: 10 },
          { topicName: 'Resizing, rotating, and transforming objects',
            topicScore: 10 },
          { topicName: 'Creating swatches and color libraries',
            topicScore: 10 },
          { topicName: 'Working with fills and strokes', topicScore: 10 },
          { topicName: 'Using Shape Builder and Image Trace',
            topicScore: 6 },
          { topicName: 'Drawing and editing paths', topicScore: 10 },
          { topicName: 'Modifying Appearances', topicScore: 6 },
          { topicName: 'Working with Type', topicScore: 10 },
          { topicName: 'Using Grids', topicScore: 10 } ] },
     { category: 'Design',
       skillName: 'Design Concepts',
       skillScore: 8,
       topics: 
        [ { topicName: 'Wireframing and Sketching', topicScore: 10 },
          { topicName: 'Color Theory', topicScore: 4 },
          { topicName: 'Layout & Composition', topicScore: 8 },
          { topicName: 'Concept of Space', topicScore: 8 },
          { topicName: 'Image Editing', topicScore: 4 },
          { topicName: 'Alignment & Grids', topicScore: 10 },
          { topicName: 'Print Production', topicScore: 8 },
          { topicName: 'Web Production', topicScore: 8 } ] },
     { category: 'Design',
       skillName: 'Typography',
       skillScore: 6,
       topics: 
        [ { topicName: 'Understanding How Type Conveys Meaning',
            topicScore: 6 },
          { topicName: 'Display vs. Body Type', topicScore: 10 },
          { topicName: 'Type Classification', topicScore: 4 },
          { topicName: 'Legibility & Readability', topicScore: 6 },
          { topicName: 'Spacing & Alignment', topicScore: 6 },
          { topicName: 'Color & Tonal Weight', topicScore: 6 },
          { topicName: 'Fonts for the Web', topicScore: 4 } ] },
     { category: 'Design',
       skillName: 'User Experience',
       skillScore: 4,
       topics: 
        [ { topicName: 'Web Usability Basics', topicScore: 10 },
          { topicName: 'Progressive Navigation', topicScore: 4 },
          { topicName: 'Information Architecture', topicScore: 4 },
          { topicName: 'Content Strategy', topicScore: 6 },
          { topicName: 'Usability Testing', topicScore: 2 },
          { topicName: 'Influencing Behavioral Patterns', topicScore: 2 },
          { topicName: 'Persuasive UX Techniques', topicScore: 2 } ] } ],
  Development: 
   [ { category: 'Development',
       skillName: 'HTML',
       skillScore: 6,
       topics: 
        [ { topicName: 'Basic Page Structure', topicScore: 10 },
          { topicName: 'Formatting Page Content', topicScore: 10 },
          { topicName: 'Semantic Page Structure in HTML5', topicScore: 8 },
          { topicName: 'Including Scripts and Styles', topicScore: 10 },
          { topicName: 'Meta Tags', topicScore: 10 },
          { topicName: 'Microdata Markup', topicScore: 6 },
          { topicName: 'Implementing Navigation', topicScore: 10 },
          { topicName: 'Bootstrap Framework', topicScore: 6 },
          { topicName: 'Skeleton Framework', topicScore: 10 },
          { topicName: 'Foundation Framework', topicScore: 6 },
          { topicName: 'HTML5 Forms & Validation', topicScore: 10 },
          { topicName: 'HTML5 Media (Audio, Video, etc)', topicScore: 2 },
          { topicName: 'HTML5 SVG Graphics', topicScore: 8 },
          { topicName: 'HTML5 Canvas', topicScore: 1 },
          { topicName: 'HTML5 Communications API', topicScore: 1 },
          { topicName: 'HTML5 Geolocation', topicScore: 1 },
          { topicName: 'HTML5 Web Workers', topicScore: 1 },
          { topicName: 'HTML5 Web Sockets', topicScore: 1 },
          { topicName: 'HTML5 Local Storage', topicScore: 1 },
          { topicName: 'HTML5 Web Components', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'CSS',
       skillScore: 7,
       topics: 
        [ { topicName: 'Inline, Internal and External Styles',
            topicScore: 10 },
          { topicName: 'Understanding of the Cascade', topicScore: 10 },
          { topicName: 'Cross Browser Compatibility', topicScore: 8 },
          { topicName: 'Box Model', topicScore: 10 },
          { topicName: 'Element Positioning', topicScore: 8 },
          { topicName: 'Working with Type', topicScore: 6 },
          { topicName: 'Page Layouts & Backgrounds', topicScore: 8 },
          { topicName: 'Media Queries', topicScore: 7 },
          { topicName: 'Units of Measurement', topicScore: 4 },
          { topicName: 'Resolving Style Conflicts', topicScore: 8 },
          { topicName: 'Targeting HTML Elements', topicScore: 10 },
          { topicName: 'Colors and Gradients', topicScore: 8 },
          { topicName: 'Print Friendly CSS', topicScore: 4 },
          { topicName: 'CSS3 Animations, Transitions & Transforms',
            topicScore: 6 },
          { topicName: 'CSS3 Shapes and Clip Paths', topicScore: 6 },
          { topicName: 'CSS3 Flexbox', topicScore: 2 },
          { topicName: 'CSS3 Webfonts & Typography', topicScore: 6 } ] },
     { category: 'Development',
       skillName: 'WordPress',
       skillScore: 8,
       topics: 
        [ { topicName: 'Installing and Configuring WordPress',
            topicScore: 10 },
          { topicName: 'Using Child Themes for Customizations',
            topicScore: 10 },
          { topicName: 'Designing Static Pages', topicScore: 10 },
          { topicName: 'Managing Media Content', topicScore: 10 },
          { topicName: 'Setting up WooCommerce', topicScore: 10 },
          { topicName: 'SEO Best Practices for WordPress', topicScore: 8 },
          { topicName: 'Extending Functionality with Plugins',
            topicScore: 10 },
          { topicName: 'Security Precautions & Best Practices',
            topicScore: 6 },
          { topicName: 'Developing Themes with Underscores',
            topicScore: 2 },
          { topicName: 'Developing Themes with Genesis', topicScore: 2 } ] },
     { category: 'Development',
       skillName: 'Less & Sass',
       skillScore: 6,
       topics: 
        [ { topicName: 'Less Variables', topicScore: 10 },
          { topicName: 'Less Mixins with Parameters', topicScore: 4 },
          { topicName: 'Less Native Functions', topicScore: 4 },
          { topicName: 'Less Pattern Matching', topicScore: 2 },
          { topicName: 'Sass Variables', topicScore: 10 },
          { topicName: 'Sass Nested Rules', topicScore: 10 },
          { topicName: 'Sass Mixins with Paremeters', topicScore: 4 },
          { topicName: 'Sass Functions', topicScore: 4 } ] },
     { category: 'Development',
       skillName: 'JavaScript',
       skillScore: 7,
       topics: 
        [ { topicName: 'Variables', topicScore: 10 },
          { topicName: 'Conditional Statements', topicScore: 8 },
          { topicName: 'Functions', topicScore: 8 },
          { topicName: 'Loops', topicScore: 8 },
          { topicName: 'Data Types', topicScore: 8 },
          { topicName: 'Arrays and Objects', topicScore: 8 },
          { topicName: 'Navtive Object Methods', topicScore: 6 },
          { topicName: 'Native Array Methods', topicScore: 6 },
          { topicName: 'Events and Event Listeners', topicScore: 6 },
          { topicName: 'Object Oriented JavaScript', topicScore: 6 },
          { topicName: 'Asynchronous Callbacks', topicScore: 6 },
          { topicName: 'AJAX Requests', topicScore: 4 },
          { topicName: 'Debugging with Developer Tools', topicScore: 2 },
          { topicName: 'Regular Expressions', topicScore: 10 },
          { topicName: 'Working with JSON Data', topicScore: 8 },
          { topicName: 'JavaScript Design Patterns', topicScore: 4 },
          { topicName: 'HTML Templating Engines', topicScore: 10 },
          { topicName: 'Lodash Utility Library', topicScore: 6 } ] },
     { category: 'Development',
       skillName: 'Node.js',
       skillScore: 6,
       topics: 
        [ { topicName: 'Node Version Management', topicScore: 10 },
          { topicName: 'Using NPM', topicScore: 10 },
          { topicName: 'Working with Modules', topicScore: 8 },
          { topicName: 'Managing Dependencies in package.json',
            topicScore: 8 },
          { topicName: 'Creating Web Servers in Node.js', topicScore: 8 },
          { topicName: 'Understanding the Main Event Loop',
            topicScore: 4 },
          { topicName: 'Events and Streams', topicScore: 2 },
          { topicName: 'File System Module', topicScore: 4 },
          { topicName: 'Websocket Programming', topicScore: 2 },
          { topicName: 'Test Driven Development', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'Express.js',
       skillScore: 6,
       topics: 
        [ { topicName: 'Creating Web Servers with Express',
            topicScore: 8 },
          { topicName: 'Express Generator', topicScore: 2 },
          { topicName: 'Configuring Express Router', topicScore: 8 },
          { topicName: 'Incuding Public Directories', topicScore: 8 },
          { topicName: 'EJS Templating', topicScore: 8 },
          { topicName: 'Jade Templating', topicScore: 1 },
          { topicName: 'Developing REST API Middleware', topicScore: 6 } ] },
     { category: 'Development',
       skillName: 'MongoDB',
       skillScore: 6,
       topics: 
        [ { topicName: 'Defining Schemas with Mongoose.js',
            topicScore: 6 },
          { topicName: 'Data Models with Mongoose.js', topicScore: 6 },
          { topicName: 'Accessing Databases with Mongoose.js',
            topicScore: 8 },
          { topicName: 'Querying Databases and Collections with Mongoose.js',
            topicScore: 6 },
          { topicName: 'Validations with Mongoose.js', topicScore: 4 },
          { topicName: 'Using Local MongoDB Databases', topicScore: 2 },
          { topicName: 'Using MongoDB Databases hosted on MongoLab',
            topicScore: 8 } ] },
     { category: 'Development',
       skillName: 'AngularJS',
       skillScore: 5,
       topics: 
        [ { topicName: 'Understanding $scope', topicScore: 6 },
          { topicName: 'Working with Modules', topicScore: 6 },
          { topicName: 'Implementing Controllers', topicScore: 8 },
          { topicName: 'Binding Data to Models', topicScore: 8 },
          { topicName: 'Iterating through Data and Filtering',
            topicScore: 8 },
          { topicName: 'Using Partial Views', topicScore: 8 },
          { topicName: 'Using $http Service', topicScore: 4 },
          { topicName: 'Using $routeProvider', topicScore: 6 },
          { topicName: 'Frontend HTML Form Validation', topicScore: 8 },
          { topicName: 'Building Custom Directives', topicScore: 1 },
          { topicName: 'Building Custom Services', topicScore: 1 },
          { topicName: 'Building Custom Filters', topicScore: 1 },
          { topicName: 'Using Angular Touch Module', topicScore: 1 },
          { topicName: 'Using Angular Messages Module', topicScore: 1 },
          { topicName: 'Using Angular Resource Service', topicScore: 4 },
          { topicName: 'Using Angular Animate Service', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'D3.js',
       skillScore: 6,
       topics: 
        [ { topicName: 'Selecting and Modifying Elements', topicScore: 8 },
          { topicName: 'Binding Data to Elements', topicScore: 8 },
          { topicName: 'Drawing SVG Graphics with D3', topicScore: 8 },
          { topicName: 'Using Ordinal and Linear Scales', topicScore: 6 },
          { topicName: 'Adding Events and Transitions', topicScore: 6 },
          { topicName: 'Creating Axes and Margins', topicScore: 8 },
          { topicName: 'Creating and Adjusting Layouts', topicScore: 6 },
          { topicName: 'Controlling Visualization States', topicScore: 6 },
          { topicName: 'Advanced Animations', topicScore: 6 },
          { topicName: 'Advanced D3 Layouts', topicScore: 2 },
          { topicName: 'Working with Real Time Data', topicScore: 1 },
          { topicName: 'Working with Geomapping', topicScore: 1 },
          { topicName: 'Using the C3 Library', topicScore: 8 } ] },
     { category: 'Development',
       skillName: 'jQuery',
       skillScore: 5,
       topics: 
        [ { topicName: 'Selectors and Filters', topicScore: 8 },
          { topicName: 'Manipulating Page Content', topicScore: 8 },
          { topicName: 'jQuery Event Handling', topicScore: 8 },
          { topicName: 'jQuery AJAX Requests', topicScore: 4 },
          { topicName: 'jQuery Animations', topicScore: 6 },
          { topicName: 'jQuery UI Library', topicScore: 1 },
          { topicName: 'jQuery Touch Library', topicScore: 1 },
          { topicName: 'Building jQuery Plugins', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'Unix',
       skillScore: 6,
       topics: 
        [ { topicName: 'Working with Files & Directories',
            topicScore: 10 },
          { topicName: 'Customizing Bash Profiles', topicScore: 8 },
          { topicName: 'Writing Simple Shell Scripts', topicScore: 6 },
          { topicName: 'Monitoring Processes', topicScore: 6 },
          { topicName: 'Working with Text Editors', topicScore: 8 },
          { topicName: 'Directing Input and Output', topicScore: 2 },
          { topicName: 'Using grep', topicScore: 4 },
          { topicName: 'Users, Groups and Permissions', topicScore: 2 } ] },
     { category: 'Development',
       skillName: 'Git',
       skillScore: 6,
       topics: 
        [ { topicName: 'Architecture & Workflow Concepts', topicScore: 6 },
          { topicName: 'Managing Files & Directories', topicScore: 8 },
          { topicName: 'Local and Remote Repositories', topicScore: 8 },
          { topicName: 'Navigating, Cloning & Merging Branches',
            topicScore: 2 },
          { topicName: 'Working with .gitignore', topicScore: 8 },
          { topicName: 'Ammendments and Resets', topicScore: 2 } ] } ],
  SEO: 
   [ { category: 'SEO',
       skillName: 'Keyword Research',
       skillScore: 10,
       topics: 
        [ { topicName: 'Mining Keywords from PPC Tools', topicScore: 10 },
          { topicName: 'Analyzing Keyword Quality', topicScore: 10 },
          { topicName: 'Creating Keyword Optimized Sitemaps',
            topicScore: 10 },
          { topicName: 'Competitor Keyword Analysis', topicScore: 10 },
          { topicName: 'Optimizing Content with Keywords',
            topicScore: 10 } ] },
     { category: 'SEO',
       skillName: 'Content Optimization',
       skillScore: 8,
       topics: 
        [ { topicName: 'Optimizing Text Content', topicScore: 10 },
          { topicName: 'Metadata Optimization', topicScore: 10 },
          { topicName: 'Video and Image Optimization', topicScore: 7 },
          { topicName: 'Content Strategy', topicScore: 6 } ] },
     { category: 'SEO',
       skillName: 'Technical SEO',
       skillScore: 8,
       topics: 
        [ { topicName: 'Optimizing Site Structure for Crawlability',
            topicScore: 8 },
          { topicName: 'Ensure Proper Indexing of Pages', topicScore: 8 },
          { topicName: 'Canonical URLs and Redirects', topicScore: 8 },
          { topicName: 'Microdata Optimizations using Schema.org',
            topicScore: 8 },
          { topicName: 'Google Webmaster Tools', topicScore: 8 },
          { topicName: 'SEO Moz', topicScore: 8 } ] },
     { category: 'SEO',
       skillName: 'Local SEO',
       skillScore: 8,
       topics: 
        [ { topicName: 'Managing Consistent Local Citations',
            topicScore: 10 },
          { topicName: 'Google My Business Listings', topicScore: 8 },
          { topicName: 'Localized On-page Optimization', topicScore: 8 },
          { topicName: 'Address Microdata using Schema.org',
            topicScore: 8 },
          { topicName: 'Utilizing Automated Services', topicScore: 6 } ] },
     { category: 'SEO',
       skillName: 'Conversion Optimization',
       skillScore: 6,
       topics: 
        [ { topicName: 'A/B & Multivariate Testing', topicScore: 2 },
          { topicName: 'Analyzing Heatmaps and Click Maps',
            topicScore: 6 },
          { topicName: 'Optimizing Call to Action Design', topicScore: 8 },
          { topicName: 'CrazyEgg', topicScore: 6 } ] },
     { category: 'SEO',
       skillName: 'Linkbuilding',
       skillScore: 8,
       topics: 
        [ { topicName: 'Analyzing Link Profiles', topicScore: 8 },
          { topicName: 'Internal and External Link Strategy',
            topicScore: 8 },
          { topicName: 'Disavowing Spam Links', topicScore: 8 },
          { topicName: 'Majestic SEO', topicScore: 8 },
          { topicName: 'Open Site Explorer', topicScore: 8 } ] } ] 
};

var sortedData = categoryData.children.sort(function(a, b) {
    return b.size - a.size; // descending
});
    
    
    
//////////////////////////////////////////////////
// II. Configuration & Setup                    //
//////////////////////////////////////////////////
var width = 720;
var height = 450;

var visualization = d3.select('#skills-chart').append('svg')
    .attr('width', width)
    .attr('height', height);

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
        return 16;   
    } else if (d.size > 10) {
        return 14;
    } else {
        return 12;
    }
}



//////////////////////////////////////////////////
// III. Visualization Functions                 //
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
    d3.select('.small-bubble-SEO').transition().attr('cy', '35').duration(1000).ease('elastic');
    d3.select('.small-bubble-Design').transition().attr('cy', '115').duration(1000).ease('elastic');
    d3.select('.small-bubble-Data').transition().attr('cy', '220').duration(1000).ease('elastic');
    d3.select('.small-bubble-Development').attr('r', '60').transition()
        .attr('cy', '340').duration(1000).ease('elastic');
    
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
            .attr('font-size', 11);
    
    // Adjust the Small Bubble Text Positioning
    d3.select('.small-bubble-text-SEO').transition().attr('y', '37').duration(1000).ease('elastic');
    d3.select('.small-bubble-text-Design').transition().attr('y', '117').duration(1000).ease('elastic');
    d3.select('.small-bubble-text-Data').transition().attr('y', '222').duration(1000).ease('elastic');
    d3.select('.small-bubble-text-Development').transition()
        .attr('y', '342').duration(1000).ease('elastic');
    
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
    var margin = {top: 35, right: 35, bottom: 100, left: 310};
    var backgroundHeight = height - margin.top - margin.bottom;
    var backgroundWidth = width - margin.left - margin.right;

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
    d3.selectAll('#chart-y-axis > .tick > text')
        .attr('font-weight', 'lighter')
        .attr('font-family', 'Helvetica')
        .attr('font-size', 12);

    d3.selectAll('#chart-x-axis > .tick > text')
        .attr('font-weight', 'lighter')
        .attr('font-family', 'Helvetica')
        .attr('font-size', 12);

    horizontalBarChart.transition()
        .attr('width', barWidth)
        .delay(function(d, i) {
            return i * 50;
        })
        .duration(1000)
        .ease('elastic');

} // End drawBarChart

    

//////////////////////////////////////////////////
// IV. Table Creation Function                  //
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
// V. Control Flow for Navigating               //
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





})(); // End Closure