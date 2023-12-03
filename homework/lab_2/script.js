//BÀI 1
// let fruit = [
//   ["Grape", 15],
//   ["Apple", 4],
//   ["Kiwi", 9],
//   ["Banana", 20],
// ];

// console.log(fruit);
// let word = ["I have"];
// const sentence= word.concat(fruit);
// console.log(sentence)
//BÀI 2
const fruit=["Grape 15", "Apple 3", "Kiwi 4" ]
// vòng lặp for
// let text="";
// for (let i = 0; i<fruit.length; i++ ) {
// text += fruit[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// vòng lặp for...in
// let txt=""
// for (let x in fruit){
//     txt += fruit[x] + "<br>"
// }
// document.getElementById("demo").innerHTML = txt;

// vòng lặp for...of
let text = "";
for (let x of fruit) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;


//BÀI 3
const myDog ={
    name:"Husky",
    legs: 4,
    color: "Brown"
};
console.log(myDog)
