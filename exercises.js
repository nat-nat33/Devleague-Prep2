function youGetTaco(action){
	if(action === "eat"){
		return 'EAT TACOS';
	} else{
		return ':\'(';
	}
}
var myAction = 'eat';
console.log('youGetTaco', myAction, youGetTaco(myAction));

var myOtherAction = 'drink';
console.log('youGetTaco', myOtherAction, youGetTaco(myOtherAction));


function isNumberGreaterThan(first, second){
	if(first>second){
		return true;
	} else {
		return false;
	}
}

console.log(isNumberGreaterThan(5,3));


//var myFirst = 9;
//var mySecond = 10;
//var firstMoreThan = isNumberGreaterThan(myFirst, mySecond);
//console.log('isNumberGreaterThan', myFirst, mySecond, firstMoreThan);

function isTrue(val){
	if(val == "cat"){
		return true;
	} else { 
		return false;}
}
console.log(isTrue("cat"));


function isTrue(val){
	if(val == "cat"){
		return true;
	} else { 
		return false;}
}
console.log(isTrue("dog"));

function isEqual(firstWord, secondWord) {
	if("firstWord" === "secondWord"){
		return "AWWWWRIGHT";
	} else {
		return "Y U NO MATCH";
	}
}
console.log(isEqual("Paradise", "Paradise"));

function isNotEqual(firstWord, secondWord) {
	if("Paradise" === "Paradise"){
		return "AWWWWRIGHT";
	} else {
		return "Y U NO MATCH";
	}
}
console.log(isNotEqual("Paradise", "Darkness"));


function doubleEquals (first, second){
	if(first > 2 && second < 1){
		return true;
	}else { return false;}
}

console.log(doubleEquals(3,0));


function looptoNumber(limit){
	for(var i=0; i<limit; i++){
		console.log("prep day" + i);
	}
}
looptoNumber(4); //invoking function with (limit) value

function showEachValue(characters){
	for(var i = 0; i < characters.length; i++){
		console.log(character[i]);
	}
}
var myCharacters = ["a", "b", "c"];


var phrase= "An apple a day";

function createArrayFromString(word){
	var myPhrase= [ ];
	for(var i=0; i< word.length; i++);{
		var currentLetter = word.charAt(i);
	if(currentLetter !== 'A' && currentLetter !== 'a'){
		newPhrase.push(currentLetter);}
	}
	return newPhrase; 
}

var myNewPhase= createArrayFromString(phrase);
console.log(myNewPhase);


var arrayNumber = [1, 2, 3, 4, 5];
var newNumber= 0;


function greatSummator(number){
	for(var i=0; i<number.length; i++){		
		newNumber += number[i];
	}
    console.log(newNumber);
}

greatSummator(arrayNumber);

function totalUnderWhatFor(numbers){
	var sum = 0;
	for(var i = 0; i< numbers.length; i++){
		var ithnumber= numbers[i];
		sum+= ithnumber;
		if(sum< total) {
			console.log("true");
		} else {
			console.log('false');
		}
		return sum;
	}
}

var total = 14;

var sumNumber= [1, 4, 2, 2];

console.log(totalUnderWhatFor(sumNumber));


//different way of doing totalUnderWhatFor DRY version
var sum=0;
var arrary= [1, 2, 3, 4, 5];
var totalNUm= 10;
function totalUnderWhatFor(arr, total) {
	for(var i=0; i< arr.length; i++){
		sum += arr[i];
	}
	return (sum<totalNum);
}
console.log(totalUnderWhatFor(array, totalNum));


function isTrue(bool){
	return bool === true;
}

var someArr = [true, true, true];
var someArr2= [true, false, true];

function checkTrueValues (arr){
	for(var i=0; i< arr.length; i++){
		if(! isTrue(arr[i])){
		return false;
		}
	}
	return true;
}

console.log(checkTrueValues(someArr));
console.log(checkTrueValues(someArr2));




