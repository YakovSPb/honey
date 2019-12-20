document.addEventListener("DOMContentLoaded", function() {

	// ASIDE MENU START
	// READ MORE STAR
$('.aside__link--has_sub').click(function(){
if($(this).next().is(':hidden')){
  $(this).next().slideDown('slow');
} else {
   $(this).next().slideUp('slow');
}
});
	// ASIDE MENU END
});
$('.aside__link--has_sub').click(function(e){
	e.preventDefault();
});
$('.aside__link--has_sub').click(function(){
	$(this).parent().toggleClass('active-toggle');
});