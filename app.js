$(function(){
  $.getJSON('https://www.reddit.com/r/aww.json',function(x){
    var children = x.data.children;
    $.each(children,function(index,value) {
      console.log(index,":",value);
      $("body").append('<div class="col-md-3 well"><p>'+value.data.title+'</br>' +'<img src='+value.data.url+'/></p></div>');
      $("img").css('width','200px');
      // $("img").css('height','200px');
    });
  });


});
