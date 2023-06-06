
// 滚动到指定位置
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// 滚动时改变导航栏样式
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// 窗口大小改变时调整特色部分图标位置
$(window).resize(function() {
  var left = ($("#features").width() - $(".fa-4x").width()) / 2;
  $(".fa-4x").css("left", left);
});

// 页面加载时调整特色部分图标位置
$(document).ready(function() {
  var left = ($("#features").width() - $(".fa-4x").width()) / 2;
  $(".fa-4x").css("left", left);
});
