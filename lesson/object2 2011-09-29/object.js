(function(){
  
  var obj = {
    "video1": {
      "videoPath": "s3/whatever/test.mp4",
      "poster": "whatever.jpg"
    },
    "animal": "this page title 1",
    "onClick": function(){
      console.info(this);
    },
    "test": {
      value: 'test value',
      cTest: {
        v: "whatever"
      }
    }
  };
  
  function test(cfg){
    //cfg.id
  }
  
  test({
    id: "testId",
    whatever: "whatever"
  })
  
  obj.onClick();
  
  obj.test.cTest.c = "test test";
  
  var arr = ["test0","test1","test2"];
  
  var a = document.getElementById("test");
  
  var videoId = a.getAttribute("data-video-id");
  
  function onAClick(ev){
    
    ev.preventDefault();
    
    var el = ev.target;
    
    var videoIndex = el.getAttribute("data-video-index");
    
    
    var videoId = el.getAttribute("data-video-id");
    console.info(this);

  }
  
  a.addEventListener("click",obj.onClick,true);
  
})();

