// 생성자 n
function d(n) {
  let number = n;
  let result = 0;

  for (var i = 0; i < String(n).length; i++) {
    result += number % 10; // 1의 자릿수
    number = Math.floor(number / 10); // 10으로나누고 나머지 버리기
  }
  return n + result;
}

// 방법 1
// const maxNumber = 10000;
// let selfNumbers = Array(maxNumber + 1).fill(true);
// 인덱스값이 10000까지 나와야하니까 +1

// for (let i = 0; i < maxNumber; i++) {
//   // selfNumber가 아니면 false 반환
//   selfNumbers[d(i)] = false;

//   if (selfNumbers[i]) {
//     console.log(i);
//   }
// }

// 방법 2
let n = new Array(); // 생성자 배열
for (let i = 0; i < 10000; i++) {
  n.push(d(i)); // 생성자 넣기
  if (n.indexOf(i) < 0) {
    // 배열에 없으면 selfNumber
    console.log(i);
  }
}
