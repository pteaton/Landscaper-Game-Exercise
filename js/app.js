console.log("Lawn and Order");

const landscapeGame = {
	money: 0,
	tools: [
		{
			name: "Your Teeth",
			cost: 0,
			earnings: 1,
			upgradeCost: 5,
			nextTool: "Rusty Scissors",

		},
		{
			name: "Rusty Scissors",
			cost: 5,
			earnings: 5,
			upgradeCost: 25,
			nextTool: "Rush Lawnmower"
		},
		{
			name: "Push Lawnmower",
			cost: 25,
			earnings: 50,
			upgradeCost: 250,
			nextTool: "Battery-Powered Lawnmower"
		},
		{
			name: "Battery-Powered Lawnmower",
			cost: 250,
			earnings: 100,
			upgradeCost: 500,
			nextTool: "Starving Students"
		},
		{
			name: "Starving Students",
			cost: 500,
			earnings: 250,
			upgradeCost: 1000,
		}

	],
	startGame: function() {
		// explain game to the player 
		alert("Welcome to the Lawn and Order Game!")
		alert("Your objective is to build your landscaping company from cutting grass with your teeth to employing a whole crew of starving students! Yay capitalism!")
		// ask if the player wants to start the game or quit the game
		const userInput = prompt("So, wanna play?", "Yes or No")
		// if they choose to play
		if(userInput.toUpperCase() === "YES" || userInput.toUpperCase() === "Y"){
			// call cutWithTeeth
			this.playGame();
		// if they do not want to play
		} else if (userInput.toUpperCase() === "NO" || userInput.toUpperCase() === "N") {
			// alert goodbye
			alert("Okie dokie, have a good day!")
		} else {
		// else alert 
			// no respect for the rules?
			// start game function--
			alert("Please refresh and follow the rules!")
		}
	},
	alertStatus: function(){
		alert(`You have ${this.money}`)
	},
	playGame: function() {
		// loops through trough a tools array and calls cut and buy 
		for(let i = 0; i < this.tools.length; i++){
			this.cut(this.tools[i], this.tools[i + 1]);
			this.money -= this.tools[i + 1].cost;
			// this.buy(this.tools[i + 1]);

		};
	},
	cut: function(tool, nextTool) {
		alert(`You are now cutting with ${tool.name}! You are able to earn ${tool.earnings} each day you work. You currently have ${this.money}.`)
		let i = this.money;
		while(i < tool.upgradeCost){
			let userInput = prompt("What would you like to do?", "Cut Grass or See Standings")
			// if player enters cut the grass ---what about giving the option to enter CG as well as CUT CRASS
			if(userInput.toUpperCase() === "CUT GRASS") {
				// money += 1
				this.money += tool.earnings;
				i += tool.earnings;
			} else if (userInput.toUpperCase() === "SEE STANDINGS") {
				this.alertStatus();
				}
		}

		if(this.money === 1000){
			alert("The student has become the master, You win!")
		} else if (this.money >= tool.upgradeCost) {
			alert(`Congratulations! You've made enough money to upgrade to ${nextTool.name}. Now you will earn ${nextTool.earnings} per day!`)	
		}	
	},
}

landscapeGame.startGame();