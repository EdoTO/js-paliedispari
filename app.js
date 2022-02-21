function reverseMyWord (word) {
    const splitWord = word.split('');
    const reverseWord = splitWord.reverse();
    const finalWord = reverseWord.join('');
    return finalWord;
}

function paliDispari(word) {
    const finalWord = reverseMyWord(word);

    if (word === finalWord) {
        return true;
    } else {
        return false;
    }
}

const word = prompt('Metti la parola');

console.log(word);

if (paliDispari(word)) {
    console.log('Parola è palindroma!')
} else {
    console.log('Parola non è palindroma!')
}