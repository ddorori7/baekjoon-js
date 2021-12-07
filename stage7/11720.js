/*
N개의 숫자가 공백 없이 쓰여있다. 
이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
*/

// 1. 숫자 갯수 n 입력하기
// 2. n 개만큼 입력하기
// 3. 입력한 숫자 다 더하고 출력

var rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N; // 입력받을 정수의 갯수

let count = 0; // 몇번째 라인을 입력 받는지를 저장하는 변수
rl.on("line", function (line) {
  if (line >= 1 && line <= 100 && count == 0) {
    N = Number(line);
  } else if (count == 1) {
    if (line.length == N) {
      getNumbers(line.trim());
    }
    rl.close();
  }
  count++;
});

function getNumbers(input) {
  let result = 0;
  let arr = input.split("");
  for (var i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  console.log(result);
}
