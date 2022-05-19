//Highlight Color Shuffler
var randomColor = '';
var elements = '';

function colorChange() {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return ' style=color:#' + randomColor + ';>'
};

/*set prompt functions*/
var prompt_global = ' ';
var complex = function () { prompt_global = 'Use the slider to indicate how <strong>complex</strong> you find the animation.'; }
var natural = function () { prompt_global = 'Use the slider to indicate how <strong>natural</strong> you find the animation'; }
var relaxing = function () { prompt_global = 'Use the slider to indicate how <strong>relaxing</strong> you find the animation'; }
var appealing = function () { prompt_global = 'Use the slider to indicate how <strong>appealing</strong> you find the animation'; }
var interesting = function () { prompt_global = 'Use the slider to indicate how <strong>interesting</strong> you find the animation'; }


/*show instructions on div at a time*/
var showDiv = function (speed, delay, btn_mlt) {
    $(".complex").fadeTo(1500, 1);
    $(".intro").first().fadeTo(speed, 1, function showNext() { $(this).next(".intro").delay(delay).fadeTo(speed, 1, showNext) });
    $(".jspsych-html-button-response-button").delay(((delay*7)+(speed*7))*btn_mlt).fadeTo(1000,1);
};

/*vars for call-function*/
var complexPrompt = {
    type: 'call-function',
    func: complex
}

var relaxingPrompt = {
    type: 'call-function',
    func: relaxing
}

var appealingPrompt = {
    type: 'call-function',
    func: appealing
}

var interestPrompt = {
    type: 'call-function',
    func: interesting
}

var naturalPrompt = {
    type: 'call-function',
    func: natural
}