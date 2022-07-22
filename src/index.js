const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let arrM = Array.from(expr);

    for (let i = 0; i < arrM.length; i = i + 10) {
        let letter = arrM.slice(i, i + 10);
        if (letter.join('') === '**********') {
            result = result + ' '
            continue
        }
        let clearedLetterArray = [];
        for (let i = 0; i < letter.length; i = i + 2) {
            let symb = letter.slice(i, i + 2).join('')
            if (symb == '10') {
                clearedLetterArray.push('.')
            }
            if (symb == '11') {
                clearedLetterArray.push('-')
            }

        }
        let clearedLetter = clearedLetterArray.join('')
        result = result + MORSE_TABLE[clearedLetter]
    }
    console.log('60', result)
return result

}

module.exports = {
    decode
}