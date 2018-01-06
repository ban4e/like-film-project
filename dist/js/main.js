$ = jQuery.noConflict();

$(document).ready(function(){

	// $(".nav-item a").mPageScroll2id({
	// 	offset : 70
	// });

	$(".genre_item").click(function () {
		$(".genre_item").removeClass("active_genre");
		if ($(this).text().indexOf("Другие жанры") + 1 != 1) {
			$(".sub_menu_item").removeClass("active_sub");
		};
		$(this).addClass("active_genre");
	});

	$(".sub_menu_item").click(function () {
		$(".sub_menu_item").removeClass("active_sub");
		$(this).addClass("active_sub");
	});

	$(".pages").click(function () {
		$(".pages").removeClass("current_page");
		$(this).addClass("current_page");
	});

	// $(".navbar-light .navbar-toggler").click(function () {
	// 	$(".collapse").css({
	// 		"display":"block" });
	// });
	// $(".nav-item").click(function () {
	// 	$(".nav-item").removeClass("active");
	// 	$(this).addClass("active");
	// });

	$(".genre_ham_mnu_link").click(function () {
		if ($('.genre_ul').css("display") == "none") {
			$('.genre_ul').addClass("bounceInDown");
			$('.genre_ul').css({"display":"flex" });
			$('.genre_ul').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			function(e) {
				$('.genre_ul').removeClass("bounceInDown");
			});
		} else {
			$('.genre_ul').addClass("bounceOutUp");
			$('.genre_ul').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			function(e) {
				$('.genre_ul').css({
				"display":"none" });
				$('.genre_ul').removeClass("bounceOutUp");
			});
		};

	});

function windowSize() {
    if (($(window).width() >= '992') && ($('.genre_ul').css("display") == "none")) {
        $('.genre_ul').css("display","flex" );
    }
};

function hideOverlay() {
	if (($(window).width() >= '992') && ($('.overlay').height() > 0)) {
		$(".overlay").addClass("hide-all");
		$(".hamburger").toggleClass("is-active");
		$(".menu_ul").toggleClass("responsive");
    }
};

$(window).resize(windowSize);
$(window).resize(hideOverlay);

if (document.location.pathname.length > 1) {
	$('.navbar').css("display","none" );
}

$('.star.rating').click(function(){
  console.log( $(this).parent().data('stars') + ", " + $(this).data('rating'));
  $(this).parent().attr('data-stars', $(this).data('rating'));
});

$(".hamburger").click(function(){
	$(this).toggleClass("is-active");
	$(".menu_ul").toggleClass("responsive");
	$(".overlay").toggleClass("hide-all");
});


// Cache selectors
var lastId,
    topMenu = $(".menu_ul"),
    topMenuHeight = topMenu.outerHeight() + 5,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+5;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop + 5
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
     }
 });




});