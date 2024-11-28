function findLargestWord(sentence) {
    let largestWord = ""; // To store the largest word
    let currentWord = ""; // To build the current word while traversing
  
    for (let i = 0; i <= sentence.length; i++) {
      const char = sentence[i];
  
      // Check if the character is a space or end of the string
      if (char === " " || i === sentence.length) {
        // Compare the current word with the largest word
        if (currentWord.length > largestWord.length) {
          largestWord = currentWord;
        }
        currentWord = ""; // Reset for the next word
      } else if (/[a-zA-Z0-9]/.test(char)) {
        // Add character to the current word if it's alphanumeric
        currentWord += char;
      }
    }
  
    return largestWord;
  }
  
  // Example usage
  const sentence = "Find the largest word in this sentence!";
  console.log(findLargestWord(sentence)); // Output: "sentence"