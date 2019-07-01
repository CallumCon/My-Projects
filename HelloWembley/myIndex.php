<?php			

//Include venue class
include "venue.class.php";

//Get input from index.html and assign it to a variable 
$band = strtolower($_GET['bandName']);

//Create New Venue Object
$tmpVenue = new Venue;

//Set Venue Name
$tmpVenue->setVenueName('Wembley');

//Add Concerts To Venue
$tmpVenue->addConcert('rollin\' empire', '05-02-2018');
$tmpVenue->addConcert('metallica', '06-02-2018');
$tmpVenue->addConcert('led zeppelin', '07-02-2018');
$tmpVenue->addConcert('rollin\' empire', '19-02-2018');
$tmpVenue->addConcert('oasis', '23-02-2018');
$tmpVenue->addConcert('liam gallagher', '30-06-2018');
$tmpVenue->addConcert('muse', '25-03-2018');
$tmpVenue->addConcert('queen', '27-03-2018');
$tmpVenue->addConcert('fangclub', '30-03-2018');
$tmpVenue->addConcert('otherkin', '02-04-2018');

//Search For Artist In Venue if $band is empty display all concerts
$tmpVenue->listConcertsInVenue($band);

?>

