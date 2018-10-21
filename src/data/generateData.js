const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null, undefined,
    function () {}, "any [complex] string"];

function getRandomValue() {
  const maxIndex = values.length - 1;
  const randomIndex = Math.ceil(Math.random() * maxIndex);

  return values[randomIndex];
}

export default function generateData(depth = 1, branchesInNode = 1, valuesInNode = 1) {

  const branches = new Array(depth > 1 ? branchesInNode : 0)
    .fill(null)
    .map(() => generateData(depth - 1, branchesInNode, valuesInNode));

  const values = new Array(valuesInNode)
    .fill(null)
    .map(getRandomValue);

  return shuffle([...branches, ...values]);
}


/**
 * Fisher–Yates shuffle algorithm
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
