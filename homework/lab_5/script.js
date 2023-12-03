window.load = doShowAll();
const ShoppingList = [
  {
    imgUrl:
      "https://tiki.vn/tui-xach-nu-da-that-thoi-trang-cao-cap-phong-cach-moi-p207925713.html?itm_campaign=CTP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.277793_Y.1860113_Z.3872780_CN.tui-xach-nu-T%C4%90&itm_medium=CPC&itm_source=tiki-ads&spid=207925717",
    name: "Túi xách nữ da thật thời trang cao cấp phong cách mới",
    price: 351.5,
    shop: " ANANSHOP688",
  },
  {
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/fb/b2/22/933ae607962b1a454a332d1e0abe799e.PNG.webp",
    name: "Ví Da Bò Cầm Tay Dáng Dài Thời Trang ",
    price: 541.5,
    shop: "ANANSHOP688",
  },
  {
    imgUrl:
      "https://salt.tikicdn.com/cache/750x750/ts/product/9e/33/b1/2e01c37c599b3cd420d657884d90729f.jpg.webp",
    name: "Túi đeo chéo nữ",
    price: 219.0,
    shop: "TAKIHA",
  },
];
const imgTag = document.createElement("img");
const h4Tag = document.createElement("h4");
const h3Tag = document.createElement("h3");
imgTag.src = item.imgUrl;
h4Tag.innerText = item.name;
h3Tag.innerText = item.price;
h3Tag.innerText = item.shop;
divTag.appendChild(imgTag);
divTag.appendChild(h4Tag);
divTag.appendChild(h3Tag);
function CheckBroswer() {
  if ("localStorage" in window && window["localStorage"] !== null) {
    return true;
  } else {
    return false;
  }
}
function doShowAll() {
  if (CheckBroswer()) {
    let key = "";
    let list = "<tr><th>Item</th><th>Value</th></tr>\n";
    let i = 0;
    //for a more advanced feature, you can set a cap on max items in the cart
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list +=
        "<tr><td>" +
        key +
        "</td>\n<td>" +
        localStorage.getItem(key) +
        "</td></tr>\n";
    }
    //if no items exists in the cart
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
      list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    //Bind the data to HTML table
    document.getElementById("list").innerHTML = list;
  } else {
    alert("cannot save shopping list as your broswer does not support HTML 5");
  }
}
localStorage.setItem("propertyName", "value");
localStorage.getItem("propertyName");
localStorage.removeItem("propertyName");
function SaveItem() {
  let name = document.forms.ShoppingList.name.value;
  let data = document.forms.ShoppingList.data.value;
  localStorage.setItem(name, data);
  doShowAll();
}
//change an existing key-value in HTML 5 storage
function ModifyItem() {
  let namel = document.forms.ShoppingList.name.value;
  let datal = document.forms.ShoppingList.data.value;
  //check if namel is already exists
  //check if key exists
  if (localStorage.getItem(namel) != null) {
    //update
    localStorage.setItem(namel, datal);
    document.forms.ShoppingList.data.value = localStorage.getItem(namel);
  }
  doShowAll();
}
function RemoveItem() {
  let name = document.forms.ShoppingList.name.value;
  document.forms.ShoppingList.data.value = localStorage.removeItem(name);
  doShowAll();
}
function ClearAll() {
  localStorage.clear();
  doShowAll();
}
