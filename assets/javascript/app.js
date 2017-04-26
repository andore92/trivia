

	// Runs the submit function, displays score
	$(".submitButton").on("click", submit);

	// starting value for timer
	var timeLeft = 60;

	// seting interval variable
	var intervalID;

	// function to run decrement function every 1 second
	function countdown() {
		intervalID = setInterval(decrement, 1000);

	}

	// decrement function 
	function decrement() {

		// reduces timeLeft variable by 1
		timeLeft--;

		// writes timeLeft variable to the timer div in html
		$(".timer").html("<p>" + timeLeft + "</p>");

		// when time hits zero, run submit function, alert time is up
		if( timeLeft === 0) {
			
			submit();
			alert("Time's up!");
			
		}
		
	}
	// stop function stops the countdown from continuing
	function stop() {

      
      clearInterval(intervalID);
      
    }
	
	function submit(){
		// calls stop function to stop clock to prevent 
		// timeLeft from reaching zero and bugging out the game
		stop()

		// defines variable used to track correct answers
		var correctAnswer = 0;
			// loops over the radio elements based on question number
			// if correct value radio element is selected, increments
			// correct answer variable
			for(var i = 1; i <= 4; i++) {
  				var radios = document.getElementsByName("question" + i);
  				for(var j = 0; j < radios.length; j++) {
    				var radio = radios[j];
    				if(radio.value === "correct" && radio.checked) {
     		 		correctAnswer++;
    				}
  				}
			}	
			
			// removes question section and writes the results of their
			// performance to the html
			$(".resultsContainer").html("<p>" + "Correct Responses: " + correctAnswer + " out of 4"+ "</p>")
			
			// changes the "submit" buton to a "try again?" button
			$(".submitButton").attr("src", "assets/images/retry.png") 
			
			// when the "new" submit button is clicked, it will now reload
			// reload the page so user can try the game again
			$(".submitButton").on("click", function(){
				$(".resultsContainer").html("<p>" + "Good Luck!" + "</p>")
				location.reload().delay;
				
			});

			
		};

	countdown()