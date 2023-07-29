import jsonData from '../paragraphs.json'
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";


export const allowedKeys = [...alphabet, ...alphabet.toUpperCase(), ...numbers, ...symbols, " "];

// const easyPara=jsonData.easy
//
// const words =easyPara.split(' ')

export function generateRandomWords(words:string[]) {
  const shuffled = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.join(" ");
}
