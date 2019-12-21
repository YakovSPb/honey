document.addEventListener("DOMContentLoaded", function() {

// MEDIA JS START
var mediaQuery992 = window.matchMedia("screen and (max-width: 992px)");
mediaQuery992.addListener(foo992);
foo992(mediaQuery992);

// MEDIA JS END




	// ASIDE MENU START
	// READ MORE STAR
	$('.aside__link--has_sub').click(function(){
		if($(this).next().is(':hidden')){
			$(this).next().slideDown('slow');
		} else {
			$(this).next().slideUp('slow');
		}
	});
	$('.aside__link--has_sub').click(function(e){
		e.preventDefault();
	});
	// ASIDE MENU END

	//MOBILE MENU START
	const link = document.getElementsByClassName('gumburger')
	const close = document.getElementsByClassName('menu__item--close')
	const menu = document.getElementsByClassName('header__menu')

	link[0].addEventListener('click', event => {
		event.preventDefault()
		menu[0].classList.add('menu--active')
		link[0].style.display = 'none'

	})
	close[0].addEventListener('click', event => {
		event.preventDefault()
		menu[0].classList.remove('menu--active')
		link[0].style.display = 'block'
	})


	function foo992(mq) {
		if(mq.matches){
			$('.menu__link--has_sub').click(function(e){
				e.preventDefault();
				if($(this).next().is(':hidden')){
					$(this).next().slideDown('slow');
				} else {
					$(this).next().slideUp('slow');
				}
			});
		}
	}

	//MOBILE MENU END


	// ASIDE MOBILE START
const linkAside = document.getElementsByClassName('gumburger-left')
const closeAside = document.getElementsByClassName('aside__item--close')
const menuAside = document.getElementsByClassName('aside')

	linkAside[0].addEventListener('click', event => {
		event.preventDefault()
		menuAside[0].classList.add('aside--active')
		linkAside[0].style.display = 'none'

		$('.aside__subaside').css('display', 'none')
	})
	closeAside[0].addEventListener('click', event => {
		event.preventDefault()
		menuAside[0].classList.remove('aside--active')
		linkAside[0].style.display = 'block'
	})


	// ASIDE MOBILE END


}); //END TAG

