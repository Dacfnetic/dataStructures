const strings = ['a', 'b', 'c', 'd'];
//4x4 = 16 bytes of storages.

console.log(strings[2]);

//push
strings.push('e');

console.log(strings);

//pop
strings.pop();

console.log(strings);

strings.pop();
console.log(strings);

//unshift
strings.unshift('x');
console.log(strings);

//shift
strings.shift();
console.log(strings);

//splice

strings.splice(2,0,'alien');
console.log(strings);