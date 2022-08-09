// 01. 숫자르 배열로 만든 후 각 배열의 요소를 더하기!!(두가지 방법)
// 01 -1. 숫자를 문자로 반환 후 배열로 만들기(split)
// 01 -2. 숫자를 do.while문을 이용하여 배열로 만들기

function solution(n) { () => n = (n + '').split('')
  var answer = 0

  

  return answer
}

// * 함수 선언문 vs 함수 표현식
// 함수 선언문과 함수 표현식의 가장 큰 차이는 호출.
// 선언문은 어디에 작성하더라도, 심지어 호출보다 아래에 작성하더라도 동작
// 표현식은 반드시 위에서 아래로라는 순서를 따름. 호출 전에 반드시 작성되어 있어야 작동
// 함수 선언문은 코드 블록안에서만 유효한데, if문안에 작성하면 그 블록 안에서만 유효한 것이다. 그러나 표현식으로 작성하면 외부에서도 동작

// ** 함수 선언문
// function nameF() {
//   console.log('name')
// }

// ** 함수 표현식
// let nameF = function() {
//   console.log('name')
// }

// ** 화살표 함수
// let nameF = () => console.log('hello')

// ** 콜백 함수
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

function showOk() {
  alert("동의 완료");
}

function showCancel() {
  alert("취소");
}

ask("동의하십니까?", showOk, showCancel);