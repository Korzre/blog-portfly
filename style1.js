var menuToggle = document.querySelector(".menuToggle")
var full = document.querySelector(".full")
var contentMenu = document.querySelector(".contentMenu")
var control = true
var info1 = document.querySelector(".info1")


menuToggle.addEventListener("click", function(){   
    if(control){
        console.log(true)
        control = false
        full.style.cssText = "height:270px;transition:1.2s;"

        info1.style.cssText = "margin-top:267px;transition:1.2s;"
    }else if(!control){
        console.log(false)  
        control = true  
        full.style.cssText = "height:0px;transition:1.2s;"  

        info1.style.cssText = "margin-top:12px;transition:1.2s;"
 
    }

    if(full.style.height == "270px"){
        contentMenu.style.cssText = "opacity:1;transition:1.2s;display:flex;"
    }else{
        contentMenu.style.cssText = "opacity:0;transition:1.2s;display:none;"
    }
})


