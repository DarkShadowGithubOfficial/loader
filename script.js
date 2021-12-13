let loader = document.querySelector('#loader');
window.onload = function () {
  TweenLite.to('#loader', 3.5, {
    width: '100%'
  })
  setTimeout(function () {
    document.querySelector('.load-box').style.display = 'none';
    setTimeout(() => {
      alert('Loaded!');
      alert('Welcome!');
    }, 400)
  }, 3500);
}
