document.addEventListener('DOMContentLoaded', function(){
	//quiz logic is defined here

	//when quiz modal is opened
	$('#quiz-modal').on('show.bs.modal', function (event) {
	  var div = $(event.relatedTarget) // Element that triggered the modal
	  var quiz_id = div.data('quiz-id') // Extract info from data-* attributes
	  
	  //Which quiz?
	  if(quiz_id == "Einleitung"){
		
	  }else if(quiz_id == "Basics"){

	  }else if(quiz_id == "Charaktere"){

	  }else if(quiz_id == "Stages"){
		
	  }else if(quiz_id == "Abschlussquiz"){
		
	  }

	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('#quiz-modal-title').text(quiz_id)
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