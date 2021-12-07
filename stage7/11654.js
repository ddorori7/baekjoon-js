/*
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 
주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
*/

// 1. 값 입력 받기
var regType1 = /^[A-Za-z0-9+]*$/; // 정규표현식 - 입력값 제어
// 출처: https://ondemand.tistory.com/183 [Cloud Computing On Demand]
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  // 한 줄씩 입력받은 후 실행할 코드
  if (regType1.test(line.value)) {
    // 입력값 제어
    change(line);
  }
  rl.close(); // 필수. 없으면 입력을 무한히 받는다
});
rl.on("close", () => {
  // 입력이 끝난 후 실행할 코드
});

function change(line) {
  let changedLine = line.charCodeAt(0);
  console.log(changedLine);
}
