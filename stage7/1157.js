/**문제
알파벳 대소문자로 된 단어가 주어지면, 
이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 
프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.

입력
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 
주어지는 단어의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 
단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
  */

const readline = require("readline");
var pattern = /[a-zA-Z]/; // 영문 허용

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  input = input.toString().toLowerCase();
  if (input.length <= 1000000 && pattern.test(input)) {
    // getResult(line);

    const result = new Array(26).fill(0);
    // console.log(result);

    for (let i = 0; i < input.length; i++) {
      //"a".charCodeAt(0) === 97 이니까
      // 값이 있을 때마다 해당 결과값의 자리에 1 더하기
      result[input.charCodeAt(i) - 97]++;
      //   console.log(input.charCodeAt(i) - 97);
      //   console.log("아이", input.charCodeAt(i));
    }
    // console.log(result);
    const max = Math.max(...result);
    const index = result.indexOf(max); // 최대값중 앞에거 index 반영
    //   console.log(index);

    let isSame = false;

    for (let j = 0; j < 26; j++) {
      if (result[j] === max && index != j) {
        // 결과가 최댓값이랑 같고
        // max값이 하나가 아닌경우 index값이 뒤에 나오는 최대값 인덱스 j와
        // 다르기 때문에 중복값이 있는것
        isSame = true;
        break;
      }
    }

    console.log(isSame ? "?" : String.fromCharCode(index + 65));

    rl.close();
  }
});

// function getResult(line) {
//   const searchArray = Array.from(new Set(line.toUpperCase())); // 중복값 제거한 것
//   let resultCountArray = [];
//   for (let i = 0; i < searchArray.length; i++) {
//     resultCountArray.push(0);
//     for (let j = 0; j < line.length; j++) {
//       if (searchArray[i] == line[j].toUpperCase()) {
//         resultCountArray[i] += 1;
//       }
//     }
//   }
//   // https://hianna.tistory.com/487 배열에서 최대값 구하기 참고
//   let maxCount = Math.max.apply(null, resultCountArray);
//   if (
//     resultCountArray.indexOf(maxCount) != resultCountArray.lastIndexOf(maxCount)
//   ) {
//     result = "?";
//   } else {
//     result = searchArray[resultCountArray.indexOf(maxCount)];
//   }
//   console.log(result);
// }

// 더 빠른 코드 참고 - https://gurtn.tistory.com/49
// let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//   //"a".charCodeAt(0) === 97 이니까
//   // 값이 있을 때마다 해당 결과값의 자리에 1 더하기
//   result[input.charCodeAt(i) - 97]++;
// }

// const max = Math.max(...result);
// const index = result.indexOf(max);

// let isSame = false;

// for (let j = 0; j < 26; j++) {
//   if (result[j] === max && index != j) {
//     isSame = true;
//     break;
//   }
// }

// console.log(isSame ? "?" : String.fromCharCode(index + 65));
