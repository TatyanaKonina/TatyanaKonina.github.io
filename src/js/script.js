var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("pageup").classList.remove('hide');
  } else {
    document.getElementById("pageup").classList.add('hide');
  }
  prevScrollpos = currentScrollPos;
  let promoH = document.querySelector('.promo').offsetHeight - 150;
  console.log(promoH);
  if (currentScrollPos < promoH){
    document.querySelector(".sidepanel").style.display = 'none';
  }
  else{
    document.querySelector(".sidepanel").style.display = 'flex';
  }
};


