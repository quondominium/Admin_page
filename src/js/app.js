// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
$(document).ready(function() {
    var activeSystemClass = $('.list-group-item.active');

    //something is entered in search form
    $('#system-search').keyup( function() {
       var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {
        
            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();
                
            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
});
$('div.dropdown').hover(function() {
  $(this).find('ul.page-hover.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('ul.page-hover.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
tinymce.init({ selector:'.tinymce' });
$('.icp').iconpicker({
    title: false, 
    defaultValue: false,
    placement: 'inline',
    collision: 'none',
    hideOnSelect: false,
    showFooter: false,
    searchInFooter: true,
    icons: [
    {
        title: "icon-pencil",
        searchTerms: ['icon-pencil']
    },
    {
        title: "icon-cart",
        searchTerms: ['icon-cart']
    },
    {
        title: "icon-computer",
        searchTerms: ['icon-computer']
    },    ],

});