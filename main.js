const form = document.getElementById("form");
const input = document.getElementById("inp");
const text = document.getElementById("text");

const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputValue = input.value;
  const hourResult = Math.floor(inputValue / HOUR);
  const minuteResult = Math.floor(inputValue / MINUTE);
  const secondResult= Math.floor(inputValue / SECOND);
  text.textContent = `Hour:${hourResult}, Minute: ${minuteResult}, Second: ${secondResult}; `;
  form.reset();
});
