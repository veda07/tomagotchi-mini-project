
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
	// Instatiate your Tomagotchi

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:
	// Hunger (1-10 scale)
	// Sleepiness (1-10 scale)
	// Boredom (1-10 scale)
	// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
	// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


class Tomagotchi {
	constructor(name, hunger, sleepiness, boredom, age) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		$('h1').text(`${this.name}`);
	}
}


const myTomagotchi =  new Tomagotchi ('myTomagotchi', 0, 0, 0, 1);
	console.log(myTomagotchi);

 // myTomagotchi.hunger max = 0; 
 // myTomagotchi.sleepiness max = 0;
 // myTomagotchi.boredom max = 0;



let timePassing;
let seconds = 0;
const secondsGoUp = () =>{
	   seconds++;
    $('.time').text(seconds)
    if(seconds % 10 === 0){
    	myTomagotchi.hunger++;
    	$('#hunger').text(myTomagotchi.hunger);
	}
	if(seconds % 10 === 0){
		myTomagotchi.sleepiness++;
		$('#sleepiness').text(myTomagotchi.sleepiness);
	}
	if(seconds % 15 === 0){
		myTomagotchi.boredom++;
		$('#boredom').text(myTomagotchi.boredom); 
	}
	if(seconds % 30 === 0){
		myTomagotchi.age++;
		$('#age').text(myTomagotchi.age);
	}
}
secondsGoUp();
console.log(secondsGoUp);


function feed () {
	if(myTomagotchi.hunger > 1){
		$('#display').text(`${petName} is hungry`);
	}

}
$('#feed').on('click', function(){
	myTomagotchi.hunger--;
	$('#hunger').text(myTomagotchi.hunger);
	
});
feed();

function play() {
	if(myTomagotchi.boredom > 1){
		$('#display').text(`${petName} is bored! Pet them`);
	}
}
$('#play').on('click', function(){
	myTomagotchi.boredom--;
	$('#boredom').text(myTomagotchi.boredom);
});
play();

function sleep() {
	if(myTomagotchi.sleepiness > 1){
		alert(`${petName} is tired! Put them to bed`);
	}

}


$('#sleep').on('click', function(){
	myTomagotchi.sleepiness--;
	$('#sleepiness').text(myTomagotchi.sleepiness);
});
sleep();

function die(){
	if(myTomagotchi.hunger == 10 || myTomagotchi.sleepiness == 10 || myTomagotchi.boredom == 10){
		$('h1').text('DEATH'); //messing around with this 
		
	}
}

$('form').on('submit', (e) => {
	e.preventDefault();
	console.log("go")
	timePassing = setInterval(secondsGoUp, 1000);
});



  $('.Tomagotchi').animate({
    left: '600px',
    height: '+=150px',
    width: '+=150px'

   
});

  $('.Tomagotchi').animate({
    right: '600px',
    height: '+=150px',
    width: '+=150px'

   
});

// const displayStats = () => {
// 	$('#hunger')
// 	$('#sleepiness')
// 	$('#boredom')
// 	$('#age')
// }













