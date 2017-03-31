/**
 * Created by wim on 30/03/17.
 */

$( ".plane" ).click(function(e) {
    $('#'.concat(e.target.id)).animate({right: '3000px'});
});
