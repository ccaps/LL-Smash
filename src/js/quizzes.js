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
	
	//quiz logic is defined here
	
	//questions
	intro_questions = [ 
        {
			question_type: 'radio', //radio, controller, dnd...
			question: 'Für welche Konsole erschien Super Smash Bros melee?', 
			options: ['SNES','Nintendo Switch','Nintendo Gamecube', 'Wii'], 
			answer: 'Nintendo Gamecube', 
			hint: ''
		},
        {
			question_type: 'radio', 
			question: 'Wann erschien Super Smash Bros Melee?', 
			options: [2015,2001,2003, 2007],
			answer: 2001,
			hint: 'In diesem Jahr geschah ein schlimmer Terroranschlag in New York'
		},
        {
			question_type: 'radio', 
			question: 'Wie heißt der Erfinder der Super Smash Bros Reihe?', 
			options: ['Masahiro Sakurai','Jacky Chan','Ip Man', 'Hideo Kojima'],
			answer: 'Masahiro Sakurai',
			hint: 'Er ist zwar ein Kämpfer, aber nicht wortwörtlich.'
		},
        {
			question_type: 'radio', 
			question: 'Wie viele Teile von Super Smash Bros gibt es insgesamt?', 
			options: [1,2,3,4],
			answer: 4,
			hint: 'Smash erschien ab dem N64'
		},
		{
			question_type: 'radio', 
			question: 'Welchem Genre ist SSBM zuzuordnen?', 
			options: ['First Person Shooter','MMO','RPG', 'Fighting games'], 
			answer: 'Fighting games', 
			hint: 'Ähnlich Street Fighter.'
		},
		{
			question_type: 'radio', 
			question: 'Wann verliert man in SSBM ein Leben?', 
			options: ['Wenn man den Bildschirm verlässt','Wenn der Lebensbalken leer ist','Wenn man keine Herzen mehr hat', 'Wenn man keine Munition mehr hat'], 
			answer: 'Wenn man den Bildschirm verlässt', 
			hint: 'Die Arena hat keine Abgrenzungen'
		},
		{
			question_type: 'radio', 
			question: 'Auf welche Weise wird der erlittene Schaden der Charaktere in SSBM ausgedrückt?', 
			options: ['Lebensbalken', 'Herzen', 'Prozentanzeige', 'Gar nicht'], 
			answer:  'Prozentanzeige',
			hint: 'Einzigartig'
		},
		{
			question_type: 'radio', 
			question: 'Was ist besser: 100% oder 0%?', 
			options: ['100%','0%'], 
			answer: '0%',
			hint: ''
		},
		{
			question_type: 'radio', 
			question: 'Was drückt die Prozentzahl aus?', 
			options: ['Lebensdauer','Menge an Hit Points', 'Siegwahrscheinlichkeit', 'Multiplikator des Rückstoßes'], 
			answer: 'Multiplikator des Rückstoßes',
			hint: 'Denke daran, wie man ein Leben verliert.'
		}
	];
	
	basics_questions = [ 
		{
			question_type: 'radio',
			question: 'Welcher Move schützt am besten davor, gegriffen zu werden?', 
			options: ['Spotdodge','Rollen','Blocken', 'Springen'], 
			answer: 'Spotdodge',
			hint: 'Eine stationäre Aktion' 
		},
		{
			question_type: 'radio',
			question: 'Was kann nur aus dem Sprint heraus ausgeführt werden?', 
			options: ['Doublejump','Aerials','Dash Attack', 'Smash Attack'], 
			answer: 'Dash Attack',
			hint: 'Was ist ein anderes Wort für einen kurzen Sprint?' 
		},
		{
			question_type: 'controller',
			question: 'Führe einen Spotdodge aus.',
			options: [['down', 'r'],['right', 'r'],['up', 'b'],['down', 'z']],
			video: {
				alt: 'Spotdodge',
				id: 'iYO2EsOovWQ'
			},
			answer: ['down','r'],
			hint: 'Eine Option zur Verteidigung'
		},
		{
			question_type: 'controller',
			question: 'Führe eine Dashattack aus.',
			options: [['right', 'a'],['up', 'r'],['right', 'right', 'a'],['right', 'right', 'b']],
			video: {
				alt: 'Dashattack',
				id: 'pWKz04292tI'
			},
			answer: ['right','right','a'],
			hint: 'Die doppelte Richtungstaste auf horizontaler Ebene repräsentiert einen Dash.'
		},
		{
			question_type: 'controller',
			question: 'Blocke einen Angriff.',
			options: [['a'],['l'],['b'],['z']],
			video: {
				alt: 'Blocking',
				id: '3NM57opN5eI'
			},
			answer: ['l'],
			hint: 'Eine der Schultertasten.'
		},
		{
			question_type: 'controller',
			question: 'Führe einen Down Air aus.',
			options: [['x','down','a'],['x','down','b'],['r','down','a'],['b','down','l']],
			video: {
				alt: 'Aerials',
				id: 'ZmyFOKKCHAc'
			},
			answer: ['x','down','a'],
			hint: 'Springen liegt auf der X-Taste.'
		},
		{
			question_type: 'controller',
			question: 'Führe einen Jab aus.',
			options: [['b','b','b'],['left','a'],['a','b','a'],['a','a','a']],
			video: {
				alt: 'Jab',
				id: 'R-w8MymJvOg'
			},
			answer: ['a','a','a'],
			hint: 'Nur eine Taste benötigt.'
		},
		{
			question_type: 'radio', 
			question: 'Wie unterscheiden sich Tilts in der Regel von Smashes?', 
			options: ['Langsamer und stärker','Gar nicht','Schneller und schwächer', 'Größere Reichweite'], 
			answer: 'Schneller und schwächer', 
			hint: 'Smashes können in der Regel nicht aufgeladen werden.'
		},
		{
			question_type: 'controller',
			question: 'Führe einen Up Tilt aus.',
			options: [['up','b'],['up','a'],['r','a'],['up','z']],
			video: {
				alt: 'Tilts',
				id: 'QGtPPtP4uD8'
			},
			answer: ['up','a'],
			hint: 'A steht für Angriff.'
		}
	];
	
	characters_questions = [ 
		{
			question_type: 'radio', 
			question: 'Aus welchem Spiel sind Marth und Roy?', 
			options: ['Super Mario','Persona','Xenoblade Chronicles', 'Fire Emblem'], 
			answer: 'Fire Emblem', 
			hint: 'Klingt ziemlich hot.'
		},
		{
			question_type: 'radio', 
			question: 'Was passiert, wenn Jigglypuffs Schild zerstört wird?', 
			options: ['Gar nichts','Es geht sofort KO','Es wird betäubt', 'Es erleidet hohen Schaden'], 
			answer: 'Es geht sofort KO', 
			hint: 'Die schlechteste Möglichkeit.' 
		},
		{
			question_type: 'multiple',
			question: 'Welche Charaktere verfügen über einen Konter?', 
			options: ['Mario','Marth','Roy','Peach','Bowser'],
			answer: ['Marth','Roy','Peach'], 
			hint: 'Zwei davon tragen ein Schwert.' 
		},
		{
			question_type: 'radio', 
			question: 'Aus welchem Spiel stammt Ness?', 
			options: ['Fire Emblem','Earthbound',"Yoshi's Island", 'Super Mario Bros.'], 
			answer: 'Earthbound', 
			hint: 'Nicht aus dem Mario Universum.'
		},
		{
			question_type: 'radio', 
			question: 'Was unterscheidet Zelda von allen anderen Charakteren?', 
			options: ['Einziger Charakter seiner Spielereihe','Zwei Charaktere in einem','Einziger weiblicher Charakter', 'Hat nur einen Sprung'], 
			answer: 'Zwei Charaktere in einem',
			hint: 'Zelda hat eine geheime Identität.' 
		},
		{
			question_type: 'multiple', 
			question: 'Welche Charaktere haben keinen Rettungsmove als Up B?', 
			options: ['Captain Falcon','Ganondorf','Mario','Yoshi','Jigglypuff'], 
			answer: ['Yoshi','Jigglypuff'], 
			hint: 'Ein Tier und ein Ball.' 
		},
		{
			question_type: 'radio', 
			question: 'Was ist Peach’s besondere Eigenschaft in der Luft?',
			options: ['Sie kann auf konstanter Höhe schweben','Sie ist enorm schnell','Sie hat mehr als zwei Sprünge', 'Sie kann ihren Up Special mehrfach benutzen'], 
			answer: 'Sie kann auf konstanter Höhe schweben', 
			hint: 'Sie kommt einfach nicht wieder runter...' 
		},
		{
			question_type: 'radio',
			question: 'Was unterscheidet Fox’s Laser von Falcos Laser?', 
			options: ['Langsamer und schwächer','Schneller, schwächer, unterbricht Gegner nicht','Gar nichts', 'Langsamer und stärker'], 
			answer: 'Schneller, schwächer, unterbricht Gegner nicht', 
			hint: 'Ziemlich flink.' 
		},
		{
			question_type: 'radio',
			question: 'Welcher ist der schwerste Charakter im Spiel?', 
			options: ['Bowser','Ganondorf', 'Donkey Kong', 'Samus'], 
			answer: 'Bowser', 
			hint: 'Sehr scharfkantig.' 
		}
	];
	
	stages_questions = [ 
		{
			question_type: 'choose', 
			question: 'Welche Stage bietet weder Plattformen noch Gefahren?',
			options: [{url:'src/images/stages/1x1/battlefield.jpg', name:'battlefield'},{url:'src/images/stages/1x1/corneria.jpg', name:'corneria'},{url:'src/images/stages/1x1/Pokemonstadium.jpg', name:'pokemon'}, {url:'src/images/stages/1x1/Finaldestination.jpg', name:'Final Destination'}], 
			answer: 'Final Destination', 
			hint: 'Schau Dir die Bilder genau an.' 
		},
		{
			question_type: 'multiple', 
			question: 'Auf welchen Stages befindet sich ein pustender Baum in der Mitte?', 
			options: ['Corneria','Dreamland N64','Big Blue', 'Green Greens'],
			answer: ['Dreamland N64','Green Greens'], 
			hint: 'Aus dem Kirby Universum.' 
		},
		{
			question_type: 'choose',
			question: 'Welche der gezeigten Stages ist legal?',
			options: [{url:'src/images/stages/1x1/brinstar.jpg', name:'brinstar'},{url:'src/images/stages/1x1/corneria.jpg', name:'corneria'},{url:'src/images/stages/1x1/dreamland.png', name:'dreamland'}, {url:'src/images/stages/1x1/Greengreens.jpg', name:'greenGreens'}],
			answer: 'dreamland',
			hint: 'Eine der Kirby Stages.'
		},
		{
			question_type: 'multiple',
			question: 'Was bezeichnet der Begriff "Legalität" im Bezug auf Stages?', 
			options: ['Es passieren auf der Stage keine Events','Im kompetitiven Spiel erlaubt', 'Die Stage ist vollkommen eben ohne Plattformen', 'Keine Umwelteinflüsse, die Schaden verursachen'], 
			answer: ['Im kompetitiven Spiel erlaubt', 'Keine Umwelteinflüsse, die Schaden verursachen'], 
			hint: 'Der Wettkampf muss fair bleiben.' 
		},
		{
			question_type: 'choose',
			question: 'Welche der gezeigten Stages stammt aus der Metroid Reihe?',
			options: [{url:'src/images/stages/1x1/brinstar.jpg', name:'brinstar'},{url:'src/images/stages/1x1/Fountainofdreams.jpg', name:'fountain'},{url:'src/images/stages/1x1/Finaldestination.jpg', name:'Finaldestination'}, {url:'src/images/stages/1x1/Fourside.png', name:'Fourside'}],
			answer: 'brinstar',
			hint: 'Sieht nach Säure aus.'
		},
		{
			question_type: 'choose',
			question: 'Welche der gezeigten Stages wurde für Super Smash Bros. eingeführt und entstammt keiner anderen Videospielreihe?',
			options: [{url:'src/images/stages/1x1/Brinstardepths.jpg', name:'Brinstardepths'},{url:'src/images/stages/1x1/JungleJapes.jpg', name:'JungleJapes'},{url:'src/images/stages/1x1/battlefield.jpg', name:'battlefield'}, {url:'src/images/stages/1x1/Pokemonstadium.jpg', name:'Pokemonstadium'}],
			answer: 'battlefield',
			hint: 'Ziemlich dunkel hier.'
		},
		{
			question_type: 'choose',
			question: 'Eine dieser Stages war schon in dem Super Smash Bros. Teil für N64 vorhanden. Welche?',
			options: [{url:'src/images/stages/1x1/dreamland.png', name:'dreamland'},{url:'src/images/stages/1x1/Yoshi\'sStory.png', name:'Yoshi\'sStory'},{url:'src/images/stages/1x1/Fourside.png', name:'Fourside'}, {url:'src/images/stages/1x1/Bigblue.jpg', name:'Bigblue'}],
			answer: 'dreamland',
			hint: 'Du bist vielleicht auf dem Holzweg.'
		},
		{
			question_type: 'choose',
			question: 'Auf welcher Stage bewegt sich die Kamera ständig auf und ab?',
			options: [{url:'src/images/stages/1x1/Kongojungle.jpg', name:'Kongojungle'},{url:'src/images/stages/1x1/corneria.jpg', name:'corneria'},{url:'src/images/stages/1x1/Greatbay.jpg', name:'Greatbay'}, {url:'src/images/stages/1x1/IcicleMountain.jpg', name:'IcicleMountain'}],
			answer: 'IcicleMountain',
			hint: 'Ganz kalt...'
		},
		{
			question_type: 'radio',
			question: 'Zu welchen Charakter gehört die Stage "Flat Zone"?', 
			options: ['Ness','Mr. Game&Watch', 'Marth', 'Samus'], 
			answer: 'Mr. Game&Watch', 
			hint: 'Achtung, der kommt flach.' 
		}
		
	];
	
	final_questions = [ 
		{
			question_type: 'controller',
			question: 'Du spielst Cpt. Falcon. Bei einem Angriff auf Fox verschätzt Du Dich und springst von der Stage. Wie kommst Du wieder zurück?',
			options: [['x','left','a'],['x','up','b'],['r','up','b'],['up','a','a']],
			video: {
				alt: 'Recovery Quiz',
				id: 'rFU4JfngEeE', //Pause: 0:02 (vor dem Sprung),
				stopAtSecond: 2
			},
			answer: ['x','up','b'],
			hint: 'Das Ziel ist es, an Höhe zu gewinnen.'
		},
		{
			question_type: 'controller',
			question: 'In diesem Beispiel spielst Du Fox. Du hast es geschafft, Cpt. Falcon von der Stage zu befördern. Allerdings weißt Du auch, dass dieser versuchen wird, sich zu retten und nach dem Einsatz seines Up Specials entweder an der Kante hängt oder kurz wehrlos ist. Wie bestrafst Du seine Recovery?',
			options: [['up','a'],['down','r'],['up','b'],['left','b']],
			video: {
				alt: 'Punishment Quiz',
				id: '3gVjtbOpVgo', //Pause´: 0:03 (vor dem Smash von Fox)
				stopAtSecond: 3
			},
			answer: ['up','a'],
			hint: 'Dabei handelt es sich um eine starke Attacke.'
		},
		{
			question_type: 'controller',
			question: 'Als Cpt. Falcon schlägst Du Fox von der Stage. Wie verhinderst Du seine Rückkehr zur Stage?',
			options: [['right','down','right','a'],['x','x','left','b'],['left','r','down','b'],['left','x','right','a']],
			video: {
				alt: 'Edgeguard Quiz',
				id: 'J0MkDdF1HOU', //Pause´: 0:03 (vor dem Sprung von Falcon)
				stopAtSecond: 4
			},
			answer: ['left','x','right','a'],
			hint: 'Von der Stage zu Fox zu springen ist ein guter Start.'
		},
		{
			question_type: 'controller',
			question: 'Du spielst Cpt. Falcon. Während Du blockst greift Fox unnachgiebig Dein Schild an, kommt aber nicht durch. Du vermutest, dass er es mit einem Griff versuchen wird, um Dein Schild zu umgehen. Was tust Du?',
			options: [['right','b'],['x','a'],['down','b'],['down','r']],
			video: {
				alt: 'Dodge Quiz',
				id: 'VmgUFyEkvYM', //Pause´: 0:01 (vor dem Spotdodge)
				stopAtSecond: 1
			},
			answer: ['down','r'],
			hint: 'Nur eine der Optionen nutzt eine Verteidigungstaste.'
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
	var questionAmount, tries = 0;
	var quizID, qDiv, oContainer, currentQuestion;
	var yt = null; //youtube player
	var controller_question_solved = false;

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
		var progressSpan = document.createElement('span');
		qSpan.innerHTML = q.question;
		progressSpan.id = "quiz-progress";
		var progress = questionAmount - questions.length;
		progressSpan.innerHTML = progress + "/" + questionAmount;
		if(q.question_type==="multiple")
		{
            qSpan.innerHTML = q.question + " <b style='color:darkred'><br>(Mehrfach Antwort nötig)</b>";
        }
		qContainer.appendChild(qSpan);
		qContainer.appendChild(progressSpan);
		qDiv.appendChild(qContainer);
		qDiv.appendChild(document.createElement('hr'));
		oContainer = document.createElement('div');
		oContainer.id = "options-container";
		oContainer.className = "container-fluid";
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

			if (t && t.type && (t.type.toUpperCase() === "RADIO" || t.type.toUpperCase() === "CHECKBOX")) { //radio button or checkbox is clicked
				enableNextQuestionButton();
			}else if(t && t.className && t.className === "choose-option"){ //choose option is clicked
				enableNextQuestionButton();
			}
		});
		
		bContainer.addEventListener("click", function(e) {
			t = e.target;
			if(t && t.classList.contains('key')){ //controller key is clicked
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
	    qDiv.insertBefore(document.createElement('hr'), oContainer.nextSibling);
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
				oImg.className += 'radioImage';
				oImg.setAttribute("style", "cursor:pointer");
				radioButton.setAttribute("style", "visibility: hidden; position: absolute");
				label.appendChild(radioButton);
				label.appendChild(oImg);
				oContainer.appendChild(label);
			}	
			
		}
		appendAndResetContainers();
	};

	var createQuestionController = function(q){ //function to create question of type controller
		controller_question_solved = false;
		//create html
		createQuestionStructure(q);	
		var row = document.createElement('div');
		row.className = "row";
		oContainer.appendChild(row);
		//create video container
		var vidDiv = document.createElement('div');
		vidDiv.id = "video_container";
		vidDiv.className = "col-md-7";
		var responsiveDiv = document.createElement('div');
		responsiveDiv.className = "embed-responsive embed-responsive-16by9";
		var vid = document.createElement('div');
		vid.id = "quiz_video";
		responsiveDiv.appendChild(vid);
		vidDiv.appendChild(responsiveDiv);
		oContainer.appendChild(vidDiv);
		//
		//create controller options container
		var optContainer = document.createElement('div');
		optContainer.id = "controller_options";
		optContainer.className = "col-md-5";
		var span = document.createElement('span');
		span.innerHTML = "Führe den richtigen Move auf dem Controller aus";
		span.id = "controller_options_span";
		var ul = document.createElement('ul');
		ul.id = "controller_options_ul";
		for(var i=0; i<q.options.length; i++){
			var li = document.createElement('li');
			var oArray = q.options[i];
			for(var e=0; e<oArray.length; e++){
				var opt = document.createElement('img');
				opt.src = "src/images/controller/"+oArray[e]+".png";
				opt.className = "img-inline";
				opt.width = 40;
				opt.alt = oArray[e];
				li.appendChild(opt);
			}
			ul.appendChild(li);
		}
		optContainer.appendChild(span);
		optContainer.appendChild(ul);
		oContainer.appendChild(optContainer);
		//
		//create controller input container
		var inputDiv = document.createElement('div');
		inputDiv.id = "input_container";
		inputDiv.className = "col-md-12";
		for(var i=0; i<q.answer.length; i++){
			var inputField = document.createElement('div');
			inputField.className = "display__field";
			inputDiv.appendChild(inputField);
		}
		oContainer.appendChild(inputDiv);
		//
		//create controller container
		var controllerDiv = document.createElement('div');
		controllerDiv.id = "controller_container";
		var controller = document.createElement('img');
		var aButton = document.createElement('img');
		var bButton = document.createElement('img');
		var xButton = document.createElement('img');
		var yButton = document.createElement('img');
		var lButton = document.createElement('img');
		var rButton = document.createElement('img');
		var joyStick = document.createElement('img');
		var leftStick = document.createElement('div');
		var rightStick = document.createElement('div');
		var upStick = document.createElement('div');
		var downStick = document.createElement('div');
		controller.src = "src/images/controller/controller.png";
		aButton.src = "src/images/controller/a.png";
		bButton.src = "src/images/controller/b.png";
		xButton.src = "src/images/controller/x.png";
		yButton.src = "src/images/controller/y.png";
		lButton.src = "src/images/controller/l.png";
		rButton.src = "src/images/controller/r.png";
		joyStick.src = "src/images/controller/n.png";
		controller.className = "controller";
		aButton.className = "key button button_a";
		bButton.className = "key button button_b";
		xButton.className = "key button button_x";
		yButton.className = "key button button_y";
		lButton.className = "key button button_l";
		rButton.className = "key button button_r";
		joyStick.className = "stick";
		leftStick.className = "key stick__cta stick__cta--left";
		rightStick.className = "key stick__cta stick__cta--right";
		upStick.className = "key stick__cta stick__cta--up";
		downStick.className = "key stick__cta stick__cta--down";
		aButton.dataset.key = "a";
		bButton.dataset.key = "b";
		xButton.dataset.key = "x";
		yButton.dataset.key = "y";
		lButton.dataset.key = "l";
		rButton.dataset.key = "r";
		leftStick.dataset.key = "left";
		rightStick.dataset.key = "right";
		upStick.dataset.key = "up";
		downStick.dataset.key = "down";
		controllerDiv.appendChild(controller);
		controllerDiv.appendChild(aButton);
		controllerDiv.appendChild(bButton);
		controllerDiv.appendChild(xButton);
		controllerDiv.appendChild(yButton);
		controllerDiv.appendChild(lButton);
		controllerDiv.appendChild(rButton);
		controllerDiv.appendChild(joyStick);
		controllerDiv.appendChild(leftStick);
		controllerDiv.appendChild(rightStick);
		controllerDiv.appendChild(upStick);
		controllerDiv.appendChild(downStick);
		oContainer.nextSibling.appendChild(controllerDiv);
		//
		appendAndResetContainers();
		
		//youtube player
		if(yt != null) {
			yt = null;
		}
		
		yt = new YT.Player('quiz_video', {
			videoId: q.video.id,
		    playerVars: { 
				'autoplay': 0,
				'controls': 0, 
				'rel' : 0
		    },
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onStateChange
			}
        });
		
		function onStateChange(e){
			if(currentQuestion.video.stopAtSecond){
				if (e.data === YT.PlayerState.PLAYING && !controller_question_solved) {
					
						refresh_interval_id = setInterval(function () {
							stopAt = currentQuestion.video.stopAtSecond;
							var current_time = extround(yt.getCurrentTime(), 10);
							if(current_time >= stopAt){
								if(current_time > stopAt)yt.seekTo(stopAt);
								yt.pauseVideo();
							}
						}, 100);
					
				 } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
					 clearInterval(refresh_interval_id);
				}
			}
			function extround(zahl,n_stelle) {
				zahl = (Math.round(zahl * n_stelle) / n_stelle);
				return zahl;
			}
		}
		function onPlayerReady(e){
			console.log("Player ready");
			setTimeout(function(){yt.playVideo();}, 1500);
		}
		//
		var keys = document.getElementsByClassName('key');
		for(var i=0; i<keys.length; i++){
			keys[i].addEventListener('click', function(){
				var display_fields = document.getElementsByClassName('display__field');
				var key = this.dataset.key;																		
				for(var i=0; i<display_fields.length; i++){
					var current_field = display_fields[i];
					if(!current_field.dataset.filled){
						current_field.classList.add(key+"_key");
						current_field.dataset.filled = key;
						break;
					}
				}
			}, false);
		}

        //
        //
        // STICK MOVES

        var stick = document.getElementsByClassName("stick")[0];
        var stick_boxes = document.getElementsByClassName("stick__cta");
        var stick_left = document.getElementsByClassName("stick__cta--left")[0];
        var stick_right = document.getElementsByClassName("stick__cta--right")[0];
        var stick_up = document.getElementsByClassName("stick__cta--up")[0];
        var stick_down = document.getElementsByClassName("stick__cta--down")[0];

        stick_left.onmouseover = function(){
            moveStick(stick, "x", -10 )
        };
        stick_right.onmouseover = function(){
            moveStick(stick, "x", 10 )
        };
        stick_up.onmouseover = function(){
            moveStick(stick, "y", -10 )
        };
        stick_down.onmouseover = function(){
            moveStick(stick, "y", 10 )
        };


        for (index = 0; index < stick_boxes.length; ++index) {
            stick_boxes[index].onmouseout = function(){
                stick.style.transform = "translateX(0)"
            }
        }

        function moveStick(stick, axis, translation){
            stick.style.transform = "translate" + axis.toUpperCase() + "(" + translation + "px)";
        }

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
			var input_keys = document.getElementsByClassName('display__field');
			var selArray = [];
			for(var i=0; i<input_keys.length; i++){
				var input = input_keys[i];
				selArray.push(input.dataset.filled);
			}
			return validateSelection(q.answer, selArray, "controller");
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
		}else if(type == "multiple" || "controller"){
			if(type == "multiple"){ //order doesn't matter for multiple
				selection.sort();
				answer.sort();			
			}
			if(selection.equals(answer)){
				return true;
			}else{
				return wrong();
			}
		}
		function wrong(){
			disableNextQuestionButton();
			createAlert("wrong");	
			tries ++;
			if(type == "controller"){
				var input_keys = document.getElementsByClassName('display__field');
				for(var i=0; i<input_keys.length; i++){
					var input = input_keys[i];
					if(input.dataset.filled){
						input.classList.remove(input.dataset.filled + "_key");
						input.removeAttribute("data-filled");
					}
				}				
			}
			return false;			
		}
	};
	
	var createAlert = function(type, msg){
			if (typeof msg === 'undefined') { 
				if(type == "wrong"){
					msg = 'Leider Nein, wähle eine andere Antwort.';
				}else if(type == "success"){
					msg = 'Herzlichen Glückwunsch! Du hast dieses Quiz gemeistert =)';
				} 
			}
			var alertDiv = document.createElement('div');
			if(type == "wrong"){
				alertDiv.id = "alert-div";
				alertDiv.classList = "alert alert-danger";
				alertDiv.innerHTML = msg;
				if(currentQuestion.hint && currentQuestion.hint != ""){
					alertDiv.innerHTML += " <b>Hinweis: " + currentQuestion.hint + "</b>";
				}				
			}else if(type == "success"){
				alertDiv.classList = "alert alert-success";
				alertDiv.innerHTML = msg;
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
		//clear button-container
		while (bContainer.firstChild) {
			bContainer.removeChild(bContainer.firstChild);
		}
		var oContainer = document.getElementById('options-container');
		var qContainer = document.getElementById('question-container');
		//oContainer.parentNode.removeChild(oContainer);
		qContainer.parentNode.removeChild(qContainer);
		createCompleteButton();
		createAlert("success");
		//update solved quizzes counter in local storage
		if(window.localStorage){
			if(!localStorage.getItem(quizID + "solved")){
                oContainer.innerHTML = "Herlichen Glückwunsch! Du hast einen neuen Charakter freigeschaltet.";
                localStorage.setItem(quizID + "solved", true);
				if(!localStorage.getItem("solvedQuizzes")){
					localStorage.setItem("solvedQuizzes", 1);
				}else{
					localStorage.solvedQuizzes ++;
				}
			}else{
				oContainer.innerHTML = "Quiz abgeschlossen.";
			}
		}		
		oContainer.innerHTML += "<br/><span>Falsche Antworten: "+tries+"</span>";
	};
	
	var nextQuestion = function(){
		if(validateAnswer(currentQuestion)){
			if(currentQuestion.question_type == "controller" && currentQuestion.video.stopAtSecond){
				controller_question_solved = true;
				createAlert("success", "Spitze! Das ist richtig =)");
				yt.seekTo(currentQuestion.video.stopAtSecond);
				var timeout = Math.round(yt.getDuration() - currentQuestion.video.stopAtSecond) * 1000;
				yt.playVideo();
				setTimeout(function(){nextOrFinish();}, timeout);
			}else{
				nextOrFinish();
			}
		}
		function nextOrFinish(){
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
		questionAmount = qs.length;
		if(tries != 0){
			tries = 0;
		}
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