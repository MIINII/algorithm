// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// function solution(month, day) {
//   let result = `${month}월 ${day}`

//   if ((month = 1)) {
//     day = parseInt(parseInt(day + 98 - 29 - 30 - 31))
//     month = month + 3
//   } else if ((month = [3, 5, 7, 8, 10, 12])) {
//     day = parseInt(day + 98 - 30 * 3)
//   } else {
//     day = parseInt(day + 98 - 31 * 3)
//   }
//   return month, day
// }


// function solution(month, day) {
//   let result = setDate(month, day)
//   result.setDate(98)
// }
function solution(month, day){
  let result =""
  const date = new Date(2022, month-1, day+98)
  let getMonth = date.getMonth()+1
  let getDate = date.getDate()
  return `${getMonth}월 ${getDate}일`
}

console.log(solution(11,27)) 
