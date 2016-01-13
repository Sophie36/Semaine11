$(function() {
	var randomNumber = Math.floor(Math.random()*100 + 1)
	var nbTry = 0;
	$text = $('#msg');

	//console.log(randomNumber);

	$('#btnTest').click(function() {
			if ($('#userNumber').val() != "") {
			        $userNumber = $('#userNumber').val();
			        nbTry++;
	        	if ($userNumber > randomNumber) {
		        	$text.html("C'est un trop grand nombre.");
		        	slideText();
	        	}
	        	else if ($userNumber < randomNumber) {
		        	$text.html("C'est un trop petit nombre.");
		        	slideText();
	        	}
	        	else {
		        	$text.html("Bravo ! le nombre était bien " + randomNumber + ", tu as trouvé en " + nbTry + " essais.");
		        	$text.slideDown(400);
		        	$('#btnTest').fadeOut(400, function() {
		        		$('#btnRefresh').delay(400).fadeIn(400);
		        	});
	        	}
       		}
       		else {
       			$text.html("Entrez un nombre entre 0 et 100");
	        	slideText();
       		}
    });

    $('#btnRefresh').click(function() {
    	location.reload();
    });

    function slideText() {
    	$text.slideDown(400).delay(1000).slideUp(400);
    }
});