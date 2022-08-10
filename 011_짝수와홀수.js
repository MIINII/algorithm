function solution(num) {
  let answer = ''
  if (num % 2 == 0) {
    return 'even'
  } else {
    return 'Odd'
  }
}

function solution2(num) {
  return num % 2 ? 'Even' : 'Odd'
}

console.log(solution(3))
console.log(solution2(3))
