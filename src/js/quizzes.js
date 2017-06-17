document.addEventListener('DOMContentLoaded', function(){
	//quiz logic is defined here
	
	//questions
	intro_questions = [
        {
			question_type: '', 
			question:'Wähle die 2.', 
			options: [1,2,3],
			answer:2
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
	
}