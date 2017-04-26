

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
		// stops clock to prevent timeLeft from reaching zero and
		// bugging out the game
		stop()

		// defines variable used to track correct answers
		var correctAnswer = 0;

			for(var i = 1; i <= 4; i++) {
  				var radios = document.getElementsByName("question" + i);
  				for(var j = 0; j < radios.length; j++) {
    				var radio = radios[j];
    				if(radio.value === "correct" && radio.checked) {
     		 		correctAnswer++;
    				}
  				}
			}	
			
			
			$(".resultsContainer").html("<p>" + "Correct Responses: " + correctAnswer + " out of 4"+ "</p>")
			
			$(".submitButton").attr("src", "assets/images/retry.png") 
			
			$(".submitButton").on("click", function(){
				
				location.reload();
				
			});

			
		};

	countdown()