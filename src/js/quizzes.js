document.addEventListener('DOMContentLoaded', function(){
	//quiz logic is defined here
	
	//questions
	intro_questions = [
        {
			question_type: 'radio', 
			question:'Für welche Konsole erschien Super Smash Bros melee?', 
			options: ['SNES','Nintendo Switch','Nintendo Gamecube'],
			answer: 'Nintendo Gamecube',
			hint: ''
		},
        {
			question_type: 'radio', 
			question:'Wann erschien Super Smash Bros melee?', 
			options: [2015,2001,2003],
			answer: 2001,
			hint: ''
		},
        {
			question_type: 'radio', 
			question:'Wie heißt der Erfinder der Super Smash Bros Reihe?', 
			options: ['Masahiro Sakurai','Jacky Chun','Ip Man'],
			answer: 'Masahiro Sakurai',
			hint: ''
		},
        {
			question_type: 'radio', 
			question:'Wie viele Teile von Super Smash Bros gibt es insgesamt?', 
			options: [1,2,3,4],
			answer: 4,
			hint: ''
		}
	];
	
	basics_questions = [
        {
			question_type: '', 
			question:'Wähle die 2.', 
			options: [1,2,3],
			answer:2
		}
	];
	
	characters_questions = [
        {
			question_type: '', 
			question:'Wähle die 2.', 
			options: [1,2,3],
			answer:2
		}
	];
	
	stages_questions = [
        {
			question_type: '', 
			question:'Wähle die 2.', 
			options: [1,2,3],
			answer:2
		}
	];
	
	final_questions = [
        {
			question_type: '', 
			question:'Wähle die 2.', 
			options: [1,2,3],
			answer:2
		}
	];
	
	

	//when quiz modal is opened
	$('#quiz-modal').on('show.bs.modal', function (event) {
	  var div = $(event.relatedTarget); // Element that triggered the modal
	  var quiz_id = div.data('quiz-id'); // Extract info from data-* attributes
	  
	  //Which quiz?
	  if(quiz_id == "Einleitung"){
		generateQuiz(intro_questions);
	  }else if(quiz_id == "Basics"){
		generateQuiz(basics_questions);
	  }else if(quiz_id == "Charaktere"){
		generateQuiz(characters_questions);
	  }else if(quiz_id == "Stages"){
		generateQuiz(stages_questions);
	  }else if(quiz_id == "Abschlussquiz"){
		generateQuiz(final_questions);
	  }

	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('#quiz-modal-title').text(quiz_id);
	});
		
	$('.closefirstmodal').click(function () { //Close Button on Form Modal to trigger Warning Modal
		$('.closefirstmodal').click(function () {
			$('#Warning').modal('show');
		});

		$('.confirmclosed').click(function () {
			$('#Warning').modal('hide');
			$('#quiz-modal').modal('hide');
		});
	});

}, false);

//Function to generate quiz
function generateQuiz(questions){
	QuizMod.setQuestions(questions);
	QuizMod.startQuiz();
	//console.log(QuizMod.getQuestions());
	
}

//Quiz module
var QuizMod = (function () {
  //private scope
  
  //variables
  var questions, solvedQuestions;
  
  //functions
  var createQuestionRadio = function(q){
	/*
		<input type="radio" id="f-option" name="selector" value="1">
		<label for="f-option" class="element-animation"></label>
		<div class="check"></div>
    */
	var html = "<div>";
	html += "</div>";
	document.getElementById('quiz-container').innerHTML = html; //insert html into quiz container
  };
  
  var pickQuestion = function(){
	return questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
  };
  
  var startQuiz = function(){
	//randomly pick the first question or the quiz
	var q = pickQuestion();

	//Which question type?
	if(q.question_type == 'radio'){ //type is radio
		createQuestionRadio(q);
	}//add other types
  };  
  
  var setQuestions = function(qs){
	questions = qs;
  };
  
  var getQuestions = function(){
	return questions;
  };
  
  //public interface
  return {
    //someMethod: someMethod
	setQuestions: setQuestions,
	getQuestions: getQuestions,
	startQuiz: startQuiz
  };

})();