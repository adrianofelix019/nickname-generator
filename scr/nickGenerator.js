
const vowels = ['a', 'e', 'i', 'o', 'u']
const cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

function generateNick(len) {
  let nick = ''
  let turn = true
  for(let i = 0;i < len;i++) {
    if(turn) {
      nick += generateCons()
      turn = !turn
    } else {
      nick += generateVowel()
      turn = !turn
    }
  }
  return nick
}

function generateVowel() {
  let vowel = vowels[randInt(vowels.length)]
  return vowel
}

function generateCons() {
  let con = cons[randInt(cons.length)]
  return con
}

function randInt(max) {
  return Math.floor(Math.random() * vowels.length)
}

// Console Test
console.log(generateNick(5))