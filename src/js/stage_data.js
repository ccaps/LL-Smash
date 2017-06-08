document.addEventListener('DOMContentLoaded', function(){
	var stage_data = {
		dreamland_n64: {
			game: "Test",
			legality: "Test",
			unlock: "Von Anfang an verfügbar",
			description: "Test Test 123",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		battlefield: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		final_destination: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		fountain_of_dreams: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		pokemon_stadium: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		yoshis_story: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		big_blue: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		brinstar: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		brinstar_depths: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		corneria: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		flat_zone: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		fourside: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		great_bay: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		green_greens: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		icicle_mountain: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		jungle_japes: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			}
		},
		kongo_jungle: {
			game: "",
			legality: "",
			unlock: "Von Anfang an verfügbar",
			description: "",
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