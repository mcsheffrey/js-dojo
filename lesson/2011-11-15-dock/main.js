(function($){
  
  var dock = {
    
    data: null,
    
    $dom: null,

    items: null,
    
    originalWidth: null, 
    
    init: function(){
      console.log('init');
      dock.loadData();
    },
    
    loadData: function(){
      console.log('loadData');
      $.ajax({
        url: "data.json",
        dataType: "json",
        success: dock.onSuccess,
        error: function(ev){
          console.log("error!",ev);
        }
      });
      
    },
    
    onSuccess: function(data,result,event){
      console.log('onSuccess');
      dock.data = data;
      dock.items = [];
      dock.createDom();
      dock.initEvents();
    },
    
    createDom: function(){
      
      console.log('createDom');
      console.log(dock.data);
      
      dock.$dom = $("#dock")
      
      var $container = $("<ul />");
      
      $(dock.data).each(function(){
        
        var 
          newIcon = $("<li />"),
          link = $("<a />"),
          span = $("<span />"),
          img = $("<img />");
          
        link
          .attr("href",this.url)
          .html("<span>"+this.title+"</span>")
          .append(img);
        
        img
          .attr("src",this.icon);
        
        newIcon
          .append(link)
          .appendTo($container);
        
        dock.items.push(link);
          
      });
      
      dock.$dom.append($container);
      
    },
    
    initEvents: function(){
      
      dock.originalWidth = dock.items[0].width();
     
      $(dock.items).each(function(){
        
        var $a = $(this);
        
        $a.on({
          
          mouseenter: function(){
            $a.css({
              width: dock.originalWidth*1.5
            })
          },
          
          mouseleave: function(){
            $a.css({
              width: dock.originalWidth
            })
          }
          
        })
        
        
      });
      
      
      
      
    }
    
  };
  
  
  
  $(function(){
    
    dock.init();
    
  });

})(jQuery);
