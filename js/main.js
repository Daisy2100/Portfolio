$ = jQuery;

$(window).scroll(function () {
  // 設置整個網頁的高度
  let scrollEnd = document.documentElement.scrollHeight;

  var scroolNow = $(window).scrollTop();
  var opacityVal = scroolNow / scrollEnd;

  document.getElementsByClassName("bg1")[1].style.opacity = (1 - opacityVal);
  document.getElementsByClassName("bg2")[0].style.opacity = opacityVal;
});


// nav 控制開關，預設#over關閉
// over     = 選單展開時覆蓋整個頁面的區塊
// openbtn  = 展開選單的按鈕
// closebtn = 關閉選單的按鈕
document.getElementById('over').style.display="none";
document.getElementById('openbtn').addEventListener('click',function(){
  document.getElementById('over').style.display="block"
  document.getElementById('openbtn').style.display = "none";
})
document.getElementById('closebtn').addEventListener('click',function(){
  document.getElementById('openbtn').style.display="block"
  document.getElementById('over').style.display = "none";
})

// $(document).ready(function () {
//   document.getElementById("container").style.display = "none";
//   setTimeout(function () {
//     document.getElementById("load").style.display = "none";
//     document.getElementById("container").style.display = "block";
//   }, 4000);
// });

document.getElementById("load").style.display = "none";
document.getElementById("container").style.display = "block";


