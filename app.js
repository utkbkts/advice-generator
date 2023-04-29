const İD = document.querySelector(".İD");
const text = document.getElementById("text");
const buton = document.querySelector(".buton");

function advice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      İD.innerHTML = `#${data.slip.id}`;
      text.textContent = `"${data.slip.advice}"`;
    });
}

advice(); // Sayfa yüklendiğinde ilk tavsiye isteği yapılır.

buton.addEventListener("click", function () {
  advice(); // Butona tıklandığında yeni tavsiye isteği yapılır.
});
