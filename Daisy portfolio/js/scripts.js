//================================返回首頁動畫功能================================
$(function(){
  $("#about").click(function(){
    $("html, body").animate({scrollTop:0}, 100);
    return false;
  })
});
$(function(){
  $("#portfolio").click(function(){
    $("html, body").animate({scrollTop:0}, 100);
    return false;
  })
});
$(function(){
  $("#other").click(function(){
    $("html, body").animate({scrollTop:0}, 100);
    return false;
  })
});
//================================輪播功能================================
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
//================================tab切換================================
$(document).ready(function() {  
  
  //預設active 
  $(".tab_content").hide(); //隱藏全部的tab菜單內容
  $("ul.tabs li:first").addClass("active").show(); //對第一個li標簽添加class="active屬性"  
  $(".tab_content:first").show(); //顯示第一個tab內容  
    
  //點擊事件 
  $("ul.tabs li").click(function() {  
      $("ul.tabs li").removeClass("active"); //移除class="active"屬性
      $(this).addClass("active"); //添加class="active"到選擇標簽中 
      $(".tab_content").hide(); //隱藏全部標簽內容  
      var activeTab = $(this).find("a").attr("href"); //找到所屬屬性值來識別活躍選項卡和內容  
      $(activeTab).fadeIn(); //使內容消失 
      return false;  
  });  

}); 