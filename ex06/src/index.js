let rockStar = new Map([
  ["artist", "Rolling Stone"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["singer", "Mick Jagger"],
]);

let newRock = new Map([...rockStar].filter(key => (key[0]>'a')));

console.log(newRock);
module.exports = { rockStar, newRock };
