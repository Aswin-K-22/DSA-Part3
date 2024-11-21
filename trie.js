class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                return false; // Word not found
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord; // True if it's the end of a valid word
    }

    // Check if a prefix exists in the Trie
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false; // Prefix not found
            }
            currentNode = currentNode.children[char];
        }
        return true; // Prefix exists
    }

    // Delete a word from the Trie
    delete(word) {
        const deleteRecursively = (node, word, depth = 0) => {
            if (!node) return false;

            if (depth === word.length) {
                // If we've reached the end of the word
                if (!node.isEndOfWord) return false; // Word does not exist
                node.isEndOfWord = false; // Unmark the end of word

                // If the node has no children, delete it
                return Object.keys(node.children).length === 0;
            }

            const char = word[depth];
            const shouldDeleteChild = deleteRecursively(node.children[char], word, depth + 1);

            if (shouldDeleteChild) {
                delete node.children[char]; // Delete the child node
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }

            return false;
        };

       return  deleteRecursively(this.root, word);
    }
}

const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");

// Search for words
console.log(trie.search("app")); // true
console.log(trie.search("apple")); // true
console.log(trie.search("bat")); // true
console.log(trie.search("cat")); // false

// Check for prefixes
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("ba")); // true
console.log(trie.startsWith("ca")); // false

// Delete a word
console.log(trie.delete("app"));

console.log(trie.search("app")); // false
console.log(trie.search("apple")); // true
