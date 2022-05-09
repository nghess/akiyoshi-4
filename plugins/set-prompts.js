//Highlight Color Shuffler
var randomColor = '';
var elements = '';
    
function colorChange() {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return ' style=color:#' + randomColor + ';>'
};

/*set prompt function*/
var prompt_global = ' ';

var complex = function(){prompt_global = 'Use the slider to indicate how <strong>complex</strong> you find the animation.';}
var natural = function(){prompt_global = 'Use the slider to indicate how <strong>natural</strong> you find the animation';}
var relaxing = function(){prompt_global = 'Use the slider to indicate how <strong>relaxing</strong> you find the animation';}
var appealing = function(){prompt_global = 'Use the slider to indicate how <strong>appealing</strong> you find the animation';}
var interesting = function(){prompt_global = 'Use the slider to indicate how <strong>interesting</strong> you find the animation';}

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

