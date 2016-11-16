//Determines what should happen on certain click events
var stage = 1;
//Empty object to store hero character stats
var hero = {};
//Empty object to store enemy character stats
var enemy = {};
//Determines how many enemies remain
var enemiesRemaining = 3;
//Holds combat data string
var combatData = "";

//Luke Skywalker object, with stats
var lukeSkywalker = {
	hp:100, 
	baseAP:12, 
	cp:5, 
	ap:12
};

//Obi-Wan Kenobi object, with stats
var obiWan = {
	hp:120, 
	baseAP:8, 
	cp:10, 
	ap:8
};

//Darth Sidious object, with stats
var darthSidious = {
	hp:150, 
	baseAP:6, 
	cp:20,
	ap:6
};

//Darth Maul object, with stats
var darthMaul = {
	hp:180, 
	baseAP:5, 
	cp:25, 
	ap:5
};

//This function is called when "attack" button clicked
function attack(){
	//If no hero has been selected...
	if (stage === 1)
		//...inform user
		$("#textArea").html("Select a hero!")
	//If no enemy has been selected...
	if (stage === 2)
		//...inform user
		$("#textArea").html("Select an enemy!")
	//If a hero and an enemy have both been selected...
	if (stage === 3) {
		//...hero attacks enemy
		enemy.hp -= hero.ap;
		//...update HTML
		$("#textArea").html("Our hero was defeated!  The force was not strong with this one.")
		//...hero's attack power increases by his base attack power
		hero.ap += hero.baseAP;
		//If enemy is still alive...
		if (enemy.hp > 0) {
			//...enemy counterattacks hero
			hero.hp -= enemy.cp;
			//If hero is still alive...
			if (hero.hp > 0)
				//...load combat data into variable
				combatData = "Our hero attacked the enemy for " + (hero.ap - hero.baseAP) + 
				" HP.<br>  The enemy attacked our hero for " + enemy.cp + " HP.<br>  Hero HP after attack: " + hero.hp +
				".<br>  Enemy HP after attack: " + enemy.hp + ".<br>  Hero AP after attack: " + hero.ap + ".";
				//...update textarea with combat data
				$("#textArea").html(combatData)
			//If hero is dead...
			if (hero.hp <= 0) {
				//...clicking things will not do anything until stage is reset
				stage = 4;
				//...update textarea with defeat message
				$("#textArea").html("Our hero was defeated!  The force was not strong with this one.  Game restarted. <br>")
				//...restart game
				restart()
			}
		}
		//If enemy is dead...
		if (enemy.hp <= 0) {
			//..remove enemy box from the screen
			hideEnemy();
			//...clear enemy object
			enemy = {};
			//remove defeated character from screen
			if (enemiesRemaining === 0) {
				//...clicking things will not do anything until stage is reset
				stage = 4;
				//...update textarea with game over message
				$("#textArea").html("Our hero triumphs!  Game over.  Game restarted.  Select a hero to play again.")
				//...restart game
				restart()
			}
			//If enemies remain...
			else {
				//...update textarea with victory message
				$("#textArea").html("Our hero defeated the enemy!  Select another enemy.")
				//...wait for user to select another enemy
				stage = 2;
			}
		}
	}
}

//This function is called when the hero dies or when all three enemies are defeated
function restart() {
	stage = 1;
	enemiesRemaining = 3;
	hero = {};
	enemy = {};
	//Show, move, and reset character objects
	lukeSkywalker = {hp:100, baseAP:12, cp:5, ap:12};
	$("#LS").css("display", "inline-block");
	$("#LS").appendTo("#selectYourHero");
	obiWan = {hp:120, baseAP:8, cp:10, ap:8};
	$("#OW").css("display", "inline-block");
	$("#OW").appendTo("#selectYourHero");
	darthSidious = {hp:150, baseAP:6, cp:20, ap:6};
	$("#DS").css("display", "inline-block");
	$("#DS").appendTo("#selectYourHero");
	darthMaul = {hp:180, baseAP:5, cp:25, ap:5};
	$("#DM").css("display", "inline-block");
	$("#DM").appendTo("#selectYourHero");
}

//This function is called any time an enemy is defeated.  It hides that enemy from the screen.
function hideEnemy() {
	if (enemy.baseAP === 12) $("#LS").css("display", "none")
	if (enemy.baseAP === 8) $("#OW").css("display", "none")
	if (enemy.baseAP === 6) $("#DS").css("display", "none")
	if (enemy.baseAP === 5) $("#DM").css("display", "none")
}

//This function determines what happens when Luke's box is clicked
function selectLuke() {
	if (stage === 1) {
		hero = lukeSkywalker;
		//move hero to "yourCharacter"
		$("#LS").appendTo("#yourCharacter")
		stage = 2;
		$("#textArea").html("Select an enemy!")
		//move other 3 character boxes to "enemiesAvailable"
		$("#OW").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = lukeSkywalker;
		//move enemy to "fightSection"
		$("#LS").appendTo("#fightSection")
		$("#textArea").html("Click the attack button to have your hero attack the enemy!")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

//This function determines what happens when Obi-Wan's box is clicked
function selectObiWan() {
	if (stage === 1) {
		hero = obiWan;
		//move hero to "yourCharacter"
		$("#OW").appendTo("#yourCharacter")
		$("#textArea").html("Select an enemy!")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = obiWan;
		//move enemy to "fightSection"
		$("#OW").appendTo("#fightSection")
		$("#textArea").html("Click the attack button to have your hero attack the enemy!")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

//This function determines what happens when Darth Sidious's box is clicked
function selectDarthSidious() {
	if (stage === 1) {
		hero = darthSidious;
		//move hero to "yourCharacter"
		$("#DS").appendTo("#yourCharacter")
		$("#textArea").html("Select an enemy!")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#OW").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = darthSidious;
		//move enemy to "fightSection"
		$("#DS").appendTo("#fightSection")
		$("#textArea").html("Click the attack button to have your hero attack the enemy!")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

//This function determines what happens when Darth Maul's box is clicked
function selectDarthMaul() {
	if (stage === 1) {
		hero = darthMaul;
		//move hero to "yourCharacter"
		$("#DM").appendTo("#yourCharacter")
		$("#textArea").html("Select an enemy!")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#OW").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = darthMaul;
		//move enemy to "fightSection"
		$("#DM").appendTo("#fightSection")
		$("#textArea").html("Click the attack button to have your hero attack the enemy!")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}