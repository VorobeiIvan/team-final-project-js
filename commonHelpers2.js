import"./assets/burger-menu-5139967a.js";/* empty css                      */import{a as u,P as C,i as d}from"./assets/vendor-61000f44.js";const r={galleryRef:document.querySelector(".gallery"),closeBtn:document.querySelector(".modal_close_btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),cardRef:document.querySelector(".card")};console.log("refs.modalContainer: ",r.modalContainer);r.cardRef.addEventListener("click",w);async function L(e){return await(await fetch("https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2")).json()}function w(e){L().then(t=>{S(t)}),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.backdrop.classList.add("scroll"),k()}function k(){document.addEventListener("click",e=>{e.target===r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),r.closeBtn.addEventListener("click",()=>{r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll")})}function S(e){const t=e.gifUrl,o=e.name,s=Number(e.rating).toFixed(1),n=e.target,a=e.bodyPart,i=e.equipment,l=e.popularity,m=e.burnedCalories,x=e.description;return r.modalContainer.innerHTML=`
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
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${i}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${l}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${m}</p>
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
      </div>`}u.defaults.baseURL="https://your-energy.b.goit.study/api";const $="filters",B="exercises",q="subscription",T=async({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>await u.get(`/${$}?filter=${o}&page=${e}&limit=${t}`).then(s=>s.data),I=async({page:e=1,perPage:t=12,filter:o={}}={})=>await u.get(`/${B}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(s=>s.data),M=async()=>{try{const{data:e}=await u.get("/quote");return e}catch{console.log('Error request "/quote"')}},R=async e=>await u.post(`/${q}`,{email:e}).then(t=>t.data);function y(e){return e.toString().padStart(2,"0")}function N(e){return[e.getFullYear(),y(e.getMonth()+1),y(e.getDate())].join("-")}const v="quoteData",h=new Date,A=async()=>{let e=JSON.parse(localStorage.getItem(v));return(!e||e.date!==h)&&(e=await M(),localStorage.setItem(v,JSON.stringify({date:N(h),...e}))),e},D=async()=>{const e=document.querySelector(".quote-text"),t=document.querySelector(".quote-author"),o=await A();e.textContent=o.quote,t.textContent=o.author},P=(e,t,o)=>{const s=document.getElementById("tui-pagination-container"),n=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:n,centerAlign:!0,page:o},i=new C(s,a);return n<=1?s.style.display="none":s.style.display="block",i},p="/team-final-project-js/assets/sprite-984a0ff0.svg",c={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper")};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",F);async function F(e){const t=e.target.value;(e.keyCode===13||e.code==="Enter")&&b(t)}async function b(e=""){const t=document.getElementsByClassName("card-selected")[0];if(!t){console.log("not active card!!!");return}const o=t.dataset,s={};for(const n in o)s[n]=o[n];e&&(s.keyword=e),console.log(s);try{const n=await I({page:1,perPage:10,filter:s}),a=U(n.results);c.divCategories.innerHTML=a,c.divCategories.classList.add("exercises-list"),console.log(a)}catch{console.log("ooops!!!")}}function U(e){return e.map(({name:t,target:o,rating:s,burnedCalories:n,time:a,_id:i,bodyPart:l})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${s}</p>
              <svg class="exercise-item-star" width="18" height="18" >
                <use href="${p}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${i}>
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
                    >${n} / ${a} min</span
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
         `).join("")}async function f(e,t){const o=document.getElementById("categories-loader"),s=document.getElementById("categories-wrapper");o.style.display="block",s.style.display="none",c.divCategories.innerHTML="";try{D();const n=await T({page:t,perPage:12,filter:e});P(12,n.totalPages,t).on("afterMove",({page:i})=>{f(e,i)});const a=n.results.map(i=>{const l=O(i);return l.addEventListener("click",()=>{j(l)}),l});c.divCategories.append(...a)}catch(n){if(n.response&&n.response.status===409){const i={title:"Error",message:n.response.data.message,position:"topRight",color:"red"};return d.show(i)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(a)}finally{setTimeout(()=>{o.style.display="none",s.style.display="flex"},500)}}function O({name:e,filter:t,imgURL:o}){const s=document.createElement("li");s.className="category-item";const n=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+n,e);const a=document.createElement("img");a.className="category-item-img",a.src=o,a.alt="Category",a.loading="lazy";const i=document.createElement("div");i.className="category-item-bg";const l=document.createElement("p");l.className="category-item-title",l.textContent=Q(e);const m=document.createElement("p");return m.className="category-item-subtitle",m.textContent=t,i.appendChild(l),i.appendChild(m),s.appendChild(a),s.appendChild(i),s}function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function j(e){const t=document.getElementsByClassName("card-selected");t[0]&&t[0].classList.remove("card-selected"),e.classList.add("card-selected"),c.divExSearch.classList.remove("is-hidden"),b(),console.log("Li element clicked!")}const E=["Muscles","Body parts","Equipment"];f(E[0],1);const H=z(E);c.filtersRef.append(...H);function z(e){return e.map(t=>{const o=document.createElement("li");o.setAttribute("id",t),t==="Muscles"&&o.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{_(t,o)}),o.appendChild(s),o})}function _(e,t){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),c.divCategories.innerHTML="",c.exSearch.value="",c.divCategories.classList.remove("exercises-list"),c.divExSearch.classList.add("is-hidden"),f(e,1))}const J=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),W=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!J(t.value.trim())){const s={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return d.show(s)}const o=t.value.trim();R(o).then(s=>{if(s.message){const n={title:"Success",message:s.message,position:"topRight",color:"green"};return d.show(n)}}).catch(s=>{if(s.response&&s.response.status===409){const a={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return d.show(a)}const n={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(n)}).finally(()=>c.footerForm.forEach(s=>s.reset()))};c.footerForm.forEach(e=>e.addEventListener("submit",W));const g=document.getElementById("scroll-up-btn");window.onscroll=function(){Y()};function Y(){document.body.scrollTop>0||document.documentElement.scrollTop>0?g.style.display="block":g.style.display="none"}g.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
