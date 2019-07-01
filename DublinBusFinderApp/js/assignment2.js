/*

Assignment: BSc Mobile Web Applications, Digital Skills Academy
Student ID: WE60-1081
File created: 2018/05/27

@author: Callum Condron
@version: v1.0

*/

$(document).ready(function(){
  //jquery modal popup code 
  $("#modal").dialog();
  $("#btnCancel").button().on("click", function () {
    $("#modal").css('display', 'none');
  });
  $("#page1").click(function () {
    $("#modal").css('display', 'none');
  });

  //getJSON request for list items in bus stop finder
  $.getJSON( 'https://data.smartdublin.ie/cgi-bin/rtpi/busstopinformation?', { 
    operator: "bac",
    format: "json"
  }).done(getBusStop)

  //Function that applies results of API call to list in #Page1
  function getBusStop(Bus) {
    
    // Set variables to null
    var listItem = "";
    $.each(Bus.results, function (i, items) {
    
    // populate listItem with the results of API request JSON file
    listItem += '<li>' + items.shortname +  ' - ' +  items.stopid + '</a></li>';        
        
    });

  // Appends the new list items to the unorderd list with id #myList
  $('#myList').append(listItem);
    
  // Refreshs myList
  $('#myList').listview('refresh');
  }
});

//On click of button this function get call
$(document).on('click', '#button_get_bus', function() {
  //Get Users entered input and populate bus_stop_id with the input
  var bus_stop_id = document.getElementById("bus_stop_id").value;
  //If Id is blank then give error
  if (!bus_stop_id) {
    alert("Please enter bus stop number");
    return false;
  } 

  //  This Function post request to API with the given bus stop id
  $.ajax({
    url: "https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=" + bus_stop_id + "&format=json",
    dataType: 'json',
    success: function(results) {
      // It returnes json data
      console.log(results);
      var str = JSON.stringify(results);
      // Code for parsing json and inserting data in html
      var obj = jQuery.parseJSON(str);

      document.getElementById("stop").innerHTML = bus_stop_id;

      var route = obj.results[0].route;
      document.getElementById("routeNum").innerHTML = route;

      var destination = obj.results[0].destination;
      document.getElementById("to").innerHTML = destination;

      var duetime = obj.results[0].duetime;
      document.getElementById("due").innerHTML = duetime;

      var origin = obj.results[0].origin;
      document.getElementById("from").innerHTML = origin;

      var arrivaldatetime = obj.results[0].arrivaldatetime;
      document.getElementById("arival").innerHTML = arrivaldatetime;

      document.getElementById("resultDiv").style.display = "block";

      $.mobile.pageContainer.pagecontainer("change", "#page2");

    }
  });
});