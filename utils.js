module.exports = {  

    mutiplyMatrices: function(a,b) {
       if(a.length != b.length)
       return null
        let result = new Array(a.length)

    for(let i = 0; i < a.length; i++){
         result[ i ] = new Array( b[i].length );

    for(let j = 0; j < a.length; j++){
         result[i][j] = 0

    for(let k = 0; k < b.length; k++){
        result[i][j] += a[i][k] * b[k][j];
        }
     }
}        
       return result
    },
    printElements: function(matrix) {
        let result = [matrix];

for(let i = 0; i < matrix.length; i++) {
	for(let j = 0; j < matrix.length; j++) {
		result += "\n";
    }
    console.log(result)
   }
 } 
}