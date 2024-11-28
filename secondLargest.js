
  

  function findSecondLargestWord(sentence) {
    let largestWord = ""; // To store the largest word
    let secondLargestWord = ""; // To store the second largest word
    let currentWord = ""; // To build the current word while traversing
  
    for (let i = 0; i <= sentence.length; i++) {
      const char = sentence[i];
  
      // Check if the character is a space or end of the string
      if (char === " " || i === sentence.length) {
        if (currentWord.length > largestWord.length) {
          // Update second largest before replacing the largest
          secondLargestWord = largestWord;
          largestWord = currentWord;
        } else if (
          currentWord.length > secondLargestWord.length &&
          currentWord !== largestWord
        ) {
          // Update second largest if it's not the same as the largest
          secondLargestWord = currentWord;
        }
        currentWord = ""; // Reset for the next word
      } else if (/[a-zA-Z0-9]/.test(char)) {
        // Add character to the current word if it's alphanumeric
        currentWord += char;
      }
    }
  
    return secondLargestWord || null; // Return null if no second largest word
  }
  
  // Example usage
  const sentence = "Find the second largest word in this sentence!";
  console.log(findSecondLargestWord(sentence)); // Output: "largest"
  