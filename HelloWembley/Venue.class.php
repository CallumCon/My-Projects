<?php

//Include concert class
include "concert.class.php";

//Venue class is made up of a variable for the venue name, and an array containing instances of the concert class, to keep track of each event.
class Venue {

public $venueName;
public $concertsInVenue = array();

	//Sets value for venue name.
	function setVenueName($newVenue) {

		$this->venueName = $newVenue;

    }

	//Returns the venue name.
	function getVenueName() {

		return $this->venueName;

	}

	//Creates an instance of the concert class and sets values for the artist and date. Adds the new concert object to concertsInVenue[].
	function addConcert($newArtist, $newDate) {

		$newConcert = new Concert;
		$newConcert->SetConcert($newArtist, $newDate);

		//Add concert object to the end of concertsInVenue[].
		$this->concertsInVenue[] = $newConcert;


	}

	//Iterates through each concert object and prints concert details of artists matching the search query. Prints alternate message when there are no matches.
	function listConcertsInVenue($searchQuery) {

		//Assume user has entered a seach term.
		$listAllConcerts = FALSE;

		//If search query is empty, list all concerts
		if($searchQuery == ''){

			$listAllConcerts = TRUE;

		}

		echo '<style> body {background-image: url("images/liveaid.jpg"); font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;} </style>';
		echo $searchQuery . ' Concerts In '.$this->venueName;
			
		//Iterates through each concert object contained in $concertsInVenue[] and prints concert details of artists matching the search query. 
		foreach($this->concertsInVenue as $tmpConcert){
			//Checks the user's search query against the artist's name. If the strings match, the artist and the date of the concert is displayed.
			if($searchQuery == $tmpConcert->getArtist() || $listAllConcerts == TRUE){
				echo '<p>';
				echo $tmpConcert->getArtist() .  ' ';
				echo $tmpConcert->getDate();
				echo '</p>';
				$resultsCount++;
				
			}
			
		}
		
		//Print message when there are no results to display
		if($resultsCount==0){
			echo '<p>';
			echo 'There Are No Scheduled Concerts From This Artist';
			echo '</p>';
			
		}
			//print tickermast link if there is a result 
			else{
		
			echo "<p>";
			echo "For ticket information visit <a href=http://www.ticketmaster.co.uk>tickermaster.co.uk</a>";
			echo "</p>";	
	}

	}

}
?>