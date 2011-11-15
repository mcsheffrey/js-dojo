(function($){
  
  $(function(){
    
     var stickyBox = $(".sticky-box"),
     
         tgTop = 200,
         
         isFixed = false;
     
     
     function onScroll(){
       
       var top = window.pageYOffset;
       
       
       if(top>tgTop && !isFixed){
         
          stickyBox.css({
            position: "fixed",
            top: 0
          });
          
          isFixed = true;
          
       }else if(top<tgTop && isFixed){
         
         stickyBox.css({
           position: "absolute"
         });
         
         isFixed = false;
         
       };
      
         
     };
     
     window.addEventListener("scroll",onScroll);
     
   
  });
   
})(jQuery)
