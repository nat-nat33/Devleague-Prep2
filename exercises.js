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

