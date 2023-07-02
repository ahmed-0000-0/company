// start page sec1 //
let profIcon2= document.querySelector(".page2>.slideShow>.slide>.product>.container>.icons-actions>.profile-icon");
let screenProfile2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-profile");
let SignInProfile2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-profile>.content>.Sign-in");
let ForgotPassword2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-profile>.content>.bolck>.Forgot-password>h3");
let noBtn2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-profile>.content>.noBtn");
let noBtnc2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-succ>.content>.noBtnc");
let yesBtn2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-succ>.content>.yesBtn");
let h2Ele2 =document.querySelector(".page2>.slideShow>.slide>.product>.screen-succ>.content>.delete");

let screenSucc2 =document.querySelector(".page2>.slideShow>.slide>.product>.screen-succ");


let screenCreateAccount2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-create-account");
let SignUpAccount2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-create-account>.content>.Sign-up");
let Exit2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-create-account>.content>.exit");

let screenForgot2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-forgot");
let ExitScreen2 = document.querySelector(".page2>.slideShow>.slide>.product>.screen-forgot>.content>.exit-screen");



profIcon2.onclick = _=>{
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
    h2Ele2.innerText = "Done!!"
    screenProfile2.classList.add("show");
    screenSucc2.classList.remove("show");

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
// end page sec1 //
// 
let List = document.querySelector(".page2 .slideShow .slide .product header .list .offcanvas-end");
// let ListBackground = document.querySelector("header .list .offcanvas-end>.fade");

let profIconList = document.querySelector(".page2 .slideShow .slide .product header .list .offcanvas-header .profile-icon ");

profIconList.onclick = _=>{ 
    screenProfile2.classList.add("show");
    List.classList.remove("show");
}
// 
/////////////////////////////////////////////////////////////////////////////////

// let colorSel;
let imgBig = document.querySelector(".product #big-img img")
// img gallery 
document.querySelectorAll(".product img").forEach(item => {
    item.onclick = _ => {
      document.querySelector("#big-img img").src = item.src
    }
})

// select color product change big img
document.querySelectorAll("[data-color]").forEach(box => {
  box.onclick = _ => {
    document.querySelectorAll("[data-color]").forEach(x => {
      x.removeAttribute("selected")
    })
    box.setAttribute("selected" , "true")
    // box.style.opacity = 0.5 
    document.querySelectorAll("#sm-img img").forEach(img => {
      if (box.getAttribute("data-color") == img.getAttribute("data-img-color")) {
        document.querySelector("#big-img img").src = img.src
      }
    })
  }
});



// increase and decrease number of product
let incBtn = document.querySelector(".inc")
let decBtn = document.querySelector(".dec")
let numEl = document.querySelector(".num")

incBtn.onclick = _=>{
  numEl.innerText =  +numEl.innerText + 1;
}
decBtn.onclick = _=>{
  if (numEl.innerText == 1) {
    decBtn.style.opacity = 0.5
    decBtn.style.cursor = "not-allowed"
  }else{
    numEl.innerText =  +numEl.innerText - 1;
  }
}

// add product for cart list
let productAll = JSON.parse(localStorage.getItem("list-product")) || []
let namePro = document.querySelector(".proName").innerText
let pricePro = document.querySelector(".price .new").innerText
let colorBox = document.querySelectorAll(".colors .box")
let sizeEl = document.querySelector("#options-size");
let colorSel ;


document.querySelector("#addProduct").onclick = _=>{
  colorBox.forEach(col =>{
    if (col.hasAttribute("selected")) {
      colorSel = col.getAttribute("data-color")
    }
  })
  create()
}

function create() {
    let product = {}
  product.imgSrc = imgBig.src;
  product.name = namePro;
  product.price = pricePro;
  product.color = colorSel;
  product.size = sizeEl.value;
  product.count = numEl.innerText;

  productAll.push(product)
  
  localStorage.setItem("list-product" , JSON.stringify(productAll))
  showProduct() 
}


// show All product from local storage
let listPr = document.querySelector("#product-list-data")
let totalEl = document.querySelector("#total")

let totValue
function showProduct() {
    totValue = 0
    listPr.innerHTML =""
    productAll.forEach((pro , i)=>{
        listPr.innerHTML += `
        <div class="row">
           <div class="col-2"><img src="${pro.imgSrc}" alt=""></div>
           <div class="col-3">${pro.name}</div>
           <div class="col-1">${pro.color}</div>
           <div class="col-1">${pro.size}</div>
           <div class="col-1">${pro.count}</div>
           <div class="col-1">${pro.price}</div>
           <div class="col-1">${pro.count * pro.price}</div>
           <div class="col-2"><button id="deleteProlist" data-num="${i}">X</button></div>
        </div>
        `;
        totValue += pro.count * pro.price
    })    
    
    totalEl.innerText = totValue
}
  
showProduct();
  

// delete one product
document.addEventListener("click" , e =>{
    if (e.target.id == "deleteProlist") {
        console.log(e.target);
        
        let prodNumber = e.target.getAttribute("data-num");
        del(prodNumber)
    }
})

function del(id) {
    productAll.splice(id , 1)
    localStorage.setItem("list-product" , JSON.stringify(productAll))
    showProduct() 
    
}