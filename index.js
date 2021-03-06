let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// Create a new array with individual words of the string 'story'
const storyWords = story.split(" ");

// Counting how many words are in the array storyWords
const numberWords = storyWords.length;

// Filtering out the unnecesary words
const betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
});

// Counting how many overusedWords are
let reallyWords = 0;
let veryWords = 0;
let basicallyWords = 0;

for (const word of betterWords) {
  if (word === "really") {
    reallyWords++;
  } else if (word === "very") {
    veryWords++;
  } else if (word === "basically") {
    basicallyWords++;
  }
}

//Counting how many sentences are in the paragraph

let sentences = 0;
betterWords.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentences++;
  }
});

// console.log info
const logInfo = (words, sentences, really, very, basically) => {
  console.log("Word count:", words);
  console.log("Sentence count:", sentences);
  console.log("Really count:", really);
  console.log("Very count:", very);
  console.log("Basically count:", basically);
};

logInfo(numberWords, sentences, reallyWords, veryWords, basicallyWords);

// betterWords array as a single string
console.log(betterWords.join(" "));
