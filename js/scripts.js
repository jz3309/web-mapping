
$("#education").click(function(){

	if($("#mainpart2").css("display")=="none"){

		$("#mainpart2").show(100);

	}else{

		$("#mainpart2").hide(100);

	}

});

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
