function start() {
  let len = document.querySelector('input#nickLength').value
  let result = document.querySelector('div#result')
  if(validateLength(len)) {
    let nick = generateNick(Number(len))
    result.innerText = `Your nickname is: ${nick}`
  }
}


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

function validateLength(len) {
  if(len.length == 0 || len <= 0) {
    window.alert('Invalid value for length, try again')
    return false
  } else {
    return true
  }
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
  return Math.floor(Math.random() * max)
}
