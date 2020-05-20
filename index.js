window.addEventListener("load", changeColor);

function changeColor(e, color) {

  let scale = e.target.value;
  document.querySelector(`#${color}-input`).value = scale;

  updateColor();

}

function updateColor() {
  var red = document.querySelector('#red-input').value;
  var green = document.querySelector('#green-input').value;
  var blue = document.querySelector('#blue-input').value;

  document.querySelector('.color-palette').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}