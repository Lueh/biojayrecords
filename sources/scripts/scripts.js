var klickedTarget;

$(".nav__link--home").click(function (event) {
	var $main = $(".main")
	var splitClass = "main--split";
	var activeclass = "nav__link--active";

	$main.removeClass(splitClass);
	$(".nav__link").removeClass(activeclass);
});


$(".nav__link:not(.nav__link--home)").click(function (event) {
	event.preventDefault();
	var $main = $(".main")
	var splitClass = "main--split";
	var isSplit = $main.hasClass(splitClass);
	var $target = $(event.currentTarget);
	var targetid = $target.attr("href");
	var $contentTarget = $(targetid);
	var activeclass = "nav__link--active";
	var hiddenClass = "hidden";
	var logoTextSelector = ".logo__wrapper .logo__text";
	var logoTextSelectorWithModifier = logoTextSelector + "--split";

	if(isSplit) {
		
		if (klickedTarget == event.currentTarget) {
			$main.removeClass(splitClass);
			$(".nav__link").removeClass(activeclass);
			$(logoTextSelector).removeClass(hiddenClass);
			$(logoTextSelectorWithModifier).addClass(hiddenClass).html();
		} else {
			$(".nav__link").removeClass(activeclass);
			$target.addClass(activeclass);
			$(logoTextSelectorWithModifier).html($target.data("title"));

			if($contentTarget.length) {
				$(".section:visible").slideUp(300, function () {
					$contentTarget.slideDown(300);
				});
			}
		}
			
	} else {
		$main.addClass(splitClass);
		$target.addClass(activeclass);
		$(logoTextSelector).addClass(hiddenClass);
		$(logoTextSelectorWithModifier).html($target.data("title")).removeClass(hiddenClass);
		
		$(".section").hide();
		$contentTarget.show();
	}



	klickedTarget = event.currentTarget;
});
