class MyArray {
    constructor(){
        this.length = 0,
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
   /* delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for ()
    }*/
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0));

console.log(newArray.push('hi'));
console.log(newArray);
console.log(newArray.push('you'));
console.log(newArray);
console.log(newArray.push('!'));
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);

let cadena = 'Tengo mucha hambre, necesito comida';

rever = (frase) =>{
    return frase.split('').reverse().join('').toString();
}
console.log(rever(cadena));



let numbers = [[1,23,43,33], [11,33,24,53,33,23]];

let flat = numbers.reduce((acumulator, elemento) => acumulator.concat(elemento), []);

flat.sort((a,b) => a-b);

const arr = flat.filter((item,index)=> flat.indexOf(item) === index);

console.log (arr);
