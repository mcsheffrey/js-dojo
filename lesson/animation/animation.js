(function($){
  
  $(function(){
    
    $.ajax({
      url: "test.json",
      success: function(res){
        
        var ul = $("<ul />");
        
        $("#result").append(ul);
        
        $(res.results).each(function(i){
          
          var tweet = this;
          
          var img = $("<img />").attr("src",tweet.profile_image_url);
          
          var li = $("<li />").html(tweet.text+" : "+tweet.created_at).append(img);
          
          li.appendTo(ul);
          
          
          var padValue = 1;
          
          li.css({
            border: "solid 1px red",
            padding: padValue,
            position: "relative",
            width: 400,
            display: "none"
          });
          
          
          var leftValue = i*100
        
          /*
          var timer = setTimeout(
            
            function(){

              li.fadeIn(200);
              
            },
            
            200*i
            
          );
          */
        });

        
        
        
        var lis = ul.find("li");
        
        lis.each(function(i){
          $(this).delay(200*i).fadeIn(
            500,
            function(){
              $(this).delay(200).animate({
                left: "+="+i*100
              })
            }
          );
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

