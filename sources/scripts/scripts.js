var klickedTarget;

$(".nav__link").click(function (event) {
	event.preventDefault();
	var $main = $(".main")
	var isSplit = $main.hasClass("main--split");
	var target = $(event.currentTarget).attr("href");

	if(isSplit) {
		
		if (klickedTarget == event.currentTarget) {
			$main.toggleClass("main--split", false);
		}

		$(".section").addClass("hidden");
		$(target).removeClass("hidden");
		///Mach was
		
	} else {
		$main.toggleClass("main--split", true);
	}

	klickedTarget = event.currentTarget;
});
