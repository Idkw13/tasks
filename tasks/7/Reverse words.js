function reverseWords(str) {
    return str.split(' ').map(word => word.length > 1 ? word.split('').reverse().join('') : word).join(' ')
}
