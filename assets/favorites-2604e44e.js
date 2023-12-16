import{a as m,i as I,b as T,e as B}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();m.defaults.baseURL="https://your-energy.b.goit.study/api";const w="filters",k="exercises",A="subscription",se=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>m.get(`/${w}?filter=${s}&page=${e}&limit=${t}`).then(i=>i.data),F=({page:e=1,perPage:t=12,filter:s={}}={})=>m.get(`/${k}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(i=>i.data),D=e=>m.get(`/${k}/${e}`).then(t=>t.data),O=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},oe=e=>m.post(`/${A}`,{email:e}).then(t=>t.data),R=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function L(e){return e.toString().padStart(2,"0")}function N(e){return[e.getFullYear(),L(e.getMonth()+1),L(e.getDate())].join("-")}const b="quoteData",E=N(new Date),H=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(b));(!e||e.date!==E)&&(e=await O(),localStorage.setItem(b,JSON.stringify({date:E,...e}))),H.insertAdjacentHTML("beforeend",R(e))})();const o={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),modalIconHeart:document.querySelector(".modal-icon-heart"),sun:document.querySelectorAll(".sun"),moon:document.querySelectorAll(".moon")},v={LIGHT:"light-theme",DARK:"dark-theme"};o.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",P)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(p(v.LIGHT),o.sun.forEach(s=>s.classList.remove("visible")),o.moon.forEach(s=>s.classList.add("visible")),o.body.classList.remove("dark-theme"),o.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(o.sun.forEach(s=>s.classList.add("visible")),o.moon.forEach(s=>s.classList.remove("visible")),o.buttonTheme.forEach(s=>s.checked=!0),o.body.classList.add("dark-theme"))})();function P(){return localStorage.getItem("theme")==="dark-theme"?(o.buttonTheme.forEach(t=>t.checked=!1),p(v.LIGHT),o.sun.forEach(t=>t.classList.remove("visible")),o.moon.forEach(t=>t.classList.add("visible")),o.body.classList.remove("dark-theme")):(o.buttonTheme.forEach(t=>t.checked=!0),o.sun.forEach(t=>t.classList.add("visible")),o.moon.forEach(t=>t.classList.remove("visible")),p(v.DARK),o.body.classList.add("dark-theme"))}function p(e){localStorage.setItem("theme",e)}const f="/team-final-project-js/assets/sprite-59e25010.svg",_=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},U=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},u={save:_,load:U},h="favorites-list";o.divCategories.addEventListener("click",Q);let c;const j=`Remove from favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#trash'></use>
        </svg>`,K=`Add to favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#heart'></use>
        </svg>`,x=(e,t)=>e.find(s=>(s==null?void 0:s._id)===t),q=()=>{const e=u.load(h)||[];if(!!x(e,c==null?void 0:c._id)){document.querySelector(".add-to-favorites").innerHTML=j;return}document.querySelector(".add-to-favorites").innerHTML=K};function Q(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&G(t.id)}function G(e){D(e).then(t=>{c=t,z(t),q()}),o.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),o.backdrop.classList.add("scroll"),Y()}const J=document.querySelector(".modal-close-btn"),d=e=>{(e.target===o.backdrop||e.key==="Escape"||e.target===J)&&(o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll"),document.removeEventListener("click",d),document.removeEventListener("keydown",d),o.closeModalBtn.removeEventListener("click",d),o.addFavorite.removeEventListener("click",$))};function Y(){o.backdrop.addEventListener("click",d),document.addEventListener("keydown",d),o.closeModalBtn.addEventListener("click",d),o.addFavorite.addEventListener("click",$)}function $(){const e=u.load(h)||[],t=!!x(e,c==null?void 0:c._id);u.save(h,t?e.filter(s=>s._id!==(c==null?void 0:c._id)):[...e,c]),q(),I.show({message:t?"Removed from favorites":"Added to favorites"})}function z(e){const t=e.gifUrl,s=e.name,i=Number(e.rating).toFixed(1),n=e.target,r=e.bodyPart,l=e.equipment,a=e.popularity,y=e.burnedCalories,C=e.description;o.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${s}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${s}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${i}</p>
          <svg class='modal-icon-star'>
            <use href='${f}#star'></use>
          </svg>
        </div>
        <div class='modal-info'>
          <div class='modal-table'>
            <div class='info-element'>
              <p class='info-item'>Target</p>
              <p class='count'>${n}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Body part</p>
              <p class='count'>${r}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Equipment</p>
              <p class='count'>${l}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Popular</p>
              <p class='count'>${a}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Burned Calories</p>
              <p class='count'>${y}</p>
            </div>
          </div>
          <p class='about-info'>${C}</p>
        </div>`}document.addEventListener("DOMContentLoaded",W);const S=e=>"/"+e.split("/").pop();function W(){const e=S(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const i=S(new URL(s.href).pathname);i===e||e==="/"&&i==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function V(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".nav-burger-menu-link");function n(){const a=e.classList.contains("is-open");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),T[a?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&n()}function l(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),B(document.body))}t.addEventListener("click",n),s.addEventListener("click",n),i.forEach(function(a){a.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",l)}document.addEventListener("DOMContentLoaded",V);const g=o.FAVORITES_KEY;async function M(){const e=u.load(g)||[],t=o.favorites,s=document.querySelector(".favorites-list-notification");if(e.length===0)s.classList.remove("is-hidden"),t.innerHTML="";else{const i=await F();X(i.results,e),s.classList.add("is-hidden")}}function X(e,t){const s=o.favorites,i=document.querySelector(".favorites-exercise-list");i.innerHTML="",e.forEach(n=>{if(t.includes(n._id)){const r=Z(n);i.appendChild(r)}}),s.classList.remove("is-hidden")}function Z(e){const{_id:t,name:s,burnedCalories:i,time:n,bodyPart:r,target:l}=e,a=document.createElement("li");return a.className="exercise-item",a.id=`${t}`,a.innerHTML=`
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${t}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${f}#trash'></use>
          </svg>
        </button>

        <button id='${t}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${f}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${f}#run'></use>
          </svg>
        </div>
        <h3 class='exercise-item-subtitle'>${s}</h3>
      </div>
      <ul class='exercise-item-list'>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Burned calories:<span class='information-text-span'>${i} / ${n} min</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Body part:<span class='information-text-span'>${r}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${l}</span>
          </p>
        </li>
      </ul>
    </div>
  `,a}document.addEventListener("DOMContentLoaded",M);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");ee(t)}});function ee(e){const s=(u.load(g)||[]).filter(i=>i!==e);u.save(g,s),M()}export{se as a,F as f,oe as p,o as r,f as s};
//# sourceMappingURL=favorites-2604e44e.js.map
