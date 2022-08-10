function solution(a, b) {
  let answer = []
  if (a < b) {
    for (let i = a; i < b - a; i--) {
      answer += push(b-i)
    }
  }

  return answer
}

console.log(solution(5,2))
