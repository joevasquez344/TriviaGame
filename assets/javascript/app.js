
var timer = 15;

var correctCounter = 0;
var incorrectCounter = 0;

var true001 = $('#trueBtn1');
var false001 = $('#falseBtn1');
var true002 = $('#trueBtn2');
var false002 = $('#falseBtn2');
var true003 = $('#trueBtn3');
var false003 = $('#falseBtn3');



    setInterval(function () {
        timer--;
        $('#timeRemaining').html(timer);
        gameOverFunc();
        
    }, 1000)
    




var gameOverFunc = function(){
    if (timer <= 0) {
        timer = '';
        $('#timeRemaining').text(timer);
        $('#correctAnswers').text(correctCounter);
        console.log(correctCounter)
        ('.main-container').addClass('hide');
        
    }
}

var correctCounterFunc = function(true001Click){
    if(true001Click){
        console.log("yes")
    }
}
correctCounterFunc();
// var questionArr001 = [];

// var clickTracker = function(e){
//     // var clicks;
//     // if(clicks = e.target){
//     //     questionArr001.push(clicks);
//     //     alert(questionArr001);
//     // }
// }


//-------------1st row

true001.on('click', function () {
    correctCounter++
    
    true001.addClass('green')
    
    true001.off();
    false001.off();
})


false001.on('click', function () {
    incorrectCounter++;

    false001.addClass('red');
    true001.addClass('green');
    
    false001.off();
    true001.off();

})

//-------------2nd row

true002.on('click', function () {
    incorrectCounter++
    
    true002.addClass('red');
    false002.addClass('green');

    
    true002.off();
    false002.off();
})




false002.on('click', function () {
    correctCounter++;

    false002.addClass('green');
    
    
    false002.off();
    true002.off();

})

//-------------3rd row

true003.on('click', function () {
    correctCounter++
    
    true003.addClass('green');
    
    true003.off();
    false003.off();
})




false003.on('click', function () {
    incorrectCounter++;

    false003.addClass('red');
    true003.addClass('green');
    
    false003.off();
    true003.off();

})

$('#doneLink').on('click', function(){
    $('.main-container').hide(100);
    $('.main-result-container').show(100);
    $('#correctAnswers').text(correctCounter);
    $('#incorrectAnswers').text(incorrectCounter);

})











