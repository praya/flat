import flatUsingReversedStack from "./flatUsingReversedStack";
import { dataMock, resultMock } from "./mocks";

it("works", () => {
  expect(flatUsingReversedStack(dataMock)).toEqual(resultMock);
});
