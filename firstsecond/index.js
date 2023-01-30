// Q1: flat array 

// without flat function 
let a = [[1, 2, 3], [4, 4, 5]];
function flatten(arr) {
    return [].concat(...arr);
}
console.log(flatten(a))


// with flat function 

// console.log(a.flat())

// q2:number of numbers and charachter 
let text="This is the javascript";
let data=text.split("")
const counteNames = data.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  },[]);
console.log(counteNames);