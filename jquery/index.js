console.log($("h1").css("color"));
$("h1").css("color","green");

$("h1").addClass("big-title margin-50");

console.log($("h1").text());
$("button").text("Dont click me");
$("button").html("<em>Dont click me now </em>");

console.log($("img").attr("src"))

$('a').attr("href","https://www.yahoo.com")
console.log($('a').attr("href"))


$("h1").click(function(){
$("h1").css("color","green");
$("h1").css("opacity","1.0");
});

$("button").click(function(){
$("h1").css("color","purple");
});

$("input").keydown(function(event){
    console.log(event.key)
})


$(document).keydown(function(event){
console.log(event.key)
})



$("h1").before("<button>before tag</button>")
$("h1").after("<button>after tag</button>")
$("h1").append("<button>append tag</button>")
$("h1").prepend("<button>prepend tag</button>")


$(".first").remove()

$(".second").on("click",function(){
$("h1").toggle()
});

$(".third").on("click",function(){
$("h1").fadeToggle();
});

$(".fourth").on("click",function(){
$("h1").fadeToggle();
});

$(".five").on("click",function(){
$("h1").slideUp().slideDown().animate({opacity:0.5});
});