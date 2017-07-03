document.addEventListener('DOMContentLoaded', function(){
	var character_data = {
		mario: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Ein klassischer Allrounder",
			image: {
				url: "src/images/characters/modal/mario.jpg",
				alt: "Mario",
				title: "Mario"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/k4F0fU5F9NY",
						alt: "Mario während Neutral Special"
					},
					description: "Mario wirft einen Feuerball. Dieser prallt von Oberflächen ab und verursacht geringen Schaden."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/8R-Rh_RM-I0",
						alt: "Mario während Up Special"
					},
					description: "Mario springt ein kurzes Stück diagonal nach oben. Getroffene Gegner erleiden Schaden."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/Oc1VnuB_ul4",
						alt: "Mario während Down Special"
					},
					description: "Mario dreht sich wie ein Tornado um die eigene Achse. Gegner werden darin gefangen und bekommen viel Schaden. Drücke die B-Taste wiederholt, um an Höhe zu gewinnen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/khQ19AyM148",
						alt: "Mario während Side Special"
					},
					description: "Mithilfe eines Capes dreht Mario seinen Gegner um. Das Cape ist außerdem in der Lage, Projektile zu reflektieren."
				}
			}
		},
		dr_mario: {
			game: "Dr. Mario",
			unlock: "Spiele den Klassik oder Abenteuer Modus ohne zu sterben, oder spiele 100 VS Kämpfe.",
			weight_category: "Medium",
			characteristics: "Eine stärkere Version von Mario.",
			image: {
				url: "src/images/characters/modal/dr_mario.jpg",
				alt: "Dr. Mario",
				title: "Dr. Mario"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/hUfeXXMxUh0",
						alt: "Dr. Mario während Neutral Special"
					},
					description: "Dr. Mario wirft eine Pille, die von Oberflächen abprallt und geringen Schaden verursacht."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/R_5zArxrZVA",
						alt: "Dr. Mario während Up Special"
					},
					description: "Dr. Mario springt ein kurzes Stück diagonal nach oben. Getroffene Gegner erleiden Schaden."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/C5IwHIKagug",
						alt: "Dr. Mario während Down Special"
					},
					description: "Dr. Mario dreht sich wie ein Tornado um die eigene Achse. Gegner werden darin gefangen und bekommen viel Schaden. Drücke die B-Taste wiederholt, um an Höhe zu gewinnen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/0GXA7dib4bU",
						alt: "Dr. Mario während Side Special"
					},
					description: "Mithilfe eines Capes dreht Dr. Mario seinen Gegner um. Das Cape ist außerdem in der Lage, Projektile zu reflektieren."
				}
			}
		},
		luigi: {
			game: "Super Mario Bros.",
			unlock: "Beende das erste Level das Abenteuer Modus, so dass eine 2 als Sekundenzahl auf dem Timer steht. Besiege danach Peach und Luigi unter einer Minute. Luigi kann auch nach 800 VS Kämpfen freigeschaltet werden.",
			weight_category: "Medium",
			characteristics: "Luigi ist generell sehr \"rutschig\". Das heißt, dass er sehr stark über den Boden gleitet nach einem Treffer und so leicht aus der Reichweite seiner Gegner kommt, was deren Kombos erschwert.",
			image: {
				url: "src/images/characters/modal/luigi.jpg",
				alt: "Luigi",
				title: "Luigi"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/ocsz8s3-Mnw",
						alt: "Luigi während Neutral Special"
					},
					description: "Luigi wirft einen Feuerball, der in einer geraden Linie fliegt und geringen Schaden verursacht."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/9uD-6spwWn8",
						alt: "Luigi während Up Special"
					},
					description: "Luigi springt ein Stück gerade nach oben. Gegner, die am Anfang der Animation getroffen erleiden sehr viel Schaden und fliegen früh von der Stage."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/LUz8o13ZR2M",
						alt: "Luigi während Down Special"
					},
					description: "Luigi dreht sich wie ein Tornado um die eigene Achse. Gegner werden darin gefangen und bekommen viel Schaden. Drücke die B-Taste wiederholt, um an Höhe zu gewinnen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/YjxMwP-nOBA",
						alt: "Luigi während Side Special"
					},
					description: "Halte B gedrückt, um den Move aufzuladen. Wenn Du loslässt schießt in die gedrückte Richtung. Mit einer Chance von 12,5% (1/8) wird der Move zu einer Fehlzündung. Dabei fliegt Luigi sehr weit und verursacht enormen Schaden und Rückstoß."
				}
			}
		},
		bowser: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Schwer",
			characteristics: "Bowser ist der größte und schwerste Charakter im Spiel. Er ist sehr langsam, aber teilt auch gewaltig aus.",
			image: {
				url: "src/images/characters/modal/bowser.jpg",
				alt: "Bowser",
				title: "Bowser"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/eJwpikF6y18",
						alt: "Bowser während Neutral Special"
					},
					description: "Bowser spuckt solange Feuer, wie Du die B-Taste gedrückt hältst. Dabei wird das Feuer mit der Zeit immer schwächer."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/owAa9vAT0lk",
						alt: "Bowser während Up Special"
					},
					description: "Bowser zieht sich in seinen Panzer zurück und dreht sich um die eigene Achse, wodurch du an Höhe gewinnen kannst."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/RcTg5mF5Q60",
						alt: "Bowser während Down Special"
					},
					description: "Auf dem Boden ausgeführt springt Bowser hoch in die Luft und lässt sich anschließend wieder fallen. Dieser Move verursacht sehr viel Schaden und kann sehr leicht Schilde zerstören. In der Luft ausgeführt springt Bowser nicht mehr, sondern führt nur den zweiten Teil des Moves aus."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/xiSoNvmBNLU",
						alt: "Bowser während Slide Special"
					},
					description: "Bowser greift seinen Gegner und beißt ihn. Danach hast Du die Möglichkeit den Gegner noch einmal zu beißen (A-Taste) oder ihn nach vorne oder hinten zu schmeißen (Linker Stick)."
				}
			}
		},
		peach: {
			game: "Super Mario",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Leicht",
			characteristics: "Peach ist vor allem in der Luft sehr stark und mobil. Sie kann eine Zeit lang auf einer Höhe schweben, wenn die Sprungtaste nach einem Sprung gedrückt gehalten wird.",
			image: {
				url: "src/images/characters/modal/peach.jpg",
				alt: "Peach",
				title: "Peach"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/RaNnX7QelWU",
						alt: "Peach während Neutral Special"
					},
					description: "Peach hält Toad schützend vor sich. Schlägt ein Gegner Toad, so wird der Schaden reflektiert."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/wtyi-3wK7-k",
						alt: "Peach während Up Special"
					},
					description: "Peach fliegt mit ihrem Regenschirm diagonal nach oben. Danach schwebt sie langsam mit geöffnetem Schirm nach unten. Du kannst den Schirm währenddessen schließen und öffnen, in Du den linken Stick nach unten bzw. oben drückst. Berühren Gegner den Schirm, so erleiden sie Schaden."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/knCKFzamHTU",
						alt: "Peach während Down Special"
					},
					description: "Peach zieht Rettiche aus dem Boden. Je wütender das Gesicht auf dem Rettich ist, desto mehr Schaden verursacht dieser. In sehr seltenen Fällen kann Peach auch Mr. Saturn, ein Bob-omb oder ein Laserschwert ziehen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/LqmKdNvCpJs",
						alt: "Peach während Slide Special"
					},
					description: "Peach katapultiert sich seitlich mit dem Hintern zuerst in einen Gegner und verursacht dabei Schaden und Rückstoß."
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
						url: "https://www.youtube.com/embed/BXolwj2fwK8",
						alt: "Yoshi während Neutral Special"
					},
					description: "Yoshi streckt seine Zunge aus. Berührt sie einen Gegner, so frisst er diesen und verpackt ihn in einem Ei. Je mehr Prozent der Gegner hat, desto länger bleibt er im Ei gefangen. Gefangene Gegner sind wehrlos und erleiden Schaden, auch wenn der Schaden etwas reduziert wird."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/edht_d0boPA",
						alt: "Yoshi während Up Special"
					},
					description: "Yoshi wirft ein Ei. Die Flugbahn kann gesteuert werden, indem Du die B-Taste unterschiedlich lang drückst und den Stick bewegst. Im Gegensatz zu den meisten anderen Charakteren gewinnt Yoshi nicht an Höhe bei seinem Up Special."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/BF0zquBf7ew",
						alt: "Yoshi während Down Special"
					},
					description: "Yoshi springt in die Luft und fliegt schnell auf den Boden zurück. In der Luft ausgeführt fliegt Yoshi nur nach unten, ohne den Sprung auszuführen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/r3dMCbZP66I",
						alt: "Yoshi während Side Special"
					},
					description: "Yoshi verwandelt sich in ein Ei und rollt auf der Stage umher. Gegner die ihn berühren erleiden Schaden abhängig von seiner Geschwindigkeit. Vorsicht: Fällst Du als Ei von der Stage bist Du machtlos!"
				}
			}
		},
		dk: {
			game: "Donkey Kong",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Schwer",
			characteristics: "Donkey Kong ist der zweitschwerste Charakter, besitzt aber dennoch eine überraschende Mobilität. Drückst du nach dem Greifen den Stick nach vorne, so trägt DK seinen Gegner auf dem Rücken. Du kannst dich nun mit deinem Gegner bewegen, bevor du ihn wirfst.",
			image: {
				url: "src/images/characters/modal/dk.jpg",
				alt: "DK",
				title: "DK"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/allDYmTEYFQ",
						alt: "DK während Neutral Special"
					},
					description: "DK lädt einen sehr starken Schlag auf. Du kannst das Aufladen abbrechen, indem du blockst, oder nach links / rechts gehst. Wirst du währenddessen getroffen, verlierst du die bisherige Ladung. Sobald der Schlag voll aufgeladen ist, steigt Dampf von DK's Kopf. Drückst du die B-Taste noch einmal, so führt er einen mächtigen Schlag aus, der Gegner von der Stage katapultiert."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/9bHcJaSYWVE",
						alt: "DK während Up Special"
					},
					description: "Wie ein Helikopter dreht DK sich um die eigene Achse und gewinnt dabei etwas an Höhe, aber viel an horizontaler Strecke."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/Hci2BkpXuyg",
						alt: "Dk während Down Special"
					},
					description: "DK schlägt auf den Boden und löst ein großflächiges Erdbeben um sich herum aus."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/2TMpq6EQcaU",
						alt: "DK während Slide Special"
					},
					description: "DK trifft seinen Gegner mit einer Kopfnuss. Ist der Gegner auf dem Boden, so wird er ein Stück darin vergraben und ist kurz wehrlos. In der Luft besitzt die Attacke enormen Rückstoß. Außerdem lassen sich sehr leicht Schilde mit ihr zerstören."
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
						url: "https://www.youtube.com/embed/IeOv6ZVH244",
						alt: "Captain Falcon während Neutral Special"
					},
					description: "Captain Falcon lädt einen starken Schlag auf, der viel Schaden und Rückstoß verursacht und führt diesen aus."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/edltYpZMQf8",
						alt: "Captain Falcon während Up Special"
					},
					description: "Captain Falcon springt nach oben. Getroffene Gegner werden kurz gehalten und dann von ihm weggestoßen. Trifft er einen Gegner, so kann der Move erneut ausgeführt werden."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/pomHETxCR_o",
						alt: "Captain Falcon während Down Special"
					},
					description: "Captain Falcon schießt mit einem starken Kick eine große Distanz nach vorne. In der Luft ausgeführt bewegt er sich diagonal nach unten anstatt horizontal in Blickrichtung."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/y59M1jzfl1o",
						alt: "Captain Falcon während Slide Special"
					},
					description: "Captain Falcon macht eine schnelle Bewegung nach vorne, kombiniert mit einem Haken nach oben. Führst du den Move in der Luft aus, wird der Gegner nach unten anstatt nach oben geschlagen und die Kraft des Moves erhöht sich."
				}
			}
		},
		ganondorf: {
			game: "The Legend of Zelda",
			unlock: "Beende das Event 29 oder spiele 600 VS Kämpfe",
			weight_category: "Schwer",
			characteristics: "Ganondorf ist sehr langsam, besitzt dafür aber einige der stärksten Attacken des Spiels, wie z.B. sein Down Air und Up Smash.",
			image: {
				url: "src/images/characters/modal/ganondorf.jpg",
				alt: "Ganondorf",
				title: "Ganondorf"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/rZBKAlQgnC4",
						alt: "Ganondorf während Neutral Special"
					},
					description: "Ganondorf lädt einen starken Schlag auf, der viel Schaden und Rückstoß verursacht und führt diesen aus."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/xGWelGsY8QA",
						alt: "Ganondorf während Up Special"
					},
					description: "Ganondorf springt nach oben. Getroffene Gegner werden kurz gehalten und dann von ihm weggestoßen. Trifft er einen Gegner, so kann der Move erneut ausgeführt werden."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/Qti9YRwwPYE",
						alt: "Ganondorf während Down Special"
					},
					description: "Ganondorf schießt mit einem starken Kick eine große Distanz nach vorne. In der Luft ausgeführt bewegt er sich diagonal nach unten anstatt horizontal in Blickrichtung."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/FsiARea87iY",
						alt: "Ganondorf während Slide Special"
					},
					description: "Ganondorf macht eine schnelle Bewegung nach vorne, kombiniert mit einem Haken nach oben."
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
						url: "https://www.youtube.com/embed/yICw8KIXRA",
						alt: "Falco während Neutral Special"
					},
					description: "Falco schießt einen Laserstrahl aus seiner Pistole, der zwar geringen Schaden verursacht, aber Gegner in ihren Aktionen unterbricht."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/coHVHMoZYCU",
						alt: "Falco während Up Special"
					},
					description: "Falco geht in Flammen auf bevor er in die Richtung fliegt, die Du mit dem Linken Stick direkt nach der Eingabe des Moves drückst."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/0wi8wLf04D8",
						alt: "Falco während Down Special"
					},
					description: "Falco aktiviert einen Reflektor um sich herum, der Projektile reflektiert und Gegnern leichten Schaden zufügt, die ihn berühren."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/DUBAW6f7Mqc",
						alt: "Falco während Slide Special"
					},
					description: "Falco schießt seitlich in die gedrückte Richtung. Ein sehr gutes Rettungsmanöver. Auf dem Boden getroffene Gegner werden in die Luft befördert, während Gegner in der Luft gerade nach unten geschlagen werden."
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
						url: "https://www.youtube.com/embed/GStDQRcq1ho",
						alt: "Fox während Neutral Special"
					},
					description: "Fox schießt einen Laserstrahl aus seiner Pistole, der zwar geringen Schaden verursacht, aber in einer schnellen Frequenz abgefeuert werden kann."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/NglUj9W_gYw",
						alt: "Fox während Up Special"
					},
					description: "Fox geht in Flammen auf bevor er in die Richtung fliegt, die Du mit dem Linken Stick direkt nach der Eingabe des Moves drückst."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/gfyqfMWaByg",
						alt: "Fox während Down Special"
					},
					description: "Fox aktiviert einen Reflektor um sich herum, der Projektile reflektiert und Gegnern leichten Schaden zufügt, die ihn berühren."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/G4w6O3oittQ",
						alt: "Fox während Slide Special"
					},
					description: "Fox schießt seitlich in die gedrückte Richtung. Ein sehr gutes Rettungsmanöver. Getroffene Gegner werden in die Luft befördert."
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
						url: "https://www.youtube.com/embed/g7TixgUKzFw",
						alt: "Ness während Neutral Special"
					},
					description: "Ness lädt einen grünen Energieball auf, solange die Taste gedrückt bleibt. Der Ball fliegt langsam nach unten und wird immer stärker. Getroffene Gegner erleiden massiven Schaden."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/MMqM79EG1l8",
						alt: "Ness während Up Special"
					},
					description: "Ness schießt eine kleine Energiekugel, die solange fliegt, bis du eine Fläche, deinen Gegner oder dich selbst triffst. Benutzt Du diesen Move in der Luft, so verlangsamt sich Deine Fallgeschwindigkeit. Um Dich zu retten musst Du Ness in einem Winkel treffen, der Ness in die gewünscht Richtung katapultiert."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/x6E56NCXpF0",
						alt: "Ness während Down Special"
					},
					description: "Ness umgibt sich mit einer Energiebariere, die Energiebasierte Projektile absorbiert und ihn heilt. Dazu gehören z.B. Samus' und Pikachus Neutral B. Wirkungslos gegen physische Projektile wie Links Pfeile. Die Barriere hält, solange Du die Taste gedrückt lässt."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/IKfcf01li7U",
						alt: "Ness während Slide Special"
					},
					description: "Ness wirft ein Feuerprojektil, dass beim Aufprall ein Stück Boden in Brand setzt. Auf dem Boden ist die Flugbahn horizontal, in der Luft diagonal nach unten."
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
						url: "https://www.youtube.com/embed/jFIyMyyKjhw",
						alt: "Ice Climbers während Neutral Special"
					},
					description: "Jeder Ice Climber feuer einen Eisblock ab, der über den Boden gleitet."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/ytLVAYQnLog",
						alt: "Ice Climbers während Up Special"
					},
					description: "Der von dir gespielte Ice Climber wirft seinem Partner ein Seil zu, an dem er ihn in die Höhe wirft. Anschließend zieht er sich zu diesem."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/qGlEvxBUe4E",
						alt: "Ice Climbers während Down Special"
					},
					description: "Jeder Ice Climber pustet eisigen Wind auf den Gegner. Auf dem Boden pusten beide in verschiedene Richtungen. Getroffene Gegner können eingefroren werden, was sie wehrlos macht."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/SSo0JBusQes",
						alt: "Ice Climbers während Slide Special"
					},
					description: "Die Ice Climbers strecken ihre Hämmer aus und drehen sich um die eigene Achse. Hämmerst Du die B-Taste, so kannst Du an Höhe gewinnen."
				}
			}
		},
		kirby: {
			game: "Kirby",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Leicht",
			characteristics: "Kirby ist durch seine geringe Größe schwer zu Treffen. Außerdem verfügt Kirby über 6 Sprünge und einen Rettungsmove, was es ihm ermöglicht, leicht zur Stage zurück zu kommen.",
			image: {
				url: "src/images/characters/modal/kirby.jpg",
				alt: "Kirby",
				title: "Kirby"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/418vPvTvnrY",
						alt: "Kirby während Neutral Special"
					},
					description: "Kirby saugt einen Gegner ein. Drückst Du die A-Taste, so spuckst du den Gegner von Dir. Drückst du die B-Taste, so kopierst du den Neutral Special Deines Gegners, was sich auch in Kirbys äußerem wiederspiegelt."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/DVYIANqAgVI",
						alt: "Kirby während Up Special"
					},
					description: "Kirby schwingt sich mit einem Schwert nach oben. Greifst du dabei nicht die Kante, saust er mit ausgestrecktem Schwert nach unten. Landet er damit auf dem Boden, so fliegt von dem Schwert aus ein Projektil mit kurzer Reichweite in Blickrichtung."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/xZ5gH4uWLxE",
						alt: "Kirby während Down Special"
					},
					description: "Kirby verwandelt sich in ein schweres Objekt. Während der verwandlung treffen ihn zwar keine Schläge, aber er kann immer noch gegriffen werden. In der Luft ausgeführt fällt er als schweres Objekt schnell nach unten und verursacht viel Schaden und Rückstoß."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/zD-akjZfs-c",
						alt: "Kirby während Slide Special"
					},
					description: "Kirby zieht einen Hammer und schlägt mit diesem zu. In der Luft dreht Kirby den Hammer im Kreis und trifft mehrfach. Der Hammer verursacht am meisten Schaden, wenn Du genau mit dem Kopf triffst."
				}
			}
		},
		samus: {
			game: "Metroid",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Schwer",
			characteristics: "Samus ist sehr gut darin, Gegner durch Distanzangriffe auf Abstand zu halten. Obwohl sie ein schwerer Charakter ist, fällt sie sehr langsam, wodurch eine große horizontale Strecke überwunden werden kann.",
			image: {
				url: "src/images/characters/modal/samus.jpg",
				alt: "Samus",
				title: "Samus"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/M33wbOJRBzE",
						alt: "Samus während Neutral Special"
					},
					description: "Samus lädt einen gewaltigen Schuss auf. Das Aufladen kann durch Blocken oder Bewegung unterbrochen werden. Wirst du während dem Aufladen getroffen, so musst du wieder bei 0 anfangen. Ist der Schuss aufgeladen, so wird er durch einen erneuten Neutral Special abgefeuert und verursacht gewaltigen Schaden und Rückstoß."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/KS8-UtbDymw",
						alt: "Samus während Up Special"
					},
					description: "Samus rollt sich zu einer Kugel zusammen und schießt nach oben. Getroffene Gegner werden mitgezogen und mehrfach getroffen."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/FvE5tj-zTLU",
						alt: "Samus während Down Special"
					},
					description: "Samus wird zu einer Kugel und lässt eine Mine fallen, die Gegner schaden zufügt. Trifft sie sich selbst, gewinnt sie ein wenig an Höhe. Dieser Move kann auch zur Rettung eingesetzt werden, indem Du dich mehrmals selbst mit der Mine triffst. Dies ist allerdings kein leichtes Unterfangen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/9hBBWw-wTt0",
						alt: "Samus während Slide Special"
					},
					description: "Samus schießt eine zielsuchende Rakete auf ihren Gegner. Führst du die Attacke wie einen Smash Angriff aus, so erscheint stattdessen eine schnelle, nicht zielsuchende Rakete, die mehr Schaden verursacht."
				}
			}
		},
		zelda: {
			game: "The Legend of Zelda",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Medium",
			characteristics: "Zelda beinhaltet 2 Charaktere. Sie kann sich durch ihren Down Special in Sheik verwandeln, was ihr gesamtes Arsenal an Moves verändert.",
			image: {
				url: "src/images/characters/modal/zelda.jpg",
				alt: "Zelda",
				title: "Zelda"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/IhdEtgZW7sg",
						alt: "Zelda während Neutral Special"
					},
					description: "Als Zelda: Zelda beschwört eine Kristallbarriere, die Projektile reflektiert. Als Sheik: Sheik lädt Nadeln auf. Lässt du die Taste los, so wirft sie die Nadeln auf ihren Gegner. In der Luft werden die Nadeln diagonal nach unten geworfen."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/2KLj0q6JG2w",
						alt: "Zelda während Up Special"
					},
					description: "Als Zelda: Zelda teleportiert sich sehr weit in die eingegebene Richtung. Als Sheik: Sheik teleportiert sich ebenfalls, allerdings eine kürzere Distanz. Dafür verursacht der Punkt ihres Verschwindens viel Schaden und Rückstoß."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/9RL1E0oVuCo",
						alt: "Zelda während Down Special"
					},
					description: "Zelda verwandelt sich in Sheik und umgekehrt."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/4ZYS1z7XNSw",
						alt: "Zelda während Slide Special"
					},
					description: "Als Zelda: Zelda schießt einen Feuerball, dessen Richtung Du steuern kannst. Der Ball fliegt, solange die die B-Taste gedrück hältst. Je länger er fliegt, desto stärker wird er. Als Sheik: Sheik zieht eine Metallkette, die du mit dem Stick bewegen kannst. Die Kette verursacht mit jeder Berührung geringen Schaden am Gegner."
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
						url: "https://www.youtube.com/embed/me7PbJmq4JE",
						alt: "Link während Neutral Special"
					},
					description: "Link schießt einen Pfeil ab. Dieser kann für mehr Schaden aufgeladen werden."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/3WDf34pb9II",
						alt: "Link während Up Special"
					},
					description: "Link schwingt sein Schwert im Kreis. Auf dem Boden ausgeführt bleibt er an der Position, in der Luft gewinnt er stark an Höhe."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/JfXbF3hl6N0",
						alt: "Link während Down Special"
					},
					description: "Link zieht eine Bombe, die bei Kontakt explodiert, wenn sie geworfen wird. Sie kann allerdings auch in Links Hand explodieren, was ihm geringen Schaden zuführt. Fliegst Du mit Link von der Stage, so solltest Du immer eine Bombe ziehen. Der Schaden, den Du Dir selbst verursachst, lässt Dich den Up Special erneut ausführen, solltest Du ihn schon verwendet haben."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/MbFXtZZuC5A",
						alt: "Link während Slide Special"
					},
					description: "Link wirft einen Boomerang. Du kannst die Flugbahn beeinflussen, indem Du beim Wurf nach oben oder unten steuerst."
				}
			}
		},
		young_link: {
			game: "The Legend of Zelda",
			unlock: "Beende den Klassik Modus mit 10 verschiedenen Charakteren oder spiele 500 VS Kämpfe.",
			weight_category: "Leicht",
			characteristics: "Young Link ist eine kleinere und schnellere Version von Link, dessen Attacken dafür etwas schwächer sind.",
			image: {
				url: "src/images/characters/modal/young_link.jpg",
				alt: "Young Link",
				title: "Young Link"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/n2y5SwSQnIg",
						alt: "Young Link während Neutral Special"
					},
					description: "Young Link schießt einen brennenden Pfeil ab. Dieser kann für mehr Schaden aufgeladen werden."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/xvhEYdwqvD0",
						alt: "Young Link während Up Special"
					},
					description: "Young Link schwingt sein Schwert im Kreis. Auf dem Boden ausgeführt bleibt er an der Position, in der Luft gewinnt er stark an Höhe."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/2dykLayhC0Q",
						alt: "Young Link während Down Special"
					},
					description: "Young Link zieht eine Bombe, die bei Kontakt explodiert, wenn sie geworfen wird. Sie kann allerdings auch in Young Links Hand explodieren, was ihm geringen Schaden zuführt. Fliegst Du mit Young Link von der Stage, so solltest Du immer eine Bombe ziehen. Der Schaden, den Du Dir selbst verursachst, lässt Dich den Up Special erneut ausführen, solltest Du ihn schon verwendet haben."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/lemCGlQszjs",
						alt: "Young Link während Slide Special"
					},
					description: "Young Link wirft einen Boomerang. Du kannst die Flugbahn beeinflussen, indem Du beim Wurf nach oben oder unten steuerst."
				}
			}
		},
		pichu: {
			game: "Pokémon",
			unlock: "Beende das Event \"Legendäre Pokemon\" oder spiele 200 VS Kämpfe.",
			weight_category: "Leicht",
			characteristics: "Pichu ist der kleinste und leichteste Charakter des Spiels und hat eine sehr kleine Range, ist aber überraschend stark für seine Größe.",
			image: {
				url: "src/images/characters/modal/pichu.png",
				alt: "Pichu",
				title: "Pichu"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/WWwaC76gG04",
						alt: "Pichu während Neutral Special"
					},
					description: "Pichu schleudert einen Blitz, der Böden und Wände entlangschießt. In der Luft wird der Blitz diagonal nach unten gefeuert."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/RCeJvo9qdt8",
						alt: "Pichu während Up Special"
					},
					description: "Pichu springt schnell in zwei Richtungen. Die Richtungen musst Du während des Moves mit dem linken Stick eingeben."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/R1af02viV_Y",
						alt: "Pichu während Down Special"
					},
					description: "Pichu beschwört eine Wolke, die einen Blitz auf es schießt. Der Blitz selbst trifft Gegner mehrmals. Gegner, die Pichu währenddessen berühren erleiden höheren Schaden und Rückstoß."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/pf1Y10Us-P0",
						alt: "Pichu während Slide Special"
					},
					description: "Pichu fliegt schnell seitlich und führt eine Kopfnuss aus. Je länger du auflädst, umso stärker und weiter wird der Move."
				}
			}
		},
		pikachu: {
			game: "Pokémon",
			unlock: "Von Anfang an verfügbar",
			weight_category: "Leicht",
			characteristics: "Pikachu ist ein kleiner schneller Charakter mit sehr guten Rettungsmöglichkeiten.",
			image: {
				url: "src/images/characters/modal/pikachu.jpg",
				alt: "Pikachu",
				title: "Pikachu"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/G3_qOJNvMvw",
						alt: "Pikachu während Neutral Special"
					},
					description: "Pikachu schleudert einen Blitz, der Böden und Wände entlangschießt. In der Luft wird der Blitz diagonal nach unten gefeuert."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/Y_ek3oHs3kw",
						alt: "Pikachu während Up Special"
					},
					description: "Pikachu springt schnell in zwei Richtungen. Die Richtungen musst Du während des Moves mit dem linken Stick eingeben."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/NfuoGOVk8b8",
						alt: "Pikachu während Down Special"
					},
					description: "Pikachu beschwört eine Wolke, die einen Blitz auf es schießt. Der Blitz selbst trifft Gegner mehrmals. Gegner, die Pikachu währenddessen berühren erleiden höheren Schaden und Rückstoß."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/iTrMYV9R-80",
						alt: "Pikachu während Slide Special"
					},
					description: "Pikachu fliegt schnell seitlich und führt eine Kopfnuss aus. Je länger du auflädst, umso stärker und weiter wird der Move."
				}
			}
		},
		jigglypuff: {
			game: "Pokémon",
			unlock: "Beende den Abenteuer Modus auf einer beliebigen Schwierigkeit oder spiele 50 VS Kämpfe.",
			weight_category: "Leicht",
			characteristics: "Jigglypuff ist der langsamste Charakter am Boden, aber der schnellste in der Luft. Außerdem ist es einer der leichtesten Charaktere des Spiels. Jigglypuff verfügt über 6 Sprünge, besitzt aber keinen Rettungsmove. Bricht das Schild von Jigglypuff, so geht es sofort K.O.",
			image: {
				url: "src/images/characters/modal/jigglypuff.jpg",
				alt: "Jigglypuff",
				title: "Jigglypuff"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/2Bbz2irtPNE",
						alt: "Jigglypuff während Neutral Special"
					},
					description: "Jigglypuff rollt über den Boden. Dieser Move kann aufgeladen werden, um schneller zu sein und mehr Schaden zu verursachen. Dabei kann während dem Rollen die Richtung gewechselt werden. Sobald ein Gegner getroffen ist, stoppt der Move. Vorsicht: Wenn Du von der Stage rollst, bist Du wehrlos."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/MM7Nz3JGEvo",
						alt: "Jigglypuff während Up Special"
					},
					description: "Jigglypuff fängt an zu singen. Gegner in seiner unmittelbaren Nähe schlafen ein, was eine sehr gute Möglichkeit ist, um seinen Down Special auszuführen."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/P4RHI3Wgv78",
						alt: "Jigglypuff während Down Special"
					},
					description: "Jigglypuff schläft ein. Gegner die es dabei berühren erleiden sofort massiven Schaden und fliegen sehr früh von der Stage, teilweise bei 30%-40%. Allerdings ist es nach Einsatz des Moves sehr lange wehrlos, weshalb dieser Move ein großes Risiko mit sich bringt."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/uYUaml10AXw",
						alt: "Jigglypuff während Slide Special"
					},
					description: "Jigglypuff schlägt seitlich, was viel Schaden verursacht, vor allen an Schilden."
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
						url: "https://www.youtube.com/embed/x1qxJvkSItg",
						alt: "Mewtwo während Neutral Special"
					},
					description: "Mewtwo lädt einen Energieball auf. Das Aufladen kann durch Blocken oder Bewegung unterbrochen werden. Wirst du während dem Aufladen getroffen, so musst du wieder bei 0 anfangen. Ist der Schuss aufgeladen, so wird er durch einen erneuten Neutral Special abgefeuert und verursacht gewaltigen Schaden und Rückstoß."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/YgBCbMGoG7E",
						alt: "Mewtwo während Up Special"
					},
					description: "Mewtwo teleportiert sich in die gedrückte Richtung. Während der Teleportation ist er vollkommen unverwundbar."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/RtrYkMShD1A",
						alt: "Mewtwo während Down Special"
					},
					description: "Mewtwo schießt einen Strahl mit kurzer Reichweite aus seinen Augen, der Gegner betäubt, die ihn anschauen."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/5sw8Kpc3CQ0",
						alt: "Mewtwo während Slide Special"
					},
					description: "Mewtwo wirbelt einen getroffenen Gegner herum. Außerdem kann der Move Projektile reflektieren, Gegner erleiden allerdings keinen Schaden durch das reflektierte Projektil."
				}
			}
		},
		mr_game_and_watch: {
			game: "Game & Watch",
			unlock: "Beende den Klassik, Abenteuer oder Zielscheiben Test Modus mit allen 24 Charakteren oder spiele 1000 VS Kämpfe.",
			weight_category: "Leicht",
			characteristics: "Mr. Game & Watch ist einer der leichtesten Charaktere des Spiels. Allerdings verfügt er über schnelle und starke Aerials, die gut für Kombos geeignet sind.",
			image: {
				url: "src/images/characters/modal/mr_game_and_watch.jpg",
				alt: "Mr Game and Watch",
				title: "Mr Game & Watch"
			},
			moves: {
				neutral: {
					video: {
						url: "https://www.youtube.com/embed/0e-3xDxd6u4",
						alt: "Mr Game & Watch während Neutral Special"
					},
					description: "Mr Game & Watch bewirft seinen Gegner mit Würstchen aus einer Bratpfanne. Dabei verursacht die Pfanne selbst mehr Schaden und Rückstoß als die Projektile."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/Vb3pbStYODM",
						alt: "Mr Game & Watch während Up Special"
					},
					description: "Mr Game & Watch wird durch ein Trampolin nach oben geschleudert."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/N-l22RaQ7_Y",
						alt: "Mr Game & Watch während Down Special"
					},
					description: "Mr Game & Watch zieht einen Eimer mit dessen Hilfe er Energiegeschosse absorbieren kann. Ist der Eimer voll, so kann er durch den Down Special ausgeleert werden. Getroffene Gegner erleiden enormen Schaden und Rückstoß."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/cSS_rxDSpz0",
						alt: "Mr Game & Watch während Slide Special"
					},
					description: "Mr Game & Watch schlägt mit einem Hammer zu, während er eine Zahl anzeigt. Jede Zahl hat einen unterschiedlichen Effekt. Je höher die Zahl, umso stärker ist der Move. Eine 9 (höchste Zahl) eliminiert sofort den Stock des Gegners. Die Zahlen sind vollkommen zufällig."
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
						url: "https://www.youtube.com/embed/rP40B0N-fwA",
						alt: "Marth während Neutral Special"
					},
					description: "Marth lädt einen Schlag auf, solange die B-Taste gedrückt wird. Lässt Du los, so wird der Schlag ausgeführt. Je länger die Aufladung ist, desto stärker wird der Schlag."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/IotFZLXF5RY",
						alt: "Marth während Up Special"
					},
					description: "Marth fliegt mit einem Schwertstreich gerade nach oben."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/DPAxB2glC80",
						alt: "Marth während Down Special"
					},
					description: "Marth führt einen Konter aus. Wird er während dem Konter getroffen, so erleidet er keinen Schaden, sondern schlägt den Gegner zurück."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/1PdEumV2Vmw",
						alt: "Marth während Slide Special"
					},
					description: "Marth führt eine Kombination aus, indem Du den Move vier mal hintereinander im richtigen Rhythmus die B-Taste drückst. Die Kombo verändert sich, wenn du nach oben oder unten steuerst."
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
						url: "https://www.youtube.com/embed/YshtEcZEM8g",
						alt: "Roy lädt einen Schlag auf, solange die B-Taste gedrückt wird. Lässt Du los, so wird der Schlag ausgeführt. Je länger die Aufladung ist, desto stärker wird der Schlag. während Neutral Special"
					},
					description: "Roy lädt einen Schlag auf, solange die B-Taste gedrückt wird. Lässt Du los, so wird der Schlag ausgeführt. Je länger die Aufladung ist, desto stärker wird der Schlag. Bei maximaler Aufladung wird der Getroffene Gegner sofort durch eine große Explosion eliminiert."
				},
				up: {
					video: {
						url: "https://www.youtube.com/embed/4YvnKaQnWzI",
						alt: "Roy während Up Special"
					},
					description: "Roy fliegt mit einem Schwertstreich diagonal in einer Kurve nach oben."
				},
				down: {
					video: {
						url: "https://www.youtube.com/embed/gvF8DZBlBqI",
						alt: "Roy während Down Special"
					},
					description: "Marth führt einen Konter aus. Wird er während dem Konter getroffen, so erleidet er keinen Schaden, sondern schlägt den Gegner mit dem 1,5fachen des Schadens zurück."
				},
				slide: {
					video: {
						url: "https://www.youtube.com/embed/2AWpdKvn2w0",
						alt: "Roy während Slide Special"
					},
					description: "Roy führt eine Kombination aus, indem Du den Move vier mal hintereinander im richtigen Rhythmus die B-Taste drückst. Die Kombo verändert sich, wenn du nach oben oder unten steuerst."
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
	  modal.find('#neutral-special-video').attr("src", character_data[character_id].moves.neutral.video.url)
	  modal.find('#neutral-special-video').attr("alt", character_data[character_id].moves.neutral.video.alt)
	  modal.find('#neutral-special-p').text(character_data[character_id].moves.neutral.description)
	  modal.find('#up-special-video').attr("src", character_data[character_id].moves.up.video.url)
	  modal.find('#up-special-video').attr("alt", character_data[character_id].moves.up.video.alt)
	  modal.find('#up-special-p').text(character_data[character_id].moves.up.description)
	  modal.find('#down-special-video').attr("src", character_data[character_id].moves.down.video.url)
	  modal.find('#down-special-video').attr("alt", character_data[character_id].moves.down.video.alt)
	  modal.find('#down-special-p').text(character_data[character_id].moves.down.description)
	  modal.find('#slide-special-video').attr("src", character_data[character_id].moves.slide.video.url)
	  modal.find('#slide-special-video').attr("alt", character_data[character_id].moves.slide.video.alt)
	  modal.find('#slide-special-p').text(character_data[character_id].moves.slide.description)
	});			
}, false);	