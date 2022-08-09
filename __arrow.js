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

// #############################################################################################
// 01. this는 arrow function안에서 사용될수 없음 : this를 window object로 가지고있음          ##
// #############################################################################################

const miinii = {
  name: 'miinii',
  age: 29,
  addYear: () => {
    this.age++
  },
}

const miinii2 = {
  name: 'miinii',
  age: 29,
  addYear() {
    this.age++
  },
}

console.log(miinii) // { name: 'miinii', age: 29, addYear: [Function: addYear] }
miinii.addYear()
miinii.addYear()
console.log(miinii) // { name: 'miinii', age: 29, addYear: [Function: addYear] }

console.log(miinii2) // { name: 'miinii', age: 29, addYear: [Function: addYear] }
miinii2.addYear()
miinii2.addYear()
console.log(miinii2) // // { name: 'miinii', age: 31, addYear: [Function: addYear] }

// #############################################################################################
// ## 02. Array.prototype.find : 제공되는 테스트 조건을 만족하는 첫번째 엘리먼트값을 리턴     ##
// #############################################################################################
// includes()는 true나 false리턴 : 찾으면 true 아니면 fasle
const email = ['miinii@mi.com', 'krk@naver.com', 'html@gmail.com', 'nut@daum.com', 'herbin@gmail.com']

// const foundMail = email.find((item) => true)
// console.log(foundMail) //miinii@mi.com

const foundMail = email.find((item) => item.includes('@gmail.com'))
console.log(foundMail) //html@gmail.com

// #############################################################################################
// 03. Array.prototype.filter : 제공된 함수의 조건을 만족한 모든 엘리먼트로 새로운 array를 만듦#
// #############################################################################################
// includes()는 true나 false리턴 : 찾으면 true 아니면 fasle

const noGmail = email.filter((item) => !item.includes('@gmail'))
console.log(noGmail)

// #############################################################################################
// 04. Array.prototype.forEach() : 각 배열의 엘리먼트 마다 제공된 함수를 실행            #######
// #############################################################################################
// map과 forEach의 차이 : map은 반환된 element들로 새로운 배열을 만들어준다.
// username만 받고싶음

// email.forEach(index => index.split("@")) : array 하나만 반환
const cleaned1 = []
email.forEach((index) => {
  console.log(index.split('@')[0]) //miinii, krk, html, nut, herbin
})

email.forEach((index) => {
  cleaned1.push(index.split('@')[0]) //miinii, krk, html, nut, herbin
})

console.log(cleaned1) // [ 'miinii', 'krk', 'html', 'nut', 'herbin' ]

const cleaned2 = email.map((email) => email.split('@')[0])
console.log(cleaned2) // [ 'miinii', 'krk', 'html', 'nut', 'herbin' ]

const cleaned3 = email.map((email, index) => ({
  // ()추가하면 object를 return한다
  username: email.split('@')[0],
  index,
}))

console.log(cleaned3) //[ { username: 'miinii', index: 0 }, { username: 'krk', index: 1 }, { username: 'html', index: 2 }, { username: 'nut', index: 3 }, { username: 'herbin', index: 4 } ]

// #############################################################################################
// 04. Default Value                                                                          ##
// #############################################################################################

function sayHi(name) {
  return 'hello ' + (name || '익명')
}

function sayHi2(name2 = '익명') {
  return 'hello ' + name2
}
const sayHi3 = (name3 = '익명') => 'hello ' + name3
console.log(sayHi('나')) //hello 나
console.log(sayHi()) //hello 익명
console.log(sayHi2()) //hello 익명
console.log(sayHi3()) // hello 익명

const Default = 'fjkd'
