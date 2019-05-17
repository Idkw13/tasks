/*Complementary DNA*/
let pairs = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};

function DNAStrand(dna) {
    return dna.split('').map(item => pairs[item]).join('');
}
