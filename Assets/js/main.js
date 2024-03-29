$(document).ready(function() {
	var menuBtn = $('.top-nav-btn');
	var sidebarBtn = $('.left-sidebar-btn');
	var menu = $('.top-nav-menu');
	var sidebarMenu = $('.left-sidebar-menu');

	menuBtn.on('click',  function(event) {
		event.preventDefault();
		menu.toggleClass('top-nav-menu_active');
	});

	sidebarBtn.on('click',  function(event) {
		event.preventDefault();
		sidebarMenu.toggleClass('left-sidebar-menu_active');
	});



$('.directions-blocks').slick({
				arrows:false,
				dots: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
					{
					breakpoint: 600,
					settings:{
						slidesToShow: 1
					}
					},

					{
					breakpoint: 1200,
					settings:{
						slidesToShow: 2
					}
					}
				]
			});

// ползунок
var elem = document.querySelector('.calc-range');
var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true});
var per, month, result, total, monthly;
var money = +$('.calc-range').val();

$('input[name="programms"]').on('change', function(event) {
	month = +$(this).attr('data-month');
	per = +$(this).attr('data-per');
	result = Math.round(per / 12 * month * money);
	total = result + money;
	monthly = parseInt(result / month);
	$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
	$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
	$('#month').text(month)
});

$('.calc-range').on('change', function(event) {
	$('.calc-sum-invest-num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "))
	var radio = $('input[name="programms"]:checked');
	money = +$(this).val()
	month = +radio.attr('data-month');
	per = +radio.attr('data-per');
	result = Math.round(per / 12 * month * money);
	total = result + money;
	monthly = parseInt(result / month);
	$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
	$('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
});

});
