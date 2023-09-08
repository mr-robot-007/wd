// $("h1").addClass("big-title margin-50");


// $("h1").text("bye");

// $("button").html("<em>Hey</em>")


// console.log($("img").attr("src"));
// $("a").attr("href","https://www.youtube.com");

// $("h1").click(function() {
//     $("h1").css("color","purple");
// })



// for(var i = 0 ; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function() {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// same thing using jquery
// $("button").click(function() {
//     $('h1').css("color","purple");
// })

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $("input").keypress(function(event) {
//     $("h1").html(event.key)
// })
// $(document).keypress(function(event) {
//     $("h1").text(event.key)
// })


// $("h1").on("mouseover",function() {
//     $("h1").css("color","purple");
// })

// $("button").on("click",function(){
//     $("h1").animate({opacity: 0.5});
// })


$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})