document.addEventListener('DOMContentLoaded', function(){
	var character_data = {
		mario: {
			game: "Super Mario Bros",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Mario",
			image: {
				url: "src/images/characters/modal/mario.jpg",
				alt: "Mario",
				title: "Mario"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		dr_mario: {
			game: "Dr. Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Dr. Mario",
			image: {
				url: "src/images/characters/modal/dr_mario.jpg",
				alt: "Dr. Mario",
				title: "Dr. Mario"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		luigi: {
			game: "Super Mario Bros",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Luigi",
			image: {
				url: "src/images/characters/modal/luigi.jpg",
				alt: "Luigi",
				title: "Luigi"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		bowser: {
			game: "Super Mario Bros",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Bowser",
			image: {
				url: "src/images/characters/modal/bowser.jpg",
				alt: "Bowser",
				title: "Bowser"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		peach: {
			game: "Super Mario Bros",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Peach",
			image: {
				url: "src/images/characters/modal/peach.jpg",
				alt: "Peach",
				title: "Peach"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		yoshi: {
			game: "Super Mario Bros",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Yoshi",
			image: {
				url: "src/images/characters/modal/yoshi.jpg",
				alt: "Yoshi",
				title: "Yoshi"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		dk: {
			game: "Donkey Kong Country",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von DK",
			image: {
				url: "src/images/characters/modal/dk.jpg",
				alt: "DK",
				title: "DK"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		c_falcon: {
			game: "F-Zero",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Cpt Falcon",
			image: {
				url: "src/images/characters/modal/c_falcon.jpg",
				alt: "Cpt Falcon",
				title: "Cpt Falcon"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		ganondorf: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Ganondorf",
			image: {
				url: "src/images/characters/modal/ganondorf.jpg",
				alt: "Ganondorf",
				title: "Ganondorf"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		falco: {
			game: "Star Fox",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Falco",
			image: {
				url: "src/images/characters/modal/falco.jpg",
				alt: "Falco",
				title: "Falco"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		fox: {
			game: "Star Fox",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Fox",
			image: {
				url: "src/images/characters/modal/fox.jpg",
				alt: "Fox",
				title: "Fox"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		ness: {
			game: "Mother / EarthBound",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Ness",
			image: {
				url: "src/images/characters/modal/ness.jpg",
				alt: "Ness",
				title: "Ness"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		ice_climbers: {
			game: "Ice Climber",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Ice Climbers",
			image: {
				url: "src/images/characters/modal/ice_climbers.jpg",
				alt: "Ice Climbers",
				title: "Ice Climbers"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		kirby: {
			game: "Kirby",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Kirby",
			image: {
				url: "src/images/characters/modal/kirby.jpg",
				alt: "Kirby",
				title: "Kirby"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		samus: {
			game: "Metroid",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Samus",
			image: {
				url: "src/images/characters/modal/samus.jpg",
				alt: "Samus",
				title: "Samus"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		zelda: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Zelda",
			image: {
				url: "src/images/characters/modal/zelda.jpg",
				alt: "Zelda",
				title: "Zelda"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		link: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Link",
			image: {
				url: "src/images/characters/modal/link.jpg",
				alt: "Link",
				title: "Link"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		young_link: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Young Link",
			image: {
				url: "src/images/characters/modal/young_link.jpg",
				alt: "Young Link",
				title: "Young Link"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		pichu: {
			game: "Pokemon",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Pichu",
			image: {
				url: "src/images/characters/modal/pichu.png",
				alt: "Pichu",
				title: "Pichu"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		pikachu: {
			game: "Pokemon",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Pikachu",
			image: {
				url: "src/images/characters/modal/pikachu.jpg",
				alt: "Pikachu",
				title: "Pikachu"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		jigglypuff: {
			game: "Pokemon",
			unlock: "Von Anfang an verfügbar",
			characteristics: "Eigenschaften von Jigglypuff",
			image: {
				url: "src/images/characters/modal/jigglypuff.jpg",
				alt: "Jigglypuff",
				title: "Jigglypuff"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		mewtwo: {
			game: "Pokemon",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Mewtwo",
			image: {
				url: "src/images/characters/modal/mewtwo.png",
				alt: "Mewtwo",
				title: "Mewtwo"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		mr_game_and_watch: {
			game: "Game & Watch",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Mr Game and Watch",
			image: {
				url: "src/images/characters/modal/mr_game_and_watch.jpg",
				alt: "Mr Game and Watch",
				title: "Mr Game and Watch"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		marth: {
			game: "Fire Emblem",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Marth",
			image: {
				url: "src/images/characters/modal/marth.jpg",
				alt: "Marth",
				title: "Marth"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		},
		roy: {
			game: "Fire Emblem",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Eigenschaften von Roy",
			image: {
				url: "src/images/characters/modal/roy.jpg",
				alt: "Roy",
				title: "Roy"
			},
			moves: {
				neutral: {
					video: {
						url: "src/videos/specials/mario/neutral.mp4",
						alt: "Mario während Neutral Special"
					}
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					}
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					}
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					}
				}
			}
		}
	};
	
	$('#character-modal').on('show.bs.modal', function (event) {
	  var div = $(event.relatedTarget) // Element that triggered the modal
	  var character_id = div.data('character-id') // Extract info from data-* attributes
	  var character_name = div.children('.character-name').text()
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text(character_name)
	  modal.find('#from-game').text(character_data[character_id].game)
	  modal.find('#unlocked-through').text(character_data[character_id].unlock)
	  modal.find('#weight-category').text(character_data[character_id].weight_category)
	  modal.find('#characteristics').text(character_data[character_id].characteristics)
	  modal.find('#character-modal-image').attr("src", character_data[character_id].image.url)
	  modal.find('#character-modal-image').attr("alt", character_data[character_id].image.alt)
	  modal.find('#character-modal-image').attr("title", character_data[character_id].image.title)
	  modal.find('#neutral-special-video').children('source').attr("src", character_data[character_id].moves.neutral.video.url)
	  modal.find('#neutral-special-video').children('source').attr("alt", character_data[character_id].moves.neutral.video.alt)
	  modal.find('#neutral-special-video').load()
	  modal.find('#neutral-special-video').get(0).pause()
	  modal.find('#up-special-video').children('source').attr("src", character_data[character_id].moves.up.video.url)
	  modal.find('#up-special-video').children('source').attr("alt", character_data[character_id].moves.up.video.alt)
	  modal.find('#up-special-video').load()
	  modal.find('#up-special-video').get(0).pause()
	  modal.find('#down-special-video').children('source').attr("src", character_data[character_id].moves.down.video.url)
	  modal.find('#down-special-video').children('source').attr("alt", character_data[character_id].moves.down.video.alt)
	  modal.find('#down-special-video').load()
	  modal.find('#down-special-video').get(0).pause()
	  modal.find('#slide-special-video').children('source').attr("src", character_data[character_id].moves.slide.video.url)
	  modal.find('#slide-special-video').children('source').attr("alt", character_data[character_id].moves.slide.video.alt)
	  modal.find('#slide-special-video').load()
	  modal.find('#slide-special-video').get(0).pause()
	});			
}, false);	