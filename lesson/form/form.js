(function(){
  
  $(function(){
    
    var $form = $("form");

    function onSubmitHandler(ev){

      ev.preventDefault();

      $.ajax({
        url: $form.attr("action"),
        type: "POST",
        data: $form.serialize(),
        success: onSuccess,
        error: onError,
        complete: function(ev){
          console.info(arguments);
        }
      });
      
      
      /*
      $form.find("input").each(function(){
        console.info(this.value);  
      });*/
      
    };
  
   
    $form.bind({
      submit: onSubmitHandler
    });
    
    
    function onSuccess(){
      console.info("YES WE DID IT!");
    };
    
    function onError(){
      console.info("You are done, son!");
    };
    
    
  });
  
})(jQuery);
