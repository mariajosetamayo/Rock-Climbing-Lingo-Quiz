
$(document).ready(function(){

	$(".startButton").click(function(){
		$("#questionContainer").toggle();
		$(".tally").toggle();
		$(".startButton").hide();
	})


	$(".userAnswer").click(function(event){
		window.selectedAnswer = $(this).attr("id")
		window.selectedAnswerValue = $(this).attr("value")
		// userAnswer[selectedAnswer] = true
		console.log("mmm",window.selectedAnswer)
	})


	// question object
	
	function Question (question, options, answer) {
	    this.question = question;
	    this.options = options;
	    this.answer = answer;
	}

	Question.prototype.isRightAnswer = function (option) {
		console.log("OPTION ENTERED FOR ANSWER IS ", option, " WHILE THIS.ANSWER IS ", this.answer)
		return this.answer === option
	}



	var questionsArray = []
	var question1 = new Question ("What is a sandbag?", ["An easy climb", "A horrendously hard climb", "A climb which receives a much lower grade than deserved", "A climb which receives a much higher grade than deserved"], "option2")

	var question2 = new Question("The crux of a climb is:", ["The end of a very long climb","The hardest part of a climb","The easiest part of a climb", "The part where you were stronger in the climb"], "option1")

	var question3 = new Question("What is free climbing?",["To climb without a rope","Climbing without unnatural aids other than used for protection","Climbing a route alone with an auto-belay","Climbing without natural aids used for protection"], "option1")

	var question4 = new Question("Which is the best description for a crimp?", ["To successfully complete a climbing route without falling on the first attempt after receiving beta of some form", "To fall off a climbing route too quickly", "To successfully complete a route without falling", "To complete a climbing route very quickly"], "option2")

	var question5 = new Question("What is a flash?", ["To successfully complete a climbing route without falling on the first attempt after receiving beta of some form", "To fall off a climbing route too quickly", "To successfully complete a route without falling", "To complete a climbing route very quickly"], "option0")

	var question6 = new Question("When the climber shouts at a belayer 'take!', he is:", ["Requesting the belayer to go back down","Requesting the belayer to give them more slack", "Requesting to take a break", "Requesting that the belayer removes all slack"], "option3")

	var question7 = new Question("What is a redpoint?", ["Completing a climb successfully without falling while on a top rope after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a climb while placing protection on a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb after making previous unsuccessful attempts, done without falling or resting on the rope","To complete a lead climb on the first attempt without falling"], "option1")

	var question8 = new Question("What is flagging?", ["Climbing technique where a leg is held in a position to maintain balance, rather than to support weight", "A technique to barndoor and climb more dynamically","A technique to prepare yourself for jumping onto another hold","To use friction on the sole of the climbing shoe, in the absence of any useful footholds"], "option0")

	var question9 = new Question("What is talus hopping?", ["Jumping from the highest part of a boulder problem to the ground", "A technique that is typically used while lowering and cleaning gear from an overhanging and/or traversing route", "Jumping or transitioning from rock to rock in an area of large rock fragments on a mountainside that may vary from house-size to as small as a small backpack", "Scrambling to get to the top of an oddly shaped boulder"], "option2")

	var question10 = new Question("What is a whipper?", ["When the rope slashes a part of your body",  "Falling to the ground while leading", "Getting rope burnt", "Any fall beyond the last placed or clipped piece of protection"], "option3")

	questionsArray.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10)
	// console.log(questionsArray)
	var counter = 0
	var currentAnswerPoints = 0
	var totalPoints = 0

	// <--* button that runs the function for next question upon click *-->

	document.getElementById("nextButton").onclick = function () {
		nextQuestion()
	}

	// var quiz = nextQuestion()

	//<--* function to repeat the quiz after clicking the button newQuiz *-->

	$("#newQuiz").click(function(){
		$("#results").hide()
		$(".startButton").show()
		counter = 0
		currentAnswerPoints = 0
		totalPoints = 0
		document.getElementById("count").innerHTML = counter + 1
		document.getElementById("question").innerHTML = questionsArray[0].question
		document.getElementById("option0text").innerHTML = questionsArray[0].options[0];
		document.getElementById("option1text").innerHTML = questionsArray[0].options[1];
		document.getElementById("option2text").innerHTML = questionsArray[0].options[2];
		document.getElementById("option3text").innerHTML = questionsArray[0].options[3];
	})

	document.getElementById("question").innerHTML = questionsArray[0].question
	document.getElementById("option0text").innerHTML = questionsArray[0].options[0];
	document.getElementById("option1text").innerHTML = questionsArray[0].options[1];
	document.getElementById("option2text").innerHTML = questionsArray[0].options[2];
	document.getElementById("option3text").innerHTML = questionsArray[0].options[3];


	
	function nextQuestion () {
		if (counter === 9){
			console.log("EXTRA QUESTION ACTIVATED!!!")
			var userAnswer = window.selectedAnswer
			var userAnswerCorrect = questionsArray[counter].isRightAnswer(userAnswer)
			if (questionsArray[counter].isRightAnswer(userAnswer)){
				currentAnswerPoints=1
			}
			else if(!userAnswer || questionsArray[counter].isRightAnswer(userAnswer)===false){
				currentAnswerPoints = 0
			}
			$("#results").hide()
			$("#resultButton").toggle();
			$("#questionContainer").hide();
			$(".tally").hide();
		} else {
			var userAnswer = window.selectedAnswer
			var userAnswerCorrect = questionsArray[counter].isRightAnswer(userAnswer)
			if (questionsArray[counter].isRightAnswer(userAnswer)){
				currentAnswerPoints=1
			}
			else if(!userAnswer || questionsArray[counter].isRightAnswer(userAnswer)===false){
				currentAnswerPoints = 0
			}
			counter++

			if(counter<10){
				document.getElementById("question").innerHTML = questionsArray[counter].question
				document.getElementById("option0text").innerHTML = questionsArray[counter].options[0];
				document.getElementById("option1text").innerHTML = questionsArray[counter].options[1];
				document.getElementById("option2text").innerHTML = questionsArray[counter].options[2];
				document.getElementById("option3text").innerHTML = questionsArray[counter].options[3];
			}
			


			console.log("COUNTER IS CURRENTLY ", counter)
			$('input[name=option]').attr('checked',false);
			document.getElementById("count").innerHTML = counter + 1
			totalPoints = totalPoints + currentAnswerPoints
			currentAnswerPoints = 0
			document.getElementById("score").innerHTML = totalPoints
			console.log("TOTAL POINTS SO FAR: ", totalPoints)




			// var questionInArray = questionsArray[counter]
			// console.log("hdfhsd", questionInArray)
			// var presentQuestion = questionsArray[counter].question
			// console.log(questionsArray[counter])
			// var presentOptions = questionsArray[counter].options
			// var userAnswer = window.selectedAnswer
			// console.log("ppp",userAnswer)
			// var userAnswerCorrect = questionsArray[counter].isRightAnswer(userAnswer)
			// console.log("ooo", userAnswerCorrect)

			
			//<---** if statement makes code run until it reaches the 10th question, when it reaches 10, it shows results button **--->
				// if(counter<10){
				// 	document.getElementById("question").innerHTML = presentQuestion
				// 	console.log(presentQuestion)
				// 	document.getElementById("option0text").innerHTML = presentOptions[0];
				// 	document.getElementById("option1text").innerHTML = presentOptions[1];
				// 	document.getElementById("option2text").innerHTML = presentOptions[2];
				// 	document.getElementById("option3text").innerHTML = presentOptions[3];

				// 	// console.log("esta es la respuesta", questionsArray[counter].answer)
				// 	// console.log("log", questionsArray[counter].isRightAnswer(window.selectedAnswerValue))


				// 	if (questionsArray[counter].isRightAnswer(userAnswer)){
				// 		currentAnswerPoints=1
				// 	}

				// 	else if(questionInArray.isRightAnswer(userAnswer)===false){
				// 		currentAnswerPoints = 0
				// 	}

				// 	// console.log("kkk", currentAnswerPoints)
				// }
				
				

				// else if (counter === 11){
				// 	$("#results").hide()
				// 	$("#resultButton").toggle();
				// 	$("#questionContainer").hide();
				// 	$(".tally").hide();
				// }

				// counter++
		}
	
	}

	//<--* function to get the results according to score *-->

	document.getElementById("resultButton").onclick = function (){
		$("#results").show()
		$("#resultButton").hide();
		$("#newQuiz").show(); 
		if (totalPoints<=2){
			$(".climbingRookie").show()
			$(".gymRat").hide()
			$(".master").hide()
			$(".ocassional").hide()
		} 
		else if (totalPoints >2 && totalPoints <= 3){
			$(".gymRat").show()
			$(".climbingRookie").hide()
			$(".master").hide()
			$(".ocassional").hide()
		}
		else if (totalPoints >3 && totalPoints <= 8){
			$(".ocassional").show()
			$(".climbingRookie").hide()
			$(".gymRat").hide()
			$(".master").hide()
		}
		else {
			$(".master").show()
			$(".climbingRookie").hide()
			$(".gymRat").hide()
			$(".ocassional").hide()
		}
	}

})