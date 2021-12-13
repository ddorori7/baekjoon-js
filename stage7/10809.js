/* 파벳 소문자로만 이루어진 단어 S가 주어진다. 
각각의 알파벳에 대해서, 
단어에 포함되어 있는 경우에는 처음 등장하는 위치를,
경우에는 -1을 출력하는 프로그램을 작성하시오. */

const readline = require("readline");
var regType = /^[a-z]*$/; // 정규표현식 - 입력값 제어

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  if (regType.test(line.value) && line.length <= 100) {
    searchIndex(line);
  }
  rl.close();
});

// function searchIndex(s) {
//   let alphabet = new Array(); // 알바펫 소문자 배열
//   var result = ""; // 결과
//   const count = 26; // 소문자 갯수
//   for (var i = 0; i < count; i++) {
//     // 알파벳 배열 만들기
//     alphabet[i] = String.fromCharCode(i + 97);
//     alphabet.push(alphabet[i]);
//     // 결과 조건 설정 + 결과값 만들기
//     if (s.indexOf(alphabet[i]) != -1) {
//       result += s.indexOf(alphabet[i]) + " ";
//     } else if (result.indexOf[alphabet[i]] > -1) {
//       result += "";
//     } else {
//       result += -1 + " ";
//     }
//   }
//   console.log(result);
// }

function searchIndex(s) {
  let indexResult = [];
  for (var i = 0; i < 26; i++) {
    var index = s.indexOf(String.fromCharCode(i + 97));
    indexResult.push(index);
  }
  console.log(indexResult.join(" "));
}
