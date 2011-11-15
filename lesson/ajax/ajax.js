(function($){
  
  $(function(){
    
    $.ajax({
      url: "test.json",
      success: function(res){
        
        console.info(res.results);
        
        var ul = $("<ul />");
        
        $("#result").append(ul);
        
        $(res.results).each(function(){
          
          var tweet = this;
          
          var img = $("<img />").attr("src",tweet.profile_image_url);
          
          $("<li />").html(tweet.text+" : "+tweet.created_at).append(img).appendTo(ul);
          
          
        })
        
   
      },
      
      error: function(){
        console.info(arguments);
      },
      
      complete: function(){
        console.info(arguments);
      }
    });
  
  })
  
})(jQuery);

