
$("#education").click(function(){

	if($("#mainpart2").css("display")=="none"){

		$("#mainpart2").show(100);

	}else{

		$("#mainpart2").hide(100);

	}

})

$("#PROJECT").on("click",function(){
$('#mainpart').text('NYPD Vehicle Collision Analysis : We procured the NYPD Motor Vehicle Collisions data from the NYC Open Data portal The dataset captures various aspects of accident information such as date and time, location,
casualty and death numbers, contributing factors like drunk driving, sudden lane change, etc.')
})

$("#internship").on("click",function(){
$('#mainpart').text('Internship : South China Sea Think Tank')
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
