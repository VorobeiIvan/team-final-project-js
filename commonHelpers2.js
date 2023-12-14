import"./assets/burger-menu-5139967a.js";/* empty css                      */import{a as m,P as w,i as d}from"./assets/vendor-61000f44.js";const r={galleryRef:document.querySelector(".gallery"),closeBtn:document.querySelector(".modal_close_btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),cardRef:document.querySelector(".card")};console.log("refs.modalContainer: ",r.modalContainer);r.cardRef.addEventListener("click",L);async function x(e){return await(await fetch("https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2")).json()}function L(e){x().then(t=>{C(t)}),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.backdrop.classList.add("scroll"),q()}function q(){document.addEventListener("click",e=>{e.target===r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),r.closeBtn.addEventListener("click",()=>{r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll")})}function C(e){const t=e.gifUrl,o=e.name,s=Number(e.rating).toFixed(1),a=e.target,i=e.bodyPart,n=e.equipment,c=e.popularity,u=e.burnedCalories,E=e.description;return r.modalContainer.innerHTML=`
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
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${i}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${c}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${u}</p>
            </div>
          </div>
          <p class="about-info">${E}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
          </button>
          <button class="button give-a-rating" type="button">Give a rating</button>
        </div>
      </div>`}m.defaults.baseURL="https://your-energy.b.goit.study/api";const k="filters",$="exercises",S="subscription",B=async({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>await m.get(`/${k}?filter=${o}&page=${e}&limit=${t}`).then(s=>s.data),T=async({page:e=1,perPage:t=12,filter:o={}}={})=>await m.get(`/${$}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(s=>s.data),M=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},I=async e=>await m.post(`/${S}`,{email:e}).then(t=>t.data);function v(e){return e.toString().padStart(2,"0")}function R(e){return[e.getFullYear(),v(e.getMonth()+1),v(e.getDate())].join("-")}const N=({quote:e,author:t})=>`
  <div class="quote-container">
    <div class="quote-wrap">
      <div class="quote-wrapper">
        <div class="quote-svg-wrap">
          <svg class="quote-svg" width="34" height="32">
            <use href="../../../img/sprite.svg#run"></use>
          </svg>
        </div>
        <div>
          <div class="quote-title">
            <h3>Quote of the day</h3>
            <svg class="quote-title-svg" width="25" height="25">
              <use href="../../../img/sprite.svg#commas"></use>
            </svg>
          </div>
          <p class="quote-text">${e}</p>
          <p class="quote-author">${t}</p>
        </div>
      </div>
      <img class="quote-img" src="../../../images/exercise-mobile@2x.jpg" alt="exercise" />
    </div>
    <div class="quote-wrapper article">
      <div class="quote-svg-wrap article">
        <svg class="quote-svg" width="34" height="32">
          <use href="../../../img/sprite.svg#fluent-food"></use>
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
`;const y="quoteData",h=new Date,A=async()=>{let e=JSON.parse(localStorage.getItem(y));return(!e||e.date!==h)&&(e=await M(),localStorage.setItem(y,JSON.stringify({date:R(h),...e}))),e},D=async()=>{const e=document.getElementById("js-quote"),t=await A();e.insertAdjacentHTML("beforeend",N(t))},P=(e,t,o)=>{const s=document.getElementById("tui-pagination-container"),a=t<5?t:5,i={totalItems:e*t,itemsPerPage:e,visiblePages:a,centerAlign:!0,page:o},n=new w(s,i);return a<=1?s.style.display="none":s.style.display="block",n},l={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search")};async function f(e,t){const o=document.getElementById("categories-loader"),s=document.getElementById("categories-wrapper");o.style.display="block",s.style.display="none",l.divCategories.innerHTML="";try{D();const a=await B({page:t,perPage:12,filter:e});P(12,a.totalPages,t).on("afterMove",({page:n})=>{f(e,n)});const i=a.results.map(n=>{const c=F(n);return c.addEventListener("click",()=>{O(c)}),c});l.divCategories.append(...i)}catch(a){if(a.response&&a.response.status===409){const n={title:"Error",message:a.response.data.message,position:"topRight",color:"red"};return d.show(n)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(i)}finally{setTimeout(()=>{o.style.display="none",s.style.display="flex"},500)}}function F({name:e,filter:t,imgURL:o}){const s=document.createElement("li");s.className="category-item";const a=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+a,e);const i=document.createElement("img");i.className="category-item-img",i.src=o,i.alt="Category",i.loading="lazy";const n=document.createElement("div");n.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=j(e);const u=document.createElement("p");return u.className="category-item-subtitle",u.textContent=t,n.appendChild(c),n.appendChild(u),s.appendChild(i),s.appendChild(n),s}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function O(e){const t=document.getElementsByClassName("card-selected");t[0]&&t[0].classList.remove("card-selected"),e.classList.add("card-selected"),console.log("Li element clicked!")}const b=["Muscles","Body parts","Equipment"];f(b[0],1);const H=Q(b);l.filtersRef.append(...H);function Q(e){return e.map(t=>{const o=document.createElement("li");o.setAttribute("id",t),t==="Muscles"&&o.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{U(t,o)}),o.appendChild(s),o})}function U(e,t){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),l.divCategories.innerHTML="",l.exSearch.value="",f(e,1))}const z=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),W=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!z(t.value.trim())){const s={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return d.show(s)}const o=t.value.trim();I(o).then(s=>{if(s.message){const a={title:"Success",message:s.message,position:"topRight",color:"green"};return d.show(a)}}).catch(s=>{if(s.response&&s.response.status===409){const i={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return d.show(i)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(a)}).finally(()=>l.footerForm.forEach(s=>s.reset()))};l.footerForm.forEach(e=>e.addEventListener("submit",W));const g=document.getElementById("myBtn");window.onscroll=function(){_()};function _(){document.body.scrollTop>0||document.documentElement.scrollTop>0?g.style.display="block":g.style.display="none"}g.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});const p="/team-final-project-js/assets/sprite-984a0ff0.svg";document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",G);async function G(e){const t=e.target.value;if(e.keyCode===13||e.code==="Enter"){const o=document.getElementsByClassName("card-selected")[0];if(!o){console.log("not active card!!!");return}const s=o.dataset,a={keyword:t};for(const i in s)a[i]=s[i];console.log(a);try{const i=await T({page:1,perPage:10,filter:a}),n=J(i.results);l.divCategories.innerHTML=n,console.log(n)}catch{console.log("ooops!!!")}}}function J(e){return e.map(({name:t,target:o,rating:s,burnedCalories:a,time:i,_id:n,bodyPart:c})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${s}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="${p}#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${n}>
                Start&nbsp;&nbsp;
                <svg width="16" height="16">
                  <use href="${p}#arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${p}#Group"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${t}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${a} / ${i} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${c}</span>
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
         `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
