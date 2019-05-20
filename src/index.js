function iqTest(numbers) {
    numbers = numbers.split(' ');

    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i])
        } else {
            odd.push(numbers[i])
        }
    }
    let index = 1;
    if (odd.length > even.length) {
        index += numbers.indexOf(even[0])
    } else {
        index += numbers.indexOf(odd[0])
    }
    return index
}

let j = iqTest("2 4 7 8 10");
console.log(j);
