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

var myFirst = 9;
var mySecond = 10;
var firstMoreThan = isNumberGreaterThan(myFirst, mySecond);
console.log('isNumberGreaterThan', myFirst, mySecond, firstMoreThan);


