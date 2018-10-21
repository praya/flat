import generateData from './generateData';

it("works", () => {
  const depth = 2;
  const countOfBranches = 1;
  const countOfValues = 14;

  const data = generateData(depth, countOfBranches, countOfValues);

  const branchesAtFirstLevel = data.filter(val => Array.isArray(val));

  expect(branchesAtFirstLevel.length).toBe(countOfBranches);

  const valuesAtFirstLevel = data.filter(val => !Array.isArray(val));
  expect(valuesAtFirstLevel.length).toBe(countOfValues);

  const valuesAtSecondLevel = branchesAtFirstLevel[0].filter(val => !Array.isArray(val));
  expect(valuesAtSecondLevel.length).toBe(countOfValues);

  const branchesAtSecondLevel = branchesAtFirstLevel[0].filter(val => Array.isArray(val));
  expect(branchesAtSecondLevel.length).toBe(0);
});
