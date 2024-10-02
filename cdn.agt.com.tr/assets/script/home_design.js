function checkInside(e) {
  let imgItem = document.getElementsByClassName("img-item popup");
  if (imgItem[0] && imgItem[0].contains(e.target) === false) {
    closePopUp();
  }
}

function checkSeenValue() {
  // if (!localStorage.getItem("floorscoreMessageSaw")) {
  if (window.location.pathname.indexOf("home-design") > -1) return;
  showPopUp();
  loadCss();
  window.addEventListener("click", checkInside);
  // }
}

function loadCss() {
  let head = document.getElementsByTagName("head")[0];
  if (head) {
    let createdStyle = document.createElement("style");
    createdStyle.innerHTML = `
       * {
       margin: 0;
       padding: 0;
     }
     .ps-btn{
        height:4vh;
        position: absolute;
     }
     .pop-up-root {
       height: 100%;
       width: 100%;
       position: fixed;
       left: 0;
       top: 0;
       background-color: #00000080;
       z-index: 9999;
     }
     .pop-up-root .pop-up-container {
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
     }
 
     .pop-up-root img {
       width: 100%;
       height: 100%;
       object-fit: contain;
     }
     .pop-up-root .img-item img:nth-child(2) {
       display: none;
     }
     .pop-up-root .pop-up-block {
       position: relative;
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .pop-up-root .img-item {
       display: flex;
       position: relative;
       width: 50%;
     }
 
     .pop-up-root .btn-block {
       width: 600px;
       height: 48px;
       display: flex;
       align-items: center;
       justify-content: end;
       margin: 0 0 20px 0;
     }
 
     .pop-up-root .btn-item {
       cursor: pointer;
     }
 
     .pop-up-root .pop-up-block .btn-item {
       display: none;
     }
 
     .pop-up-root svg:hover {
       fill: #000000;
       fill-opacity: 0.8;
     }
     .pop-up-root svg {
       fill: #000000;
       fill-opacity: 0.5;
     }
     .pop-up-root .img-item .parke-link {
       position: absolute;
       width: 145px;
       height: 60px;
       left: 19%;
       top: 34%;
     }
 
     .pop-up-root .img-item .mood-link {
       position: absolute;
       width: 140px;
       height: 60px;
       right: 22%;
       bottom: 17%;
     }
 
     @media only screen and (max-width: 1151px) {
       .pop-up-root .btn-block {
         width: 50%;
       }
       .pop-up-root .pop-up-container {
         padding: 0 30px;
       }
     }
     @media only screen and (max-width: 1090px) {
       .pop-up-root .btn-block {
         width: 50%;
       }
       .pop-up-root .img-item .parke-link {
         width: 120px;
         height: 50px;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 120px;
         height: 50px;
       }
     }
 
     @media only screen and (max-width: 946px) {
       .pop-up-root .img-item .parke-link {
         width: 105px;
         height: 45px;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 105px;
         height: 45px;
       }
     }
 
     @media only screen and (max-width: 810px) {
       .pop-up-root .img-item .parke-link {
         width: 90px;
         height: 40px;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 90px;
         height: 40px;
       }
     }
 
     @media only screen and (max-width: 768px) {
       .pop-up-root .img-item {
         width: 100%;
       }
       .pop-up-root .btn-block {
         display: none;
       }
       .pop-up-root .pop-up-block {
         display: block;
       }
       .pop-up-root .pop-up-block .btn-item {
         display: flex;
         align-items: center;
         justify-content: flex-end;
         margin: 0 0 20px 0;
       }
       .pop-up-root .img-item img:nth-child(1) {
         // display: none;s
       }
       .pop-up-root .img-item img:nth-child(2) {
         display: block;
       }
       .pop-up-root .img-item .parke-link {
         width: 105px;
         height: 45px;
         top: 26%;
         left: 30%;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 105px;
         height: 45px;
         bottom: 12%;
         left: 30%;
       }
     }
 
     @media only screen and (max-width: 500px) {
       .pop-up-root svg {
         display: inline-block;
         width: 38px;
         height: 38px;
       }
       .pop-up-root .btn-block {
         margin: 0 0 10px 0;
       }
       .pop-up-root .img-item .parke-link {
         width: 105px;
         height: 45px;
         top: 26%;
         left: 30%;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 105px;
         height: 45px;
         bottom: 12%;
         left: 30%;
       }
     }
     @media only screen and (max-width: 400px) {
       .pop-up-root svg {
         display: inline-block;
         width: 32px;
         height: 32px;
       }
       .pop-up-root .btn-block {
         margin: 0 0 5px 0;
       }
       .pop-up-root .img-item .parke-link {
         width: 105px;
         height: 45px;
         top: 26%;
         left: 30%;
       }
 
       .pop-up-root .img-item .mood-link {
         width: 105px;
         height: 45px;
         bottom: 12%;
         left: 30%;
       }
       .ps-btn{
         width:120px;
       }
     }`;
    head.appendChild(createdStyle);
  }
}

function showPopUp() {
  let body = document.getElementsByTagName("body")[0];
  let styles = window.location.pathname.indexOf("/en") > -1 ? (
    window.innerWidth >= 768 ? {
      width: "13vw",
      left: "36%",
      bottom: "9%",
    } : window.innerWidth <= 500 ? {
      width: "25vw",
      left: "36%",
      bottom: "9%",
      height: "3vh"
    } : {
      width: "26vw",
      left: "36%",
      bottom: "9%",
      height: "5vh"
    }
  ) : (
    window.innerWidth >= 768 ? {
      width: "12vw",
      "max-width": "130px",
      left: "38%",
      bottom: "12%",
      height: "3.5vh"
    } : window.innerWidth <= 500 ? {
      width: "22vw",
      left: "38%",
      bottom: "12%",
      height: "2vh"
    } : {
      width: "22vw",
      left: "38%",
      bottom: "12%",
    }
  )
  function stringifyStyles(styles) {
    return Object.keys(styles)
      .map(key => `${key}:${styles[key]}`)
      .join(';');
  }

  if (body) {
    let imagePath = 
      window.location.pathname.indexOf("/en") > -1
        ? "https://cdn.agt.com.tr/assets/img/yerden_isitma_en"
        : "https://cdn.agt.com.tr/assets/img/yerden_isitma_tr";
    let createdDiv = document.createElement("div");
    createdDiv.className = "pop-up-root";
    createdDiv.innerHTML = `<div class="pop-up-container">
       <div class="btn-block" onclick="closePopUp()">
         <div class="btn-item" >
         <svg
         width="48"
         height="48"
         viewBox="0 0 48 48"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <g opacity="0.88">
           <rect width="48" height="48" rx="24" />
           <path
             d="M16 16L32.0001 32.0001"
             stroke="white"
             stroke-width="2"
             stroke-linejoin="round"
           />
           <path
             d="M32 16L15.9999 32.0001"
             stroke="white"
             stroke-width="2"
             stroke-linejoin="round"
           />
         </g>
       </svg>
         </div>
       </div>
       <div class="pop-up-block">
         <div class="btn-item" onclick="closePopUp()">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.88">
                 <rect width="48" height="48" rx="24"></rect>
                 <path d="M16 16L32.0001 32.0001" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
                 <path d="M32 16L15.9999 32.0001" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
               </g>
             </svg>
         </div>
         <picture class="img-item popup">
       
         <source srcSet="${imagePath + ".jpg"}" type="image/jpeg"/>
         <source srcSet="${imagePath + ".webp"}" type="image/webp"/>
           <img src="${imagePath + ".jpg"}" alt="pop-up" />
           <a style="${stringifyStyles(styles)}" class="ps-btn" href="https://www.agt.com.tr/tr/sanal-showroom-page/home-design"  onclick="closePopUp()"></a>
           
         </picture>
       </div>
     </div>`;
    body.appendChild(createdDiv);
  }
}

function closePopUp() {
  let alertDiv = document.getElementsByClassName("pop-up-root");
  if (alertDiv[0]) {
    alertDiv[0].remove();
  }
  localStorage.setItem("floorscoreMessageSaw", true);
}

checkSeenValue();
