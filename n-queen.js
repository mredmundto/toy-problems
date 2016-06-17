var table1 = [
[0,0,1,0],
[1,0,0,0],
[0,0,0,1],
[0,1,0,0]] // Good case

var table2 = [
[1,0,0,0],
[1,0,0,0],
[1,0,0,0],
[1,0,0,0]] // Columns 

var table3 = [
[1,0,0,0],
[0,1,0,0],
[0,0,1,0],
[0,0,0,1]] // Major Diagonal 

var table4 = [
[0,0,1,0],
[0,0,0,1],
[0,0,0,0],
[0,0,0,0]] // Small Major Diagonal 

var table5 = [
[0,0,0,1],
[0,0,1,0],
[0,1,0,0],
[1,0,0,0]] // Minor Diagonal 

var table6 = [
[0,0,0,0],
[0,0,0,0],
[0,0,0,1],
[0,0,1,0]] // Small Minor Diagonal 


Array.prototype.checkColumn = function(){
	var count = 0; 
	console.log(this)
	for(var i = 0; i < this.length; i++){
		for (var j = 0; j < this.length; j++){
			count += this[j][i]
			if (count > 1 ){
				return false
			}
		}
	count = 0;  
	}
	return true
}

Array.prototype.checkDiagonal = function(){

	// check Major Diagonal 
	var count = 0;
	var len = this.length; 
	
	for (var j = -len; j < len; j++){
		for (var i = 0; i < len; i++){
			if (this[i][i+j] !== undefined){
				count += this[i][i+j];
				if (count > 1){
					return false; 
				}
			}	
		}
		count = 0; 
	}
	

	for (var j = -len; j < len; j++){
		for (var i = 0; i < len; i++){
			if (this[i][len-1-i+j] !== undefined){
				count+= this[i][len-1-i+j]
				if(count > 1){
				return false
				}	
			}
		}
		count = 0; 		
	}

	// check Minor Diagonal 
	return true; 
	
}

console.log("Good case")
console.log(table1.checkColumn())
console.log(table1.checkDiagonal())

console.log("Column conflict")
console.log(table2.checkColumn())
console.log(table2.checkDiagonal())

console.log("Major Diagonal conflict")
console.log(table3.checkColumn())
console.log(table3.checkDiagonal())

console.log("Small Major Diagonal conflict")
console.log(table4.checkColumn()) 
console.log(table4.checkDiagonal())

console.log("Minor Diagonal conflict")
console.log(table5.checkColumn())
console.log(table5.checkDiagonal())

console.log("Small Minor Diagonal conflict")
console.log(table6.checkColumn()) 
console.log(table6.checkDiagonal())
