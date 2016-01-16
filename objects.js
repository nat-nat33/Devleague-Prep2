var plainBox = {};

plainBox.color = "green";
plainBox.size = Math.floor((Math.random()*20)+1);
plainBox.contents = [];

console.log(plainBox);


var stockCar = {
	model: "Ford",
	year: 2014,
	automaticTransmission: "Yes",
	driver: null,
	passengers: []
};

console.log(stockCar);

var plainPerson= {};
console.log(plainPerson);
function buildPerson(person, nameString, age){
	person.name= nameString;
	person.age= age;
	return person;
}

buildPerson (plainPerson, "Jack", 25);
console.log(plainPerson);
console.log(plainPerson.name);
console.log(plainPerson.age);

var arrayOfObjects= [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders){
	for(var i=0; i<orders.length; i++){
		var order = orders[i];
		console.log('====');
		console.log('id:', order.id);
		console.log('purchase date:', order.date);
}
}

printProcessedOrders(arrayOfObjects);

var newness = {
	a: 12,
	b: 5,
	result: 0
};

function brandSpankinNew(object){
	var total= object.a + object.b;
	object.result= total;
	return object;
}
 

var newnessResult= brandSpankinNew(newness);
console.log(newnessResult);







