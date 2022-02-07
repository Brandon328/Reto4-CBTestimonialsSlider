const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
const picture = document.getElementsByClassName('profile-picture');
const info = document.getElementsByClassName('profile-info');


next_btn.addEventListener('click', switchSlide);
prev_btn.addEventListener('click', switchSlide);
document.addEventListener("keyup", keys);

function switchSlide() {
  picture[0].classList.toggle("d-none");
  picture[1].classList.toggle("d-none");
  info[0].classList.toggle("d-none");
  info[1].classList.toggle("d-none");
}

function keys(event) {
  if (event.keyCode === 37 || event.keyCode === 39){
    switchSlide();
  }
}