(function($){
  
  $(function(){
    
    //var ary = ['test-output','test2','test3','test4'];
    var ary = {
      test: "test-output",
      test2: "test-output2"
    }
    
    var url = location.href;
    
    var key = "yourkey=";
    
    var output = url.split(key)[1].split("&")[0];
    
    console.log(output);
    console.log(ary[output]);
    
    
    var 
      $test = $("#test"),
      str = $test.text();
    
    if(str.length>200){
      
      str = str.substr(0,200)+"...";
      
      $test.text(str);
      
    }
    
    window.test = {};
    
    $(document).on("changedAndSomething",function(){
      console.log("test's changed");
    })
    
    $(document).trigger("done");
    
    
    /*
    var body = $(document.body);
    
    for(var i in location){
      var v = location[i];
      typeof v === "string"&&body.append($("<h3 />").text(i+" : "+v));
    }*/
    
    
  });

})(jQuery)
