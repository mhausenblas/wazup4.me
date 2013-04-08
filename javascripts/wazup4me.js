var w4mstorage = window.localStorage;

$(function(){
	initFavourites();
	$('.what').click(function(){
		var fav = W4M_EVENT_PREFIX + $(this).attr('id');
		if($(this).hasClass('fav')){
			$(this).removeClass('fav');
			console.log('Removing favourite ' + fav);
			w4mstorage.removeItem(fav);
		}
		else{
			$(this).addClass('fav');
			console.log('Adding favourite ' + fav);
			w4mstorage.setItem(fav, '1');
		}
		return false;
	});
});


function initFavourites(){
	$('.what').each(function() {
		var fav = W4M_EVENT_PREFIX + $(this).attr('id');
		if(w4mstorage.getItem(fav) == '1' ){
			$(this).addClass('fav');
		}
	});
}