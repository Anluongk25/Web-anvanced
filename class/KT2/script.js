fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);

    result.forEach(function (item) {
      const content = document.getElementById("content");

      const li2 = document.createElement("li");

      li2.innerText = item.name.official;

      content.appendChild(li2);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
