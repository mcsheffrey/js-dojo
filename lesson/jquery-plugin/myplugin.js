(function($){
  
  $.fn.myplugin = function(size){
    
    var pxSize;
    
    switch(size){
      
      case "small":
        pxSize = 20;
      break;
      
      case "normal":
        pxSize = 50;
      break;
      
      case "large":
        pxSize = 100;
      break;
      
    };
    
    this
      .css({
        fontSize: pxSize
      });
    
    this.each(function(){
      
      console.info(this);
      
    });
    
    return this;
    
  };
  
})(jQuery);
