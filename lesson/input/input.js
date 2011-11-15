(function($){
  
  $(function(){
    
    var $bodyClassBox = $("#body-class-input-box");
    
    $bodyClassBox.bind({
      
      change: function(){
        
        var newBodyClass = $bodyClassBox.val();
        
        document.body.className = newBodyClass;

      }
      
    });
    
    
    
    var $addBtn = $("#add-new-html-btn"),
    
        $textArea = $("#new-html-input-box"),
        
        $textContainer = $("#new-text-container");
    
    $addBtn.bind({
      
      click: function(ev){
      
        ev.preventDefault();
        
        var newValue = $textArea.val();
        
        var newElement = $(newValue);
       
        if(newElement.length===0) newElement = $("<p>"+newValue+"</p>");
       
        $textContainer.prepend(newElement);
 
      }
      
    });
    
    
    
    var $editArea = $("#editable-area"),
    
        $editBox = $("#edit-box");
    
    $editBox.val($editArea[0].innerHTML);
    //$editBox[0].value = $editArea[0].innerHTML;
    
    $editBox.bind({
      
      keypress: function(){
        
        $editArea[0].innerHTML = $editBox.val();
        
      }
      
    })
    
    //console.info($editArea[0].innerHTML = "<h1>mike!</h1>");
    
    
  })
  
})(jQuery);

