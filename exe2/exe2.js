 function convertToInt(num) {
  
  if (isNaN(num)) {
    console.log(0);
  }
   
  else if (typeof(num) == "number") {
    console.log(parseInt(num));

  }
    
  else if
    (typeof (num) == null) {
    console.log(Number(num));
  }
  
 // else if 
    //(typeof (num) !==Number.isInteger ){
  //console.log( Math.trunc(num));              float to integer : parseInt(num);
  //}
  
  else {
    console.log(0);
    throw "Pinkey Error!";
  }
}


try {
  convertToInt(true);
  } catch (exception) {
  console.error(exception);
  
  }
  finally {
  console.log(0);
}
  
//var myInt = parseInt("23");
//console.log(myInt);


//var myInt = Math.trunc(6.0);
//console.log(myInt);

//var myInt = Number(null);
//console.log(myInt);


//myInt = NaN;
//if (isNaN(myInt)) myInt = 0;
//console.log(myInt);   