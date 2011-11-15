(function(){

  $(function(){
    
    
    
    /*$("a.test").live("click",function(e){
      e.preventDefault();
      console.info("click");
    });*/
    
    
    
    $("#container").delegate(".test","click",function(e){
      e.preventDefault();
      //console.info("click");
    });
    
    for(var i=0;i<10;i++){
      
      var newA = $("<a />");
      
      newA
        .attr({
          href: "#",
          class: "test"
        })
        .css({
          padding: 2
        })
        .addClass(i%2==0? "even" : "odd")
        .html("test"+(i+4))
        .appendTo($("#container"));
      
    };
    
    var tg = $(".test").eq(5);
    
    tg
      .animate({
        padding: 100
      })
      
    tg.delay(300)
    
    tg.animate({
      opacity: 0
    });
    
    tg.hide(400);
    
    
    
    
  });
  
})();

