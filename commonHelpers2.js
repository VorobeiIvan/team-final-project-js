import"./assets/burger-menu-5139967a.js";/* empty css                      */import{a as m,P as L,i as d}from"./assets/vendor-61000f44.js";const r={galleryRef:document.querySelector(".gallery"),closeBtn:document.querySelector(".modal_close_btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),cardRef:document.querySelector(".card")};console.log("refs.modalContainer: ",r.modalContainer);r.cardRef.addEventListener("click",q);async function C(e){return await(await fetch("https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2")).json()}function q(e){C().then(t=>{$(t)}),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.backdrop.classList.add("scroll"),k()}function k(){document.addEventListener("click",e=>{e.target===r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),r.closeBtn.addEventListener("click",()=>{r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll")})}function $(e){const t=e.gifUrl,o=e.name,s=Number(e.rating).toFixed(1),i=e.target,a=e.bodyPart,n=e.equipment,l=e.popularity,u=e.burnedCalories,x=e.description;return r.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${t}" alt="${o}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${o}</h3>
        <div class="rating-element">
            <p class="rating-count" id="vote">${s}</p>
            <p class="info-item">******</p>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${i}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${l}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${u}</p>
            </div>
          </div>
          <p class="about-info">${x}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
          </button>
          <button class="button give-a-rating" type="button">Give a rating</button>
        </div>
      </div>`}m.defaults.baseURL="https://your-energy.b.goit.study/api";const S="filters",B="exercises",T="subscription",I=async({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>await m.get(`/${S}?filter=${o}&page=${e}&limit=${t}`).then(s=>s.data),M=async({page:e=1,perPage:t=12,filter:o={}}={})=>await m.get(`/${B}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(s=>s.data),R=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},N=async e=>await m.post(`/${T}`,{email:e}).then(t=>t.data);function v(e){return e.toString().padStart(2,"0")}function A(e){return[e.getFullYear(),v(e.getMonth()+1),v(e.getDate())].join("-")}const D=({quote:e,author:t})=>`
  <div class="quote-container">
    <div class="quote-wrap">
      <div class="quote-wrapper">
        <div class="quote-svg-wrap">
          <svg class="quote-svg" width="34" height="32">
            <use href="./img/sprite.svg#run"></use>
          </svg>
        </div>
        <div>
          <div class="quote-title">
            <h3>Quote of the day</h3>
            <svg class="quote-title-svg" width="25" height="25">
              <use href="./img/sprite.svg#commas"></use>
            </svg>
          </div>
          <p class="quote-text">${e}</p>
          <p class="quote-author">${t}</p>
        </div>
      </div>
      <img class="quote-img" src="./images/exercise-mobile@2x.jpg" alt="exercise" />
    </div>
    <div class="quote-wrapper article">
      <div class="quote-svg-wrap article">
        <svg class="quote-svg" width="34" height="32">
          <use href="./img/sprite.svg#fluent-food"></use>
        </svg>
      </div>
      <div>
        <div class="quote-title article">
          <h3>110 min</h3>
        </div>
        <p class="quote-text article">Daily  norm of sports</p>
        <p class="quote-author article">The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.</p>
      </div>
    </div>
  </div>
`,h="quoteData",y=new Date,P=async()=>{let e=JSON.parse(localStorage.getItem(h));return(!e||e.date!==y)&&(e=await R(),localStorage.setItem(h,JSON.stringify({date:A(y),...e}))),e},F=async()=>{const e=document.getElementById("js-quote"),t=await P();e.insertAdjacentHTML("beforeend",D(t))},j=(e,t,o)=>{const s=document.getElementById("tui-pagination-container"),i=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:i,centerAlign:!0,page:o},n=new L(s,a);return i<=1?s.style.display="none":s.style.display="block",n},p="/team-final-project-js/assets/sprite-984a0ff0.svg",c={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper")};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",O);async function O(e){const t=e.target.value;(e.keyCode===13||e.code==="Enter")&&E(t)}async function E(e=""){const t=document.getElementsByClassName("card-selected")[0];if(!t){console.log("not active card!!!");return}const o=t.dataset,s={};for(const i in o)s[i]=o[i];e&&(s.keyword=e),console.log(s);try{const i=await M({page:1,perPage:10,filter:s}),a=Q(i.results);c.divCategories.innerHTML=a,c.divCategories.classList.add("exercises-list"),console.log(a)}catch{console.log("ooops!!!")}}function Q(e){return e.map(({name:t,target:o,rating:s,burnedCalories:i,time:a,_id:n,bodyPart:l})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${s}</p>
              <svg class="exercise-item-star" width="18" height="18" >
                <use href="${p}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${n}>
                Start&nbsp;&nbsp;
                <svg class="exercise-item-arrow" width="16" height="16">
                  <use href="${p}#arrow-right"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${p}#run"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${t}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${i} / ${a} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${l}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${o}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}let b=!1;async function f(e,t){const o=document.getElementById("categories-loader"),s=document.getElementById("categories-wrapper");o.style.display="block",s.style.display="none",c.divCategories.innerHTML="";try{b||(F(),b=!0);const i=await I({page:t,perPage:12,filter:e});j(12,i.totalPages,t).on("afterMove",({page:n})=>{f(e,n)});const a=i.results.map(n=>{const l=U(n);return l.addEventListener("click",()=>{z(l)}),l});c.divCategories.append(...a)}catch(i){if(i.response&&i.response.status===409){const n={title:"Error",message:i.response.data.message,position:"topRight",color:"red"};return d.show(n)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(a)}finally{setTimeout(()=>{o.style.display="none",s.style.display="flex"},500)}}function U({name:e,filter:t,imgURL:o}){const s=document.createElement("li");s.className="category-item";const i=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+i,e);const a=document.createElement("img");a.className="category-item-img",a.src=o,a.alt="Category",a.loading="lazy";const n=document.createElement("div");n.className="category-item-bg";const l=document.createElement("p");l.className="category-item-title",l.textContent=H(e);const u=document.createElement("p");return u.className="category-item-subtitle",u.textContent=t,n.appendChild(l),n.appendChild(u),s.appendChild(a),s.appendChild(n),s}function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}function z(e){const t=document.getElementsByClassName("card-selected");t[0]&&t[0].classList.remove("card-selected"),e.classList.add("card-selected"),c.divExSearch.classList.remove("is-hidden"),E(),console.log("Li element clicked!")}const w=["Muscles","Body parts","Equipment"];f(w[0],1);const W=_(w);c.filtersRef.append(...W);function _(e){return e.map(t=>{const o=document.createElement("li");o.setAttribute("id",t),t==="Muscles"&&o.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{J(t,o)}),o.appendChild(s),o})}function J(e,t){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),c.divCategories.innerHTML="",c.exSearch.value="",c.divCategories.classList.remove("exercises-list"),c.divExSearch.classList.add("is-hidden"),f(e,1))}const Y=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),G=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!Y(t.value.trim())){const s={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return d.show(s)}const o=t.value.trim();N(o).then(s=>{if(s.message){const i={title:"Success",message:s.message,position:"topRight",color:"green"};return d.show(i)}}).catch(s=>{if(s.response&&s.response.status===409){const a={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return d.show(a)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(i)}).finally(()=>c.footerForm.forEach(s=>s.reset()))};c.footerForm.forEach(e=>e.addEventListener("submit",G));const g=document.getElementById("scroll-up-btn");window.onscroll=function(){K()};function K(){document.body.scrollTop>0||document.documentElement.scrollTop>0?g.style.display="block":g.style.display="none"}g.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
