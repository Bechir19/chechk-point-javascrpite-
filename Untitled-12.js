//addition pour deux valeur 
function addition(a,b)
{
    return a + b 
}

// the First Element in an Array
function getFirstValue(arr) {

    

    return arr[0] 
	
}

function cubes(a) {
	return a=a*a*a  
}

function countTrue(arr) {
    var x =0 ; 
        
    for ( var i=0 ; i<arr.lenght ;i++)    
    {
        if (arr[i]== true) {
            x++;
        }
    }
 return x ;
}
//Return the Next Number from the Integer Passed
function addition(num) {
	return num +1
	
}
//Power Calculator
function circuitPower(voltage, current) {
	return voltage*current ; 
	
}
//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	return ((side1 + side2)-1)
	
}

function squared(b) {
	return b * b
}
// Convert Hours into Seconds
function howManySeconds(hours) {
	return hours * 3600
	
}
//Return the Remainder from Two Numbers
function remainder(x, y) {
	return  x % y ;
	 
	
	
}
//Less Than 100?
function lessThan100(a, b) {
	if ((a+b)>=100)
		{
			return false
		}
	else 
		return true
		
	
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
    return 2 * (length + width);
   
       
   }

}

//Convert Age to Days


function calcAge(age) {
	return age*365
	


}
//Buggy Code
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number;i++) {
      newArray.push(i);
    }
  
    return newArray;
  }
//Basic Variable Assignment


  function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}
//Are the Numbers Equal?
function isSameNum(num1, num2) {
	if (num1===num2)
		{
			return true;
		}
	else 
		{
			return false ;
		}
	
}
//Return the First Element in an Array
function getFirstValue(arr) {
	return arr[0]
	
}
function convert(minutes) {
	return minutes*60;
	
}   


//Convert Age to Days

function calcAge(age) {
	return age*365 ;
	
}

//  Buggy Code 
function swap(a, b) {

	return [b, a]
}
