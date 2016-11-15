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
//Empty object
var emptyObject = {};

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
				" HP.  The enemy attacked our hero for " + enemy.cp + " HP.  Our hero's HP is now " + 
				hero.hp + ", and the enemy's HP is " + enemy.hp + ".";
				//...update textarea with combat data
				$("#textArea").html(combatData)
			//If hero is dead...
			if (hero.hp <= 0) {
				//...only the restart button will work
				stage = 4;
				//update textarea with defeat message
				$("#textArea").html("Our hero was defeated!  The force was not strong with this one.  Game restarted.")
				//REVEAL RESTART BUTTON
				restart()
			}
		}
		//If enemy is dead...
		if (enemy.hp <= 0) {
			//...clear enemy object
			enemy = {};
			//REMOVE DEFEATED CHARACTER FROM SCREEN
			if (enemiesRemaining === 0) {
				//...only the restart button will work
				stage = 4;
				//...update textarea with game over message
				$("#textArea").html("Our hero triumphs!  Game over.  Game restarted.")
				//REVEAL RESTART BUTTON
				restart()
			}
			//If enemies remain...
			else {
				//update textarea with victory message
				$("#textArea").html("Our hero defeated the enemy!  Select another enemy.")
				//...wait for user to select another enemy
				stage = 2;
			}
		}
	}
}

//This function is called when "restart" button is clicked
function restart() {
	//Move all 4 characters to "select your hero" section
	$("#LS").appendTo("#selectYourHero")
	$("#OW").appendTo("#selectYourHero")
	$("#DS").appendTo("#selectYourHero")
	$("#DM").appendTo("#selectYourHero")
	stage = 1;
	enemiesRemaining = 3;
	hero = {};
	enemy = {};
	lukeSkywalker = {hp:100, baseAP:12, cp:5, ap:12};
	obiWan = {hp:120, baseAP:8, cp:10, ap:8};
	darthSidious = {hp:150, baseAP:6, cp:20, ap:6};
	darthMaul = {hp:180, baseAP:5, cp:25, ap:5};
}

function selectLuke() {
	if (stage === 1) {
		hero = lukeSkywalker;
		//move character box to "yourCharacter"
		$("#LS").appendTo("#yourCharacter")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#OW").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = lukeSkywalker;
		//move character box to "fightSection"
		$("#LS").appendTo("#fightSection")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

function selectObiWan() {
	if (stage === 1) {
		hero = obiWan;
		//move character box to "yourCharacter"
		$("#OW").appendTo("#yourCharacter")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = obiWan;
		//move character box to "fightSection"
		$("#OW").appendTo("#fightSection")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

function selectDarthSidious() {
	if (stage === 1) {
		hero = darthSidious;
		//move character box to "yourCharacter"
		$("#DS").appendTo("#yourCharacter")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#OW").appendTo("#enemiesAvailable")
		$("#DM").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = darthSidious;
		//move character box TO "fightSection"
		$("#DS").appendTo("#fightSection")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}

function selectDarthMaul() {
	if (stage === 1) {
		hero = darthMaul;
		//move character box to "yourCharacter"
		$("#DM").appendTo("#yourCharacter")
		stage = 2;
		//move other 3 character boxes to "enemiesAvailable"
		$("#LS").appendTo("#enemiesAvailable")
		$("#OW").appendTo("#enemiesAvailable")
		$("#DS").appendTo("#enemiesAvailable")
	}
	else if (stage === 2) {
		enemy = darthMaul;
		//move character box to "fightSection"
		$("#DM").appendTo("#fightSection")
		stage = 3;
		//Decrement "enemies remaining"
		enemiesRemaining--;
	}
}
