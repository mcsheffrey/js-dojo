(function($){
  
  $(function(){
    
    var textZoom = {
      
      init: function(){
        this.initEvents();
        this.updateSize(1);
      },
      
      initEvents: function(){
        
        var _this = this;
        //this -> textZoom
        //_this -> textZoom

        $("#btns a").each(function(i){
          
          var $a = $(this);
          
          $a.bind({
            click: function(ev){
              ev.preventDefault();
              _this.updateSize(i)
            }
          });
          
        })
        
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

