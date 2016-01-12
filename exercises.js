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














