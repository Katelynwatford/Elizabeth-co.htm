/* LOGIN JS */
$(document).ready(function(){
	$('#login-trigger').click(function(){
		$(this).next('#login-content').slideToggle();
		$(this).toggleClass('active');

});

$('#login-trigger').click(function(){
	$('#login-trigger span').toggleClass('arrow').toggleClass('toggle_arrow');
});


// HEADER  document.scroll or window.scroll hit this point hide and when you hits this point show

// $(window).scroll(function () {

// 		if ($(this).scrollTop() < 50) {
// 			$('header').show( "slow" );
// 		} else {
// 			$('header').fadeOut( "slow" );
// 		}
// 	});

//  Sub_menu

// $(window).scroll(function(){
//             if ($(this).scrollTop() > 50) {
//                 $('.sub_menu').show(  );
//             } else {
//                 $('.sub_menu').fadeOut( );
//             }
//         });

/* FOOTER JS */



// toggles a class of active_element
// when clicking on a button


});

