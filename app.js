const arr = [-4, 3, -9, 0, 4, -1];

console.log(plusMinus(arr));

function plusMinus(arr) {
    const n = arr.length;
    let positiveNumber = 0,
        negativeNumber = 0,
        zerosNumbers = 0;
    arr.forEach(item => {
        if (item > 0) {
            positiveNumber++;
        } else if (item < 0) {
            negativeNumber++;
        } else {
            zerosNumbers++;
        }
    });

    console.log((positiveNumber / n).toFixed(6));
    console.log((negativeNumber / n).toFixed(6));
    console.log((zerosNumbers / n).toFixed(6));
}