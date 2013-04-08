$(function(){
	$('.what,.break').click(function(){
		if($(this).hasClass('fav')){
			$(this).removeClass('fav');
		}
		else{
			$(this).addClass('fav');
		}
		return false;
	});
});