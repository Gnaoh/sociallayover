
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

   
//Form validation
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
});
