jQuery(document).ready(function($) {
	//Тогле меню
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".nav").slideToggle();
        return false;
    });

});