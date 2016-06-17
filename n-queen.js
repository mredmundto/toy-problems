var table1 = [[0,0,1,0],[1,0,0,0],[0,0,0,1],[0,1,0,0]] // Good case
var table2 = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]] // Columns 
var table3 = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]] // Diagonal 

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
	count = 0; 
	for (var i = 0; i < this.length; i++){
		count += this[i][i]
		if (count > 1){
			return false
		}
	}
	return true; 
	// check Minor Diagonal 
}




console.log(table1.checkColumn())
console.log(table1.checkDiagonal())

console.log(table2.checkColumn())
console.log(table2.checkDiagonal())

console.log(table3.checkColumn())
console.log(table3.checkDiagonal())

