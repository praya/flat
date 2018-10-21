"use strict"

export function flatUsingRecursion(data) {
  if (!Array.isArray(data)) {
    throw new Error("Invalid data!");
  }

  const flatten = [];

  for (let element of data) {
    if (Array.isArray(element)) {
      flatten.push(...flatUsingRecursion(element));
    } else {
      flatten.push(element);
    }
  }

  return flatten;
}

export default function flatUsingRecursion(data, flatten = []) {

  for (let element of data) {
    if (Array.isArray(element)) {
      flatten.push(...flatUsingRecursion(element));
    } else {
      flatten.push(element);
    }
  }

  return flatten;
}
