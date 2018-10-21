import flatUsingRecursion from "./flatUsingRecursion";
import { dataMock, resultMock } from "./mocks";

it("works", () => {
  expect(flatUsingRecursion(dataMock)).toEqual(resultMock);
});
