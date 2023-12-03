//BÀI 1
const equation = (a, b) => {
  if (a === 0 && b === 0) {
    return "phương trình vô nghiệm";
  } else {
    const result = -b / a;
    return `nghiệm của phương trình là
            x= ${result} `;
  }
};
console.log(equation(5, 8));






//BÀI 2
const rightTriangle = (a,b) => {
  const hypotenuse = Math.sqrt(a**2 + b**2);
  const height = (a*b)/hypotenuse;
  const angle1 = Math.atan(a / b) * (180 / Math.PI);
  const angle2 = 90 - angle1;
  return {
    hypotenuse,
    height,
    angle1,
    angle2,
  };
}
const triangleResult = rightTriangle(6, 8);
console.log("Cạnh huyền:", triangleResult.hypotenuse);
console.log("Đường cao:", triangleResult.height);
console.log("Góc 1:", triangleResult.angle1);
console.log("Góc 2:", triangleResult.angle2);