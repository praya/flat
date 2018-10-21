import flatUsingStack from "./flatUsingStack";
import { dataMock, resultMock } from "./mocks";

it("works", () => {
  expect(flatUsingStack(dataMock)).toEqual(resultMock);
});
