let arr1 = [ [5, 7, 1], [2, 3, 5], ]
let arr2 = [ [5, 1, 6], [7, 5, 6], ]
let signs = [ [true, true, false], [false, true, false], ]

function solution(arr1, arr2, signs) {
  let answer = [[]]
  for(let i = 0; i <= arr1.length + arr1[i].length; i++){
    if(signs[i][i] == true){
      answer.push([arr1[i][i] + arr2[i][i]])
    } else {
      answer.push(-[arr1[i][i] - arr2[i][i]])
    }
  }

  return answer
}

console.log(solution(arr1, arr2, signs)) // [5,8,-7], [-9,8,-11]

// function solution2(absolutes, signs) {
//   var answer = 0
//   for (let i = 0; i < absolutes.length; i++) {
//     signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i])
//   }
//   return answer
// }

// arr1.map(val, idx => {
//   if(signs[idx]){
//     answer += val
//   } else {
//     answer -= val
//   }
// });