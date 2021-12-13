/**
 * 문제
상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다.

전화를 걸고 싶은 번호가 있다면, 
숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 
숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 
다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

숫자 1을 걸려면 총 2초가 필요하다. 
1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 
한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 
즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 
예를 들어, UNUCIC는 868242와 같다.

할머니가 외운 단어가 주어졌을 때, 
이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 
단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다.

출력
첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다.
 */

const readline = require("readline");
var pattern = /[A-Z]/;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (pattern.test(line) && line.length >= 2 && line.length <= 15) {
    // let minimumTime = 0;

    // 처음 풀이
    // const dialArray = [
    //   "ABC", // 3초
    //   "DEF", // 4초
    //   "GHI",
    //   "JKL",
    //   "MNO",
    //   "PQRS",
    //   "TUV",
    //   "WXYZ",
    // ];
    // for (let i = 0; i < line.length; i++) {
    //   for (let j = 0; j < dialArray.length; j++) {
    //     if (dialArray[j].indexOf(line[i]) != -1) {
    //       minimumTime += j + 3;
    //     }
    //   }
    // }
    // console.log(minimumTime);

    // 다른풀이 참조 - https://eunne.tistory.com/40
    let charMap = {};
    let charStack = "";
    let counter = 3;

    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(); i++) {
      charStack += String.fromCharCode(i);

      if (
        charStack.length === 3 && //받은 문자의 길이가 3
        i !== "R".charCodeAt(0) && //길이가 W3기 되기 전에 차단
        i !== "Y".charCodeAt(0)
      ) {
        charMap[charStack] = counter; //받은 문자를 3씩 잘라서 객체에 넣음
        counter++; //넣을 값은 counter고, 다음번 값을 위해 3을 더 더해줌
        charStack = ""; //그리고 charstack은 다시 초기화를 시켜줌
      } else if (charStack.length === 4) {
        //받은 문자의 길이가 4일때
        charMap[charStack] = counter;
        counter++;
        charStack = "";
      }
    }
    console.log(line.split(""));

    let result = line.split("").reduce((acc, char) => {
      for (let stage in charMap) {
        // console.log("스테이지", stage);
        // console.log(charMap);
        // console.log(char);
        if (stage.includes(char)) {
          acc += charMap[stage];
        }
      }
      return acc;
    }, 0);

    console.log(result);
  }
  rl.close();
});
