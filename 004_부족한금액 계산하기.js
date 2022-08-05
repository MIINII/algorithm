// 내답...

function solution(price, money, count) {
  let answer = 0
  for (let i = 0; i <= count; i++) {
    answer +=  (price * i)
    console.log(answer)
  }
  if (answer > money) {
    return answer - money
  } else {
    return 0
  }
}

console.log(solution(3, 20, 4))


// 프로그래머스 답

// 01. 가우스공식이라고 한다.
// (= 1과 최대값을 더해서 총 개수의 절반을 곱해준다.)
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}