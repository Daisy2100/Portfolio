$ = jQuery;

$(window).scroll(function () {
  // 設置整個網頁的高度
  let scrollEnd = document.documentElement.scrollHeight;

  var scroolNow = $(window).scrollTop();
  var opacityVal = scroolNow / scrollEnd;

  document.getElementsByClassName("bg1")[1].style.opacity = (1 - opacityVal);
  document.getElementsByClassName("bg2")[0].style.opacity = opacityVal;
});

$(document).ready(function () {
  document.getElementById("container").style.display = "none";
  setTimeout(function () {
    document.getElementById("load").style.display = "none";
    document.getElementById("container").style.display = "block";
  }, 5000);
});
// document.getElementById("load").style.display = "none";
// document.getElementById("container").style.display = "contents";