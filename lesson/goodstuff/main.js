(function($){
  
  var goodStuff = {
    
    disHeight: 300,
    
    currentIndex: 0,
    
    shouldContinue: true,
    
    wHeight: 0,
    
    init: function(){
      
      goodStuff.wHeight = $(window).height();
      
      goodStuff.initEvents();
      
    },
    
    initEvents: function(){
      
      $(window).bind({
        scroll: goodStuff.onScroll
      });
      
    },
    
    onScroll: function(){
      
      var top = $(window).scrollTop();
      
      var bHeight = $(document.body).height();

      var dis = bHeight-goodStuff.wHeight-top;

      if(dis<goodStuff.disHeight){
        goodStuff.addNewItem();
      };
      
    },
    
    addNewItem: function(){
      
      var newItem = goodStuff.getNewItem();

      newItem.appendTo(document.body);
      
      $.ajax({
        url: "test.json",
        dataType: "json",
        success: function(res /*json*/){
          
          var results = res.results,
          
              index = goodStuff.currentIndex;

            newItem
             .html(results[index].text)
             .delay(1000)
             .animate({
               opacity: 1
             });
            
           goodStuff.currentIndex+=1;
           
           if( goodStuff.currentIndex === results.length ) {
             
             $(window).unbind("scroll",goodStuff.onScroll);
             
           };
        }
        
      })
      
    },
    
    getNewItem: function(){
      
      var item = $("<div />")
        .css({
          height: 100,
          opacity: 0
        })
        .addClass("item");
        
      return item;  

    }
    
  };
  
  
  $(function(){
    
    goodStuff.init();
 
  });
  
})(jQuery)
