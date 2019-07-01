<?php 

//Concert class is made up of a pair of variables, for the name of the artist and the date of the concert, with functions to read and write to them.
class Concert {

	public $artist;
	public $date;

		//Sets values for the artist name and the date of the concert object.
		function setConcert($newArtist, $newDate) {

			$this->artist = $newArtist;
			$this->date = $newDate;

		}

		//Returns value of $artist
		function getArtist() {

			return $this->artist;

		}

		//Returns value of $date
		function getDate() {

			return $this->date;

		}

	}

?>