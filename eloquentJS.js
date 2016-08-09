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

//Chapter 4

//1 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
//
//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


// Made a slight modification. Rather than use the console log to print out either the sum or the range, I called the sum function within the range function so that it spits them both out with the sum being above the array. It works just fine if you call sum(range()) as well but then you will get the sum twice which isn't ideal. I modified to show off both functions rather than either or.

function range(start, end, step) {
	var arr = [];
  
    if (step == undefined) {
    	step = 1;
    }
  
  	if (start < end) {
   		for (var i = start; i <= end; i += step) {
    		arr.push(i);
    	}
    } else if (start > end) {
    	for (var i = start; i >= end; i += step) {
        	arr.push(i);
        }
    }  
    sum(arr);
    return arr;
}

function sum(arr) {
    var arrayTotal = 0;
	for (var i = 0; i < arr.length; i++) {
    	arrayTotal += arr[i];
    }
    console.log("The total sum of the array is " + arrayTotal);
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(25, 3, -4));

//2 Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

//The first part can be accomplished a couple of ways. The first we have here we are pushing onto the array the end of the arr and pushing onto the new array. The for loop could be written differently but I wanted to specifically introduce the variable so that it was more easily understood.


function reverseArray(arr) {
	var newArr = [],
        reverseArrNum = arr.length - 1;
  
  	for (var i = 0; i < arr.length; i++) {
    	newArr.push(arr[reverseArrNum])
        reverseArrNum--
    }
  	return newArr;
}

// The second way was to use the unshift method and just put the array together by dismantling the original array.

function reverseArray(arr) {
	var newArr = [];
  
	for (var i = 0; i < arr.length; i++) {
		newArr.unshift(arr[i]);
    }
    return newArr;
}



function reverseArrayInPlace(arr) {
	var j = arr.length-1; //Holds the index of the last number in array
  	var pH; //placeholder
  	for (var i = 0; i < Math.floor(arr.length/2); i++) {
    	 ph = arr[i];
      	 arr[i] = arr[j];
      	 arr[j] = ph;
      	 j--
    }
    return arr;
}


console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


//3 Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

//Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element. If you haven’t already, also write a recursive version of nth.


//this was a bit differnt for me. I tried this by creating a list += and that didn't work. I also didn't define list as being = null which meant when the list was formed the final element in the list had a rest that was undefined. So you must declare the list to be null.

function arrayToList(arr) {
	var list = null;
  
  	for (var i = arr.length - 1; i >=0; i--) {
    	list = {value: arr[i], rest: list};
    }
  
  	return list; 
}


//without the hint on how to set up the for loop I had issues with this as well. up until now, I had only see the same structure for "for" loops. I read up on for loops and even with the hint tried to leave the second parameter out but that caused a problem. You could actually simplify by not declaring a variable and just using list but, I like the variable because it indicates the fact we are at a specific spot on the list. We itterate that list because of listLocation.rest and we are creating the array from the value of the listLocation we are at. 

function listToArray(list) {
  var arr = [];
  
  for (var listLocation = list; listLocation; listLocation = listLocation.rest) {
  	arr.push(listLocation.value);
  }

  return arr;
}

//I still don't know if this is actually correct. My thoughts on this one is that we send it in a list prepend(20, null) this will create {value: 20, rest: null} and send it back. we then prepend(10, newList) where newList is the aforementioned object so we now return {value: 10, rest: {value: 20, rest: null}}. Running in the console the object comes up in its own format. But based on my expained logic it appears to work. 

function prepend(arg1, list) {
	var newList = {value: arg1, rest: list};
  	return newList;
}

// I played around quite a bit with this one. I think it was the point. I was trying to access the object with the number directly. like list.value[num]. The hint was about using n+1 which just made things more confusing. I also was initially checking for list being null before I realized that the last item in the list will point to null so that couldn't be used. It was enough to find out if the list actually existed. The initial statement about making this a recursive function also tipped some information because it meant whatever we needed to do we were going to be calling the function over and over until a condition was met. Looking at the test we were given, this is finally how I came to a solution. given array [10, 20, 30] and a num of 1 we wanted to return the 20. This would be super easy if it were actually an array but, as a list we can't do that. I couldn't see how adding 1 which was given in the hint was going to get me anywhere either. So you have to count down to get to the spot you actually need. If we wanted the third value and num was 2 we would recurse two times instead of one. num = 1 the first time and this would give the value of 10 which isn't what we want, num = 0 when we recurse means we are at the right location of the object and we want to return it. 



function nth(list, num) {
  if (!list) {
  	return undefined;
  } else if (num == 0) {
  	return list.value;
  } else {
	return nth(list.rest, num - 1);  
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20







//4 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.
//
//To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

// This one I needed the hint. I was quite confused and struggled to get this one to work.


function deepEqual(arg1, arg2) {
  	
  	var numOfPropsA = 0, 
        numOfPropsB = 0;
  
  //here we simply check if the two are actually equal, if so we return true
  	if (arg1 === arg2) {
    	return true;
    }
  
    
    // now we have to check if the arguments are not null or not an object. From the hint we are given this...typeof x == "object" && x != null so I figured we had to check if the item is not an object or if the arg is equal to null to send back false. I tried using this for true but ultimately we want one true statement for a recursive function.
  	if (typeof(arg1) != "object" || arg1 == null) {
    	return false;
    }
  	
  	if (typeof(arg2) != "object" || arg2 == null) {
    	return false;
    }
    
    
  	//this is what I struggled with the most. first we have to go thru the property list. I had a counter for each set of properties because if they were not equal we would return false. the if statement was the trickiest part. It basically states that if there isn't a property in arg1 we will be returning false but first we have the rest of the or statement. It makes the function recursive. It sends to the function again the actual property values of arg1 and arg2, in other words it will cycle thru the properties to verify if the entire object is the same or not. If one or the other isn't met we return true.
  	for (var property in arg1) {
    	numOfPropsA += 1;    
  
        for (var property in arg2) {
            numOfPropsB += 1;
            if (!(property in arg1) || !deepEqual(arg1[property], arg2[property])) {
                return false;               
            }
        }
     }
  	
  	return (numOfPropsA == numOfPropsB);
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



// Chapter 5


//1 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

//You can include a start argument but, if you leave it off and have at least one element in the array it starts at 0.

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a, b) {
	return(a.concat(b));
}), 1);

//4 Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an array element as argument, returns true or false. Just like && returns a true value only when the expressions on both sides are true, every returns true only when the predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at the values after that. Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.


//These functions are very similar. They both test for isNaN however, the every one checks to see if they are all not a number. If so, we return true. The tricky part is that isNaN(NaN) returns true which we want but if it is true we don't want to return false, we want the opposite so we use the not operator. !true is false. So if all numbers are NaN the for loop expires and we return true. Else if any are actually a number we get !false which is true and will return false.

function every(arr, condition) {
	for (var i = 0; i < arr.length; i++) {
    	if (!condition(arr[i])) {
           	return false;
           } //end if
    } //end for
  return true;
}

//similar situtation but, all we want is at least one element in the array to be NaN so we don't need to worry about using the not operator. If all elements in an array are a number the loop will end and we send back false. If even one is NaN we found one so can send back true.

function some(arr, condition) {
	for (var i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
      	return true;
      } //end if
    }//end for
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

//Chapeter 6

//1 Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name. Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values. Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

//Hint: Adding a getter property to the constructor can be done with the Object.defineProperty function. To compute the distance from (0, 0) to (x, y), you can use the Pythagorean theorem, which says that the square of the distance we are looking for is equal to the square of the x-coordinate plus the square of the y-coordinate. Thus, √(x2 + y2) is the number you want, and Math.sqrt is the way you compute a square root in JavaScript.


//Problem was straight forward. Just read and write from it. The hint gave the formula for length. When a getter but no setter is defined, writing to the property is simply ignored.


function Vector(x, y) {
	this.x = x;
  	this.y = y;
}

Vector.prototype.plus = function(anotherVec) {
	return new Vector(this.x + anotherVec.x, this.y + anotherVec.y);
}

Vector.prototype.minus = function(anotherVec) {
	return new Vector(this.x - anotherVec.x, this.y - anotherVec.y);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5



//2 Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.You’ll have to store all three constructor arguments in the instance object. The minWidth and minHeight methods should call through to the corresponding methods in the inner cell but ensure that no number less than the given size is returned (possibly using Math.max). Don’t forget to add a draw method that simply forwards the call to the inner cell.


//Most of this I understood and did without a problem. The draw function, was just guess work. I looked in the chapter and found the draw used earlier, I removed the one and it worked. I don't understand it though.


function StretchCell(inner, width, height) {
	this.inner = inner;
  	this.width = width;
  	this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]


//Chapter 8

Retry
//
//Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers, and in the other 50 percent, raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.Make sure you handle only the exceptions you are trying to handle.

//I wanted to see what was actually happening so when I created my catch I have it logging to the console so I could see how many times the primitiveMultiply was actually failing. This could have been done by also keeping a counter. Also, in order to not see this you could add a ! operator in the if statement of the catch and just throw the e instead of creating an else statement


function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;){
  	try{
    	return primitiveMultiply(a, b);
    } catch (e) {
    	if(e instanceof MultiplicatorUnitFailure) {
        	console.log("Couldn't Do The Math");
        } else {
          throw e;
        }
   	 }	
  }
}

console.log(reliableMultiply(8, 8));
// → 64