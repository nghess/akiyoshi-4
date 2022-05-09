/**
 * jsPsych plugin for showing animations and recording keyboard responses
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 */

jsPsych.plugins.animation = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('animation', 'stimuli', 'image');

  plugin.info = {
    name: 'animation',
    description: '',
    parameters: {
      stimuli: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimuli',
        default: undefined,
        array: true,
        description: 'The images to be displayed.'
      },
      frame_time: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Frame time',
        default: 16,
        description: 'Duration to display each image.'
      },
      sequence_reps: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sequence repetitions',
        default: 100,
        description: 'Number of times to show entire sequence.'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        array: true,
        description: 'Keys subject uses to respond to stimuli.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: ' ',
        description: 'Any content here will be displayed below stimulus.'
      },
      render_on_canvas: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Render on canvas',
        default: false,
        description: 'If true, the images will be drawn onto a canvas element (prevents blank screen between consecutive images in some browsers).'+
          'If false, the image will be shown via an img element.'
        },

      //Slider Properties
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
      slider_start: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider starting value',
        default: 50,
        description: 'Sets the starting value of the slider',
      },
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: .1,
        description: 'Sets the step of the slider'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: [0,1],
        array: true,
        description: 'Labels of the slider.',
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: true,
        description: 'If true, the participant will have to move the slider before continuing.'},
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, the trial will end when subject makes a response.'
      },
      response_allowed_while_playing: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response allowed while playing',
        default: true,
        description: 'If true, then responses are allowed while the video is playing. '+
          'If false, then the video must finish playing before a response is accepted.'},
      slider_timer: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider Timer',
        default: 5000,
        description: 'Delay appearance of slider at beginning of animation'},
      }
    }
  

  plugin.trial = function(display_element, trial) {


//Set start frame/still frame
var animate_frame = getRandomInt(trial.stimuli.length-1);
var baseDiv = '<img id="animation" class="animation" src="'+trial.stimuli[animate_frame]+'"/>';
display_element.innerHTML = baseDiv;

    // half of the thumb width value from jspsych.css, used to adjust the label positions
    var half_thumb_width = 7.5; 

    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

    // Original Animation Plugin Vars
    var interval_time = trial.frame_time;
    var reps = 0;
    var startTime = performance.now();
    var animation_sequence = [];
    var responses = [];
    var current_stim = "";

    // Stepper Vars
    const step = 1;
    var $element = display_element.querySelector('#animation') //$(".animation");
    var totalFrames = trial.stimuli.length;
    let timeWhenLastUpdate;
    let timeFromLastUpdate;
    let frameNumber = 1;
    var timePerFrame = trial.frame_time;

    //Timer Vars
    var baseTime = performance.now();


// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function stepper(startTime) {
// 'startTime' is provided by requestAnimationName function, and we can consider it as current time
// first of all we calculate how much time has passed from the last time when frame was update
  
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  // then we check if it is time to update the frame
  if (timeFromLastUpdate > interval_time) {
    //console.log(timeFromLastUpdate);
    // and update it accordingly
    $element.setAttribute("src", trial.stimuli[animate_frame]);
    // reset the last update time
    timeWhenLastUpdate = startTime;
    // then increase the frame number or reset it if it is the last frame
    if (animate_frame == totalFrames-1) {
      animate_frame = 0;
      reps++;
    } else {
      animate_frame++;
    }
  }
  requestAnimationFrame(stepper);
}
// Run the animation
requestAnimationFrame(stepper); 

// Slider
    var html = '<div id="jspsych-slider-response-wrapper" style="margin: 2em 0px;">';
    html += '<div class="jspsych-slider-response-container">';

    html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-video-slider-response-response"';
    if (!trial.response_allowed_while_playing) {
      html += ' disabled';
    }
    html += '></input><div>'
    for(var j=0; j < trial.labels.length; j++){
      var label_width_perc = 100/(trial.labels.length-1);
      var percent_of_range = j * (100/(trial.labels.length - 1));
      var percent_dist_from_center = ((percent_of_range-50)/50)*100;
      var offset = (percent_dist_from_center * half_thumb_width)/100;
      html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
        'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

if(trial.frame_time == 16.66){fps = 60}
    // add prompt if there is one
    if (trial.prompt !== null) {
      html += '<div>'+prompt_global+'</div><br>';
    }

    // add submit button
    var next_disabled_attribute = "";
    if (trial.require_movement == true) {
      next_disabled_attribute = "disabled";
    } else {
      next_disabled_attribute = ""
    }
    html += '<button id="jspsych-video-slider-response-next" class="jspsych-btn" '+ next_disabled_attribute + '>' + trial.button_label + '</button>';

    //render html to body
    display_element.insertAdjacentHTML('beforeEnd', html);


//Slider hover functionality

var slide_val = 0;
var valueHover = 0;

function calcSliderPos(e) {
    return (e.offsetX / e.target.clientWidth) *  parseInt(e.target.getAttribute('max'),10);
}

function hover(e) {
  valueHover = calcSliderPos(e).toFixed(2);
  this.value = valueHover;
  slide_val = valueHover;
};

document.getElementById('jspsych-video-slider-response-response').addEventListener('mousemove', hover)

// slider functionality
document.querySelector('#jspsych-video-slider-response-response').addEventListener('input', function () {
slide_val = parseInt(this.value);
//document.getElementById('jspsych-video-slider-response-response').innerHTML += '<div class = jspsych-video-slider>' + slide_val + '</div>';
//rating = slide_val
});

if(trial.require_movement){
  display_element.querySelector('#jspsych-video-slider-response-response').addEventListener('click', function(){
  display_element.querySelector('#jspsych-video-slider-response-next').disabled = false;
  document.getElementById('jspsych-video-slider-response-response').removeEventListener('mousemove', hover);
  rating = slide_val
  console.log(rating);

  });   
}



    // start time for rt
    //var startTime = performance.now();
    var start_time = performance.now();

    // end trial on button click
    display_element.querySelector('#jspsych-video-slider-response-next').addEventListener('click', function() {
    display_element.innerHTML = "";
    // measure rt
    endTrial();
    });

    var after_response = function(info) {

      responses.push({
        key_press: info.key,
        rt: info.rt,
        stimulus: current_stim
      });

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-animation-image').className += ' responded';
    }

    // hold the jspsych response listener object in memory
    // so that we can turn off the response collection when
    // the trial ends
    var response_listener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: 'performance',
      persist: true,
      allow_held_key: false
    });

    function endTrial() {
    display_element.innerHTML = "";
      var end_time = performance.now();
      var rt = end_time - start_time;
      
      jsPsych.pluginAPI.cancelKeyboardResponse(response_listener);

      var trial_data = {
        "stimulus": trial.stimuli[0],
        "rt": rt,
        "response": rating,
        "descriptor": descriptor
      };

      jsPsych.finishTrial(trial_data);
    }
  };

  return plugin;
})();
