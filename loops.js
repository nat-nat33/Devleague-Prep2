var presidents= ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function printContent(presidents, i){
	console.log('value of i is:',i);
	console.log('value of index is:' + presidents[i]);
}

for(var i = 0; i<presidents.length; i++){
	printContent(i);
}

//#2

function appendToString(stringTo, stringApp){
	return stringTo + stringApp;
}

var stringOfNumbers = '';

for(var i= 10; i <= 20; i++){
	stringOfNumbers += i;
}
console.log(stringOfNumbers);

var evenNumberArray= [];

for(var i= 0; i<99; i+=2){
	evenNumberArray.push(i);
}
console.log(evenNumberArray);

//OOPS ARRAY

var oopsArray = ["turn", ,"down", ,"for", ,"what"];
	for(var k=0; k< oopsArray.length; k++){
		console.log(k, oopsArray[k]);
		if(k % 2 ===1){
		//if(!oopsArray[k]){	
			oopsArray[k] = 'nope';
		}
	}

console.log();

var mygreeting = 'hi';
if(mygreeting === 'hi') 
	isTrue = false;
	mygreeting += '!';

console.log(mygreeting);




var isNapTime= false; 
var napSchedule= [false, false, true, false, true, true];

function nap(schedule){
	if(schedule === true){
		console.log('ZzZzZzZz');
	} else{
		console.log('Gotta get to work!');
		isNapTime = true;
	}
}
for(var i = 0; i<napSchedule.length; i++){
	
}






























































