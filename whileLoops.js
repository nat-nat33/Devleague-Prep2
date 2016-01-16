// 1. Convert the following `for` loops to `while` loops
//
// 2. Replace Han with per-movie Wookie noises using `if...else if...else`:
// http://www.buzzfeed.com/jessicamisener/the-10-best-chewbacca-quotes

//var starWarsMovies = [ 'anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];
//function sortChronologically() {
//    for (var i = 0; i < 3; i++) {
//      var tmp = starWarsMovies[i];
//     starWarsMovies[i] = starWarsMovies[i + 3];
//   starWarsMovies[i + 3] = tmp;    
//}


var starWarsMovies = ['anh', 'tesb', 'rotj', 'tpm', 'aotc', 'rots', 'tfa'];

function sortChronologically() {
    var i = 0; //goes outside the loop because you just want to execute it one time. 
    while (i < 3) {
        var tmp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i = 3];
        starWarsMovies[i + 3] = tmp;
        ++i;
    }

}


function chewie() {
    console.log();
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log('Which way to Kashyyyk?');
        } else {
            console.log('Laugh it up fuzzball!');
        }
        i++;
    }

}


chewie();
sortChronologically();
chewie();