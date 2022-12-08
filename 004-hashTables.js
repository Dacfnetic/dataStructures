class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value){
        this.data[this._hash(key)] = [key,value];
        console.log(this.data);
    }
    get(key){
        return console.log(this.data[this._hash(key)][1]);
    }
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

debugger; 

const arr = [5,8,9,5,80,7,6,4,2,3];
const arr2 = [1,2,3,4,5,6,7,8,9,10];
let datos = new Map();
let currentEntries = 0;

function getRepeated(){
    arr2.forEach(e => {
        
        datos.set(e,e);
        currentEntries++;
        if(currentEntries !== datos.size){
            console.log(e);
            arr.length = 1;
        }
    });
    if(currentEntries === datos.size){
        return console.log(undefined);
    }
    
}
getRepeated();
