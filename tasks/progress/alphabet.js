const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function findMissingLetter(array) {
    let indexFirstAlpha = alphabet.indexOf(array[0]);
    let alphaArrayNew = alphabet.split('').splice(indexFirstAlpha, array.length);
    if (indexFirstAlpha === -1) {
        indexFirstAlpha = alphaArrayNew.indexOf(array[0]);
        alphaArrayNew = alphabet.split('').map(str => str.toUpperCase());
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== alphaArrayNew[i]) {
            return alphaArrayNew[i]
        }
    }
}

let j = findMissingLetter(['O', 'Q', 'R', 'S']);

console.log(j);
