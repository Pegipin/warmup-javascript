const str = "Pinkey loves Sting a lot";

var temp = new Array();     
temp = str.split(" ");

function smallestWord(arr) {
      
 
var smallestLength = arr[0].length;
 
for(var i = 0; i < arr.length; i++){
    if(arr[i].length < smallestLength){
       smallestLength = arr[i].length;   
                 
   }
    }
    return smallestLength;
    
}



console.log(smallestWord(temp));

//I learnt alot from this task about function :) 