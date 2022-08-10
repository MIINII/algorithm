let checkIn = [9, 9, 9, 9, 7, 9, 8]
let checkOut = [23, 23, 30, 28, 30, 23, 23]

function solution(checkIn, checkOut) {
  let answer = 0
  for (let i = 0; i < 7; i++) {
    if (checkOut[i] >= 29) {
      checkOut[i] = 21
      answer += checkOut[i] - checkIn[i]
    } else {
      answer += checkOut[i] - checkIn[i]
    }
  }
  return answer
}

const solution2 = () => {
  let answer = 0
  for (let i = 0; i < 7; i++) {
    if (checkOut[i] >= 29) {
      checkOut[i] = 21
      answer += checkOut[i] - checkIn[i]
    } else {
      answer += checkOut[i] - checkIn[i]
    }
  }
}


console.log(solution(checkIn, checkOut))
console.log(solution2(checkIn, checkOut))

// 압도적 감사~^^