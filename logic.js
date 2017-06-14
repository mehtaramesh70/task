 $(document).ready(function(){
             var count=0;
       $("rect:even").one("click",function(){
                 count++;
             $(this).css("fill","blue");
             $("#even").html(count);
        });
       $("rect:odd").one("click",function(){
                 $(this).css("fill","red");
                 $("#odd").html(count);
        });
 });