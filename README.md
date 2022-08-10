# algorithm
[🏹화살표함수가 궁금하다면!](https://github.com/MIINII/algorithm/blob/main/__arrow.js)
### 001. linear_search

[linear_search Code](https://github.com/MIINII/algorithm/blob/main/001_linear_search.js)

- 반복문을 어떻게 사용할지 고민
- 어떻게 비교하여 pick(?)할지 고민
- 반복문이 종료된뒤 return해주는 값에 대해서 고민

---
### 002. binary_search

[binary_search Code](https://github.com/MIINII/algorithm/blob/main/002_binary_search.js)

- 왜 while을 사용했는지...?
- 인덱스가 어떻게 변화하는지...?
- 가운데 점을 찾는식을 어떻게 세워야하는쥐...
---
### 003. search_evaluation
[search_evaluation](https://github.com/MIINII/algorithm/blob/main/003_search_evaluation.js)


- 시간 복잡도에 대해서 알아보조ㅑ
  *  선형 탐색
// 1. 리스트에서 한번에 찾는 경우 -> O(1) + O(1) + O(1) + O(1) = O(4) => O(1)
// 2. 리스트에 없는 경우 -> O(1) * n => O(1) + O(1) + O(n) + O(1) = O(n+3) => O(n)

---
### 004. programmers_divisorPlus

- **제곱근이 정수면, 약수의 갯수가 홀수...**
- **제곱근이 정수면, 약수의 갯수가 홀수...**
- **제곱근이 정수면, 약수의 갯수가 홀수...**
- Number.isInteger() 메서드는 주어진 값이 정수인지 판별
---
### 005. 부족한 금액 계산하기

우리가 이문제에서 알아야할것
 01. 삼항연산자
 condition ? value if true : value if false
 -> 조건이 true일때 실행 / false일때 실행
 02. 가우스공식이라고 한다.
   (= 1과 최대값을 더해서 총 개수의 절반을 곱해준다.)
---
### 006. 문자열에서 숫자열로
+a; : 변수앞에 **숫자연산자**가 붙으면 계산하려고 알아서 문자열을 숫자로 바꿔준답니다 신기방기

---
### 007. 문자열 다루기 기본
 > test() 메소드 -> 정규식과 특정 문자열 사이의 일치에 대한 검색을 수행. true 또는 false 를 반환

---
### 008. 자릿수 더하기
방법 1. 숫자를 문자열로 변환후 배열로 만들기

---

### 009. 콜라츠 추측
 ``` jsx
 num = num % 2 == 0 ? num / 2 : num * 3 + 1
// num이 짝수라면 나누기 2 홀수라면 곱하기 3 더하기 1
```

--- 

### 010. 직사각형 별찍기
 * 가로를 먼저 별을 반복하는 변수를 만듦
 * 세로도 리피트! `repeat()`

---

### 011. 가운데 글자 가져오기
``` jsx
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

`substr()`  : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환