(function(){
  
  var menus,
      contents,
      currentIndex = 1;
      

  function initElements(){
    
    menus = document.getElementsByClassName("tab-menu")[0].getElementsByTagName("a");
    
    contents = document.getElementsByClassName("tab-contents")[0].getElementsByTagName("li");
    
    
    for(var i=0;i<menus.length;i++){
      
      var menu = menus[i];
      menu.tabIndex = i;
      menu.setAttribute("data-tab-index",i);
      
    };
    
    
    for(var i=0;i<contents.length;i++){
      
      if(i!=currentIndex){
      
        var content = contents[i];
      
        content.style.display = "none";
      
      };
      
    };
    
  };
  
  
  function onMenuClick(ev){
    
    ev.preventDefault();
    
    var tg = ev.target;
    console.info(tg.tabIndex);
    var newIndex = tg.getAttribute("data-tab-index");
   
    contents[newIndex].style.display = "block";
    
    contents[currentIndex].style.display = "none";
    
    currentIndex = newIndex;
    
  };
  
  var initEvents = function(){
  
    for(var i=0;i<menus.length;i++){
      
      var menu = menus[i];
      
      menu.addEventListener("click",onMenuClick,true);
      
    };
    
  };
  
  
  function onLoadHandler(){
  
    initElements();
    
    initEvents();
    
  };


  window.addEventListener("load",onLoadHandler,true);

})();
