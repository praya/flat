import flatUsingRecursion from "./flatUsingRecursion";
import flatUsingStack from "./flatUsingStack";
import flatUsingPath from "./flatUsingPath";
import flatUsingReversedStack from "./flatUsingReversedStack";
import generateData from "../data/generateData";

it("works", () => {
  for (let i = 0; i < 5; i++) {
    const data = generateData(i, i, i);

    const flat = flatUsingRecursion(data);

    expect(flat).toEqual(flatUsingStack(data));
    expect(flat).toEqual(flatUsingReversedStack(data));
    expect(flat).toEqual(flatUsingPath(data));
  }

});
