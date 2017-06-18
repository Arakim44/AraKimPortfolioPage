
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#nav-visible').css('visibility','visible');
        $('#wait').css('visibility','hidden');
    }, 3000);
 
});
