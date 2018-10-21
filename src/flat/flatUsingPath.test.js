import flatUsingPath from "./flatUsingPath";
import { dataMock, resultMock } from "./mocks";

it("works", () => {
  expect(flatUsingPath(dataMock)).toEqual(resultMock);
});
