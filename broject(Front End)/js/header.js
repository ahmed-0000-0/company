// start page sec1 //
let profIcon = document.querySelector(".profile-icon");
let screenProfile = document.querySelector(".screen-profile");
let SignInProfile = document.querySelector(".Sign-in");
let ForgotPassword = document.querySelector(".Forgot-password>h3");
let noBtn = document.querySelector(".noBtn");
let noBtnc = document.querySelector(".noBtnc");
let yesBtn = document.querySelector(".yesBtn");
let h2Ele =document.querySelector(".delete");

let screenSucc =document.querySelector(".screen-succ");


let screenCreateAccount = document.querySelector(".screen-create-account");
let SignInAccount = document.querySelector(".Sign-up");
let Exit = document.querySelector(".exit");

let screenForgot = document.querySelector(".screen-forgot");
let ExitScreen = document.querySelector(".exit-screen");


profIcon.onclick = _=>{
    screenProfile.classList.add("show");
}


noBtn.onclick = _=>{
    screenProfile.classList.remove("show");
    screenSucc.classList.add("show");
}
yesBtn.onclick = _=>{
    screenSucc.classList.remove("show");
}

noBtnc.onclick=_=>{
    h2Ele.innerText = "Done!!"
    screenProfile.classList.add("show");
    screenSucc.classList.remove("show");

}

SignInProfile.onclick =_=>{
    screenProfile.classList.remove("show");
    screenCreateAccount.classList.add("show");

}

Exit.onclick = _=>{
    screenCreateAccount.classList.remove("show");
    screenProfile.classList.add("show");
}

ForgotPassword.onclick =_=>{
    screenProfile.classList.remove("show");
    screenForgot.classList.add("show");

}

ExitScreen.onclick = _=>{
    screenForgot.classList.remove("show");
    screenProfile.classList.add("show");

}

// start carousel  page sec1
let profile2 = document.querySelector(".page1 .num2 .slide .page header .icons-actions .profile-icon ");
let screenProfile2 = document.querySelector(".page1 .num2 .slide .page .screen-profile ");
let noBtn2 = document.querySelector(".page1 .num2 .slide .page .screen-profile .content .noBtn");
let screenSucc2 = document.querySelector(".page1 .num2 .slide .page .screen-succ");
let yesBtn2 = document.querySelector(".page1 .num2 .slide .page .screen-succ .content .yesBtn");
let noBtnc2 = document.querySelector(".page1 .num2 .slide .page .screen-succ .content .noBtnc");
let SignInProfile2 = document.querySelector(".page1 .num2 .slide .page .screen-profile .content .Sign-in");
let screenCreateAccount2 = document.querySelector(".page1 .num2 .slide .page .screen-create-account");
let Exit2 = document.querySelector(".page1 .num2 .slide .page .screen-create-account .content .exit");
let ForgotPassword2 = document.querySelector(".page1 .num2 .slide .page .screen-profile .content .bolck .Forgot-password h3");
let screenForgot2 = document.querySelector(".page1 .num2 .slide .page .screen-forgot");
let ExitScreen2 = document.querySelector(".page1 .num2 .slide .page .screen-forgot .content .exit-screen");

profile2.onclick =_=>{
    screenProfile2.classList.add("show");
}
noBtn2.onclick = _=>{
    screenProfile2.classList.remove("show");
    screenSucc2.classList.add("show");
}
yesBtn2.onclick = _=>{
    screenSucc2.classList.remove("show");
}

noBtnc2.onclick=_=>{
    // h2Ele.innerText = "Done!!"
    screenSucc2.classList.remove("show");
    screenProfile2.classList.add("show");

}

SignInProfile2.onclick =_=>{
    screenProfile2.classList.remove("show");
    screenCreateAccount2.classList.add("show");

}

Exit2.onclick = _=>{
    screenCreateAccount2.classList.remove("show");
    screenProfile2.classList.add("show");
}

ForgotPassword2.onclick =_=>{
    screenProfile2.classList.remove("show");
    screenForgot2.classList.add("show");

}

ExitScreen2.onclick = _=>{
    screenForgot2.classList.remove("show");
    screenProfile2.classList.add("show");

}
// end carousel  page sec1

// 
let List = document.querySelector("header .list .offcanvas-end");

let profIconList = document.querySelector("header .list .offcanvas-header .profile-icon");

profIconList.onclick = _=>{ 
    screenProfile.classList.add("show");
    List.classList.remove("show");
}


// click page list pic2
let clickList = document.querySelector(".page1 #carouselExampleFade .carousel-inner .carousel-item .num2 .slide .page header .list .container-fluid .navbar-toggler");
let offcanvas = document.querySelector(".page1 #carouselExampleFade .carousel-inner .carousel-item .num2 .slide .page header .list .container-fluid .offcanvas-end");
let btnClose = document.querySelector(".page1 #carouselExampleFade .carousel-inner .carousel-item .num2 .slide .page header .list .container-fluid .offcanvas-end .offcanvas-header .btn-close");
let profileIcon = document.querySelector(".page1 #carouselExampleFade .carousel-inner .carousel-item .num2 .slide .page header .list .container-fluid .offcanvas-end .offcanvas-header .profile-icon");


clickList.onclick =_=>{
    offcanvas.classList.add("show");
}
btnClose.onclick =_=>{
    offcanvas.classList.remove("show");
}
profileIcon.onclick =_=>{
    offcanvas.classList.remove("show");
    screenProfile2.classList.add("show");
}
// end page sec1 //


// start news-boxs //
let mouseEle =document.querySelector(".news-boxs");

let mouseEle1 =document.querySelector(".news-boxs>.row>.col:nth-child(1)");
let mouseEle2 =document.querySelector(".news-boxs>.row>.col:nth-child(2)");
let mouseEle3 =document.querySelector(".news-boxs>.row>.col:nth-child(3)");

let mouseCard1 =document.querySelector(".card1");
let mouseCard2 =document.querySelector(".card2");
let mouseCard3 =document.querySelector(".card3");

let mouseImg1 =document.querySelector(".card1>img");
let mouseImg2 =document.querySelector(".card2>img");
let mouseImg3 =document.querySelector(".card3>img");

//onmouseenter
mouseEle2.onmouseenter =_=>{
    mouseEle2.style.width = "608px"
    mouseCard2.style.width ="608px"
    mouseImg2.style.setProperty("object-fit" , "cover")
    

    mouseEle1.style.width = "302px"
    mouseCard1.style.width = "302px"

    mouseEle3.style.width = "302px"
    mouseCard3.style.width = "302px"
    
}
mouseEle2.onmouseout =_=>{
    mouseEle2.style.width = "302px"
    mouseCard2.style.width ="302px"
    // mouseImg2.style.setProperty("0" , "0")
    

    mouseEle1.style.width = "608px"
    mouseCard1.style.width = "608px"

}

// onmouseenter
mouseEle3.onmouseenter =_=>{
    mouseEle3.style.width = "608px"
    mouseCard3.style.width ="608px"
    mouseImg3.style.setProperty("object-fit" , "cover")
    

    mouseEle1.style.width = "302px"
    mouseCard1.style.width = "302px"

    mouseEle2.style.width = "302px"
    mouseCard2.style.width = "302px"
    
}
mouseEle3.onmouseout =_=>{
    mouseEle3.style.width = "302px"
    mouseCard3.style.width ="302px"
    
    mouseEle1.style.width = "608px"
    mouseCard1.style.width = "608px"

}
// end news-boxs //


