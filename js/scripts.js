$("#education").on("click",function(){
$('#mainpart').text('2018-2019 New York University;2014-2018 Sun Yat-sen University')
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
