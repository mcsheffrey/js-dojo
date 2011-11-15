(function($){

  window.textZoom = {
    
    sizes: ["50%","62.5%","70%"],
    
    index: 1,
    
    updateSize: function(newIndex){
      //this = textZoom
      $("body").css("font-size",this.sizes[newIndex]);
      
    }
    
  };
  
})(jQuery)