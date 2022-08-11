// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

function solution(n) {
  let answer = ''
  n = n.toString().split('').reverse().map(idx => parseInt(idx))
  // acc : 중간결과를 저장 / curr : 현재값
  let reducer = (accumulator, curr) => accumulator + curr
  for (let i = 0; i < n.length; i++) {
      if (i == n.length - 1){
          answer += `${n[i]} = ${n.reduce(reducer)}`
          break
      }
      answer += `${n[i]} + `
    // return n.reduce(reducer)
  }
  return answer
}

console.log(solution(718253))
