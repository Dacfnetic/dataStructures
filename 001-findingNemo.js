/*const nemo = new Array(10000000).fill('Dory');
nemo.push('nemo');

function findingNemo(array){
    let t0 = performance.now();
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found NEMO!!!');
        }
    }
    let t1 = performance.now();
    console.log(`the function findingNemo took: ${t1-t0} miliseconds`);
}

findingNemo(nemo);*/

const array1 = ['a','b','c','x'];
const array2 = ['z','y','a'];

function constainsCommomItem(arr1,arr2) {
    for(let i=0; i< arr1.length; i++){
        for (let j=0; j< arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return console.log(true);
            }
        }
    }
    return console.log(false);
}
constainsCommomItem(array1,array2);