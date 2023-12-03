//BÀI 1
let chieuCao = 5;
function veTamGiacCan(chieuCao) {
  let ketQua = "";
  let i = 1;
  while (i <= chieuCao) {
    let khoangTrang = chieuCao - i;
    let so1 = 2 * i - 1;
    //thêm khoảng trắng
    let j = 0;
    while (j < khoangTrang) {
      ketQua += "";
      j++;
    }
    //thêm số 1
    let k = 0;
    while (k < so1) {
      ketQua += "1";
      k++;
    }
    //thêm dòng
    ketQua += "\n";
    i++;
  }
  return ketQua;
}
let tamGiacCan = veTamGiacCan(chieuCao);

console.log(tamGiacCan)

//bài 3
function QA (){
  let Q1 = prompt ("Bạn đã ăn cơm chưa?")
}