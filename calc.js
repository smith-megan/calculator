const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === "+") {
		//addition
	console.log(num1+num2)
	} else if (mathSymbol === "-") {
		//subtraction
		console.log(num1-num2)
	} else if (mathSymbol === "*") {
		//multiplication
		console.log(num1*num2)
	} else if (mathSymbol === "/") {
		//division
		console.log(num1/num2)
	} else if (mathSymbol === "√") {
		// square root
		console.log(Math.sqrt(num1))
	} else if (mathSymbol === "^") {
		//exponential
		console.log(Math.pow(num1,num2))
	}	else if (mathSymbol === "**") {
		//square a number
		console.log(num1*num1)
	} else if (mathSymbol === "^3") {
		console.log(num1*num1*num1)
	} else if (mathSymbol === "%") {
		console.log(num1 % num2)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
