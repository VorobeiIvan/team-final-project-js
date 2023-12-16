import{a as m,i as I,b as T,e as B}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();m.defaults.baseURL="https://your-energy.b.goit.study/api";const w="filters",k="exercises",A="subscription",oe=({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>m.get(`/${w}?filter=${o}&page=${e}&limit=${t}`).then(i=>i.data),F=({page:e=1,perPage:t=12,filter:o={}}={})=>m.get(`/${k}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(i=>i.data),D=e=>m.get(`/${k}/${e}`).then(t=>t.data),O=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},se=e=>m.post(`/${A}`,{email:e}).then(t=>t.data),R=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function L(e){return e.toString().padStart(2,"0")}function N(e){return[e.getFullYear(),L(e.getMonth()+1),L(e.getDate())].join("-")}const b="quoteData",S=N(new Date),H=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(b));(!e||e.date!==S)&&(e=await O(),localStorage.setItem(b,JSON.stringify({date:S,...e}))),H.insertAdjacentHTML("beforeend",R(e))})();const n={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),modalIconHeart:document.querySelector(".modal-icon-heart")},p={LIGHT:"light-theme",DARK:"dark-theme"};n.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",P)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(v(p.LIGHT),n.body.classList.remove("dark-theme"),n.buttonTheme.forEach(o=>o.checked=!1)):t==="dark-theme"&&(n.buttonTheme.forEach(o=>o.checked=!0),n.body.classList.add("dark-theme"))})();function P(){return localStorage.getItem("theme")==="dark-theme"?(n.buttonTheme.forEach(t=>t.checked=!1),v(p.LIGHT),n.body.classList.remove("dark-theme")):(n.buttonTheme.forEach(t=>t.checked=!0),v(p.DARK),n.body.classList.add("dark-theme"))}function v(e){localStorage.setItem("theme",e)}const f="/team-final-project-js/assets/sprite-59e25010.svg",_=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}},U=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},u={save:_,load:U},g="favorites-list";n.divCategories.addEventListener("click",Q);let c;const j=`Remove from favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#trash'></use>
        </svg>`,K=`Add to favorites
        <svg class='modal-icon-heart'>
          <use href='./images/sprite.svg#heart'></use>
        </svg>`,x=(e,t)=>e.find(o=>(o==null?void 0:o._id)===t),q=()=>{const e=u.load(g)||[];if(!!x(e,c==null?void 0:c._id)){document.querySelector(".add-to-favorites").innerHTML=j;return}document.querySelector(".add-to-favorites").innerHTML=K};function Q(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&G(t.id)}function G(e){D(e).then(t=>{c=t,z(t),q()}),n.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),n.backdrop.classList.add("scroll"),Y()}const J=document.querySelector(".modal-close-btn"),l=e=>{(e.target===n.backdrop||e.key==="Escape"||e.target===J)&&(n.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),n.backdrop.classList.remove("scroll"),document.removeEventListener("click",l),document.removeEventListener("keydown",l),n.closeModalBtn.removeEventListener("click",l),n.addFavorite.removeEventListener("click",$))};function Y(){n.backdrop.addEventListener("click",l),document.addEventListener("keydown",l),n.closeModalBtn.addEventListener("click",l),n.addFavorite.addEventListener("click",$)}function $(){const e=u.load(g)||[],t=!!x(e,c==null?void 0:c._id);u.save(g,t?e.filter(o=>o._id!==(c==null?void 0:c._id)):[...e,c]),q(),I.show({message:t?"Removed from favorites":"Added to favorites"})}function z(e){const t=e.gifUrl,o=e.name,i=Number(e.rating).toFixed(1),s=e.target,r=e.bodyPart,d=e.equipment,a=e.popularity,y=e.burnedCalories,C=e.description;n.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${o}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${o}</h3>
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
              <p class='count'>${s}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Body part</p>
              <p class='count'>${r}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Equipment</p>
              <p class='count'>${d}</p>
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
        </div>`}document.addEventListener("DOMContentLoaded",W);const E=e=>"/"+e.split("/").pop();function W(){const e=E(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(o){const i=E(new URL(o.href).pathname);i===e||e==="/"&&i==="/index.html"?o.classList.add("active-page"):o.classList.remove("active-page")})}function V(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".nav-burger-menu-link");function s(){const a=e.classList.contains("is-open");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),T[a?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&s()}function d(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),B(document.body))}t.addEventListener("click",s),o.addEventListener("click",s),i.forEach(function(a){a.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",d)}document.addEventListener("DOMContentLoaded",V);const h=n.FAVORITES_KEY;async function M(){const e=u.load(h)||[],t=n.favorites,o=document.querySelector(".favorites-list-notification");if(e.length===0)o.classList.remove("is-hidden"),t.innerHTML="";else{const i=await F();X(i.results,e),o.classList.add("is-hidden")}}function X(e,t){const o=n.favorites,i=document.querySelector(".favorites-exercise-list");i.innerHTML="",e.forEach(s=>{if(t.includes(s._id)){const r=Z(s);i.appendChild(r)}}),o.classList.remove("is-hidden")}function Z(e){const{_id:t,name:o,burnedCalories:i,time:s,bodyPart:r,target:d}=e,a=document.createElement("li");return a.className="exercise-item",a.id=`${t}`,a.innerHTML=`
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
        <h3 class='exercise-item-subtitle'>${o}</h3>
      </div>
      <ul class='exercise-item-list'>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Burned calories:<span class='information-text-span'>${i} / ${s} min</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Body part:<span class='information-text-span'>${r}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${d}</span>
          </p>
        </li>
      </ul>
    </div>
  `,a}document.addEventListener("DOMContentLoaded",M);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");ee(t)}});function ee(e){const o=(u.load(h)||[]).filter(i=>i!==e);u.save(h,o),M()}export{oe as a,F as f,se as p,n as r,f as s};
//# sourceMappingURL=favorites-cb30cc87.js.map
