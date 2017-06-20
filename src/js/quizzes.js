document.addEventListener('DOMContentLoaded', function(){
	
	//function to check if 2 arrays have the same values
	// Warn if overriding existing method
	if(Array.prototype.equals)
		console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
	// attach the .equals method to Array's prototype to call it on any array
	Array.prototype.equals = function (array) {
		// if the other array is a falsy value, return
		if (!array)
			return false;

		// compare lengths - can save a lot of time 
		if (this.length != array.length)
			return false;

		for (var i = 0, l=this.length; i < l; i++) {
			// Check if we have nested arrays
			if (this[i] instanceof Array && array[i] instanceof Array) {
				// recurse into the nested arrays
				if (!this[i].equals(array[i]))
					return false;       
			}           
			else if (this[i] != array[i]) { 
				// Warning - two different object instances will never be equal: {x:20} != {x:20}
				return false;   
			}           
		}       
		return true;
	}
	//
		
	//LocalStorage
	if(window.localStorage){
		if(!localStorage.getItem("solvedQuizzes")) localStorage.setItem("solvedQuizzes", 0); //Set Key for the amount of solved quizzes if the key doesn't exist
	}
	//
	//hide advanced section
	var advancedSection = $('li').has('a:contains("Advanced")').hide();

	//Set banner 
	if(localStorage.getItem("solvedQuizzes") == 0){
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt0.png)');
	}else if(localStorage.getItem("solvedQuizzes") == 1){
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt1.png)');
	}else if(localStorage.getItem("solvedQuizzes") == 2){
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt2.png)');
	}else if(localStorage.getItem("solvedQuizzes") == 3){
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt3.png)');
	}else if(localStorage.getItem("solvedQuizzes") == 4){
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt4.png)');
	}else if(localStorage.getItem("solvedQuizzes") == 5){
		advancedSection.show(); //show advanced section)
		$('#banner').css('background-image', 'url(src/images/Photoshop/fortschritt5.png)');
	}
	//
	
	//quiz logic is defined here
	
	//questions
	intro_questions = [ 
        {
			question_type: 'radio', //radio, controller, dnd...
			question:'Für welche Konsole erschien Super Smash Bros melee?', 
			options: ['SNES','Nintendo Switch','Nintendo Gamecube', 'Wii'], 
			answer: 'Nintendo Gamecube', 
			hint: ''
		},
        {
			question_type: 'radio', 
			question:'Wann erschien Super Smash Bros melee?', 
			options: [2015,2001,2003, 2007],
			answer: 2001,
			hint: 'In diesem Jahr geschah ein schlimmer Terroranschlag in New York'
		},
        {
			question_type: 'radio', 
			question:'Wie heißt der Erfinder der Super Smash Bros Reihe?', 
			options: ['Masahiro Sakurai','Jacky Chan','Ip Man', 'Hideo Kojima'],
			answer: 'Masahiro Sakurai',
			hint: ''
		},
        {
			question_type: 'radio', 
			question:'Wie viele Teile von Super Smash Bros gibt es insgesamt?', 
			options: [1,2,3,4],
			answer: 4,
			hint: ''
		},
		{
			question_type: 'radio', 
			question:'Welchem Genre ist SSBM zuzuordnen?', 
			options: ['First Person Shooter','MMO','RPG', 'Fighting games'], 
			answer: 'Fighting games', 
			hint: 'Ähnlich Street Fighter.'
		},
		{
			question_type: 'radio', 
			question:'Wann verliert man in SSBM ein Leben?', 
			options: ['Wenn man den Bildschirm verlässt','Wenn der Lebensbalken leer ist','Wenn man keine Herzen mehr hat', 'Wenn man keine Munition mehr hat'], 
			answer: 'Wenn man den Bildschirm verlässt', 
			hint: 'Die Arena hat keine Abgrenzungen'
		},
		{
			question_type: 'radio', 
			question:'Auf welche Weise wird der erlittene Schaden der Charaktere in SSBM ausgedrückt?', 
			options: ['Lebensbalken', 'Herzen', 'Prozentanzeige', 'Gar nicht'], 
			answer:  'Prozentanzeige',
			hint: 'Einzigartig'
		},
		{
			question_type: 'radio', 
			question:'Was ist besser: 100% oder 0%?', 
			options: ['100%','0%'], 
			answer: '0%',
			hint: ''
		},
		{
			question_type: 'radio', 
			question:'Was drückt die Prozentzahl aus?', 
			options: ['Lebensdauer','Menge an Hit Points', 'Siegwahrscheinlichkeit', 'Multiplikator des Rückstoßes'], 
			answer: 'Multiplikator des Rückstoßes',
			hint: ''
		}
	];
	
	basics_questions = [ 
		{
			question_type: 'radio', 
			question:'Welcher Move schützt am besten davor, gegriffen zu werden?', 
			options: ['Spotdodge','Rollen','Blocken', 'Springen'], 
			answer: 'Spotdodge', 
			hint: 'Eine stationäre Aktion'
		},
		{
			question_type: 'radio', 
			question:'Was kann nur aus dem Sprint heraus ausgeführt werden?', 
			options: ['Doublejump','Aerials','Dash Attack', 'Smash Attack'], 
			answer: 'Dash Attack', 
			hint: ''
		},
		{
			question_type: 'radio', 
			question:'Mit welchem Special gewinnen alle Charaktere außer Jigglypuff an Höhe?', 
			options: ['Up Special','Side Special','Down Special', 'Neutral Special'], 
			answer: 'Up Special', 
			hint: 'Die Eingabe passt zur Funktion.'
		},
		{
			question_type: 'radio', 
			question:'Wie unterscheiden sich Tilts in der Regel von Smashes?', 
			options: ['Langsamer und stärker','Gar nicht','Schneller und schwächer', 'Größere Reichweite'], 
			answer: 'Schneller und schwächer', 
			hint: ''
		}
	];
	
	characters_questions = [ 
		{
			question_type: 'radio', 
			question:'Aus welchem Spiel sind Marth und Roy?', 
			options: ['Super Mario','Persona','Xenoblade Chronicles', 'Fire Emblem'], 
			answer: 'Fire Emblem', 
			hint: ''
		},
		{
			question_type: 'radio', 
			question:'Was passiert, wenn Jigglypuffs Schild zerstört wird?', 
			options: ['Gar nichts','Es geht sofort KO','Es wird betäubt', 'Es erleidet hohen Schaden'], 
			answer: 'Es geht sofort KO', 
			hint: '' 
		},
		{
			question_type: 'multiple',
			question:'Welche Charaktere verfügen über einen Konter?', 
			options: ['Mario','Marth','Roy','Peach','Bowser'],
			answer: ['Marth','Roy','Peach'], 
			hint: '' 
		},
		{
			question_type: 'radio', 
			question:'Aus welchem Spiel stammt Ness?', 
			options: ['Fire Emblem','Earthbound',"Yoshi's Island", 'Super Mario Bros.'], 
			answer: 'Earthbound', 
			hint: ''
		},
		{
			question_type: 'radio', 
			question:'Was unterscheidet Zelda von allen anderen Charakteren?', 
			options: ['Einziger Charakter seiner Spielereihe','Zwei Charaktere in einem','Einziger weiblicher Charakter', 'Hat nur einen Sprung'], 
			answer: 'Zwei Charaktere in einem',
			hint: '' 
		},
		{
			question_type: 'multiple', 
			question:'Welche Charaktere haben keinen Rettungsmove als Up B?', 
			options: ['Captain Falcon','Ganondorf','Mario','Yoshi','Jigglypuff'], 
			answer: ['Yoshi','Jigglypuff'], 
			hint: '' 
		},
		{
			question_type: 'radio', 
			question:'Was ist Peach’s besondere Eigenschaft in der Luft?',
			options: ['Sie kann auf konstanter Höhe schweben','Sie ist enorm schnell','Sie hat mehr als zwei Sprünge', 'Sie kann ihren Up Special mehrfach benutzen'], 
			answer: 'Sie kann auf konstanter Höhe schweben', 
			hint: '' 
		},
		{
			question_type: 'radio',
			question:'Was unterscheidet Fox’s Laser von Falcos Laser?', 
			options: ['Langsamer und schwächer','Schneller, schwächer, unterbricht Gegner nicht','Gar nichts', 'Langsamer und stärker'], 
			answer: 'Schneller, schwächer, unterbricht Gegner nicht', 
			hint: '' 
		}
	];
	
	stages_questions = [ 
		{
			question_type: 'radio', 
			question:'Welche Stage bietet weder Plattformen noch Gefahren?',
			options: ['Final Destination','Dreamland N64','Battlefield', "Yoshi's Story"], 
			answer: 'Final Destination', 
			hint: '' 
		},
		{
			question_type: 'radio', 
			question:'Auf welchen Stages befindet sich ein pustender Baum in der Mitte?', 
			options: ['Corneria und Brinstar','Dreamland N64 und Green Greens','Battlefield und Big Blue', 'Jungle Japes und Kongo Jungle'],
			answer: 'Dreamland N64 und Green Greens', 
			hint: '' 
		},
		{
			question_type: 'choose',
			question:'Welche der gezeigten Stages ist legal?',
			options: [{url:'src/images/stages/brinstar.jpg', name:'brinstar'},{url:'src/images/stages/corneria.jpg', name:'corneria'},{url:'src/images/stages/dreamland.png', name:'dreamland'}],
			answer: 'brinstar',
			hint: ''
		}
	];
	
	final_questions = [ 
		{
			question_type: 'choose',
			question:'Welche der gezeigten Stages ist legal?',
			options: [{url:'src/images/stages/brinstar.jpg', name:'brinstar'},{url:'src/images/stages/corneria.jpg', name:'corneria'},{url:'src/images/stages/dreamland.png', name:'dreamland'}],
			answer: 'brinstar',
			hint: ''
		},
		{
			question_type: 'multiple',
			question:'Welche dieser Stages sind legal?',
			options: ['dreamland64', 'corneria', 'brinstar', 'Great Bay'],
			answer: ['brinstar', 'Great Bay'],
			hint: ''
		}
	];
	
	

	//when quiz modal is opened
	$('#quiz-modal').on('show.bs.modal', function (event) {
		var div = $(event.relatedTarget); // Element that triggered the modal
		var quiz_id = div.data('quiz-id'); // Extract info from data-* attributes
	  
		//Which quiz?
		if(quiz_id == "Einleitung"){
			generateQuiz(quiz_id, intro_questions);
		}else if(quiz_id == "Basics"){
			generateQuiz(quiz_id, basics_questions);
		}else if(quiz_id == "Charaktere"){
			generateQuiz(quiz_id, characters_questions);
		}else if(quiz_id == "Stages"){
			generateQuiz(quiz_id, stages_questions);
		}else if(quiz_id == "Abschlussquiz"){
			generateQuiz(quiz_id, final_questions);
		}

		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('#quiz-modal-title').text(quiz_id);
	});
		
	$('.closefirstmodal').click(function () { //Close Button on Form Modal to trigger Warning Modal	
		$('#Warning').modal('show');
		$('.confirmclosed').click(function () {
			$('#Warning').modal('hide');
			$('#quiz-modal').modal('hide');
		});
	});

}, false);

//Function to generate quiz
function generateQuiz(quiz_id, questions){
	QuizMod.startQuiz(quiz_id, questions);
}

//Quiz module
var QuizMod = (function () {
  //private scope

	//variables
	var questions = [];
	var quizID, qDiv, oContainer, currentQuestion;

	//functions
	/**
	* Randomize array element order in-place.
	* Using Durstenfeld shuffle algorithm.
	*/
	var shuffleArray = function(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}
	
	var clearMainDiv = function(){
		var mDiv = document.getElementById('quiz-container');
		mDiv.removeChild(mDiv.childNodes[0]); //clear quiz-container		
	};
	
	var createQuestionStructure = function(q){
		clearMainDiv();
		qDiv = document.createElement('div');
		var qContainer = document.createElement('div');
		qContainer.id = "question-container";
		var qSpan =  document.createElement('span');
		qSpan.innerHTML = q.question;
		qContainer.appendChild(qSpan);
		qDiv.appendChild(qContainer);
		oContainer = document.createElement('div');
		oContainer.appendChild(document.createElement('hr'));
		oContainer.id = "options-container";
		qDiv.appendChild(oContainer);
		var bContainer = document.createElement('div');
		bContainer.id = "button-container";
		var nextQuestion = document.createElement('button');
		nextQuestion.id = "next-question";
		nextQuestion.className = "btn btn-primary disabled";
		nextQuestion.innerHTML = "Nächste Frage";
		bContainer.appendChild(nextQuestion);
		qDiv.appendChild(bContainer);	
		
		//Add event handler to next question button
		nextQuestion.addEventListener("click", function(e) {
			QuizMod.nextQuestion();
		});
		
		//Add event handler to options div
		oContainer.addEventListener("click", function(e) {
			t = e.target;
			if (t && t.type && (t.type.toUpperCase() === "RADIO" || t.type.toUpperCase() === "CHECKBOX")) { //radio button is clicked
				enableNextQuestionButton();
			}else if(t && t.className && t.className === "choose-option"){
				enableNextQuestionButton();
			}
		});
	};
	
	var enableNextQuestionButton = function(){
		var nextQuestion = document.getElementById('next-question');
		if(nextQuestion.classList.contains('disabled')){ //enable next question button
			nextQuestion.classList.remove('disabled');
		}		
	};
	
	var disableNextQuestionButton = function(){
		var nextQuestion = document.getElementById('next-question');
		if(!nextQuestion.classList.contains('disabled')){
			nextQuestion.classList += " disabled";	
		}
	};
	
	var appendAndResetContainers = function(){
		var mDiv = document.getElementById('quiz-container');
	    oContainer.appendChild(document.createElement('hr'));
		mDiv.appendChild(qDiv);
		oContainer = null;
		qDiv = null;		
	};
	
	var createQuestionRadio = function(q){ //function to create question of type radio 
		//create html
		createQuestionStructure(q);
		q.options = shuffleArray(q.options); //shuffle options
		for(var i=0; i<q.options.length; i++){
			var cOption = q.options[i];
			var radioButton = document.createElement('input');
			radioButton.type = 'radio';
			radioButton.id = "option" + i;
			radioButton.name = "option-group";
			var label = document.createElement('label');
		    label.htmlFor = "option" + i;
			
			if(q.question_type == 'radio'){
				label.innerHTML = cOption;
				var br = document.createElement('br');
				radioButton.value = cOption;
				oContainer.appendChild(radioButton);
				oContainer.appendChild(label);
				oContainer.appendChild(br);
			}else if(q.question_type == 'choose'){
				radioButton.value = cOption.name;
				var oImg = document.createElement('img');
				oImg.width = 200;
				oImg.src = cOption.url;
				oImg.setAttribute("style", "cursor:pointer; border:2px solid transparent;");
				radioButton.setAttribute("style", "visibility: hidden; position: absolute");
				label.appendChild(radioButton);
				label.appendChild(oImg);
				oContainer.appendChild(label);
			}	
			
		}
		appendAndResetContainers();
	};

	var createQuestionController = function(q){ //function to create question of type controller
		//create html
		//createQuestionStructure(q);	
	};
	
	var createQuestionDnD = function(q){ //function to create question of type dnd
		//create html
		//createQuestionStructure(q);	
	};
	
	var createQuestionMultiple = function(q){
		//create html
		createQuestionStructure(q);
		q.options = shuffleArray(q.options); //shuffle options
		for(var i=0; i<q.options.length; i++){
			var cOption = q.options[i];
			var cDiv = document.createElement('div');
			var cCheckbox = document.createElement('input');
			var label = document.createElement('label');
			label.innerHTML = cOption;
			label.htmlFor = "option" + i;
			cCheckbox.id = "option" + i;
			cCheckbox.className = "quiz-checkbox";
			cCheckbox.type = "checkbox";
			cCheckbox.name = "checkbox-group";
			cCheckbox.value = cOption;
			cDiv.appendChild(cCheckbox);
			cDiv.appendChild(label);
			oContainer.appendChild(cDiv);
		}
		appendAndResetContainers();
	}
	
	var validateAnswer = function(q){
		var selection;
		
		//which question type?
		if(q.question_type == 'radio' || q.question_type == 'choose'){
			selection = document.querySelector('input[name = "option-group"]:checked').value;
			return validateSelection(q.answer, selection, "single");
		}else if(q.question_type == 'multiple'){
			var checkboxes = document.getElementsByClassName('quiz-checkbox');
			var selArray = [];
			for(var i = 0; i<checkboxes.length; i++){ //get values of checked checkboxes
				var cb = checkboxes[i];
				if(cb.checked === true){
					selArray.push(cb.value);
				}
			}
			return validateSelection(q.answer, selArray, "multiple");
		}else if(q.question_type == 'dnd'){
			return false;		
		}else if(q.question_type == 'controller'){
			return false;		
		}
	};
	
	var validateSelection = function(answer, selection, type){
		if(type == "single"){
			//validate
			if(selection == answer){
				return true;
			}else{
				return wrong();
			}			
		}else if(type == "multiple"){
			selection.sort();
			answer.sort();
			if(selection.equals(answer)){
				return true;
			}else{
				return wrong();
			}
		}
		function wrong(){
			disableNextQuestionButton();
			createAlert("wrong");	
			return false;			
		}
	};
	
	var createAlert = function(type){
			var alertDiv = document.createElement('div');
			if(type == "wrong"){
				alertDiv.id = "alert-div";
				alertDiv.classList = "alert alert-danger";
				alertDiv.innerHTML = "Leider Nein, wähle eine andere Antwort.";
				if(currentQuestion.hint && currentQuestion.hint != ""){
					alertDiv.innerHTML += " <b>Hinweis: " + currentQuestion.hint + "</b>";
				}				
			}else if(type == "success"){
				alertDiv.classList = "alert alert-success";
				alertDiv.innerHTML = "Herzlichen Glückwunsch! Du hast dieses Quiz gemeistert =)";
			}

			var buttonContainer = document.getElementById('button-container');
			if(document.getElementById('alert-div')){
				var aDiv = document.getElementById('alert-div');
				aDiv.parentNode.removeChild(aDiv);
			}
			var quizContainer = buttonContainer.parentNode;
			quizContainer.insertBefore(alertDiv, buttonContainer);		
	};
	
	var pickQuestion = function(){
		return questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
	};
	
	var createCompleteButton = function(){
		var completeButton = document.createElement('button');
		completeButton.id = "complete-quiz";
		completeButton.className = "btn btn-primary";
		completeButton.innerHTML = "Quiz abschließen";
		var buttonContainer = document.getElementById('button-container');
		buttonContainer.appendChild(completeButton);
		//register event handler
		completeButton.addEventListener("click", function(e) {
			location.reload(); // reload page
		});
	};
	
	var finishQuiz = function(){
		var bContainer = document.getElementById('button-container');
		bContainer.removeChild(bContainer.childNodes[0]); //clear button-container
		var oContainer = document.getElementById('options-container');
		var qContainer = document.getElementById('question-container');
		oContainer.parentNode.removeChild(oContainer);
		qContainer.parentNode.removeChild(qContainer);
		createCompleteButton();
		createAlert("success");
		//update solved quizzes counter in local storage
		if(window.localStorage){
			if(!localStorage.getItem(quizID + "solved")){
				localStorage.setItem(quizID + "solved", true); 
				$("#progress-alert").fadeTo(2000, 500).slideUp(500, function(){
					$("#progress-alert").slideUp(500);
                });
				if(!localStorage.getItem("solvedQuizzes")){
					localStorage.setItem("solvedQuizzes", 1);
				}else{
					localStorage.solvedQuizzes ++;
				}
			}
		}		
	};
	
	var nextQuestion = function(){
		if(validateAnswer(currentQuestion)){
			if(questions.length > 0){ //there are still questions remaining
				var q = pickQuestion(); //randomly pick a question 
				createQuestion(q);
			}else{
				finishQuiz();
			}
		}
	};
	
	var createQuestion = function(q){
		currentQuestion = q;
		//Which question type?
		if(q.question_type == 'radio' || q.question_type == 'choose'){ //type is radio
			createQuestionRadio(q);
		}else if(q.question_type == 'controller'){ //type is controller
			createQuestionController(q);
		}else if(q.question_type == 'dnd'){ //type is dnd
			createQuestionDnD(q);
		}else if(q.question_type == 'multiple'){
			createQuestionMultiple(q);
		}
	};

	var startQuiz = function(id, qs){
		//initialize quiz
		init(id, qs);
		createQuestion(pickQuestion());
	};  

	var init = function(id, qs){ 
		quizID = id;
		//set questions
		while(questions.length){
		  questions.pop();
		}
		for(var i=0;i<qs.length;i++){
		  questions.push(qs[i]);
		}
	};

	//public interface
	return {
		startQuiz: startQuiz,
		nextQuestion: nextQuestion,
		questions: questions,
		currentQuestion: currentQuestion
	};

})();