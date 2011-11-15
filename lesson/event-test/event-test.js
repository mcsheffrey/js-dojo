
function onLoad(){
  
  var elements = [];
  
  var div = document.getElementsByTagName('div')[0],
  
      p = document.getElementsByTagName('p')[0],
      
      a = document.getElementsByTagName('a')[0],
      
      span = document.getElementsByTagName('span')[0];
  
  
  elements.push(div,p,a,span);
  
  var k = 100;
  
  var timer = setInterval(function(){
    
    for(var i=0;i<elements.length;i++){
      //console.log(elements[i]);
      elements[i].style.padding = k;
    }
    
    k-=5;
    console.info(k);
    if(k<0) clearInterval(timer);
    
  },60);
  
/*
  for(var i=0;i<elements.length;i++){
    //console.log(elements[i]);
    initEvent(elements[i]);
  }
  */
}

function initEvent(el){
  
  el.addEventListener("click",onClicked,false);
  //el.addEventListener("mouseout",onMouseout,false);
}

function onMouseout(ev){
  ev.preventDefault();
  //ev.stopPropagation();
  //console.info(ev.currentTarget.tagName);
  console.info('out');
}


function onClicked(ev){
  ev.preventDefault();
  //ev.stopPropagation();
  console.info("target is" +ev.target.tagName);
  console.info("currentTarget is"+ev.currentTarget.tagName);
  console.info('clicked');
}


window.addEventListener('load',onLoad,true)

