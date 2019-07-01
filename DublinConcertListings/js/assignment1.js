$(document).ready(function () { 
	//to access the json file from a feed i would create a variale with the json url 
	$.getJSON( 'json/concerts.json', { // i would then insert the variable where the text "json/concerts.json" is placed 
		format: "json"
	}).done(getBandName)
});


//Whats going on in getBandName
//I am creating 2 variables one for the list item and one for the virtual page the list item is linked to the virtualPage id. 
//When a user clicks on a list item, which is appened to the ul on the index.html page, they are brought to the corresponding virtual page. 
//The virtual page is inserted after the page with id #pageOne on the main html page using the .insertafter() method.

function getBandName(Artist) {
    
    // Set variables to null
    var listItem = "";
    var virtualPage = "";
    
    // Loop through the artists in the JSON object 
	$.each(Artist.bands, function (i, items) {
		
        // Get the artist name for the dynamic list from json file
		listItem += '<li><a href="#' + i + '" data-transition="slide" >' + items.bandName + '</a></li>';        
    		
        // Create a dynamic page for each band and their concert infomation
		virtualPage += 
        '<div data-role="page" data-theme="a" id="' + i + '">' 
		+ '<div data-role="header">' 
		+ '<h1>' + items.bandName + '</h1>' 
		+ '<img src= "'+items.image+'" alt ="'+items.bandName+'"width="200" height="200" class="center">' 
		+ '<div data-role="content">' 
        + '<h3>Venue: '  + items.venue + '</h3>' 
		+ '<h3>Date: ' + items.date + '</h3>' 
        + '<h3>Time: ' + items.time + '</h3>' 
        + '</div' 
		+ '<div class="wrapper"><a data-role="button" data-transition="slide" href="#pageone">Back</a></div>' 
		+ '</div>'
        + '</div>';
    });
    
	// Appends the new list items to the unorderd list with id #myList
	$('#myList').append(listItem);
    
	// Inserts the new pages after the #pageone
	$(virtualPage).insertAfter($('#pageone'));
    
	// Refreshs myList
	$('#myList').listview('refresh');
}