export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12,           
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6,     
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
};

const drawnHand = [];
const allList = Object.entries(letters)

while (drawnHand.length < 10){
  const randomNumber = Math.floor(Math.random() * allList.length);
  const drawnLetter = allList[randomNumber]

  if (drawnHand.filter(letter => letter === drawnLetter[0]).length < drawnLetter[1]) {
    drawnHand.push(drawnLetter[0])
  }

    }
    return (drawnHand);
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // console.log(`input: ${input} lettersInHand ${lettersInHand}`)
  let letterCount = 0
  for (let i of lettersInHand){
    for (let j of input){
      if (i.toUpperCase() === j.toUpperCase()) {
        ++letterCount;
        break;
      }
    }
  }
  if (letterCount == input.length) {
    // console.log("=> True");
    return true;
  }
  else {
    // console.log("=> False");
    return false;
  }
}

export const scoreWord = (word) => {
  // console.log(`word ${word}`);
  // Implement this method for wave 3
  const points = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1,           
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1,     
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
  }
  let sumPoint = 0
  for (let letter of word.toUpperCase()) {
      sumPoint += points[letter];
    }
    if (word.length >= 7 && word.length <= 10) {
      sumPoint += 8;
    } 
  // console.log(`sumPoint ${sumPoint}`);
  return sumPoint;

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let winnerWord = "";
  let winnerScore = 0;
  let winner = {};

  for (let word of words) {
    let score = scoreWord(word);
    winner[word] = score;
  }

  for (let [word,score] of Object.entries(winner)) {
    if (winnerScore < score) {
      winnerScore = score;
      winnerWord = word;
    } 
    else if (winnerScore === score && word.length === 10 && winnerWord.length !== 10) {
      winnerScore = score;
      winnerWord = word;
    }
    else if (winnerScore === score && word.length < winnerWord.length && winnerWord.length !== 10) {
      winnerScore = score;
      winnerWord = word;
    }
  }
  console.log({ score: winnerScore, word: winnerWord })
  return { score: winnerScore, word: winnerWord };
};


