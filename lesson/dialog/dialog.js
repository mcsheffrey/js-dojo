
function onBtnClick(ev){
  
  ev.preventDefault();
  
  var dialog = document.getElementById("dialog");
  
  dialog.style.display = "block";
  
}


function initEvents(){
  
  var button = document.getElementById("dialog-button");
  
  button.addEventListener("click",onBtnClick,true);
  
}


window.addEventListener("load",initEvents,true);




