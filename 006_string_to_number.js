function solution(a) {
  if(typeof(a) === "string"){
    return +a;
  } else {
    return '바보'
  }
}

function solution2(a) {
  return +a;
}

function solution3(a) {
  return parseInt(a)
}

console.log(solution(24))
console.log(solution2(24))
console.log(solution3(24))
 