class TrieNode{
 constructor(){
    this.children = {};
    this.isEndOfWord = false;
 }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){    
        let currentNode = this.root;
        for(const char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }
    search(word){
        let currentNode = this.root;
        for(const char of word){
            if(!currentNode.children[char]) return false;
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
     }
     searchPrefix(word){
        let currentNode = this.root;
        for(const char of word){
            if(!currentNode.children[char]) return false;
            currentNode = currentNode.children[char];
        }
        return true;
     }
     searchPrefixNode(word){
        let currentNode = this.root;
        for(const char of word){
            if(!currentNode.children[char]) return false;
            currentNode = currentNode.children[char];
        }
        return currentNode;
     }
     delete(word){
     const deleteRecursively = (node,word,depth = 0) =>{
        if(!node)  return false;
        if(depth === word.length){
            if(!node.isEndOfWord) return false;
            node.isEndOfWord = false;

            return Object.keys(node.children).length === 0 ;
        }
        let char = word[depth];
        let shoudDelete = deleteRecursively(node.children[char] , word ,depth + 1);
        if(shoudDelete){
            
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        return false;
     }
      return  deleteRecursively(this.root , word)
       
     }
     suggessetions(word){
        let output = [];
        let prefixNode = this.searchPrefixNode(word);
        console.log('return node = ' , prefixNode);
        
        if(prefixNode){
            this.wordSuggest(word, prefixNode,output)
        }
        console.log(output);
        return output
        
     }
     wordSuggest(word,node,output){
        if(node.isEndOfWord){
            output.push(word);
        }
        for(let [char , charNode] of Object.entries(node.children)){
            this.wordSuggest(word+char , charNode ,output)
        }
     }
}

const prefix = new Trie();
prefix.insert("ab");
prefix.insert("abc");
prefix.search('abc');
// console.log("Search 'ab' = ", prefix.search("ab"));
//  console.log("is deleted 'a' " ,prefix.delete("a") );

// console.log("Search 'ab' = ",prefix.search("ab"));

// console.log("is deleted 'ab' " , prefix.delete("ab"));

// console.log("Search 'abc' = ", prefix.search("abc"));
// console.log("Search prefix 'ab' = ",prefix.searchPrefix("ab"));
// console.log("Search 'ab' = ",prefix.search("ab"));

// console.log("is deleted 'abc' " , prefix.delete("abc"));

// console.log("Search 'abc' = ",prefix.search("abc"));
// console.log("Search 'ab' = ",prefix.searchPrefix("ab"));
console.log(prefix);


const words = ['apple', 'app', 'apex', 'banana', 'band', 'bat', 'batman'];
words.forEach(word => prefix.insert(word));

const prefi = 'ap'; // Change this to test different prefixes
const suggestions = prefix.suggessetions(prefi)
console.log(`Suggestions for "${prefi}":`, suggestions);