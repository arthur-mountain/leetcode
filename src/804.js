/**
 * @param {string[]} words
 * @return {number}
 */

const mosesObj = {
  a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..'
};

const uniqueMorseRepresentations = (words) => {
  const set = new Set();

  words.forEach(word => {
    let result = '';
    word.split('').forEach(letter => {
      result += mosesObj[letter]
    });
    set.add(result);
  })

  return set.size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));