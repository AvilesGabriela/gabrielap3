/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

                          
$("document").ready(function(){
    $(".gabriela").css("background-color", "yellow");
    $('p:last').css({"background-color": "purple", "color": "white"});  


$('#superHumans').accordion({header: "h3"});
$("h1").bind('mouseover', mouseOverMe).bind('mouseout',mouseOutMe);

//$('div').bind('mouseover',mouseOverMe);

$('h1').bind('click',mouseClick);

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click', removeAPara);
$('img').css('width', '400px');

$('#show').css('visibility', 'hidden');

$('#hide').bind('click', hideThePage);

$('#show').bind('click', showThePage);
});


function showThePage(){
    
}

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
function removeAPara(){
     $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe(){
   $("p").html("This is easy");
}

function mouseOutMe(){
    $('p').html('Talk, Talk, Talk,');
}

function mouseClick(){
    
    $('p').html('rwerfwe');
}












