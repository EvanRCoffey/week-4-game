//Determines what should happen on certain click events
var stage = 1;
//Empty object to store hero character stats
var hero = {};
//Empty object to store enemy character stats
var enemy = {};

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
		//...hero's attack power increases by his base attack power
		hero.ap += hero.baseAP;
		//If enemy is still alive...
		if (enemy.hp > 0) {
			//...enemy counterattacks hero
			hero.hp -= enemy.cp;
			//If hero is still alive...
			if (hero.hp > 0)
				//...update textarea with combat data
				$("#textArea").html("Combat data would go here!")
			//If hero is dead...
			if (hero.hp <= 0) {
				//...only the restart button will work
				stage = 4;
				//update textarea with defeat message
				$("#textArea").html("Defear message would go here!")
				//REVEAL RESTART BUTTON
			}
		}
		//If enemy is dead...
		if (enemy.hp <= 0) {
			//...clear enemy object
			enemy = {};
			//REMOVE DEFEATED CHARACTER FROM SCREEN
			//If no more enemies...
				//...only the restart button will work
				stage = 4;
				//...update textarea with game over message
				$("#textArea").html("Game over message would go here!")
				//REVEAL RESTART BUTTON
				restart()
				//If enemies remain (else)...
				//update textarea with victory message
				$("#textArea").html("Victory message would go here!")
				//...wait for user to select another enemy
				stage = 2;
		}
	}
}

//This function is called when "restart" button is clicked
function restart() {
	enemy = {};
	hero = {};
	stage = 1;
	//MOVE ALL 4 CHARACTERS TO "SELECT YOUR HERO" SECTION
}

//This button is to be displayed every time you reach stage 4
//<button type="button" class="btn btn-default" onclick="restart()">Left</button>



function selectLuke() {
	if (stage === 1) {
		hero = lukeSkywalker;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 2;
		//MOVE OTHER 3 CHARACTER BOXES TO "enemiesAvailable"
	}
	else if (stage === 2) {
		enemy = lukeSkywalker;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 3;
	}
}

function selectObiWan() {
	if (stage === 1) {
		hero = obiWan;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 2;
		//MOVE OTHER 3 CHARACTER BOXES TO "enemiesAvailable"
	}
	else if (stage === 2) {
		enemy = obiWan;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 3;
	}
}

function selectDarthSidious() {
	if (stage === 1) {
		hero = darthSidious;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 2;
		//MOVE OTHER 3 CHARACTER BOXES TO "enemiesAvailable"
	}
	else if (stage === 2) {
		enemy = darthSidious;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 3;
	}
}

function selectDarthMaul() {
	if (stage === 1) {
		hero = darthMaul;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 2;
		//MOVE OTHER 3 CHARACTER BOXES TO "enemiesAvailable"
	}
	else if (stage === 2) {
		enemy = darthMaul;
		//MOVE CHARACTER BOX TO "yourCharacter"
		stage = 3;
	}
}