const count = (walk, direction) => (walk.filter(item => item === direction)).length;

function isValidWalk(walk) {
    return walk.length === 10
        && count(walk, 's') === count(walk, 'n')
        && count(walk, 'w') === count(walk, 'e')
}

let j = isValidWalk(['n', '3', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
console.log(j);
