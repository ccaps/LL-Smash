document.addEventListener('DOMContentLoaded', function(){
	var character_data = {
		mario: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			characteristics: "Ein klassischer Allrounder",
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
					},
					description: "Test"
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: "Test"
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: "Test"
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: "Test"
				}
			}
		},
		dr_mario: {
			game: "Dr. Mario",
			unlock: "Spiele den Klassik oder Abenteuer Modus ohne zu sterben, oder spiele 100 VS Kämpfe.",
			characteristics: "Eine stärkere Version von Mario.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		luigi: {
			game: "Super Mario Bros.",
			unlock: "Beende das erste Level das Abenteuer Modus, so dass eine 2 als Sekundenzahl auf dem Timer steht. Besiege danach Peach und Luigi unter einer Minute. Luigi kann auch nach 800 VS Kämpfen freigeschaltet werden.",
			characteristics: "Luigi ist generell sehr \"rutschig\". Das heißt, dass er sehr stark über den Boden gleitet nach einem Treffer und so leicht aus der Reichweite seiner Gegner kommt, was deren Kombos erschwert.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		bowser: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Bowser ist der größte und schwerste Charakter im Spiel. Er ist sehr langsam, aber teilt auch gewaltig aus.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		peach: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Peach ist vor allem in der Luft sehr stark und mobil. Sie kann eine Zeit lang auf einer Höhe schweben, wenn die Sprungtaste nach einem Sprung gedrückt gehalten wird.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		yoshi: {
			game: "Super Mario World",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Yoshi verfügt über das stabilste Schild. Allerdings ist sein Up Special kein Rettungsmove. Um dies auszugleichen hat Yoshi den höchsten Doppelsprung des Spiels.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		dk: {
			game: "Donkey Kong",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Donkey Kong ist der zweitschwerste Charakter, besitzt aber dennoch eine überraschende Mobilität.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		c_falcon: {
			game: "F-Zero",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Captain Falcon ist einer der beliebtesten Charaktere der Serie. Er ist der schnellste Charakter auf dem Boden und verfügt über eine hohe Killpower, vor allem durch das ikonische Knie (Forward Air)",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		ganondorf: {
			game: "The Legend of Zelda",
			unlock: "Beende das Event 29 oder spiele 600 VS Kämpfe",
			weight_category: "Medium",
			characteristics: "Ganondorf ist sehr langsam, besitzt dafür aber einige der stärksten Attacken des Spiels, wie z.B. sein Down Air und Up Smash.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		falco: {
			game: "Star Fox",
			unlock: "Beende den 100 Mann Melee Modus oder spiele 300 VS Kämpfe",
			weight_category: "Medium",
			characteristics: "Falco hat den höchsten Sprung des Spiels und eine sehr hohe Mobilität. Außerdem kann Falco vernichtende Kombos mithilfe seines Down Airs durchführen.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		fox: {
			game: "Star Fox",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Fox ist ein extrem schneller Charakter, sowohl auf dem Boden als auch in der Luft, was es ihm ermöglicht, vernichtende Kombinationen durchzuführen.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		ness: {
			game: "Mother / EarthBound",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Ness verfügt über den stärksten Wurf des Spieles, seinen Back Throw. Abgesehen davon ist er besonders stark in der Luft, auch wenn sein Up B schwer zu benutzen ist.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		ice_climbers: {
			game: "Ice Climber",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Die Ice Climbers sind 2 Charaktere in einem. Du steuerst \"Popo\", \"Nana\" führt deine Attacken mit Dir aus. Dabei kann \"Nana\" allerdings auch von der Stage gestoßen werden, was Dich erheblich schwächt. Sehr schwer zu spielen!",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		kirby: {
			game: "Kirby",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Kirby ist durch seine geringe Größe schwer zu Treffen. Außerdem verfügt Kirby über 6 Sprünge und einen Rettungsmove, was es ihm ermöglicht, leicht zur Stage zurück zu kommen.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		samus: {
			game: "Metroid",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Samus ist sehr gut darin, Gegner durch Distanzangriffe auf Abstand zu halten. Obwohl sie ein schwerer Charakter ist, fällt sie sehr langsam, wodurch eine große horizontale Strecke überwunden werden kann.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		zelda: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Zelda beinhaltet 2 Charaktere. Sie kann sich durch ihren Down Special in Shiek verwandeln, was ihr gesamtes Arsenal an Moves verändert.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		link: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Link ist relativ langsam, verfügt aber dank seines Schwertes über eine große Reichweite. Außerdem kann Link 3 verschiedene Projektile verwenden, um Gegner von ihm fernzuhalten.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		young_link: {
			game: "The Legend of Zelda",
			unlock: "Beende den Klassik Modus mit 10 verschiedenen Charakteren oder spiele 500 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Young Link ist eine kleinere und schnellere Version von Link, dessen Attacken dafür etwas schwächer sind.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		pichu: {
			game: "Pokémon",
			unlock: "Beende das Event \"Legendäre Pokemon\" oder spiele 200 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Pichu ist der kleinste und leichteste Charakter des Spiels und hat eine sehr kleine Range, ist aber überraschend stark für seine Größe.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		pikachu: {
			game: "Pokémon",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Pikachu ist ein kleiner schneller Charakter mit sehr guten Rettungsmöglichkeiten.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		jigglypuff: {
			game: "Pokémon",
			unlock: "Beende den Abenteuer Modus auf einer beliebigen Schwierigkeit oder spiele 50 VS Kämpfe.",
			characteristics: "Pummeluff ist der langsamste Charakter am Boden, aber der schnellste in der Luft. Außerdem ist es einer der leichtesten Charaktere des Spiels. Pumeluff verfügt über 6 Sprünge, besitzt aber keinen Rettungsmove.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		mewtwo: {
			game: "Pokémon",
			unlock: "Spiele den Vs Modus 20 Stunden lang oder bestreite 700 Kämpfe.",
			weight_category: "Medium",
			characteristics: "Mewtwo hat die längsten Rollen des Spiels und sehr starke Würfe.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		mr_game_and_watch: {
			game: "Game & Watch",
			unlock: "Beende den Klassik, Abenteuer oder Zielscheiben Test Modus mit allen 24 Charakteren oder spiele 1000 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Mr. Game & Watch ist einer der leichtesten Charaktere des Spiels. Allerdings verfügt er über schnelle und starke Aerials, die gut für Kombos geeignet sind.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		marth: {
			game: "Fire Emblem",
			unlock: "Drei Möglichkeiten: Spiele den Klassik oder Abenteuer Modus mit allen 14 Starter Charakteren, benutze alle 14 Starter in VS Kämpfen, oder spiele 400 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Ein schneller, starker Charakter mit einer großen Reichweite. Alle Attacken von Marth werden sehr viel stärker, wenn Du genau mit der Schwertspitze triffst.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
				}
			}
		},
		roy: {
			game: "Fire Emblem",
			unlock: "Beende den Klassik oder Abenteuer Modus mit Marth oder spiele 900 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Ein schneller, starker Charakter mit einer großen Reichweite. Vor allem am Boden sehr stark. Im Gegensatz zu Marth verursacht der Angriff von Roy mehr Schaden je näher der Gegner am Schwertgriff getroffen wird.",
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
					},
					description: ""
				},
				up: {
					video: {
						url: "src/videos/specials/mario/up.mp4",
						alt: "Mario während Up Special"
					},
					description: ""
				},
				down: {
					video: {
						url: "src/videos/specials/mario/down.mp4",
						alt: "Mario während Down Special"
					},
					description: ""
				},
				slide: {
					video: {
						url: "src/videos/specials/mario/side.mp4",
						alt: "Mario während Slide Special"
					},
					description: ""
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
	  modal.find('#neutral-special-p').text(character_data[character_id].moves.neutral.description)
	  modal.find('#up-special-video').children('source').attr("src", character_data[character_id].moves.up.video.url)
	  modal.find('#up-special-video').children('source').attr("alt", character_data[character_id].moves.up.video.alt)
	  modal.find('#up-special-video').load()
	  modal.find('#up-special-video').get(0).pause()
	  modal.find('#up-special-p').text(character_data[character_id].moves.up.description)
	  modal.find('#down-special-video').children('source').attr("src", character_data[character_id].moves.down.video.url)
	  modal.find('#down-special-video').children('source').attr("alt", character_data[character_id].moves.down.video.alt)
	  modal.find('#down-special-video').load()
	  modal.find('#down-special-video').get(0).pause()
	  modal.find('#down-special-p').text(character_data[character_id].moves.down.description)
	  modal.find('#slide-special-video').children('source').attr("src", character_data[character_id].moves.slide.video.url)
	  modal.find('#slide-special-video').children('source').attr("alt", character_data[character_id].moves.slide.video.alt)
	  modal.find('#slide-special-video').load()
	  modal.find('#slide-special-video').get(0).pause()
	  modal.find('#slide-special-p').text(character_data[character_id].moves.slide.description)
	});			
}, false);	