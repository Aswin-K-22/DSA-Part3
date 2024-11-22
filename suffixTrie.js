class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false;
    }
}
class SuffixTrie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        for(let i = 0 ; i < word.length ; i++){
            this.insertSuffix(word.slice(i));
        }
    }
    insertSuffix(wordSuff){
        let currentNode = this.root;
        for(let char of wordSuff){
            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }        
        currentNode.isEndOfWord = true;
    }

    search(word){
        let currentNode = this.root;
        for(const char of word ){
            if(!currentNode.children[char]){
                return false
            }
            currentNode = currentNode.children[char];
        }
        console.log(currentNode);
        
        return currentNode.isEndOfWord
    }
   
}

const suffixTrie = new SuffixTrie();

// Insert a string
suffixTrie.insert("banana");

// Search for substrings
console.log(suffixTrie.search("ana")); // true
console.log(suffixTrie.search("nan")); // true
console.log(suffixTrie.search("ban")); // true
console.log(suffixTrie.search("apple")); // false
console.log(suffixTrie);
