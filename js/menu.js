// Gestion de l'affichage du menu avec un effet "mouseover"
$(document).ready(function () {
    $(document).delegate('.open', 'mouseover', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'mouseout', function () {
        // language=JQuery-CSS
        $('.open').removeClass('oppenned');
    });
});
