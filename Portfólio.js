let CalculaterIMG = ["Calculater1.png","Calculater2.png"]
let WebSiteIMG = ["WebSite1.png","WebSite2.png","WebSite3.png","WebSite4.png","WebSite5.png",]
let RegisterIMG = ["RegisterIMG.png"]

let CalculaterIndex = 0
let WebSiteIndex = 0
let RegisterIndex = 0

let LeftRegister = document.getElementById("LeftRegister")
let register = document.getElementById("register")
LeftRegister.onclick = function() {
    RegisterIndex = RegisterIndex-1

    if(RegisterIndex < 0) {
        RegisterIndex = RegisterIMG.length - 1;
        register.src = RegisterIMG[RegisterIndex]
    }

    else {
        register.src = RegisterIMG[RegisterIndex]
    }
}

    let RightRegister = document.getElementById("RightRegister")
    RightRegister.onclick = function() {
    RegisterIndex = RegisterIndex + 1

    if(RegisterIndex >= RegisterIMG.length) {
        RegisterIndex = 0
        register.src = RegisterIMG[RegisterIndex]
    }

    else {
        register.src = RegisterIMG[RegisterIndex]
    }
}

let LeftCalculater = document.getElementById("LeftCalculater")
let calculater = document.getElementById("calculater")
LeftCalculater.onclick = function() {
    CalculaterIndex = CalculaterIndex-1

    if(CalculaterIndex < 0) {
        CalculaterIndex = CalculaterIMG.length - 1;
        calculater.src = CalculaterIMG[CalculaterIndex]
    }

    else {
        calculater.src = CalculaterIMG[CalculaterIndex]
    }
}

    let RightCalculater = document.getElementById("RightCalculater")
    RightCalculater.onclick = function() {
    CalculaterIndex = CalculaterIndex + 1

    if(CalculaterIndex >= CalculaterIMG.length) {
        CalculaterIndex = 0
        calculater.src = CalculaterIMG[CalculaterIndex]
    }

    else {
        calculater.src = CalculaterIMG[CalculaterIndex]
    }
}

let LeftWebSite = document.getElementById("LeftWebSite")
let WebSite = document.getElementById("WebSite")
LeftWebSite.onclick = function() {
    WebSiteIndex = WebSiteIndex-1

    if(WebSiteIndex < 0) {
        WebSiteIndex = WebSiteIMG.length - 1;
        WebSite.src = WebSiteIMG[WebSiteIndex]
    }

    else {
        WebSite.src = WebSiteIMG[WebSiteIndex]
    }
}

    let RightWebSite = document.getElementById("RightWebSite")
    RightWebSite.onclick = function() {
    WebSiteIndex = WebSiteIndex + 1

    if(WebSiteIndex >= WebSiteIMG.length) {
        WebSiteIndex = 0
        WebSite.src = WebSiteIMG[WebSiteIndex]
    }

    else {
        WebSite.src = WebSiteIMG[WebSiteIndex]
    }
}