/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
 
 var longestRun = function(string) {
 	
 	var output = []; 
 	var index = 0; 
 	var length = 0;  
 	var longest = 0; 
 	
 	for (var i = 0; i < string.length; i++){
 		if (string.charAt(i) === string.charAt(i+1)){
 			length++; 
 		}else if (length > longest) { 
 			longest = length;
 			index = i - length;
 			length = 0; 
 		}else{
 			length =0;
 		}
 	}
 	
 	output.push(index); 
 	output.push(index+longest); 
 	return output
 };

console.log(longestRun("abbbcc"));
console.log(longestRun("aabbc"));
console.log(longestRun("abcd"));
console.log(longestRun(""));
console.log(longestRun("aaaaaabbcccbbbbbbb")); 
 