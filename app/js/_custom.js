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

	link[0].addEventListener('click', function(event) {
		event.preventDefault()
		menu[0].classList.add('menu--active')
		link[0].style.display = 'none'

	})
	close[0].addEventListener('click', function(event) {
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

	linkAside[0].addEventListener('click',  function(event)  {
		event.preventDefault()
		menuAside[0].classList.add('aside--active')
		linkAside[0].style.display = 'none'

		$('.aside__subaside').css('display', 'none')
	})
	closeAside[0].addEventListener('click',  function(event)  {
		event.preventDefault()
		menuAside[0].classList.remove('aside--active')
		linkAside[0].style.display = 'block'
	})


	// ASIDE MOBILE END



// CARD SLIDER START
$('.card__slider').slick({
	prevArrow: '<div class="y_prevArrow"><i class="fa fa-angle-left"></i></div>',
	nextArrow: '<div class="y_nextArrow"><i class="fa fa-angle-right"></i></div>',
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 900,
	arrows: false,
	dots: true,
	infinite: false,
	appendDots: '.card__dots',
	responsive: [
	{
		breakpoint: 992,
		settings: {
			arrows: true
		}
	}
	]
});
// CARD SLIDER END

// // APPEND IMG TO DOTS START
const projectsImages = $('.card__slide-img img')
for(let i = 0; i < projectsImages.length; i++) {
	let attrImage = $('.card__slide-img img').eq(i).attr('src')
	$('.card__dots li').eq(i).html('<img src="' + attrImage + '">')
}
// // APPEND IMG TO DOTS END


// CAlCULATE START
const priceCalc = document.getElementById('y-price')
const minusCalc = document.getElementById('y-minus')
const plusCalc = document.getElementById('y-plus')
const inputCalc = document.getElementById('y-input')
let onePrice
if(inputCalc){
	onePrice = priceCalc.innerText
	inputCalc.value = 1

	inputCalc.addEventListener('change', function()  {
		inputUpdate()
	})

	plusCalc.addEventListener('click', function()  {
		inputCalc.value++
		inputUpdate()
	})

	inputCalc.addEventListener('change', function() {
		if(isNaN(inputCalc.value)){
			inputCalc.value = 1
			priceCalc.innerHTML = onePrice
		}
		if (inputCalc.value < 1) {
			inputCalc.value = 1
			inputUpdate()
		}
	})


	minusCalc.addEventListener('click', function() {
		if(inputCalc.value > 1){
			inputCalc.value--
			inputUpdate()
		}
	})


	function inputUpdate(){
		priceCalc.innerHTML = onePrice
		let mult = inputCalc.value * onePrice
		priceCalc.innerHTML = mult
	}

}

// CALCULATE END


// // POPUP START
$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    closeMarkup:'<button title="%title%" class="mfp-close">&#10006;</button>',
});
// POPUP END


// SHOP CALC START

// const shopMinus = document.getElementsByClassName('s-minus')
// const shopInput = document.getElementsByClassName('s-input')
// const	 shopPlus = document.getElementsByClassName('s-plus')
// let shopSingleSum = document.getElementsByClassName('shop__price-single')
// const shopAllSum = document.getElementsByClassName('shop__price-sum')
// const shpEndPice = document.getElementById('endPrice')
// const shopItems = document.getElementsByClassName('shop__item')

// for(let index = 0; index < shopItems.length; index++) {
// 	const Item = shopItems[index]
// 	const inputValue = $(Item).find('.shop__price-single').text()
// 	console.log(inputValue)
// 	console.log(shopItems[index])

// $(item).find('.s-plus').addEventListener('click', function{
// 	alert('hey')
// })
// }





// SHOP CALC END

}); //END TAG

