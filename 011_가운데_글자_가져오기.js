// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  let answer = ''

  if (s.length % 2 == 1) {
    answer = s[(s.length - 1) / 2]
  } else {
    answer = s[(s.length - 2) / 2] + s[(s.length - 2) / 2 + 1]
  }
  return answer
}

console.log(solution('abcd'))


// String.prototype.substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
