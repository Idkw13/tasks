const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function alphabetPosition(text) {
    let result = [];
    text = text.match(/[A-Za-z]/g);
    if (text !== null) {
        text = text.join('').toLowerCase();
        for (let i = 0; i < text.length; i++) {
            result.push(alphabet.indexOf(text[i]) + 1)
        }
    }
    return result.join(' ')
}

