function binarySearch(element, someList) {
  let firstIndex = 0;
  let lastIndex = someList.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (someList[middleIndex] == element) {
      return middleIndex;
    } else if (someList[middleIndex] < element) {
      firstIndex = middleIndex + 1;
    } else if (someList[middleIndex] > element) {
      lastIndex = middleIndex - 1;
    }
  }
  return '바보';
}

console.log(binarySearch(2, [2, 3, 5, 7, 11]));
console.log(binarySearch(0, [2, 3, 5, 7, 11]));
console.log(binarySearch(5, [2, 3, 5, 7, 11]));
console.log(binarySearch(3, [2, 3, 5, 7, 11]));
console.log(binarySearch(11, [2, 3, 5, 7, 11]));
