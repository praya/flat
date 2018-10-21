function getNode(data, path) {
  let node = data;

  for (let i = 0; i < path.length; i++) {
    node = node[path[i]];
  }

  return node;
}

export default function flatUsingPathV2(data) {
  const path = [];
  const flatData = [];
  let node = data;
  let i = 0;
  let finished = false;

  while (!finished) {

    if (i < node.length) {
      if (Array.isArray(node[i])) {
        path.push(i);
        node = getNode(data, path);
        i = 0;
      } else {
        flatData.push(node[i]);
        i++;
      }
    } else if (path.length) {
      i = path.pop() + 1;
      node = getNode(data, path);
    } else {
      finished = true;
    }

  }

  return flatData;
}

export function flatUsingPathV1(data) {
  const path = [];
  const flatData = [];
  let node = data;
  let i;

  for (i = 0; i < node.length; ) {

    if (Array.isArray(node[i])) {
      if (node[i].length) {
        path.push(i);
        node = getNode(data, path);
        i = 0;
        continue;
      }
    } else {
      flatData.push(node[i]);
    }

    if (node.length - 1 === i && path.length) {
      i = path.pop();
      node = getNode(data, path);
    }

    i++;
  }

  return flatData;
}
