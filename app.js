// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 省略形
// $(function(){
//   // jQueryプログラムの内容
// //$( セレクタ ).メソッド ( パラメータ );
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });


// $(function(){
//   $('.box1').mouseover(function(){
//       $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//       $('.box1').removeClass('box1-ext');
//   });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});