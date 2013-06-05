$('#calc').click(function() {
	var thick = $('#thickness').val(),
        width = $('#width').val(),
        length_ft =($('#length_ft').val() * 12),
        length_in =$('#length_in').val(),
        quantity = $('#quantity').val(),
        price = $('#price').val(),
		length_t = parseInt(length_ft) + parseInt(length_in);
	

	/*
if (length_ft == '') {
		$('#length_ft').val(0);
	}
	else if (length_in == '') {
		$('#length_in').val(0);
	}
*/

	
	//compute board foot
	board_foot = ((thick * width * length_t * quantity) / 144).toFixed(2);
	//compute board foot price
	board_foot_price = (price * board_foot).toFixed(2);

	// show board foot
	$('#total_boardfeet').val(board_foot);
	
	// show board foot price
	$('#total_boardfeet_price').val(board_foot_price);
});

$('#clear').click(function() {
	$('#quantity').val('1').slider('refresh');
	$('form#brdftcalc')[0].reset();
	$('#selectmenu3').val('selection').selectmenu('refresh');
	$('#thickness').val('selection').selectmenu('refresh');
	$('#total_boardfeet').val('');
	$('#total_boardfeet_price').val('');
});