var a = 5;
var b = 6;
function add(a,b) {
	return (a + b);
}	
var sum = add(a,b);

function sub(a,b){
	return (a - b);
}
var difference = sub(a,b);

function multiply(a,b){
	return (b * a);
}
var product = multiply(a,b);
 
 function checkDifference (X){
 	return "My football team lost" + X + "times this week";
 }
 var result = checkDifference(difference);

function checkSum(w){
	return "I CAN ADDZ" + w + "NUMBERS";
}
var yup = checkSum(sum);

function checkProduct(x,y){
	return x*y;
}
var ok = checkProduct(product,difference);

function addthnsub(x,y,z){
	var sum1= add(x,y);
	return sub(sum1,z);
}
var combine= addthnsub()


function addthnMultiply (x,y,z){
	var sum2= add(x,y);
	return multiply(sum2,z);
}
var merge= addthnmultiply()

function createFullName(firstName, lastName){
	return firstName+"  "+lastName;
}
var myfullName = createFullName("Bob", "Barker");

function verifyDrinkingAge(age){
	if(age < 21) { 
	}

	}
}
