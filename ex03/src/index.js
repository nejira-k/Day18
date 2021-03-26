function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}

var iterator = myGenerator(6, 7, 8);
let generatorArray = [];
for (let generatorArray of iterator) {
    console.log(generatorArray);
}

console.log(iterator.next());
module.exports = { generatorArray, myGenerator };

