$(document).ready(function() {
    
    // Build Dropdown
    $('<select />').appendTo('nav');
    
    // Default Menu Text
    $('<option />', {
        'selected' : 'selected',
        'value' : '',
        'text' : 'Menu'
    }).prop('disabled', true).appendTo('nav select');
    
    // Loop and Inject Nav Links
    $('nav ul li a').each(function() {
        var link = $(this);
        $('<option />', {
            'value' : link.attr('href'),
            'text' : link.text()
        }).appendTo('nav select');
    });
    
    // Make Links Functional on Select Change
    $('nav select').change(function() {
        window.location = $(this).find('option:selected').val();
    });
    
});