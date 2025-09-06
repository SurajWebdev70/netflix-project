$(document).ready(function() {
   $(' .que-title').click(function(){
    // close
    $('que-ans').not($(this).next(".que-ans")).slideup();

    // toggle
    $(this).next('que-ans').slideToggle();
   })
})