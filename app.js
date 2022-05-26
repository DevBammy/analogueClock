let secHand = document.querySelector(".secHand");
let minHand = document.querySelector(".minHand");
let hourHand = document.querySelector(".hourHand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();
