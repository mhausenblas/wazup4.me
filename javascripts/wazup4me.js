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
	
	$('#show-my-sessions').click(function(){
		$(this).addClass('filter-active');
		$('#show-all-sessions').removeClass('filter-active');
		showFavourites();
		return false;
	});
	
	$('#show-all-sessions').click(function(){
		$(this).addClass('filter-active');
		$('#show-my-sessions').removeClass('filter-active');
		$('p,span').each(function() {
			$(this).show();
		});
		return false;
	});
	
});

function initFavourites(){
	$('.what').each(function() {
		var fav = W4M_EVENT_PREFIX + $(this).attr('id');
		if(w4mstorage.getItem(fav) == '1' ){
			$(this).addClass('fav');
		}
		$(this).prepend('<div class="directlink">#</div>')
	});
}

function showFavourites(){
	$('.what').each(function() {
		var fav = W4M_EVENT_PREFIX + $(this).attr('id');
		if(w4mstorage.getItem(fav) == '1' ){
			$(this).show();
		}
		else {
			$(this).hide();
			$(this).prev().hide();
		}
	});
}