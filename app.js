// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 省略形
// $(function(){
//   // jQueryプログラムの内容
// //$( セレクタ ).メソッド ( パラメータ );
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


$(function(){
  $('.box1').slideDown(function(){
      $('.box1').css({
          'background-color': '#0000FF',
          'width':'200px',
          'height':'100px'
      }).slideUp();
  });
});