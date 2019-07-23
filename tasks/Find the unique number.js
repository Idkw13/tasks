/*There is an array with some numbers. All numbers are equal except for one. Try to find it!*/
function findUniq(arr) {
    let obj = {};
    let cur = null;
    arr.forEach(num => {
        !obj[num]
            ? cur = num
            : null;
        obj[num] = true;
    });
    if (obj[0] && obj[1]) {
        return 0
    }
    return cur
}
