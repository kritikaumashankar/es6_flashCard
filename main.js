$(document).ready(function(){


	//let questionArr=[{"What is ECMAScript?"  : "ECMAScript (ES) is a standard for scripting languages. JavaScript is an implementation of ECMAScript. Netscape submitted its first version of LiveScript (later renamed JavaScript) to ECMA and since then every implementation of JS has really been ECMAScript."}]
	let qaArr= [{ 
		"What is ECMAScript?" : "ECMAScript (ES) is a standard for scripting languages. JavaScript is an implementation of ECMAScript. Netscape submitted its first version of LiveScript (later renamed JavaScript) to ECMA and since then every implementation of JS has really been ECMAScript."
	}]
	let question =""
	

	displayQA = () => {
		$('.card').show()
		$('#question').html(randomQuestion()) 
	}



	randomQuestion = () => {
		//question = Object.entries(qaHash)[Math.floor(Math.random()*Object.entries(qaHash).length)][0]
		question = Object.keys(qaArr[Math.floor(Math.random()*Object.entries(qaArr).length)])[0]
		return question
		//return Object.keys(qaHash)[Math.floor(Math.random()*qaHash.length)]
	}

	startCard = () =>{
		displayQA()
			$('#start').hide()
			$('#answerDiv').hide()
			$('#ans').show()
	}
 	quesAnsInfo = (question, answer) => {
 		const hash={}
		 hash[question] = answer
		 qaArr =[hash,...qaArr]
		 console.log(qaArr)


	}

	displayHash = () => {
		$(".listDisplay").empty()
		for (i of qaArr) {
			$(".listDisplay").append(`<div class="row justify-content-md-center" > <div class="col-lg-2">${Object.keys(i)}</div> 
				<div class="col-lg-4">${i[Object.keys(i)]}</div> <div class="col col-lg-2"><button onClick="editFunc('${Object.keys(i)}')">Edit</button>
				        <button onClick="deleteFunc('${Object.keys(i)}')">Delete</button></div></div>`)

		}
		
	}
	editFunc= (key) =>{
		console.log('edit')
		console.log(key)
		// $('#addQ').val(key)
		// $('#addA').val(qaHash[key])
		let qa = qaArr.find( (qa1) => {
 			return Object.keys(qa1) == key
		})
		console.log(qa)
		$('#addQ').val(Object.keys(qa))
		$('#addA').val(qa[Object.keys(qa)])
		qaArr.shift()
	}

	deleteFunc = (key) => {
		let qa = qaArr.find( (qa1) => {
 			return Object.keys(qa1) == key
		})
		console.log(qaArr.indexOf(qa))
		qaArr.splice(qaArr.indexOf(qa),1)
		displayHash()
	}

	$('#aed').on('click',() => {
		$('#addEditDelete').show()
		$('#play').hide()
		
	})
			
	$('#playStart').on('click',() => {
		$('#addEditDelete').hide()
		$('#play').show()
	})
			
	$('#start').on('click', () => {
		startCard()
			setInterval(() => {
			startCard()
		}, 5000);
	})

	$('#ans').on('click', () =>{
		$('#answerDiv').show()
		console.log("inside answer div")
		let qa = qaArr.find( (qa1) => {
 			return Object.keys(qa1) == question
		})
		console.log(qa)
		$('#answer').html(qa[question]) 
		
		$('#ans').hide()
		
	})
	
	$( "#quit" ).click(() => {
    	location.reload(true);
	});


	$("#addS").on('click', () => {
		quesAnsInfo($('#addQ').val(),$('#addA').val())
		displayHash()
		$('#addQ').val('')
		$('#addA').val('')
	})
	
})