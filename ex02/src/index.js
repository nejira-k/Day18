// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (var i = 1; i < 6; i++) {
    var x = yield i;
  }
  return x;
}

function* insideGenerator2() {
  for (var i = 10; i < 16; i++) {
    var x = yield i;
  }
  return x;
}

function* insideGenerator3() {
  for (var i = 6; i < 10; i++) {
    var x = yield i;
  }
  return x;
}

const iterator = myGenerator();
var fifteenArray = [];
for (var i = 0; i < 16; i++) {
  fifteenArray.push(iterator.next().value);
}
console.log(fifteenArray);
console.log(fifteenArray.join("#, ") + iterator.value + "!");

// Only change code above this line
module.exports = { fifteenArray, myGenerator };
