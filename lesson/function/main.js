(function($){
  
  var testBlueprint = {
    
    value: "mike",
    
    mike: function(){
      alert(this.value);
    },
    
    testArray: null
    
  };
  
  var t = "sfsdfsd";
  
  function Test(){
    console.info("Test is called");
  };
  
  function Test2(){
    this.value = 'test';
    this.testArray = [];
    console.info("Test2 is called");
  }

  var Test3 = function(){
    this.testArray = [];
  };
  
  Test.prototype = testBlueprint;
  Test2.prototype = testBlueprint;
  
  var test = new Test();
  
  var test2 = new Test2();
  console.info(test.testArray.pop());
  console.info(test2.testArray);
  //test.mike();
  //test2.mike();
  
  $(function(){
    
    
    
  });
  
  
})(jQuery)
