//Exercises: Level 1

//Exercises 1
let userage = Number(prompt("Enter your age"))

if(userage >= 18) {
    alert('You are old enough to drive')
} else {
    alert(`You have ${18 - userage} years to drive`)
}


//Exercises 2
let myage = Number(prompt('enter my age'));
let useage =  Number(prompt('enter your age'));

if (myage > userage) {
    alert(`I am ${myage - useage} year older than you`)
} else {
    alert(`You are ${useage - myage} older than me`)
}


//Exercises 3
let a = 20;
let b = 50;

if (a > b) {
	alert(
		"A is greater than b"
	);
} else {
	alert(
		`A is less than B`
	);
}

//Exercises 3b
(a > b) ? alert(`A is greater than`) : alert(`A is less than B`)

//Exercises 4
let dividable = Number(prompt(`Enter Number`))

if(dividable % 2 === 0){
    alert(`${dividable} is even number`)
} else {
    alert(`${dividable} is odd number`)
}

//Exercises: Level 2

//Exercises 1
let grade = prompt(`Pick a grade`)
let score = grade


if(grade >= 80 && score <= 100) {
    alert(`A`)
} else if(grade >= 70 && score <= 80) {
    alert(`B`)
} else if (grade >= 60 && score <= 70) {
    alert(`c`)
} else if (grade >= 50 && score <= 60) {
    alert(`D`)
} else if (grade >= 0 && score <= 49) {
    alert(`F`)
} else {
    alert(`Invaild score`)
}


//Exercises 2
let monthOfTheYear = prompt(`Enter season of the month`)
let season = monthOfTheYear
console.log(month)
if(season === 'september' || season === 'october' || season === 'november') {
    alert(`The season is Autumn`)
} else if (season === 'december' || season === 'january' || season ==='february') {
    alert(`This season is Winter`)
} else if(season === 'march' || season === 'april' || season ==='may') {
    alert(`This season is Spring`)
} else if (season === 'june' || season === 'july' || season ==='august') {
    alert(`This season is Summer`)
} else {
    alert(`Invaild season`)
}

//Exercises 3
let weekday = prompt(`Enter day of the week`).toLowerCase()

if(weekday === 'saturday' || weekday === 'sunday') {
    console.log(`${weekday} is a weekend`)
} else if (weekday === `Friday` || weekday === 'monday' || weekday === 'tuesday' || weekday === 'wednesday' || weekday === 'thursday') {
    console.log(`${weekday} is a weekday`)
} else {
    console.log(`Invalid weekday: ${weekday}`)
}

//Exercises: Level 3
let month = prompt(`Enter the month`).toLowerCase();

switch (month) {
    case 'january':
        console.log(`${month} has 31 days`)
        break;
    case 'february':
        console.log(`${month} has 28 days`)
        break;
    case 'march':
        console.log(`${month} has 30 days`)
        break;
}

