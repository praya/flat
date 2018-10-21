export default function flatUsingReversedStack(data) {
    let stack = data.concat().reverse();
    const flatData = [];
  
    while (stack.length) {
      const child = stack.pop();
      if (Array.isArray(child)) {
        stack.push(...child.concat().reverse());
      } else {
        flatData.push(child);
      }
    }
  
    return flatData;
  }
  