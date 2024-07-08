// three number large who

function numbers(num1, num2, num3) {

    if (num3 > num2 && num1 > num3) {
        return num1 + ' large number';
    } else if (num2 > num1 && num2 > num3) {
        return num2 + ' large number';
    } else {
        return num3 + ' large number';
    }
}

var result = numbers(20, 65, 43);
console.log(result);


// large number of array

const array = [12, 2, 32, 14, 22, 31, 11, 23, 21, 33];

let largeNumber =array [0];

for (let i = 0; i < array.length; i ++) {

    if (array[i]> largeNumber) {

        largeNumber = array[i];
    }
    
}
console.log(largeNumber);
