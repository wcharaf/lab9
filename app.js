$(function(){
  $.getJSON('https://www.reddit.com/r/aww.json',function(x){
    var children = x.data.children;
    $.each(children,function(index,value) {
      console.log(index,":",value);
      $("body").append('<div><p>'+value.data.title+" "+'<img src='+value.data.url+'/></p></div>');
    });
  });


});
