document.addEventListener('DOMContentLoaded', function(){
	var stage_data = {
		dreamland_n64: {
			game: "Kirby",
			legality: "Legal",
			unlock: "Beende den Target Test mit jedem Charakter.",
			description: "Eine Stage mit drei Plattformen in einem Dreieck angeordnet. Der Baum in der Mitte pustet gelegentlich Wind, der dich auf der Stage verschiebt.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		battlefield: {
			game: "Super Smash Bros.",
			legality: "Legal",
			unlock: "All-Star Modus beenden.",
			description: "Eine Stage mit drei Plattformen in einem Dreieck angeordnet, ohne sonstige Gefahren.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		final_destination: {
			game: "Super Smash Bros.",
			legality: "Legal",
			unlock: "Beende Event 51.",
			description: "Eine flache Stage ohne jegliche Gefahren.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		fountain_of_dreams: {
			game: "Kirby",
			legality: "Legal",
			unlock: "Von Anfang an verfügbar.",
			description: "Eine Stage mit drei Plattformen in einem Dreieck angeordnet. Die unteren beiden Plattformen bewegen sich langsam auf und ab.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		pokemon_stadium: {
			game: "Pokémon",
			legality: "Legal",
			unlock: "Von Anfang an verfügbar.",
			description: "Diese Stage verläuft 5 Transformationen mit unterschiedlichen Layouts, die sich an den Pokémontypen Gras, Feuer, Wasser und Stein orientieren. Das Standardlayout besteht aus einer flachen Stage mit 2 Plattformen",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		yoshis_story: {
			game: "Yoshi",
			legality: "Legal",
			unlock: "Von Anfang an verfügbar.",
			description: "Eine Stage mit drei Plattformen in einem Dreieck angeordnet. Eine Wolke kreist unter der Stage, auf der man landen kann. Außerdem fliegen gelegentlich Shy Guys über der Stage, die geschlagen werden können.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		big_blue: {
			game: "F-Zero",
			legality: "Illegal",
			unlock: "Spiele 150 VS Kämpfe.",
			description: "Unter der Stage fahren sehr schnell Fahrzeuge. Fällst Du von der Stage erleidest Du Schaden durch diese. Die Stage an sich ist dabei ständig in Bewegung, es gibt auch Passagen, in denen nichts unter der Stage ist.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		brinstar: {
			game: "Metroid",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Die Stage besteht aus sich verändernden Felsstücken. Manchmal steigt Säure auf, die bei Berührung sehr viel Schaden und Rückstoß verursacht.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		brinstar_depths: {
			game: "Metroid",
			legality: "Illegal",
			unlock: "Spiele 50 VS Kämpfe.",
			description: "Die Stage ist ein riesiger unregelmäßig geformter Stein. Hinter der Stage ist ein großes Monster, das die Stage alle paar Sekunden rotiert.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		corneria: {
			game: "Star Fox",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Der Kampf findet auf einem Raumschiff statt. Gelegentlich fliegen Raumschiffe knapp über der Stage und schießen Laserstrahlen auf die Spieler. Die Raumschiffe können auch als Plattformen benutzt werden.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		flat_zone: {
			game: "Game & Watch",
			legality: "Illegal",
			unlock: "Beende den Klassik Modus mit Mr. Game & Watch.",
			description: "Die Stage besteht aus einem 2D Bildschirm, auf dem mehrere Linien zu sehen sind, die als Plattformen dienen. Auch die Charaktere sind 2D. Auf der Stage treten verschiedene Events, wie z.B. Feuerwehrmänner auf.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		fourside: {
			game: "EarthBound",
			legality: "Illegal",
			unlock: "Spiele 100 VS Kämpfe.",
			description: "Die Stage besteht aus mehreren Hochhausdächern zwischen denen Lücken sind. Ein Kran bewegt eine Plattform. Außerdem erscheint gelegentlich ein UFO, welches als rutschige Plattform dient.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		great_bay: {
			game: "The Legend of Zelda",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Diese Stage besteht aus Plattformen, die direkt über Wasser sind. Eine Schildkröte, die als Plattform dient, versinkt im Wasser und taucht wieder auf. Außerdem fliegt Tingle auf einem Ballon, auf dem auch Spieler stehen können, über der Stage. Bei Berührung verursacht er geringen Schaden.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		green_greens: {
			game: "Kirby",
			legality: "Illegal",
			unlock: "Spiele 20 Matches als Kirby.",
			description: "Die Stage besteht aus drei Plattformen. In der Mitte steht ein Baum, der gelegentlich Wind in eine Richtung pustet. Zwischen den Plattformen befinden sich zerstörbare Blöcke.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		icicle_mountain: {
			game: "Ice Climber",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Diese Stage bewegt sich ständig auf und ab. Spieler müssen darauf auchten, nicht den Bildschirm zu verlassen, während sie über die Plattformen navigieren. Viele Plattformen sind vereist und dadurch rutschig. Auf der Stage gibt es außerdem mehrere zerstörbare Eisblöcke.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		jungle_japes: {
			game: "Donkey Kong",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Eine Stage mit drei Plattformen auf einer Ebene. Über der mittleren Plattform befindet sich noch eine kleinere weitere Plattform. Unter der Stage bewegt sich ein schneller Fluss, der Spieler leicht aus dem Bildschirm trägt.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		kongo_jungle: {
			game: "Donkey Kong",
			legality: "Illegal",
			unlock: "Von Anfang an verfügbar.",
			description: "Bei dieser Stage handelt es sich um ein Floß mit mehreren Plattformen. Unter der Stage befindet sich ein Fass. Fällt ein Spieler in dieses, so kann er durch einen Knopfdruck in die Richtung geschossen werden, in die die Öffnung des Fasses zeigt. Außerdem gibt es hier kleine Krokodile, die bei Berührung Schaden und Rückstoß verursachen.",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		}
	};
	
	$('#stage-modal').on('show.bs.modal', function (event) {
	  var div = $(event.relatedTarget) // Element that triggered the modal
	  var stage_id = div.data('stage-id') // Extract info from data-* attributes
	  var stage_name = div.children('.stage-name').text()
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text(stage_name)
	  modal.find('#stage-modal-image').attr("src", stage_data[stage_id].image.url)
	  modal.find('#stage-modal-image').attr("alt", stage_data[stage_id].image.alt)
	  modal.find('#stage-modal-image').attr("title", stage_data[stage_id].image.title)
	  modal.find('#from-game').text(stage_data[stage_id].game)
	  modal.find('#legal').text(stage_data[stage_id].legality)
	  modal.find('#unlock-through').text(stage_data[stage_id].unlock)
	  modal.find('#stage-description').text(stage_data[stage_id].description)
	});			
}, false);	