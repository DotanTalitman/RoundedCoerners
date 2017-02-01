
$(document).ready(function () {
 
   
    $(".corner").click(function(){
        var side= $(this).attr("id")
        $("#center-box").toggleClass(side+"-rounded-corners")
    })
    
});