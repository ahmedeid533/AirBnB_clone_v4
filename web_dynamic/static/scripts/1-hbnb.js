$(document).ready(function () {
	$('input[type=checkbox]').click(function () {
    const listOfChecked = [];
    const amenitie_id = [];
    $('input[type=checkbox]:checked').each(function () {
	  listOfChecked.push($(this).attr('data-name'));
      amenitie_id.push($(this).attr('data-id'));
    });
    if (listOfChecked.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(listOfChecked.join(', '));
    }
    console.log(amenitie_id);
  });
});