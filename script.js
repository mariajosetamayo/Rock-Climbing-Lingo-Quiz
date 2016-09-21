
$(document).ready(function(){

	$(".startButton").click(function(){
		$("#questionContainer").toggle();
		$(".tally").toggle();
		$(".startButton").hide();
	})

	// var userAnswer = {
	// 	option0 : false,
	// 	option1 : false,
	// 	option2 : false,
	// 	option3 : false,
	// }

	$(".userAnswer").click(function(event){
		window.selectedAnswer = $(this).attr("id")
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
		if (this.answer=== option){
			return true
		}
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
	console.log(questionsArray)
	var counter = 0
	var currentAnswerPoints = 0
	var totalPoints = 0

	// <--* button that runs the function for next question upon click *-->

	document.getElementById("nextButton").onclick = function () {
		nextQuestion()
	}

	var quiz = nextQuestion()

	//<--* function to repeat the quiz after clicking the button newQuiz *-->

	$("#newQuiz").click(function(){
		$("#results").hide()
		$(".startButton").show()
		counter = 0
		currentAnswerPoints = 0
		totalPoints = 0
		quiz = nextQuestion()
	})


	
	function nextQuestion () {

		// userAnswer.option0=false
		// userAnswer.option1=false
		// userAnswer.option2=false
		// userAnswer.option3=false
		$('input[name=option]').attr('checked',false);
		document.getElementById("count").innerHTML = counter + 1
		totalPoints = totalPoints + currentAnswerPoints
		currentAnswerPoints = 0
		document.getElementById("score").innerHTML = totalPoints
		var presentQuestion = questionsArray[counter].question
		var presentOptions = questionsArray[counter].options
		// var presentAnswer = .answer
		// var rightAnswer = questionsArray[counter].isRightAnswer(questionsArray[counter].answer)
		// console.log("jjj",rightAnswer)
		// console.log("question number", presentQuestion)
		
		//<---** if statement makes code run until it reaches the 10th question, when it reaches 10, it shows results button **--->
			if(counter<10){
				document.getElementById("question").innerHTML = presentQuestion
				console.log(presentQuestion)
				document.getElementById("option0text").innerHTML = presentOptions[0];
				document.getElementById("option1text").innerHTML = presentOptions[1];
				document.getElementById("option2text").innerHTML = presentOptions[2];
				document.getElementById("option3text").innerHTML = presentOptions[3];

				// for(var key in userAnswer){
				// 	console.log(userAnswer[key])
				console.log("log",questionsArray[counter].isRightAnswer(window.selectedAnswer))
					// if(questionsArray[counter].isRightAnswer(window.selectedAnswer)){
					// 	currentAnswerPoints = 1
					// 	console.log("kkk",currentAnswerPoints)
					// }

					// else if(questionsArray[counter].isRightAnswer(window.selectedAnswer) === false){
					// 	currentAnswerPoints=0
					// }
				// }

				// if (questionsArray[counter].isRightAnswer(userAnswer) === false){
				// 	currentAnswerPoints = 0
				// }


				// document.getElementById("option" + presentQuestion.isRightAnswer(presentAnswer).onclick = function () {
				// 	currentAnswerPoints = 1
				// }

				// if(questionsArray[i].isRightAnswer(questionsArray[i].answer)){
				// 	currentAnswerPoints = 1
				// }
				// else if(questionsArray[i].isRightAnswer(questionsArray[i].answer) === false){
				// 	currentAnswerPoints = 0
				// }
			
				// document.getElementById("option0").onclick = function () {
				// 	currentAnswerPoints = 0
				// 	// console.log("NOOOOOO", currentAnswerPoints)
				// }
				// document.getElementById("option1").onclick = function () {
				// 	currentAnswerPoints = 0
				// 	// console.log("NOOOOOO", currentAnswerPoints)
				// }
				// document.getElementById("option2").onclick = function () {
				// 	currentAnswerPoints = 0
				// 	// console.log("NOOOOOO", currentAnswerPoints)
				// }
				// document.getElementById("option3").onclick = function () {
				// 	currentAnswerPoints = 0
				// 	// console.log("NOOOOOO", currentAnswerPoints)
				// }
				
				// // this part of the function evaluates if user gets question correct. It concatenates the word option with the answer to the current question (which is the array index position)
				
				// document.getElementById("option" + presentQuestion.answer).onclick = function () {
				// 	currentAnswerPoints = 1
				// 	// console.log("YIEH BOIII", currentAnswerPoints)
			}
			
			

			else if (counter === 11){
				$("#results").hide()
				$("#resultButton").toggle();
				$("#questionContainer").hide();
				$(".tally").hide();
			}

			counter++
	
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