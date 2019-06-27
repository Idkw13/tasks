/*Is It Negative Zero (-0)?*/
function isNegativeZero(n) {
    return (Number(n) === 0) && (1 / Number(n) === -Infinity);
}

