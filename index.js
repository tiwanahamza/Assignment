

function arrayInput() { 
    let arr = document.getElementById("userinput").value.split(",");
    return arr;
} 
function largestNumber() {
    let myarr = arrayInput();
    let max = 0;
    for(let i = 0; i < parseInt(myarr.length); i++){
        if(parseInt(myarr[i]) > max){
            max = parseInt(myarr[i]);
        }
    }
    console.log(max);
    document.getElementById("result").innerHTML = "Largest Number is : " + max;
}
function smallestNumber() {
    let myarr = arrayInput();
    let min = parseInt(myarr[0]);
    for(let i = 1; i < parseInt(myarr.length); i++){
        if(parseInt(myarr[i]) < min){
            min = parseInt(myarr[i]);
        }
    }
    console.log(min);
    document.getElementById("result").innerHTML = "Smallest Number is : " + min;
}
function sortAscending() {
    let myarr = arrayInput();
    let arr = [];
    let temp;

    for (let i = 0; i < parseInt(myarr.length) ; i++){
        temp = false;
        for (let j = 0; j < parseInt(myarr.length) ; j++){
            if (parseInt(myarr[i]) < arr[j]){
            temp = true;
            arr.splice(j, 0, parseInt(myarr[i]));
            break;
            }
        }
        if (!temp)
            arr.push(parseInt(myarr[i]))
    }

    console.log(arr);
    document.getElementById("result").innerHTML = "Array sorted in ascending order is : " + arr;
}
function sortDescending() {
    let myarr = arrayInput();
    let arr = [];
    let temp;

    for (let i = 0; i < parseInt(myarr.length) ; i++){
        temp = false;
        for (let j = 0; j < parseInt(myarr.length) ; j++){
            if (parseInt(myarr[i]) > arr[j]){
            temp = true;
            arr.splice(j, 0, parseInt(myarr[i]));
            break;
            }
        }
        if (!temp)
            arr.push(parseInt(myarr[i]))
    }

    console.log(arr);
    document.getElementById("result").innerHTML = "Array sorted in descending order is : " + arr;
}
function addNumbers(){
    let sum = 0;
    let myarr = arrayInput();
    for(let i = 0; i < parseInt(myarr.length); i++){
        sum += parseInt(myarr[i]);
    }
    console.log(sum);
    document.getElementById("result").innerHTML = "Sum of the integers in the array is : " + sum;
}    
function oddNumbers(){
    let myarr = arrayInput();
    let arr = [];
    for(let i = 0; i < parseInt(myarr.length); i++){
        if((parseInt(myarr[i]) % 2) != 0){
            arr.push(parseInt(myarr[i]));
        }
    }
    console.log(arr);
    document.getElementById("result").innerHTML = "Odd numbers in the array : " + arr;
}
function evenNumbers(){
    let myarr = arrayInput();
    let arr = [];
    for(let i = 0; i < parseInt(myarr.length); i++){
        if((parseInt(myarr[i]) % 2) == 0){
            arr.push(parseInt(myarr[i]));
        }
    } 
    console.log(arr);
    document.getElementById("result").innerHTML = "Even numbers in the array : " + arr;
}
function avrgOfArray(){
    let sum = 0;
    let avrg = 0;
    let myarr = arrayInput();
    for(let i = 0; i < parseInt(myarr.length); i++){
        sum += parseInt(myarr[i]);
    }
    let length = parseInt(myarr.length);
    console.log(sum);
    avrg = sum / length;
    console.log(avrg);
    document.getElementById("result").innerHTML = "Average of the integers in the array is : " + avrg;

}