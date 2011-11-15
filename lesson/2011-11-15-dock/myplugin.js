(function($){
  
  $.fn.myplugin = function(){
    
    this
      .append($("<div />"))
      .append($("<a href='#' />").text("click"))
      .css({
        border: "solid 1px #000",
        height: 100,
        width: 100
      })
      .find('a')
        .on("click",function(e){
          e.preventDefault();
          alert('clicked');
        })
    
    return this;
    
  };
  
})(jQuery);
