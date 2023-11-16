// // var button = document.getElementsByTagName("button")[0]
// // button.addEventListener("mouseenter",function(){
// //     console.log("Click!!!")
// // }) 



var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function lenchck(){
    return input.value.length;
}

function enterData(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}



button.addEventListener("click", function(){
    if (lenchck()>0){
        enterData()
    }
})


input.addEventListener("keypress", function(event){
    if (lenchck()>0 && event.code==="Enter"){
        enterData()
    }
})



