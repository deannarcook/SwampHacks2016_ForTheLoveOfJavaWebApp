var coffeeScore = 0;
var javaScore = 0;
function hideQuestions()
{
	// test result page 
	/*document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display= "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "block"; */


	document.getElementById('q1Content').style.visibility = "visible";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none"; 
	
}

function increaseCoffeeScore()
{
		
		coffeeScore++;
		//window.alert("Your answer was correct. Coffee Score: " + coffeeScore);
}

function increaseJavaScore()
{
		javaScore++;
	
		//window.alert("Your answer was correct. Java Score: " + javaScore);
}


function checkScoreQ1()
{
	/* var score = Number(document.getElementById('choiceIcon4').value); */
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display= "block";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/*window.alert(score);*/
}

function checkScoreQ2()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "block";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ3()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "block";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ4()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "block";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ5()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "block";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ6()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "block";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ7()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "block";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ8()
{
	/* Number(document.getElementById('choiceIcon4').value);*/
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "block";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "none";
	/* window.alert(document.getElementById('choiceIcon4').value); */
}

function checkScoreQ9()
{
	
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "block";
	document.getElementById('results').style.display = "none";

}

function checkScoreQ10()
{
	document.getElementById('q1Content').style.display = "none";
	document.getElementById('q2Content').style.display = "none";
	document.getElementById('q3Content').style.display = "none";
	document.getElementById('q4Content').style.display = "none";
	document.getElementById('q5Content').style.display = "none";
	document.getElementById('q6Content').style.display = "none";
	document.getElementById('q7Content').style.display = "none";
	document.getElementById('q8Content').style.display = "none";
	document.getElementById('q9Content').style.display = "none";
	document.getElementById('q10Content').style.display = "none";
	document.getElementById('results').style.display = "block";

	var rawScore = coffeeScore + javaScore;
	var finalScore = (rawScore/10) * 100;
	var finalRounded = Math.round(finalScore) + "%";

	var finalCoffeeScore = (coffeeScore/5) * 100;
	var finalCoffeeRounded = Math.round(finalCoffeeScore) + "%";

	var finalJavaScore = (javaScore/5) * 100;
	var finalJavaRounded = Math.round(finalJavaScore) + "%";
	
	document.getElementById('finalScore').innerHTML= finalRounded;
	document.getElementById('finalCoffeeScore').innerHTML= finalCoffeeRounded;
	document.getElementById('finalJavaScore').innerHTML= finalJavaRounded;

	if (javaScore > coffeeScore) 
	{
		document.getElementById('youreBetterAt').innerHTML= "Based on the results you're more proficient in Java programmming! Scroll down to see the answer key.";
	}

	if (javaScore < coffeeScore) 
	{
		document.getElementById('youreBetterAt').innerHTML= "Based on the results you're more proficient in coffee knowledge! Scroll down to see the answer key.";
	}

	if (javaScore == coffeeScore) 
	{
		document.getElementById('youreBetterAt').innerHTML= "Based on the results you're equally proficient in the topics of Java programming and coffee! Scroll down to see the answer key.";
	}


}