/* Battle Game Project 10/17/2022 */
​
   
"use strict";

document.getElementById("button").addEventListener("click", trollBattle);


function trollBattle() {
	// Initial prompt question for the user stored in a variable
	var action = window.prompt("You're walking through a forest, minding your business, and a troll appears! \nDo you FIGHT the troll? \nDo you BRIBE the troll? \nOr RUN for your life?").toUpperCase();
	
	// switch statement to handle the initial player choice
	switch(action){
		case "FIGHT":
			var strong = window.prompt("Wow, how brave! \nAre you strong? (YES or NO)").toUpperCase();
			var smart = window.prompt("Are you a cunning warrior? (YES or NO)").toUpperCase();
			
			// If statement that analyzes the user responses
			if(strong === "YES" || smart === "YES"){
				document.getElementById("result").innerHTML = "You can either be stronger or smarter than a troll to survive. </br> You live another day!";
				
				document.getElementById("death").innerHTML = "";
				document.getElementById("win").play();
			} else {
				document.getElementById("death").innerHTML = "You're not strong or smart? </br> Why did you fight a troll? </br> You have died.";
				
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
			}
			break;
		case "BRIBE":
			var money = window.prompt("You have to pay the troll toll! \nDo you have money? (YES or NO)").toUpperCase();
			
			if(money === "YES"){
				var dollars = window.prompt("How much money do you have? \n(Please enter a number value)");
				dollars = parseInt(dollars);
				if(dollars >= 50){
					document.getElementById("result").innerHTML = "Great job!</br>You have paid the troll and live to tell about it!";
					document.getElementById("win").play();
					
					document.getElementById("death").innerHTML = "";
				}else {
					document.getElementById("death").innerHTML = "A troll needs more than that to let you live!</br>Smashy smashy, you're dead!";
					
					document.getElementById("result").innerHTML = "";
					document.getElementById("die").play();
				}
			} else {
				document.getElementById("death").innerHTML = "What were you going to bribe with? Your looks? </br>The troll is not impressed. You are dead";
				
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
			}
			break;
		case "RUN":
			var speed = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if(speed === "YES"){
				document.getElementById("result").innerHTML = "Your speed has allowed you to survive. </br>But can you live with your cowardice?";
				
				document.getElementById("death").innerHTML = "";
				document.getElementById("win").play();
			} else {
				document.getElementById("death").innerHTML = "You coward, if you choose to run, at least be faster than the troll. </br> You have died!";
				
				document.getElementById("result").innerHTML = "";
				document.getElementById("die").play();
				
			}
			break;
		default: 
			window.alert("Please type FIGHT, BRIBE or RUN to play");
			trollBattle();
	} // end of switch statement
	

}