var klickedTarget;

$(".nav__link").click(function (event) {
	event.preventDefault();
	var $main = $(".main")
	var isSplit = $main.hasClass("main--split");
	var $target = $(event.currentTarget);
	var targetid = $target.attr("href");
	var activeclass = "nav__link--active";
	var hiddenClass = "hidden";
	var logoTextSelector = ".logo__wrapper .logo__text";
	var logoTextSelectorWithModifier = logoTextSelector + "--split";

	if(isSplit) {
		
		if (klickedTarget == event.currentTarget) {
			$main.removeClass("main--split");
			$(".nav__link").removeClass(activeclass);
			$(logoTextSelector).removeClass(hiddenClass);
			$(logoTextSelectorWithModifier).addClass(hiddenClass).html();
		} else {
			$(".nav__link").removeClass(activeclass);
			$target.addClass(activeclass);
			$(logoTextSelectorWithModifier).html($target.data("title"));
		}
			
	} else {
		$main.addClass("main--split");
		$target.addClass(activeclass);
		$(logoTextSelector).addClass(hiddenClass);
		$(logoTextSelectorWithModifier).html($target.data("title")).removeClass(hiddenClass);
	}

	
	
	
	$(".section").addClass(hiddenClass);
	$(targetid).removeClass(hiddenClass);

	klickedTarget = event.currentTarget;
});
