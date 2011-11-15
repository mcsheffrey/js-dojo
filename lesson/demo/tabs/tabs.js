/* tabs.js 
 * 
 * Simple JavaScript tabs(no IE support)
 * 
 * @author Naomi Suzuki
 * 
 */


(function(){  // Creating a closure

  // declaring variables to use
  
  var menus,  //will store tab buttons
      contents, //will store tab contents
      currentIndex = 1; //index of the current open tab
  
  
  //initElements():Finding and assigning all the elements to variables.
  
  function initElements(){
    
  
    //getElementsByClassName: find elements based on their class names
    //getElementsByTagName: find elements based on their tag names
    
    //Finding elements for tab buttons

    menus = document.getElementsByClassName("tab-menu")[0].getElementsByTagName("a");
    
   
    //Finding elements for tab contents
   
    contents = document.getElementsByClassName("tab-contents")[0].getElementsByTagName("li");
    
    
    //using for loop to iterate through "menus" and giving an attribute "data-tab-index"
    
    for(var i=0;i<menus.length;i++){
      
    
      //creating a new variable "menu" and assigning the item inside of "menus" based on the index variable "i"
    
      var menu = menus[i];
      
     
      //setAttribute: add/update the attribute of a element
      //adding a new attribute "data-tab-index" and assigning the current "i"
        
      menu.setAttribute("data-tab-index",i);

    };
    
    
    //using for loop to iterate through "contents" and hide them
    
    for(var i=0;i<contents.length;i++){
      
        
      //if the "currentIndex" is "i" then it won't be hidden because one of them has to be visible
      
      if(i!=currentIndex){
        
       
        var content = contents[i];
        
        
        //JS can access to the inline style attribute of an element by simply adding ".style" to the element
        //accessing the css property of "display" through "style" and assigning "none"  
        
        content.style.display = "none";

      };

    };

  };
  
  
  //onMenuClick: this function gets called when user clicks tab menu
  
  function onMenuClick(ev/*event object*/){
    
    //preventDefault: this function prevents the default action of the element that fired the event
    //In this case, it prevents the default "jump to the url that's in the href attribute" action in the anchor tag
    
    ev.preventDefault();
    
    
    //creating a variable and assigning the target of this event, which is the html element that was clicked
    
    var tg = ev.target;
    
    
    //getting the attribute "data-tab-index" which was set to the tab menu element.
    
    var newIndex = tg.getAttribute("data-tab-index");
    
    
    //if "newIndex" isn't the "currentIndex", we run the code below.
    //if they are the same, that means user clicked the tab item which is currently active so we don't have to do anything.
    //since the newIndex is String, Number() is comverting it to the type "number"

    if(newIndex!=currentIndex){
      
      //showing the content with the new index
      
      contents[newIndex].style.display = "block";
      
      
      //hiding the content which is currently active
      
      contents[currentIndex].style.display = "none";
      
      
      //the new index becoms the next current index
        
      currentIndex = newIndex;
      
    };

  };


  //initEvents: this fuction initialize a click event to each tab menu items
  //var whatever = function(){}; is the other way to decler a function
    
  var initEvents = function(){
    
    
    //using for loop to iterate through "menus" and assinging click event
      
    for(var i=0;i<menus.length;i++){

      var menu = menus[i];
      
      
      //assigning a click event to each menu element
      
      menu.addEventListener("click",onMenuClick,true);

    };

  };


  //onLoadHandler: this function will be called very first after the page gets loaded and initialize elements and events;

  function onLoadHandler(){
    
    initElements();

    initEvents();

  };
  
  
  //assigning load event to the window
    
  window.addEventListener("load",onLoadHandler,true);
  
  
  //end of the closure
  
})();


