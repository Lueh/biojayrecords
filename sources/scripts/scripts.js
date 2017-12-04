var klickedTarget;


$(".nav__link").click(function (event) {
	event.preventDefault();
	


	var $main = $(".main")
	var isSplit = $main.hasClass("main--split");

	if(isSplit) {
		
		if (klickedTarget == event.target) {
			$main.toggleClass("main--split", false);
		}

		///Mach was
		
	} else {
		$main.toggleClass("main--split", true);
		klickedTarget = event.currentTarget;
	}
});
