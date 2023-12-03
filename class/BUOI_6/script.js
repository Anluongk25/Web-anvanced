// console.log(products);

fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    
  
    result.forEach(function (item, index) {
      const content = document.getElementById("content");
      const card = document.createElement("div");
      const imgTag = document.createElement("img");
      const cardBody = document.createElement("div");
      const h5Tag = document.createElement("h5");
      const h4Tag = document.createElement("h4");
      const pTag = document.createElement("p");
      imgTag.src = item.image;
      card.appendChild(imgTag);
      cardBody.appendChild(h5Tag);
      cardBody.appendChild(h4Tag);
      cardBody.appendChild(pTag);
      const button = document.createElement("button");
      button.innerText = "Thêm vào giỏ hàng";
      cardBody.appendChild(button);
      button.classList.add("btn");
      button.classList.add("btn-primary");
      button.addEventListener('click', function(){
        const oldProducts = JSON.parse(localStorage.getItem('cart'))
        oldProducts.push(item)
        localStorage.setItem('cart', JSON.stringify(oldProducts))
      })
      card.appendChild(cardBody);
      h5Tag.innerText = item.title;
      h4Tag.innerText = item.price;
      pTag.innerText = item.description;
      content.appendChild(card);
    });
  })
  .catch(function (error) {
    console.log(result);
  });
