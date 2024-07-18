let colorChangeInterval;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function startColorChange() {
  colorChangeInterval = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
}

document
  .getElementById("stopButton")
  .addEventListener("click", stopColorChange);

// Start the color change when the page loads
startColorChange();
