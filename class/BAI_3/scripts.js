const car = {
  name: "VF9",
  color: "green",
  price: 83000,
  factory: "Vinfast",
};
console.log(car.color);
const booklist = [
  {
    bookName: "Đắc nhân tâm",
    size: "13 x 20.5 cm",
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/eb/ad/3e776fea882655620441ec9f6eba9a04.jpg.webp",
  },
  {
    bookName: "Đắc nhân tâm",
    size: "13 x 20.5 cm",
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/eb/ad/3e776fea882655620441ec9f6eba9a04.jpg.webp",
  },
  {
    bookName: "Đắc nhân tâm",
    size: "13 x 20.5 cm",
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/eb/ad/3e776fea882655620441ec9f6eba9a04.jpg.webp",
  },
  {
    bookName: "Đắc nhân tâm",
    size: "13 x 20.5 cm",
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/2e/eb/ad/3e776fea882655620441ec9f6eba9a04.jpg.webp",
  },
];
const book = document.getElementById("content");
booklist.forEach(function (item, index) {
  const divTag = document.createElement("div");
  divTag.innerText = item.bookName;
  content.appendChild(divTag);
  const imgTag = document.createElement("img");
  const h4Tag = document.createElement("h4");
  const h3Tag = document.createElement("h3");
  imgTag.src = item.imgUrl;
  h4Tag.innerText = item.bookName;
  h3Tag.innerText = item.size;
  divTag.appendChild(imgTag);
  divTag.appendChild(h4Tag);
  divTag.appendChild(h3Tag);

});
