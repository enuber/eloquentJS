//Started reading Eloquent JavaScript and, found that I enjoyed the exercises because though they seemed simple, they really make you stop and think. There are many ways of figuring the exercises out as well so in some cases, I am solving the same exercise in different ways.

//Chapter 2

//1. Write a loop that makes seven calls to console.log to output the following triangle:

var block = "#"

for (var i = 0; i < 7; i++) {
	var createTriangle = "", 
        j = i;  
  	while (j > 0) {
    	createTriangle += block;
        j -= 1;
    }  //end while loop
    console.log(createTriangle);     
} //end for loop

//similar answer just making it a do/while loop instead and j variable is changed

var block = "#"

for (var i = 0; i < 7; i++) {
	var createTriangle = "", 
        j = i + 1;  
  	do{
    	createTriangle += block;
        j -= 1;
    } while (j > 0)  
    console.log(createTriangle);
     
} //end for loop

//////////////////

var createTriangle = '';

for (var i = 0; i < 7; i++) {
    createTriangle += '#';
    console.log(createTriangle);
}



//2. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


//Just to note, the reason we use !(num%5) to find true is that when there is no remainder left we get 0 which is equal to false. So in order to find out if this is actually true we need the opposite and thus use !

for (num = 0; num < 100; num++) {
	if (!(num%3) && !(num%5)) {
    	console.log("FizzBuzz");
    } else if (!(num%5) && (num%3)) {
    	console.log("Buzz");
    } else if (!(num%3)) {
    	console.log("Fizz");
    } else {
    	console.log(num);
    }
} //end for loop

/////////// 
//This is the same thing but, instead of not operator I made the actual comparison

for (num = 0; num < 100; num++) {
	if ((num%3 == 0) && (num%5 == 0)) {
    	console.log("FizzBuzz");
    } else if ((num%5 == 0) && (num%3 != 0)) {
    	console.log("Buzz");
    } else if ((num%3 == 0)) {
    	console.log("Fizz");
    } else {
    	console.log(num);
    }
} //end for loop


//3. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

//In order to complete this, there needs to be two four loops. The first for loop is used to make a new line and the inner loop creates the row for that new line. Inside the inner for loop, there are multiple checks. First we have to check if we are on an even or odd line because the starting space will be different. Then we check the actual row to see what position it is, as even spaces will get a different square.

var size = 8,
    block = "#",
    space = " ",
    line = "";

for (var nextLine = 0; nextLine < size; nextLine++) {
	for (var createRow = 0; createRow < size; createRow++) {
      if (nextLine%2) {
        
        if (createRow%2) {          
        	line += space;
        } else {
        	line += block;
        }
      
      } else {
        
        if (createRow%2) {
        	line += block;
        } else {
        	line += space;
        }
      
      } //end if
    
    } //end createRow for loop
  line += "\n"
} //end nextLine for loop

console.log(line);


//Chapter 2

//1. Write a function min that takes two arguments and returns their minimum.

//Just to support all cases, I dealt with more than was required because Math.min does more as well. The if statement is set up specifically this way because passing in no arguements would trigger the isNAN statement. Also, checking strings against numbers still falls under the comparison operators so isNaN has to be checked first to pass the correct variable

function min(num1, num2) {    
    if ((num1 == null) || (num2 == null)) {
        return(Infinity);
    } else if ((isNaN(num1)) || (isNaN(num2)))  {
     	return(NaN);
    } else if (num1 < num2) {
    	return num1;
    } else if (num1 > num2) {
    	return num2;
    } else if (num1 = num2) {    
        return num1;
    } else {
        return("Something didn't work");
    }
};

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(6, 6));
console.log(min("three", 3));
console.log(min(7, "four"));
console.log(min());



//2 Recursion
//
//We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
//
// Zero is even.
//
// One is odd.
//
// For any other number N, its evenness is the same as N - 2.
//
//Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.


function isEven(num) {
	if (num == 0) {
    	return true;
    } else if (num == 1) {
    	return false;
    } else if (num < 0) {
   		 return isEven(-num);
    } else {
    	return isEven(num-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//This just complicates things but, you could also do it like this with an inner and outer function. In this case there really isn't a point.

function checkForEven(checkThis) {
  	function isEven(num){
    	if (num < 0) {
        	return isEven(-num)
        } else if (num == 0) {
        	return true;
        } else if (num == 1) {
        	return false;
        } else {
        	return isEven(num-2)
        }
    }
	return isEven(checkThis);
}

console.log(checkForEven(50));
console.log(checkForEven(75));
console.log(checkForEven(-1));

//3 Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
//
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.


function countBs(arg1) {
  var counter = 0;
	for (var i = 0; i < arg1.length; i++) {
    	if (arg1.charAt(i) == "B") {
        	counter += 1;
        }
    }
  return counter;
}

function countChar(word, letter) {
	var counter = 0;
    for (var i = 0; i < word.length; i++) {
    	if (word.charAt(i) == letter) {
        	counter +=1
        }
    }
  return counter;
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

