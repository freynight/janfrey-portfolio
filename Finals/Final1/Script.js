console.log(Document)
const var1 = document.getElementById("name1")
console.log(var1)

const btn1 = document.getElementById("button1")
 console.log(btn1)

const var2 = document.getElementById("output")
console.log(var2)

const btn2 = document.getElementById("button2")
 console.log(btn2)

const btn3 = document.getElementById("button3")
 console.log(btn3)

const input = document.getElementById("input1")
 console.log(input)

const img1=document.getElementById("image1")
 console.log(img1)

 img1.addEventListener(
    "mouseover", function(){
        var2.innerHTML="Mouse Pointed"
    }
)

 img1.addEventListener(
    "mouseout", function(){
        var2.innerHTML="Mouse Pointed"
    }
)

 btn1.addEventListener(
    "click", function(){
        var1.innerHTML="Please Enter Your Nickname"
        var1.style.backgroundColor="Aquamarine"
    }
 )

 btn2.addEventListener(
    "dblclick", function(){
        var1.innerHTML="Please Enter Your Nickname"
        var1.style.backgroundColor="lightgreen"
    }
 )

btn3.addEventListener(
    "click", function(){
        var1.innerHTML="Please Enter Your Nickname"
        var1.style.backgroundColor="Champagne"
    }
 )

input.addEventListener(
    "focus", function(){
        input.style.backgroundColor="cyan"
    }
)

input.addEventListener(
    "blur", function(){
        input.style.backgroundColor="white"
    }
)

input.addEventListener(
    "change", function(){
        var1.innerHTML="Entered: " +input.value+"!"
        input.style.color="Orange"
    }
)


