var clicked = false
const texts = ["Let it be forgotten as a flower is forgotten,"
,"Forgotten as a fire that once was singing gold,"
,"Let it be forgotten for ever and ever,"
,"Time is a kind friend, he will make us old."
,"If anyone asks, say it was forgotten"
,"Long and long ago,"
,"As a flower, as a fire, as a hushed footfall"
,"In a long forgotten snow.",
" "
]

$(document).ready(function () {
	console.log('Hello World')
})

let index = 0

$(document).click(function(){
    console.log(index)
    $("h1").html(texts[index]).css("width","70%")
    $("h3").css("display","none")
    index++
})

if(index > 9){
    index = 0
    console.log("go back")
}

  $(document).click(function(){
    if(clicked == false){
        $("body").css("background-color","white")
        $("body").css("color","black")
        clicked = true;
       } else {
        $("body").css("background-color","black")
        $("body").css("color","white")
        clicked = false;
       }
    });