const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

  for(let i = 0; i < expr.length / 10; i++) {
    let stringConverter = i * 10;
    str = expr.slice((stringConverter), (stringConverter + 10));

    if(str == '**********') {
      result += ' ';
      continue;
    }

    let chars = '';
    let value = '';

    for(let k = 0; k < str.length / 2; k++) {
      value = str.slice((k * 2), (k * 2 + 2));

      if(value == '10') {
        chars += '.';
      }
      if(value == '11') {
        chars += '-';
      }
    }
    result += MORSE_TABLE[chars];
  }
  return result;
}

module.exports = {
    decode
}