// [프로그래머스] 콜라츠 추측

function solution(num) {
  let answer = 0
  for (let i = 0; i <= 500; i++) {
    if (num != 1) { // num이 1이 아닐때
      num = num % 2 == 0 ? num / 2 : num * 3 + 1 // num이 짝수라면 나누기 2 홀수라면 곱하기 3 더하기 1
    } else {
      return (answer = i) // 횟수를 리턴
    }
  }
  return -1
}

console.log(solution(6))
