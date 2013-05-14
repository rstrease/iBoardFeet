$('#calc').click(function() {
	var thick = $('#thickness').val(),
        width = $('#width').val(),
        length_t = $('#length').val(),
        quantity = $('#quantity').val();
        price = $('#price').val();

	//compute board foot
	board_foot = ((thick * width * length_t * quantity) / 12);
	
	//compute board foot price
	board_foot_price = (price * board_foot).toFixed(2);
	
	
	// show board foot
	$('#total_boardfeet').val(board_foot);
	
	// show board foot price
	$('#total_boardfeet_price').val(board_foot_price);
});