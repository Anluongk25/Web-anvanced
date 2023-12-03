//BÀI 1
if (localStorage.getItem("accounts") === null) {
  localStorage.setItem("accounts", JSON.stringify([]));
}
document.getElementById("sign_in").addEventListener("click", function () {
  const name = document.getElementById("account").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const account = {
    name: name,
    email: email,
    password: password,
  };
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  accounts.push(account);
  localStorage.setItem("accounts", JSON.stringify(accounts));
});
//BÀI 2
accounts.forEach(function (item, index) {
  const liTag = document.createElement("li");
  liTag.innerText = item.name;
  
});
