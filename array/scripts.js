let array =['ab', 'cd', 'ef'];
let object={name: 'ab', age: '1'};

let ArrayOfObjects = [
 {name: 'ab', age: '1'},
 {name: 'cd', age: '2'},
 {name: 'ef', age: '3'}
];

ArrayOfObjects[1] = {name: 'new', age: 'new'}

ArrayOfObjects.forEach((element, index) => {
    console.log(ArrayOfObjects[index]);
});

console.log("");
//
//ArrayOfObjects.splice(0,0,
//    {name: 'gh', age: '4'});

//ArrayOfObjects.forEach((element, index) => {
//    console.log(ArrayOfObjects[index]);
//});

var elementNo = ArrayOfObjects.length
console.log(elementNo);