const { map } = require("lodash");

let shoppingList = new Map([
  [3, "Banana"],
  [5, "Pineapple"],
  [2, "Pear"],
  [10, "Carrot"],
  [1.5, "Apple"],
]);

let arrKey = [];
for (let key of shoppingList.keys()) {
  arrKey.forEach((key) => {
    console.log("groceries: ", key);
  });
}

let arrValue = [];
for (let value of shoppingList.values()) {
    console.log(arrValue.forEach((value) => {
        console.log("amount: ", value);
    }))

}

module.exports = { shoppingList, arrKey, arrValue };
