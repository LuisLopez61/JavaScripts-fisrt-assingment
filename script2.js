//arrays


console.table(numbers);


const months = new Array("Jan","Feb","Mar","Apr");
months.push("May");//adds a new ellement at the end of the array

months.unshift("Month 0"); //adds a new element at the beginig  of the array

months[3]="March";

console.table(months);

//alert(months)

var numbers = [10,2,3,4,5,6];
//numbers[1]



//sum the numbers
var total= numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];

//calculate the average
var average = total/6;

//display alert();
alert(average);