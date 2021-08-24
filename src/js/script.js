var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("pageup").classList.remove('hide');
  } else {
    document.getElementById("pageup").classList.add('hide');
  }
  prevScrollpos = currentScrollPos;
  let promoH = document.querySelector('.promo').offsetHeight - 150;
  let screenW = document.querySelector('.promo').clientWidth;
  console.log(screenW);
  if (currentScrollPos < promoH || screenW < 1400) {
    document.querySelector(".sidepanel").style.display = 'none';
  } else {
    document.querySelector(".sidepanel").style.display = 'flex';
  }
};
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

$("a[href^='#']").click(function () {
  var _href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(_href).offset().top + "px"
  });
  return false;
});

$('form').submit(function (e) {
  e.prventDefault();
  $.ajax({
    type: 'POST',
    url: 'dist/mailer/smart.php',
    data: $(this).serialize()
  }).done(function () {
    $(this).find('input').val('');

    $('form').trigger('reset');
  });
  return false;
});