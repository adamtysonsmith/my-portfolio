var categoryData = { name: 'skills',
  children: 
   [ { name: 'Data', size: 51, color: '#66ccff' },
     { name: 'Design', size: 46, color: '#99cc33' },
     { name: 'Development', size: 144, color: '#ff9933' },
     { name: 'SEO', size: 29, color: '#ff6666' } ] };
 
var skillData = { Data: 
   [ { category: 'Data',
       skillName: 'Data Visualization',
       skillScore: 9,
       topics: 
        [ { topicName: 'Advanced Excel Charts', topicScore: 10 },
          { topicName: 'Analyzing Data for the Big Picture',
            topicScore: 8 },
          { topicName: 'Presenting Data to Reveal a Story',
            topicScore: 8 },
          { topicName: 'Convey Meaning with Color & Shapes',
            topicScore: 8 },
          { topicName: 'Interactive Visualization Best Practices',
            topicScore: 8 },
          { topicName: 'Using JavaScript Charting Libraries',
            topicScore: 10 } ] },
     { category: 'Data',
       skillName: 'Excel',
       skillScore: 8,
       topics: 
        [ { topicName: 'Basic Formulas', topicScore: 10 },
          { topicName: 'Custom Theme Styles', topicScore: 10 },
          { topicName: 'Working with Tables', topicScore: 10 },
          { topicName: 'Basic Charts', topicScore: 10 },
          { topicName: 'Advanced Charts', topicScore: 10 },
          { topicName: 'Charts and Tables with Dropdown Controls',
            topicScore: 10 },
          { topicName: 'Named Variables', topicScore: 10 },
          { topicName: 'Advanced Formulas', topicScore: 8 },
          { topicName: 'Building Automated Dashboards', topicScore: 7 },
          { topicName: 'PivotTables', topicScore: 4 },
          { topicName: 'Writing VBA Macros', topicScore: 2 } ] },
     { category: 'Data',
       skillName: 'Google Analytics',
       skillScore: 9,
       topics: 
        [ { topicName: 'Defining Micro and Macro Conversions',
            topicScore: 10 },
          { topicName: 'Setting up Goals', topicScore: 10 },
          { topicName: 'Dashboards', topicScore: 10 },
          { topicName: 'Utilizing Shortcuts', topicScore: 10 },
          { topicName: 'Account and Profile Administration',
            topicScore: 10 },
          { topicName: 'Advanced Admin Configuration', topicScore: 10 },
          { topicName: 'Integrating GWT and AdWords', topicScore: 10 },
          { topicName: 'Event Tracking', topicScore: 8 },
          { topicName: 'Segments and Filters', topicScore: 8 },
          { topicName: 'Google Analytics API', topicScore: 7 },
          { topicName: 'Filtering Internal and Bot Traffic',
            topicScore: 6 },
          { topicName: 'Analyzing Data for Tracking Errors',
            topicScore: 5 } ] },
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
          { topicName: 'Debugging Tags with Developer Tools',
            topicScore: 10 },
          { topicName: 'Writing Custom JavaScript Tags', topicScore: 8 },
          { topicName: 'Implementing Event Tracking Tags', topicScore: 8 },
          { topicName: 'Implementing Data Layer Code', topicScore: 6 },
          { topicName: 'Using GTM Variables', topicScore: 6 } ] },
     { category: 'Data',
       skillName: 'NoSQL',
       skillScore: 4,
       topics: 
        [ { topicName: 'Document Stores', topicScore: 8 },
          { topicName: 'Querying with JavaScript', topicScore: 8 },
          { topicName: 'MongoDB', topicScore: 8 },
          { topicName: 'Understanding CAP Theorem', topicScore: 6 },
          { topicName: 'Map & Reduce Queries', topicScore: 8 },
          { topicName: 'Partitioning & Sharding', topicScore: 2 },
          { topicName: 'Tabular Databases', topicScore: 1 },
          { topicName: 'Key-Value Stores', topicScore: 1 },
          { topicName: 'Graph Databases', topicScore: 1 },
          { topicName: 'Cassandra', topicScore: 1 },
          { topicName: 'CouchDB', topicScore: 1 },
          { topicName: 'Redis', topicScore: 1 } ] } ],
  Design: 
   [ { category: 'Design',
       skillName: 'Design Concepts',
       skillScore: 8,
       topics: 
        [ { topicName: 'Wireframing and Sketching', topicScore: 10 },
          { topicName: 'Alignment & Grids', topicScore: 10 },
          { topicName: 'Layout & Composition', topicScore: 8 },
          { topicName: 'Concept of Space', topicScore: 8 },
          { topicName: 'Print Production', topicScore: 8 },
          { topicName: 'Web Production', topicScore: 8 },
          { topicName: 'Color Theory', topicScore: 5 },
          { topicName: 'Image Editing', topicScore: 5 } ] },
     { category: 'Design',
       skillName: 'Illustrator',
       skillScore: 9,
       topics: 
        [ { topicName: 'Smart Organization of Layers and Groups',
            topicScore: 10 },
          { topicName: 'Making detailed selections', topicScore: 10 },
          { topicName: 'Resizing, rotating, and transforming objects',
            topicScore: 10 },
          { topicName: 'Creating swatches and color libraries',
            topicScore: 10 },
          { topicName: 'Working with fills and strokes', topicScore: 10 },
          { topicName: 'Drawing and editing paths', topicScore: 10 },
          { topicName: 'Working with Type', topicScore: 10 },
          { topicName: 'Using Grids', topicScore: 10 },
          { topicName: 'Setting up Documents for Print', topicScore: 8 },
          { topicName: 'Understanding vector graphics', topicScore: 8 },
          { topicName: 'Using Shape Builder and Image Trace',
            topicScore: 6 },
          { topicName: 'Modifying Appearances', topicScore: 6 } ] },
     { category: 'Design',
       skillName: 'Photoshop',
       skillScore: 10,
       topics: 
        [ { topicName: 'Setting up Documents for Print and Web',
            topicScore: 10 },
          { topicName: 'Smart Organization of Layers and Groups',
            topicScore: 10 },
          { topicName: 'Creating and Editing Type', topicScore: 10 },
          { topicName: 'Using Layer & Clipping Masks', topicScore: 10 },
          { topicName: 'Pen Tool and Paths', topicScore: 10 },
          { topicName: 'Layer Styles', topicScore: 10 },
          { topicName: 'Working with Smart Objects', topicScore: 10 },
          { topicName: 'Managing Color Swatches', topicScore: 10 },
          { topicName: 'Using Grids', topicScore: 10 },
          { topicName: 'Understanding Raster Graphics', topicScore: 8 },
          { topicName: 'Advanced Selections and Refine Edge',
            topicScore: 8 },
          { topicName: 'Transforms', topicScore: 8 } ] },
     { category: 'Design',
       skillName: 'Typography',
       skillScore: 6,
       topics: 
        [ { topicName: 'Display vs. Body Type', topicScore: 10 },
          { topicName: 'Understanding How Type Conveys Meaning',
            topicScore: 6 },
          { topicName: 'Legibility & Readability', topicScore: 6 },
          { topicName: 'Spacing & Alignment', topicScore: 6 },
          { topicName: 'Color & Tonal Weight', topicScore: 6 },
          { topicName: 'Type Classification', topicScore: 4 },
          { topicName: 'Fonts for the Web', topicScore: 4 } ] },
     { category: 'Design',
       skillName: 'User Experience',
       skillScore: 6,
       topics: 
        [ { topicName: 'Web Usability Basics', topicScore: 10 },
          { topicName: 'Content Strategy', topicScore: 6 },
          { topicName: 'Progressive Navigation', topicScore: 6 },
          { topicName: 'Information Architecture', topicScore: 6 },
          { topicName: 'Usability Testing', topicScore: 4 },
          { topicName: 'Influencing Behavioral Patterns', topicScore: 4 },
          { topicName: 'Persuasive UX Techniques', topicScore: 4 } ] } ],
  Development: 
   [ { category: 'Development',
       skillName: 'AngularJS',
       skillScore: 6,
       topics: 
        [ { topicName: 'Implementing Controllers', topicScore: 8 },
          { topicName: 'Binding Data to Models', topicScore: 8 },
          { topicName: 'Iterating through Data and Filtering',
            topicScore: 8 },
          { topicName: 'Using ngView', topicScore: 10 },
          { topicName: 'Frontend HTML Form Validation', topicScore: 8 },
          { topicName: 'Understanding $scope', topicScore: 10 },
          { topicName: 'Working with Modules', topicScore: 6 },
          { topicName: 'Using ngRoute', topicScore: 10 },
          { topicName: 'Using $http Service', topicScore: 4 },
          { topicName: 'Using ngResource Service', topicScore: 8 },
          { topicName: 'Building Custom Directives', topicScore: 6 },
          { topicName: 'Building Custom Services & Factories',
            topicScore: 6 },
          { topicName: 'Building Custom Filters', topicScore: 6 },
          { topicName: 'Using Angular Touch Module', topicScore: 1 },
          { topicName: 'Using Angular Messages Module', topicScore: 1 },
          { topicName: 'Using Angular Animate Service', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'CSS',
       skillScore: 9,
       topics: 
        [ { topicName: 'Inline, Internal and External Styles',
            topicScore: 10 },
          { topicName: 'Understanding of the Cascade', topicScore: 10 },
          { topicName: 'Box Model', topicScore: 10 },
          { topicName: 'Targeting HTML Elements', topicScore: 10 },
          { topicName: 'Cross Browser Compatibility', topicScore: 8 },
          { topicName: 'Element Positioning', topicScore: 10 },
          { topicName: 'Page Layouts & Backgrounds', topicScore: 10 },
          { topicName: 'Resolving Style Conflicts', topicScore: 10 },
          { topicName: 'Colors and Gradients', topicScore: 9 },
          { topicName: 'Media Queries', topicScore: 10 },
          { topicName: 'Working with Type', topicScore: 8 },
          { topicName: 'CSS3 Animations, Transitions & Transforms',
            topicScore: 7 },
          { topicName: 'CSS3 Shapes and Clip Paths', topicScore: 7 },
          { topicName: 'CSS3 Webfonts & Typography', topicScore: 10 },
          { topicName: 'Units of Measurement', topicScore: 10 },
          { topicName: 'Print Friendly CSS', topicScore: 6 },
          { topicName: 'CSS3 Flexbox', topicScore: 3 } ] },
     { category: 'Development',
       skillName: 'D3.js',
       skillScore: 7,
       topics: 
        [ { topicName: 'Selecting and Modifying Elements',
            topicScore: 10 },
          { topicName: 'Binding Data to Elements', topicScore: 10 },
          { topicName: 'Drawing SVG Graphics with D3', topicScore: 10 },
          { topicName: 'Creating Axes and Margins', topicScore: 8 },
          { topicName: 'Using the C3 Library', topicScore: 8 },
          { topicName: 'Using Ordinal and Linear Scales', topicScore: 8 },
          { topicName: 'Adding Events and Transitions', topicScore: 8 },
          { topicName: 'Creating and Adjusting Layouts', topicScore: 8 },
          { topicName: 'Controlling Visualization States', topicScore: 8 },
          { topicName: 'Advanced Animations', topicScore: 6 },
          { topicName: 'Advanced D3 Layouts', topicScore: 3 },
          { topicName: 'Working with Real Time Data', topicScore: 1 },
          { topicName: 'Working with Geomapping', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'Express.js',
       skillScore: 8,
       topics: 
        [ { topicName: 'Creating Web Servers with Express',
            topicScore: 10 },
          { topicName: 'Configuring Express Router', topicScore: 8 },
          { topicName: 'Incuding Public Directories', topicScore: 10 },
          { topicName: 'EJS Templating', topicScore: 10 },
          { topicName: 'Jade Templating', topicScore: 10 },
          { topicName: 'Developing REST APIs', topicScore: 10 },
          { topicName: 'Express Generator', topicScore: 3 },
          { topicName: 'Writing custom middleware functions',
            topicScore: 6 } ] },
     { category: 'Development',
       skillName: 'Git',
       skillScore: 8,
       topics: 
        [ { topicName: 'Managing Files & Directories', topicScore: 10 },
          { topicName: 'Local and Remote Repositories', topicScore: 10 },
          { topicName: 'Working with .gitignore', topicScore: 10 },
          { topicName: 'Architecture & Workflow Concepts', topicScore: 8 },
          { topicName: 'Navigating, Cloning & Merging Branches',
            topicScore: 6 },
          { topicName: 'Ammendments and Resets', topicScore: 4 } ] },
     { category: 'Development',
       skillName: 'HTML',
       skillScore: 8,
       topics: 
        [ { topicName: 'Basic Page Structure', topicScore: 10 },
          { topicName: 'Formatting Page Content', topicScore: 10 },
          { topicName: 'Including Scripts and Styles', topicScore: 10 },
          { topicName: 'Meta Tags', topicScore: 10 },
          { topicName: 'Implementing Navigation', topicScore: 10 },
          { topicName: 'Skeleton Framework', topicScore: 10 },
          { topicName: 'HTML5 Forms & Validation', topicScore: 10 },
          { topicName: 'Semantic Page Structure in HTML5',
            topicScore: 10 },
          { topicName: 'HTML5 SVG Graphics', topicScore: 8 },
          { topicName: 'Microdata Markup', topicScore: 8 },
          { topicName: 'Bootstrap Framework', topicScore: 8 },
          { topicName: 'Foundation Framework', topicScore: 8 },
          { topicName: 'HTML5 Media (Audio, Video, etc)', topicScore: 3 },
          { topicName: 'HTML5 Canvas', topicScore: 1 },
          { topicName: 'HTML5 Local Storage', topicScore: 8 } ] },
     { category: 'Development',
       skillName: 'JavaScript',
       skillScore: 9,
       topics: 
        [ { topicName: 'Variables', topicScore: 10 },
          { topicName: 'Regular Expressions', topicScore: 10 },
          { topicName: 'HTML Templating Engines', topicScore: 10 },
          { topicName: 'Conditional Statements', topicScore: 10 },
          { topicName: 'Functions', topicScore: 10 },
          { topicName: 'Loops', topicScore: 10 },
          { topicName: 'Data Types', topicScore: 10 },
          { topicName: 'Arrays and Objects', topicScore: 10 },
          { topicName: 'Working with JSON Data', topicScore: 10 },
          { topicName: 'Navtive Object Methods', topicScore: 8 },
          { topicName: 'Native Array Methods', topicScore: 8 },
          { topicName: 'Events and Event Listeners', topicScore: 10 },
          { topicName: 'Object Oriented JavaScript', topicScore: 10 },
          { topicName: 'Asynchronous Callbacks', topicScore: 8 },
          { topicName: 'Lodash Utility Library', topicScore: 8 },
          { topicName: 'AJAX Requests', topicScore: 8 },
          { topicName: 'JavaScript Design Patterns', topicScore: 6 },
          { topicName: 'Debugging with Developer Tools', topicScore: 10 } ] },
     { category: 'Development',
       skillName: 'jQuery',
       skillScore: 8,
       topics: 
        [ { topicName: 'Selectors and Filters', topicScore: 10 },
          { topicName: 'Manipulating the DOM', topicScore: 10 },
          { topicName: 'jQuery Event Handling', topicScore: 10 },
          { topicName: 'jQuery Animations', topicScore: 8 },
          { topicName: 'jQuery AJAX Requests', topicScore: 8 },
          { topicName: 'Implementing jQuery Libraries', topicScore: 10 },
          { topicName: 'DOM Traversal', topicScore: 8 },
          { topicName: 'Building jQuery Plugins', topicScore: 1 } ] },
     { category: 'Development',
       skillName: 'Less & Sass',
       skillScore: 7,
       topics: 
        [ { topicName: 'Less Variables', topicScore: 10 },
          { topicName: 'Sass Variables', topicScore: 10 },
          { topicName: 'Sass Nested Rules', topicScore: 10 },
          { topicName: 'Less Mixins with Parameters', topicScore: 6 },
          { topicName: 'Less Native Functions', topicScore: 6 },
          { topicName: 'Sass Mixins with Paremeters', topicScore: 6 },
          { topicName: 'Sass Functions', topicScore: 6 },
          { topicName: 'Less Pattern Matching', topicScore: 2 } ] },
     { category: 'Development',
       skillName: 'MongoDB',
       skillScore: 9,
       topics: 
        [ { topicName: 'Accessing Databases with Mongoose.js',
            topicScore: 10 },
          { topicName: 'Using MongoDB Databases hosted on MongoLab',
            topicScore: 10 },
          { topicName: 'Defining Schemas with Mongoose.js',
            topicScore: 10 },
          { topicName: 'Querying Databases and Collections with Mongoose.js',
            topicScore: 8 },
          { topicName: 'Validations with Mongoose.js', topicScore: 8 },
          { topicName: 'Using Local MongoDB Databases', topicScore: 10 } ] },
     { category: 'Development',
       skillName: 'Node.js',
       skillScore: 8,
       topics: 
        [ { topicName: 'Using NPM', topicScore: 10 },
          { topicName: 'Working with Modules', topicScore: 10 },
          { topicName: 'Managing Dependencies', topicScore: 10 },
          { topicName: 'Creating Web Servers in Node.js', topicScore: 10 },
          { topicName: 'Understanding the Main Event Loop',
            topicScore: 8 },
          { topicName: 'File System Module', topicScore: 6 },
          { topicName: 'Custom CLI Scripts', topicScore: 10 },
          { topicName: 'Websocket Programming (socket.io)',
            topicScore: 8 },
          { topicName: 'Asynchronous Programming', topicScore: 8 },
          { topicName: 'Deploying Node Programs', topicScore: 10 },
          { topicName: 'Test Driven Development', topicScore: 3 } ] },
     { category: 'Development',
       skillName: 'Unix',
       skillScore: 7,
       topics: 
        [ { topicName: 'Working with Files & Directories',
            topicScore: 10 },
          { topicName: 'Customizing Bash Profiles', topicScore: 8 },
          { topicName: 'Working with Text Editors', topicScore: 8 },
          { topicName: 'Writing Simple Shell Scripts', topicScore: 8 },
          { topicName: 'Monitoring Processes', topicScore: 6 },
          { topicName: 'Using grep', topicScore: 6 },
          { topicName: 'Directing Input and Output', topicScore: 4 },
          { topicName: 'Users, Groups and Permissions', topicScore: 4 } ] },
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
          { topicName: 'Extending Functionality with Plugins',
            topicScore: 10 },
          { topicName: 'SEO Best Practices for WordPress', topicScore: 8 },
          { topicName: 'Security Precautions & Best Practices',
            topicScore: 6 },
          { topicName: 'Developing Themes with Underscores',
            topicScore: 2 },
          { topicName: 'Developing Themes with Genesis', topicScore: 2 } ] } ],
  SEO: 
   [ { category: 'SEO',
       skillName: 'Content Optimization',
       skillScore: 8,
       topics: 
        [ { topicName: 'Optimizing Text Content', topicScore: 10 },
          { topicName: 'Metadata Optimization', topicScore: 10 },
          { topicName: 'Video and Image Optimization', topicScore: 7 },
          { topicName: 'Content Strategy', topicScore: 6 } ] },
     { category: 'SEO',
       skillName: 'Conversion Optimization',
       skillScore: 6,
       topics: 
        [ { topicName: 'Optimizing Call to Action Design', topicScore: 8 },
          { topicName: 'Analyzing Heatmaps and Click Maps',
            topicScore: 6 },
          { topicName: 'CrazyEgg', topicScore: 6 },
          { topicName: 'A/B & Multivariate Testing', topicScore: 2 } ] },
     { category: 'SEO',
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
       skillName: 'Linkbuilding',
       skillScore: 8,
       topics: 
        [ { topicName: 'Analyzing Link Profiles', topicScore: 8 },
          { topicName: 'Internal and External Link Strategy',
            topicScore: 8 },
          { topicName: 'Disavowing Spam Links', topicScore: 8 },
          { topicName: 'Majestic SEO', topicScore: 8 },
          { topicName: 'Open Site Explorer', topicScore: 8 } ] },
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
          { topicName: 'SEO Moz', topicScore: 8 } ] } ] };