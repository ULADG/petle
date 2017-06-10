"use strict"

/* petla for */

for (var i = 4; i > 0; i--) {
	console.log(i);
}

for (var i = 0; i < 4; i++) {
	console.log(i);
}

/* petla while */
var it = 0;
while (it < 5) {
	console.log(it);
	it++;

}
/* przerywanie petli
 */

var a = 0;
while (a < 5) {
	console.log(++a);

	if (a == 2) {
		break;
	}

}


	/*
	petla do ...while 
	*/
	var iter = 20;
	do {
		console.log(iter);
		iter++;
		console.log(iter);

	} while (iter < 10);






/* podtinkrementacja vs preinkrementacja
 */



for ( var i=1 ; i<4 ; ) {
	console.log(++i);
	i = i + 1;
	console.log(i);
}
console.log('-----');
for ( var i=1 ; i<4 ; ) {
	console.log(i++);
}
console.log(i);
i = i + 1;


/* PRZESKAKIWANIE DO KOLEJNEJ ITERACJI - CONTINUE */

for ( var b = 0; b < 6 ; ++b ) {
	if ( b == 3 ) {
		continue;
	} else {
		console.log(b);
		
	}
	console.log("--");
}