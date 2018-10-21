const emptyFunction = function () {};

export const dataMock = [
  1,
  "any [complex] string",
  null,
  emptyFunction,
  [1, 2, [3, "4"], 0],
  [],
  { a: 1 }
];

export const resultMock = [
  1,
  "any [complex] string",
  null,
  emptyFunction,
  1,
  2,
  3,
  "4",
  0,
  { a: 1 }
];
