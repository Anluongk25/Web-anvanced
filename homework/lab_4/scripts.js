//BÀI 1
let studentName = ["Phước", "Hằng", "An", "Jane", "Như"];
localStorage.setItem("studentName", JSON.stringify(studentName));
let getStudentName = localStorage.getItem("studentName");
let dataArray = JSON.parse(getStudentName);
//đổi tên phước thành hà trên localStorage
// for (let i = 0; i < dataArray.length; i++) {
//   if (dataArray[i] === "Phước") {
//     dataArray[i] = "Hà";
//   }
// }
// localStorage.setItem("studentName", JSON.stringify(dataArray));

// xóa tên 1 người dùng trong localStorage
studentName.splice(studentName.indexOf('Phước'),1)
console.log(studentName)
//xóa hẳn một bộ dữ liệu trong Local
// localStorage.removeItem('studentName');

//BÀI 2
let verse1 = "讓我們紅塵作伴 活的瀟瀟灑灑"
let verse2 = "策馬奔騰 共享人世繁華"
let verse3 = "對酒唱歌唱出心中喜悅"
let verse4 = "轟轟烈烈把握青春年華"
let verse5 = "啊啊啊啊阿阿啊阿阿 啊啊啊啊啊"
setTimeout(function(){
  console.log(verse1);
  setTimeout(function(){
    console.log(verse2);
    setTimeout(function(){
      console.log(verse3);
      setTimeout(function(){
        console.log(verse4);
        setTimeout(function(){
          console.log(verse5);
        },1000)
      },1000)
      },1000)
    },1000)
  },1000)
  
  
 