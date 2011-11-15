(function($){
  
  $(function(){
    
    var textZoom = {
      
      init: function(){
        this.initEvents();
        this.updateSize(1);
      },
      
      initEvents: function(){

        $("#btns a").bind({
          click: $.proxy(this.onClick,this)
        });
        
      },
      
      onClick: function(ev){
        
        ev.preventDefault();
        
        var $el = $(ev.target);
        
        var nIndex = $el.data("textzoom-index");
        
        this.updateSize(nIndex);
        
      },
      
      sizes: ["50%","62.5%","70%"],
      
      index: 1,
      
      updateSize: function(newIndex){
        //this = textZoom
        $("body").css("font-size",this.sizes[newIndex]);
        
      }
      
    };
    
    textZoom.init();
  
  })
  
})(jQuery);

