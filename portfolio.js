$(function(){
    $(".special").click(function(e){
        e.preventDefault(); //To prevent the default anchor tag behaviour
        var url = this.href;
        $("body").load(url);
    });
});
$(".one button").on("click",function(){
   $(".one p").slideToggle(500);
});
$(".two button").on("click",function(){
   $(".two p").slideToggle(500);
});
$(".three button").on("click",function(){
   $(".three p").slideToggle(500);
});
$(".four button").on("click",function(){
   $(".four p").slideToggle(500);
});
