//BÀI 1
// function veTamGiacCan(chieuCao) {
//   let ketQua = "";
//   let giua = Math.floor((2 * chieuCao - 1) / 2);
//   let i = 0;

//   while (i < chieuCao) {
//     let j = 0;
//     while (j < 2 * chieuCao - 1) {
//       if (j >= giua - i && j <= giua + i) {
//         ketQua += "1";
//       } else {
//         ketQua += " ";
//       }
//       j++;
//     }
//     ketQua += "\n";
//     i++;
//   }

//   return ketQua;
// }

// let chieuCao = 7;
// let tamGiacCan = veTamGiacCan(chieuCao);
// console.log(tamGiacCan);

//BÀI 2
myArr = [9, 7, 9, 0, 7, 8, 387, 123, 456];
function locSo(myArr) {
  let answer = [];
  for (let i = 0; i < myArr.length; i++) {
    let soHienTai = myArr[i];
    if (soHienTai % 2 === 0 || soHienTai === 0) {
      answer.push(soHienTai);
    }
  }
  return answer;
}
let ketQua = locSo(myArr);
console.log(ketQua);

//BÀI 3
let myAnswers = [];

function QA(cauHoi) {
  let answer = prompt(cauHoi + "(yes/no)").toLowerCase();
  if (answer === "yes" || answer === "no") {
    myAnswers.push(answer);
  } else {
    alert("Vui lòng nhập câu trả lời của bạn");
    QA(cauHoi);
  }
}
QA ("Bạn đã ăn cơm chưa?")
QA ("Bạn muốn ăn sườn xào chua ngọt không?")
QA ("Bạn có muốn uống trà hay cà phê không?")
QA ("Bạn muốn thêm chút tráng miệng không?")
QA ("Bạn còn cần gì nữa không?")

