// Remove the minimum
function removeSmallest(numbers) {
    let indexMin = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((num, i) => i !== indexMin);
}
