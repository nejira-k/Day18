const { intersection, difference } = require("lodash");

let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set ([...one, ...two]);
console.log(unionSet);

intersectionSet = new Set([...one].filter(x => two.has(x)));
console.log(intersectionSet);

differenceSet = new Set([...one].filter(x => !two.has(x)));
console.log(differenceSet);

module.exports = { unionSet, intersectionSet, differenceSet };