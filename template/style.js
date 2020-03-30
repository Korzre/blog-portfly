var menuToggle = document.querySelector(".menuToggle")
var full = document.querySelector(".full")
var contentMenu = document.querySelector(".contentMenu")
var control = true


menuToggle.addEventListener("click", function(){   
    if(control){
        console.log(true)
        control = false
        full.style.cssText = "height:270px;transition:1.2s;"

    }else if(!control){
        console.log(false)  
        control = true  
        full.style.cssText = "height:0px;transition:1.2s;"  
        
 
    }

    if(full.style.height == "270px"){
        contentMenu.style.cssText = "display:block;opacity:1;transition:2.2s;"
    }else{
        contentMenu.style.cssText = "display:none;opacity:0;transition:2.2s;"
    }
})


