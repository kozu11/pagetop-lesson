// $(".theTarget").skippr({

//   transition : 'fade',
//   speed : 1000,
//   easing : 'easeOutQuart',
//   navType : 'block',
//   childrenElementType : 'div',
//   arrows : true,
//   autoPlay : true,
//   autoPlayDuration : 1000,
//   keyboardOnAlways : true,
//   hidePrevious : false
// });

$(function(){
  $('#back a').on('click', function(event){
    $('body, html').animate({
      scrollTop:0
    }, 1000);
    event.preventDefault();
  });
});