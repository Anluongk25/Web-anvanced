// //API thông tin tình hình covid tại VN
// fetch(
//   "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"
// );
// //API tình hình covid tại các tỉnh  thành phố ở VN
// fetch(
//   "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST"
// );

// script.js
const api_Url1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";
const api_Url2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

function clickHandler() {
  fetch(api_Url1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayData(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayData(data) {
  console.log("Success:", data.detail);

  // Truy cập các thông tin từ đối tượng data và hiển thị lên trang web
  const recoveredCases = data.recovered;
  const activeCases = data.activeCases;
  const deaths = data.deaths;

  // Hiển thị thông tin lên trang web
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<p>Recovered Cases: ${recoveredCases}</p>
                         <p>Active Cases: ${activeCases}</p>
                         <p>Deaths: ${deaths}</p>`;

  document.body.appendChild(resultDiv);
}
