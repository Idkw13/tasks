function array_diff(a, b) {

    return a.filter(i => !b.includes(i))
}

let j = array_diff([1, 2, 2], [2]);
console.log(j);
