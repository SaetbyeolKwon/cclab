var clicked = false
const texts = ["Let it be forgotten as a flower is forgotten,"
,"2","3","4","5","6","7"]

$(document).ready(function () {
	console.log('Hello World')
})

for(let i=0; i<texts.length; ++i){
    $(document).click(function(){
        console.log(i);
        $("h1").html("Let it be forgotten, as a flower is forgotten, Forgotten as a fire that once was singing gold,").css("width","70%")
        $("h3").css("display","none")
    })
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