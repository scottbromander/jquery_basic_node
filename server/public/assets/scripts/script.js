$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/kittens",
        success: function(data){
            console.log(data);
        }
    })
});