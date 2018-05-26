// chapter.js


var chapter_json_text = 
'{' + 
 	'"chapters": [' +
	 	'{' +
	 		'"idx": "a", ' +
	 		'"division": "GE", ' +
	 		'"sections": [' +
		 		'{' + 
		 			'"section": "", ' +
		 			'"dir": "" ' +
		 		'},' +
	 		']' +

	 	'},' +

	 	'{' +
	 		'"idx": "j", ' +
	 		'"division": "Neuro", ' +
	 		'"sections": [' +
				'{' + 
					'"section": "Intro", ' +
					'"dir": "Intro" ' +
				'},' +
				'{' + 
					'"section": "Cranial Nerve", ' +
					'"dir": "CranialNerve" ' +
				'},' +
				'{' + 
					'"section": "Sensorimotor", ' +
					'"dir": "Sensorimotor" ' +
				'},' +
				'{' + 
					'"section": "Pressure", ' +
					'"dir": "Pressure" ' +
				'},' +
				'{' + 
					'"section": "Hydrocephalus", ' +
					'"dir": "Hydrocephalus" ' +
				'},' +
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'},' +
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'},' +
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'},' +
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'},' +
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'},' +
				
				'{' + 
					'"section": "", ' +
					'"dir": "" ' +
				'}' +
	 		']' +
	 	'},' +

	 	// '{' +
	 	// 	'"idx": "a", ' +
	 	// 	'"division": "GE", ' +
	 	// 	'"sections": [' +
			// 	'{' + 
			// 		'"section": "", ' +
			// 		'"dir": "" ' +
			// 	'},' +
	 	// 	']' +
	 	// '},' +
	 	'{' +
	 		'"idx": "z", ' +
	 		'"division": "Req", ' +
	 		'"sections": [' +
		 		'{' + 
		 			'"section": "", ' +
		 			'"dir": "" ' +
		 		'},' +
	 		']' +

	 	'}' +
 	']' +
'}';

var chapter_json = JSON.parse(chapter_json_text);
