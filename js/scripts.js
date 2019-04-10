
$("#education").click(function(){

	if($("#mainpart2").css("display")=="none"){

		$("#mainpart2").show(100);

	}else{

		$("#mainpart2").hide(100);

	}

})

$("#PROJECT").on("click",function(){
$('#mainpart').text('NYPD Vehicle Collision Analysis')
})

$("#internship").on("click",function(){
$('#mainpart').text('Internship : South China Sea Think Tank')
})

$("#facebook").on('click',function() {
 alert('I do not have a facebook account.')
})
