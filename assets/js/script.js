$(document).ready(function() {

    // smooth scroll
    $("a").click(function(event) {
        event.preventDefault();

        var gato = this.hash;

        $("html").animate(
            {
            scrollTop: $(gato).offset().top,
        }, 900
        );
    });


    // tooltip
    $('[data-toggle="tooltip"]').tooltip()
   
    
    // popover
    $('[data-toggle="popover"]').popover()
});