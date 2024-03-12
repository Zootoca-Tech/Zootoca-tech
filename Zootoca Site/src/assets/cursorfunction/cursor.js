// cursor script

function trail (e) {
	var div = document.createElement('div');
  
  div.classList.add('happyTrail');
  
  Object.assign(div.style, {
    top: e.pageY + 'px',
    left: e.pageX + 'px'
  });
  
  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 500);
}

addEventListener('mousemove', trail);

// FadeUp Animation for Home page
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++){
    var win_height = window.innerHeight;
    var reveal_top = reveals[i].getBoundingClientRect().top;
    var reveal_point = 150;
    if (reveal_top < win_height - reveal_point) {
      reveals[i].classList.add('active');
    } //else {
      //reveals[i].classList.remove('active');
    //}
  }
}

////////////////////////////
window.addEventListener('scroll', Reveal);
function Reveal(){
  var reveals = document.querySelectorAll('.Reveal');
  for (var i = 0; i < reveals.length; i++){
    var win_height = window.innerHeight;
    var reveal_top = reveals[i].getBoundingClientRect().top;
    var reveal_point = 150;
    if (reveal_top < win_height - reveal_point) {
      reveals[i].classList.add('active');
    } //else {
      //reveals[i].classList.remove('active');
    //}
  }
}