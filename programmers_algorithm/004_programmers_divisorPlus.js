// Q : left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수

// 01. 공약수 구하는 함수
function divisor(number) {
  let numberOfdivisor = [];

  let i = 1;
  while (i <= number) {
    if (number % i === 0) {
      numberOfdivisor.push(i);
    }
    i++;
  }
  return numberOfdivisor.length;
 }

 
 // =========================================

// 02. 문제에 대한 답 
function solution(left, right) {
  var answer = 0; // 최종답

  for(let i=left; i<=right; i++){
    let count = divisor(i);
    if(count % 2 === 0){
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

console.log(solution(2, 7));


// 다른분들의 풀이 ====================================


// 01. 전성만 , rrgks6221 , mooon3356 , JY PARK , 진주 외 76 명
// 소인수 분해후 거듭제곱숫자에 + 1
// 제곱근이 정수면, 약수의 갯수가 홀수 [Surprise!!]

// Number.isInteger() 메서드는 주어진 값이 정수인지 판별
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// 패터슨님
// 일단 걍 다 더하고, 제곱수 인거만 빼줬습니다. 근데 다 더하면서 제곱수도 더해져있으니 두번뺐습니다!
function solution(left, right) {
    let sum = (left+right)/2*(right-left+1);
    let l = Math.ceil(Math.sqrt(left));
    while (l**2 <= right) sum -= (l++**2)*2
    return sum
}