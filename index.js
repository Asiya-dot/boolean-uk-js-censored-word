const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const text2 =
  "Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. You’re disgusting. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected."
  //cersoredword
function censor(texttoCensor,wordtoCensor,replacementString){
    const words = texttoCensor.split(" ");
    let timesCensored = 0;

    // go through each word

    for (let i = 0; i < words.length; i++){
      const word = words[i];

      // if the word matches our wordtoCensor
      if (word.toLowerCase().includes(wordtoCensor.toLowerCase())) {
      word[i] = replacementString;
      timesCensored++;
    } 
}    // turn array back into a string and return it
      return {
        censoredText: words.join(" "),
        timesCensored:timesCensored
      };
   }

let result = censor(text2, "in", "*****");
console.log(`The censored text is:`,result.censoredText);
console.log(`The text was censored ${result.timesCensored} times`);
//Challenge
//keep track of a counter for how many time censored

const userText = prompt("What text do you want to censor?");
const userWord = prompt("What word do you want to censor from that text?");
const userReplacementWord = prompt("What do you want to replace it with?");

let result2 = censor(userText,userWord,userReplacementWord);
console.log(`The censored text is:`,result2.censoredText);
console.log(`The text was censored ${result2.timesCensored}times`);