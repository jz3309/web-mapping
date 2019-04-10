$("#edication").click(function(){
        var flag = $("#mainpart2").is(":hidden");

        if(flag){

            $("#mainpart2").show();
        }else{
            $("#mainpart2").hide();
        }
    });
});
})

$("#PROJECT").on("click",function(){
$('#mainpart').text('project1')
})

$("#internship").on("click",function(){
$('#mainpart').text('Internship')
})

$("#facebook").on('click',function() {
 alert('I do not have a facebook account.')
});

$("#greybackground").on('click',function(){
$('body').css('background','grey')
});

$('#whitebackground').on('click',function(){
$('body').css('background','white')
})
