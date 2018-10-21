export default function flatUsingStack(data) {
  let stack = [...data];
  const flatData = [];

  while (stack.length) {
    const child = stack.shift();
    if (Array.isArray(child)) {
      stack.unshift(...child);
    } else {
      flatData.push(child);
    }
  }

  return flatData;
}
