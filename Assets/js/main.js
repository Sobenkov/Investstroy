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