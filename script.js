document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener('keydown', function(event) {
  event.preventDefault();
  
  const code = event.code;
  const element = document.getElementById(code);
  const pressedKeyElement = document.getElementById('pressedkey');
  if (element) {
    element.classList.add('pressed');
  }
  pressedKeyElement.innerHTML = code;
});

document.addEventListener('keyup', function(event) {
  event.preventDefault();
  const code = event.code;
  const element = document.getElementById(code);  
  if (element) {
    element.classList.remove('pressed'); 
  }
});
