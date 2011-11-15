(function($){
  
  $(function(){
    
    function initTextZoomEvents(){
      
      var $btns = $("#btns a");
      
     /* $btns.click(function(ev){
         
        ev.preventDefault();
        
        var $clickedItem = $(this),
        
            index = $clickedItem.data("textzoom-index");
        
        textZoom.updateSize(index);
         
      });*/
      
      $btns.each(function(index,actualItem){
      
        $(actualItem).click(function(ev){
          
          ev.preventDefault();
          
          textZoom.updateSize(index);
          
        });
       
      });
     
    };
    
    
    //set default size
    textZoom.updateSize(1);
    
    initTextZoomEvents();
    
  });
  
  
  
  
})(jQuery)
