// [프로그래머스] 자릿수 더하기

// 01. 숫자를 배열로 만들어서 배열의 요소를 합치기!
// 방법 1. 숫자를 문자열로 변환후 배열로 만들기

// ################################################################
// [일단 화살표 함수 사용하는 방법을 알아볼것]
// map은 각각의 요소 마다 함수를 호출하는 일을 한다! / map은 무족권 return을 해야한다 -> 무엇을 return하든 새로운 array로 추가 / 두번째 argumet는 index 리턴

const names = ['오리', '말', '소', '닭']

// 01. 좋은방법
// const hearts = names.map(function (item) {
//   return item + '💞'
// })

// 02. 더좋은 방법 (화살표함수) / argument가 하나일땐 ()필요 없음 두개이면 ()추가

// const hearts = names.map((item) => { return item + '💞' })

// 03. 진짜 더 좋은 방법 (화살표 함수 중 implicit return) / {} 추가하면 implicit가 사라지니 주의하세용!

const hearts = names.map((item) => item + '💞')

console.log(hearts) // [ '오리💞', '말💞', '소💞', '닭💞' ]

// ================================

// 02. 기존 방식
const names2 = ['오리', '말', '소', '닭']

function addheart(item) {
  return item + '💞'
}

const hearts2 = names2.map(addheart)

console.log(hearts2)

// ################################################################

function solution(n) {
  let answer = 0
  let num = n.toString()

  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i])
  }

  return answer
}

// function solution2(n){
//   let arr = n+('').split('').map(num => parseInt(num))
//   return arr.reduce((acc, cur) => acc + cur)
// }

// console.log(solution2(123))



console.log(solution(123))

function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
