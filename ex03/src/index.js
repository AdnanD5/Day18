//Only change code below this line
function* myGenerator(){
yield* [1, 2, 3, 4, 5];
yield* 'Arena';
yield* arguments;
}
var iterator = myGenerator(6, 7, 8);
var generatorArray = [];

for(i=0, i<15, i++){
  yield x
    generatorArray.push(x);
}

console.log(iterator.next(generatorArray));

//Only change code above this line
module.exports = { generatorArray, myGenerator};