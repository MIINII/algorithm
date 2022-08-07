// 프로그래머스_문자열 다루기 기본

function solution(s) {
  let result = parseInt(s) // s를 정수로 변환 -> 문자열이 껴있으면 NaN이 출력
  if ((s.length === 4 || s.length === 6) && s == result) {
    result = true
  } else {
    result = false
  }
  return result
}

console.log(solution('z234'))


// =========================

// 다른사람들의 풀이
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/; // 정규표현식
  return regex.test(s); // test() 메소드는 정규식과 특정 문자열 사이의 일치에 대한 검색을 수행한다. true 또는 false 를 반환 합니다
}
