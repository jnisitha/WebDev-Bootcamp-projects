//Check off specific todos
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type=text]').keypress(function(event) {
    if (event.which === 13) {
        //grabbing text from input
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val('');
    }
});

$(".fa-plus").click(function(){
    $('input[type=text]').animate({
        height: "toggle",
        opacity: "toggle"
    });
    //$('input[type=text]').slideToggle();
});