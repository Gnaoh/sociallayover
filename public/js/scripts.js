jQuery(document).ready(function() {
	
// //Fullscreen background
//     $.backstretch("/static/img/background.jpg");

//Login Modals
    $('#launch-modal-login').on('click', function(e){
        e.preventDefault();
        $( '#' + $(this).data('modals-id') ).modal();
    });

//Register Modals
	$('#launch-modal-register').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

// airline toggle
    $( ".searchbtn" ).one("click", function() {
      $( ".thead" ).fadeToggle( "slow", "linear" )
        // Animation complete.
    });
});