import{a as p,P as $,i as d,b as M,e as F}from"./vendor-ddeddc50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();p.defaults.baseURL="https://your-energy.b.goit.study/api";const q="filters",x="exercises",T="subscription",I=async({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>await p.get(`/${q}?filter=${s}&page=${e}&limit=${t}`).then(o=>o.data),S=async({page:e=1,perPage:t=12,filter:s={}}={})=>await p.get(`/${x}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(o=>o.data),R=async e=>await p.get(`/${x}/${e}`).then(t=>t.data),O=async()=>{try{const{data:e}=await p.get("/quote");return e}catch{console.log('Error request "/quote"')}},A=async e=>await p.post(`/${T}`,{email:e}).then(t=>t.data),B=(e,t,s)=>{const o=document.getElementById("tui-pagination-container"),i=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:i,centerAlign:!0,page:s},n=new $(o,a);return i<=1?o.style.display="none":o.style.display="block",n},u="/team-final-project-js/assets/sprite-c789443a.svg",r={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),closeModalBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),FAVORITES_KEY:"favorites-list",favorites:document.querySelector(".favorites-list")},N=window.screen.availWidth;document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",P);function P(e){const t=e.target.value;(e.keyCode===13||e.code==="Enter")&&w(t)}function D(){return N<768?8:10}async function w(e="",t=1){const s=await JSON.parse(sessionStorage.getItem("category"));if(!s){console.log("not active category!!!");return}e&&(s.keyword=e);const o=D();try{const i=await S({page:t,perPage:o,filter:s});let a="";i.results.length?a=K(i.results):a=`<li><div class="categories-bad-requast">
          <svg class="bad-requast" width="335" height="300">
            <use href="./images/sprite.svg#BadRequast"></use>
          </svg>
        </div></li>`,r.divCategories.innerHTML=a,r.divCategories.classList.add("exercises-list")}catch{console.log("ooops!!!")}}function K(e){return e.map(({name:t,target:s,rating:o,burnedCalories:i,time:a,_id:n,bodyPart:c})=>`
        <li class="exercise-item" id="${n}item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${o}</p>
              <svg class="exercise-item-star" width="18" height="18">
                <use href="${u}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button" id="${n}">
                Start&nbsp;&nbsp;
                <svg class="exercise-item-arrow" width="16" height="16">
                  <use href="${u}#arrow-right"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="${u}#run"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${t}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text burned-calories">
                  Burned calories:<span class="information-text-span">${i} / ${a} min</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text body-part">
                  Body part:<span class="information-text-span">${c}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text target">
                  Target:<span class="information-text-span">${s}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function v(e,t){r.divCategories.innerHTML="",r.divCategories.classList.remove("exercises-list");try{const s=await I({page:t,perPage:12,filter:e});B(12,s.totalPages,t).on("afterMove",({page:i})=>{v(e,i)});const o=s.results.map(i=>{const a=U(i);return a.addEventListener("click",()=>{Y(a)}),a});r.divCategories.append(...o)}catch(s){if(s.response&&s.response.status===409){const i={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return d.show(i)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(o)}}function U({name:e,filter:t,imgURL:s}){const o=document.createElement("li");o.className="category-item";const i=t==="Body parts"?"bodypart":t;o.setAttribute("data-"+i,e);const a=document.createElement("img");a.className="category-item-img",a.src=s,a.alt="Category",a.loading="lazy";const n=document.createElement("div");n.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=_(e);const m=document.createElement("p");return m.className="category-item-subtitle",m.textContent=t,n.appendChild(c),n.appendChild(m),o.appendChild(a),o.appendChild(n),o}function _(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Y(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),r.divExSearch.classList.remove("is-hidden"),w()}const C=["Muscles","Body parts","Equipment"];v(C[0],1);const H=j(C);r.filtersRef.append(...H);function j(e){return e.map(t=>{const s=document.createElement("li");s.setAttribute("id",t),t==="Muscles"&&s.classList.add("filter-selected");const o=document.createElement("button");return o.innerHTML=t,o.addEventListener("click",()=>{J(t,s)}),s.appendChild(o),s})}function J(e,t){const s=document.getElementsByClassName("filter-selected");s[0]&&(s[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),r.divCategories.innerHTML="",r.exSearch.value="",r.divCategories.classList.remove("exercises-list"),r.divExSearch.classList.add("is-hidden"),v(e,1))}const V=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function h(e){return e.toString().padStart(2,"0")}function W(e){return[e.getFullYear(),h(e.getMonth()+1),h(e.getDate())].join("-")}const y="quoteData",b=W(new Date),z=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(y));(!e||e.date!==b)&&(e=await O(),localStorage.setItem(y,JSON.stringify({date:b,...e}))),z.insertAdjacentHTML("beforeend",V(e))})();const Q=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),G=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!Q(t.value.trim())){const o={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return d.show(o)}const s=t.value.trim();A(s).then(o=>{if(o.message){const i={title:"Success",message:o.message,position:"topRight",color:"green"};return d.show(i)}}).catch(o=>{if(o.response&&o.response.status===409){const a={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return d.show(a)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return d.show(i)}).finally(()=>r.footerForm.forEach(o=>o.reset()))};r.footerForm.forEach(e=>e.addEventListener("submit",G));const X=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},Z=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},l={save:X,load:Z};r.divCategories.addEventListener("click",ee);r.favorites.addEventListener("click",handleFavoritesCardClick);function ee(e,t){e.preventDefault();const s=e.target.closest(".exercise-item");if(!s)return;const o=s.id.slice(0,s.id.length-4);te(o)}function te(e){R(e).then(t=>{oe(t)}),r.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.backdrop.classList.add("scroll"),se()}function se(){document.addEventListener("click",e=>{e.target===r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll"))}),r.closeModalBtn.addEventListener("click",()=>{r.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),r.backdrop.classList.remove("scroll")})}r.addFavorite.addEventListener("click",e=>{if(e.target.textContent=="Remove from favorites"){const t=l.load(r.FAVORITES_KEY);for(let s=0;s<t.length;s++)JSON.stringify(t[s])===JSON.stringify(data)&&(t.splice(s,1),console.log(t),l.save(r.FAVORITES_KEY,t),d.show({message:"Removed from favorites"}),r.addFavorite.textContent="Add to favorites",r.addFavorite.style.backgroundColor="#fff",r.addFavorite.style.color="#000")}else{if(!l.load(r.FAVORITES_KEY)||l.load(r.FAVORITES_KEY).length===0){l.save(r.FAVORITES_KEY,[data]),d.show({message:"Added to favorites"}),r.addFavorite.textContent="Remove from favorites",r.addFavorite.style.backgroundColor="#ff6b01",r.addFavorite.style.color="#fff";return}const t=l.load(r.FAVORITES_KEY);t.push(data),l.save(r.FAVORITES_KEY,t),d.show({message:"Added to favorites"}),r.addFavorite.textContent="Remove from favorites",r.addFavorite.style.backgroundColor="#ff6b01",r.addFavorite.style.color="#fff"}r.addFavorite.removeEventListener});function oe(e){const t=e.gifUrl,s=e.name,o=Number(e.rating).toFixed(1),i=e.target,a=e.bodyPart,n=e.equipment,c=e.popularity,m=e.burnedCalories,k=e.description;return r.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${t}" alt="${s}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${s}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${o}</p>
          <svg class="modal-icon-star">
            <use href="${u}#star"></use>
          </svg>
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
              <p class="count">${c}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${m}</p>
            </div>
          </div>
          <p class="about-info">${k}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
            <svg class="modal-icon-heart">
              <use href="${u}#heart"></use>
            </svg>
          </button>
          <button class="button give-a-rating" type="button">
            Give a rating
          </button>
        </div>
      </div>`}const f=document.getElementById("scroll-up-btn");window.onscroll=function(){ie()};function ie(){document.body.scrollTop>0||document.documentElement.scrollTop>0?f.style.display="block":f.style.display="none"}f.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});document.addEventListener("DOMContentLoaded",re);const E=e=>"/"+e.split("/").pop();function re(){const e=E(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const o=E(new URL(s.href).pathname);o===e||e==="/"&&o==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function ae(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".nav-burger-menu-link");function i(){const c=e.classList.contains("is-open");t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),M[c?"enableBodyScroll":"disableBodyScroll"](document.body)}function a(){e.classList.contains("is-open")&&i()}function n(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),F(document.body))}t.addEventListener("click",i),s.addEventListener("click",i),o.forEach(function(c){c.addEventListener("click",a)}),matchMedia("(min-width: 768px)").addEventListener("change",n)}document.addEventListener("DOMContentLoaded",ae);const g="favorites-list";async function L(){try{const e=l.load(g)||[];if(e.length===0)ne();else{const t=await S();ce(t.results,e)}}catch(e){console.error("Error rendering favorites:",e.message)}}function ne(){const e=document.querySelector(".favorites-list-wrapper");document.querySelector(".favorites-list-notification").classList.remove("is-hidden"),e.innerHTML=""}function ce(e,t){const s=document.querySelector(".favorites-list-wrapper"),o=document.querySelector(".favorites-list");o.innerHTML="",e.forEach(i=>{if(t.includes(i._id)){const a=le(i);o.appendChild(a)}}),s.classList.remove("is-hidden")}function le(e){const t=document.createElement("li");return t.className="favorites-list-item",t.innerHTML=`
    <div class="favorites-list-item-nav">
      <button type="button" class="remove-favorite-button" data-exercise-id="${e._id}">
        Remove
      </button>
    </div>
    <h3 class="favorites-list-item-title">${e.name}</h3>
    <div class="favorites-list-item">
      <div class="exercise-item-wrapper">
        <div class="exercise-item-firth-wrapper">
          <p class="exercise-item-workout">WORKOUT</p>
          <button type="button" class="exercise-item-button-delete" id=${_id}>
            <svg class="exercise-item-trash-icon" width="16" height="16">
              <use href="${u}#trash"></use>
            </svg>
          </button>
        </div>
        <div class="exercise-item-second-wrapper">
          <div class="exercise-item-run-box">
            <svg class="exercise-item-run" width="16" height="16">
              <use href="${u}#run"></use>
            </svg>
          </div>
          <h3 class="exercise-item-subtitle">${e.name}</h3>
        </div>
        <ul class="exercise-item-list">
          <li class="exercise-item-list-information">
            <p class="information-text">
              Burned calories:<span class="information-text-span">${e.burnedCalories} / ${e.time} min</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Body part:<span class="information-text-span">${e.bodyPart}</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Target:<span class="information-text-span">${e.target}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  `,t}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",async e=>{if(e.target.classList.contains("remove-favorite-button")){const t=e.target.getAttribute("data-exercise-id");await de(t),L()}}),L()});async function de(e){try{const s=(l.load(g)||[]).filter(o=>o!==e);l.save(g,s),console.log(`Exercise with ID ${e} removed from favorites.`)}catch(t){console.error("Error removing favorite exercise:",t.message)}}
//# sourceMappingURL=favorites-b161e5e3.js.map
