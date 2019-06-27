function array_diff(a, b) {

    return a.filter(i => !b.includes(i))
}


