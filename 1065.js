/*
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
 N이 주어졌을 때, 1보다 크거나 같고, 
 N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
*/

// 1. 정수 입력 받기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  // 한 줄씩 입력받은 후 실행할 코드
  if (line <= 1000) countNumber(line);
  rl.close(); // 필수. 없으면 입력을 무한히 받는다
});
rl.on("close", () => {
  // 입력이 끝난 후 실행할 코드
});

function countNumber(n) {
  let count = 0; // 한수의 갯수

  for (var i = 1; i <= n; i++) {
    // 임시 배열
    let array = String(i).split("");

    if (array.length <= 2) {
      count++;
    } else if (
      array.length >= 3 &&
      array[0] - array[1] == array[1] - array[2]
    ) {
      count++;
    }
  }
  console.log(count);
}
