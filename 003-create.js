/*class MyArray {
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
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for ()
    }
}*/
/*
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
*/
let cadena = 'Tengo mucha hambre, necesito comida';
reverse = (frase) =>{
    let myArray2 = frase.split('');
    let resultado = [];
    for(let i = myArray2.length; i>0;i--){
        resultado.push(myArray2[i]);
    }
    return resultado.join('');
}
console.log(reverse(cadena).toString());