import{a as l,i as m,b as x,e as I}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();l.defaults.baseURL="https://your-energy.b.goit.study/api";const $="filters",E="exercises",C="subscription",J=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>l.get(`/${$}?filter=${s}&page=${e}&limit=${t}`).then(i=>i.data),T=({page:e=1,perPage:t=12,filter:s={}}={})=>l.get(`/${E}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(i=>i.data),q=e=>l.get(`/${E}/${e}`).then(t=>t.data),F=async()=>{try{const{data:e}=await l.get("/quote");return e}catch{console.log('Error request "/quote"')}},G=e=>l.post(`/${C}`,{email:e}).then(t=>t.data),A=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function h(e){return e.toString().padStart(2,"0")}function O(e){return[e.getFullYear(),h(e.getMonth()+1),h(e.getDate())].join("-")}const b="quoteData",y=O(new Date),M=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(b));(!e||e.date!==y)&&(e=await F(),localStorage.setItem(b,JSON.stringify({date:y,...e}))),M.insertAdjacentHTML("beforeend",A(e))})();const o={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),FAVORITES_KEY:"favorites-list",favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body")},f={LIGHT:"light-theme",DARK:"dark-theme"};o.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",R)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(v(f.LIGHT),o.body.classList.remove("dark-theme"),o.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(o.buttonTheme.forEach(s=>s.checked=!0),o.body.classList.add("dark-theme"))})();function R(){return localStorage.getItem("theme")==="dark-theme"?(o.buttonTheme.forEach(t=>t.checked=!1),v(f.LIGHT),o.body.classList.remove("dark-theme")):(o.buttonTheme.forEach(t=>t.checked=!0),v(f.DARK),o.body.classList.add("dark-theme"))}function v(e){localStorage.setItem("theme",e)}const w=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},B=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},c={save:w,load:B},u="/team-final-project-js/assets/sprite-59e25010.svg";o.divCategories.addEventListener("click",D);o.favorites.addEventListener("click",handleFavoritesCardClick);function D(e,t){e.preventDefault();const s=e.target.closest(".exercise-item");s&&K(s.id)}function K(e){q(e).then(t=>{_(t)}),o.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),o.backdrop.classList.add("scroll"),N()}function N(){document.addEventListener("click",e=>{e.target===o.backdrop&&(o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll"))}),o.closeModalBtn.addEventListener("click",()=>{o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll")})}o.addFavorite.addEventListener("click",e=>{if(e.target.textContent=="Remove from favorites"){const t=c.load(o.FAVORITES_KEY);for(let s=0;s<t.length;s++)JSON.stringify(t[s])===JSON.stringify(data)&&(t.splice(s,1),console.log(t),c.save(o.FAVORITES_KEY,t),m.show({message:"Removed from favorites"}),o.addFavorite.textContent="Add to favorites",o.addFavorite.style.backgroundColor="#fff",o.addFavorite.style.color="#000")}else{if(!c.load(o.FAVORITES_KEY)||c.load(o.FAVORITES_KEY).length===0){c.save(o.FAVORITES_KEY,[data]),m.show({message:"Added to favorites"}),o.addFavorite.textContent="Remove from favorites",o.addFavorite.style.backgroundColor="#ff6b01",o.addFavorite.style.color="#fff";return}const t=c.load(o.FAVORITES_KEY);t.push(data),c.save(o.FAVORITES_KEY,t),m.show({message:"Added to favorites"}),o.addFavorite.textContent="Remove from favorites",o.addFavorite.style.backgroundColor="#ff6b01",o.addFavorite.style.color="#fff"}o.addFavorite.removeEventListener});function _(e){const t=e.gifUrl,s=e.name,i=Number(e.rating).toFixed(1),a=e.target,n=e.bodyPart,d=e.equipment,r=e.popularity,g=e.burnedCalories,k=e.description;return o.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${t}" alt="${s}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${s}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${i}</p>
          <svg class="modal-icon-star">
            <use href="${u}#star"></use>
          </svg>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${n}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${d}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${g}</p>
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
      </div>`}document.addEventListener("DOMContentLoaded",P);const L=e=>"/"+e.split("/").pop();function P(){const e=L(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const i=L(new URL(s.href).pathname);i===e||e==="/"&&i==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function Y(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".nav-burger-menu-link");function a(){const r=e.classList.contains("is-open");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),x[r?"enableBodyScroll":"disableBodyScroll"](document.body)}function n(){e.classList.contains("is-open")&&a()}function d(r){r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),I(document.body))}t.addEventListener("click",a),s.addEventListener("click",a),i.forEach(function(r){r.addEventListener("click",n)}),matchMedia("(min-width: 768px)").addEventListener("change",d)}document.addEventListener("DOMContentLoaded",Y);const p=o.FAVORITES_KEY;async function S(){const e=c.load(p)||[],t=o.favorites,s=document.querySelector(".favorites-list-notification");if(e.length===0)s.classList.remove("is-hidden"),t.innerHTML="";else{const i=await T();U(i.results,e),s.classList.add("is-hidden")}}function U(e,t){const s=o.favorites,i=document.querySelector(".favorites-exercise-list");i.innerHTML="",e.forEach(a=>{if(t.includes(a._id)){const n=V(a);i.appendChild(n)}}),s.classList.remove("is-hidden")}function V(e){const{_id:t,name:s,burnedCalories:i,time:a,bodyPart:n,target:d}=e,r=document.createElement("li");return r.className="exercise-item",r.id=`${t}`,r.innerHTML=`
    <div class="exercise-item-wrapper">
      <div class="exercise-item-firth-wrapper">
        <p class="exercise-item-workout">WORKOUT</p>

        <button type="button" class="exercise-item-button-delete" data-exercise-id="${t}">
          <svg class="exercise-item-trash-icon" width="16" height="16">
            <use href="${u}#trash"></use>
          </svg>
        </button>

        <button id="${t}" type="button" class="exercise-item-button">
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
        <h3 class="exercise-item-subtitle">${s}</h3>
      </div>
      <ul class="exercise-item-list">
        <li class="exercise-item-list-information">
          <p class="information-text">
            Burned calories:<span class="information-text-span">${i} / ${a} min</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Body part:<span class="information-text-span">${n}</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Target:<span class="information-text-span">${d}</span>
          </p>
        </li>
      </ul>
    </div>
  `,r}document.addEventListener("DOMContentLoaded",S);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");H(t)}});function H(e){const s=(c.load(p)||[]).filter(i=>i!==e);c.save(p,s),S()}export{J as a,T as f,G as p,o as r,u as s};
//# sourceMappingURL=favorites-b3724a26.js.map
