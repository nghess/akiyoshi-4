//Debriefing
var debrief_text = '<strong>Study Debriefing</strong><br>'
	debrief_text += '<p class="debrief"><strong>Background:</strong> The patterns you rated are called <em>fractals</em>. The term fractal describes a class of irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part when magnified or reduced to the same size. Fractal properties are found throughout the natural and manmade world. The series of animations you saw today displayed animated fractal patterns of a varying complexity.</p>'
	debrief_text += '<p class="debrief"><strong>Purpose of this study:</strong> We hope to better understand how the perception of static fractals differs from the perception of animated fractals, and how the speed of the animated patterns influences people&apos;s perception of them. Fractals allow us to study the perception of aesthetic properties (e.g. the perceived level of beauty in an image) without using recognizable content, which makes them an excellent tool for studying abstract aesthetic judgement.</p>'
	debrief_text += '<p class="debrief"><strong>Your part:</strong> Your participation has helped us to further understand how humans perceive these patterns across different levels of speed and complexity. This research with allow us to better understand how the visual system and brain process our ever-changing visual environments.'
	debrief_text += '<p class="debrief"><strong>Feedback and Further information:</strong> If you have additional questions about this study, please feel free to ask the researcher, Nathan Gonzales-Hess at nhess @ uoregon.edu. If you have any questions concerning your rights as a research participant, please contact Research Compliance Services, 5237 University of Oregon, Eugene, OR 97403, 541-346-2510, or email researchCompliance @ uoregon.edu. You can also email the Human Subjects Coordinator for psychology and linguistics research at hscoord @ uoregon.edu. '

//Training Prompts
var train_text = '<strong>TRAINING</strong><br><br>'
	train_text += '<div class="complex">You are going to see a series of animations.<br><br></div>'
	train_text += '<div class="complex">Move the slider to indicate how <strong style="text-transform:capitalize">COMPLEX</strong> you find each animation.<br><br></div>'
	train_text += '<div class="complex">0 = Least Complex<br></div>'
	train_text += '<div class="complex">1 = Most Complex<br><br></div>'
	train_text += '<div class="complex">Please use the <strong><em>entire range</em></strong> of the slider to make your ratings.<br></div>'
	train_text += '<div class="complex"><strong><em>Take your time</em></strong> and carefully consider each rating you make.<br><br></div>'	

//Dynamic Prompts
var complex_text_gs = '<strong>BLOCK 1 OF 2</strong><br><br>'
	complex_text_gs += '<div class="complex">You will now see a series of <strong>grayscale</strong> animations.<br><br></div>'
	complex_text_gs += '<div class="complex">Move the slider to indicate how <strong style="text-transform:capitalize">COMPLEX</strong> you find each animation.<br><br></div>'
	complex_text_gs += '<div class="complex">0 = Least Complex<br></div>'
	complex_text_gs += '<div class="complex">1 = Most Complex<br><br></div>'
	complex_text_gs += '<div class="complex">Remember to use the <strong><em>entire range</em></strong> of the slider to make your ratings.<br></div>'
	complex_text_gs += '<div class="complex">Please <strong><em>take your time</em></strong> and carefully consider each rating you make.<br><br></div>'	


//Dynamic Prompts
var complex_text_bw = '<strong>BLOCK 2 OF 2</strong><br><br>'
	complex_text_bw += '<div class="complex">You will now see a series of <strong>black and white</strong> animations.<br><br></div>'
	complex_text_bw += '<div class="complex">Move the slider to indicate how <strong style="text-transform:capitalize">COMPLEX</strong> you find each animation.<br><br></div>'
	complex_text_bw +=	'<div class="complex">0 = Least Complex<br></div>'
	complex_text_bw += '<div class="complex">1 = Most Complex<br><br></div>'
	complex_text_bw += '<div class="complex">Remember to use the <strong><em>entire range</em></strong> of the slider to make your ratings.<br></div>'
	complex_text_bw += '<div class="complex">Please <strong><em>take your time</em></strong> and carefully consider each rating you make.<br><br></div>'