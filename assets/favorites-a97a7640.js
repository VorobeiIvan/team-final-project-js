import{a as l,b,e as x}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();l.defaults.baseURL="https://your-energy.b.goit.study/api";const E="filters",S="exercises",k="subscription",j=({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>l.get(`/${E}?filter=${o}&page=${e}&limit=${t}`).then(r=>r.data),q=({page:e=1,perPage:t=12,filter:o={}}={})=>l.get(`/${S}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(r=>r.data),H=e=>l.get(`/${S}/${e}`).then(t=>t.data),I=async()=>{try{const{data:e}=await l.get("/quote");return e}catch{console.log('Error request "/quote"')}},K=e=>l.post(`/${k}`,{email:e}).then(t=>t.data),T=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function g(e){return e.toString().padStart(2,"0")}function $(e){return[e.getFullYear(),g(e.getMonth()+1),g(e.getDate())].join("-")}const p="quoteData",v=$(new Date),M=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(p));(!e||e.date!==v)&&(e=await I(),localStorage.setItem(p,JSON.stringify({date:v,...e}))),M.insertAdjacentHTML("beforeend",T(e))})();const i={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),closeModalBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),FAVORITES_KEY:"favorites-list",favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body")},u={LIGHT:"light-theme",DARK:"dark-theme"};i.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",w)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(m(u.LIGHT),i.body.classList.remove("dark-theme"),i.buttonTheme.forEach(o=>o.checked=!1)):t==="dark-theme"&&(i.buttonTheme.forEach(o=>o.checked=!0),i.body.classList.add("dark-theme"))})();function w(){return localStorage.getItem("theme")==="dark-theme"?(i.buttonTheme.forEach(t=>t.checked=!1),m(u.LIGHT),i.body.classList.remove("dark-theme")):(i.buttonTheme.forEach(t=>t.checked=!0),m(u.DARK),i.body.classList.add("dark-theme"))}function m(e){localStorage.setItem("theme",e)}const A=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}},O=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},f={save:A,load:O},d="/team-final-project-js/assets/sprite-d821f38c.svg";document.addEventListener("DOMContentLoaded",B);const y=e=>"/"+e.split("/").pop();function B(){const e=y(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(o){const r=y(new URL(o.href).pathname);r===e||e==="/"&&r==="/index.html"?o.classList.add("active-page"):o.classList.remove("active-page")})}function C(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".nav-burger-menu-link");function s(){const a=e.classList.contains("is-open");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),b[a?"enableBodyScroll":"disableBodyScroll"](document.body)}function n(){e.classList.contains("is-open")&&s()}function c(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))}t.addEventListener("click",s),o.addEventListener("click",s),r.forEach(function(a){a.addEventListener("click",n)}),matchMedia("(min-width: 768px)").addEventListener("change",c)}document.addEventListener("DOMContentLoaded",C);const h=i.FAVORITES_KEY;async function L(){const e=f.load(h)||[],t=i.favorites,o=document.querySelector(".favorites-list-notification");if(e.length===0)o.classList.remove("is-hidden"),t.innerHTML="";else{const r=await q();D(r.results,e),o.classList.add("is-hidden")}}function D(e,t){const o=i.favorites,r=document.querySelector(".favorites-exercise-list");r.innerHTML="",e.forEach(s=>{if(t.includes(s._id)){const n=R(s);r.appendChild(n)}}),o.classList.remove("is-hidden")}function R(e){const{_id:t,name:o,burnedCalories:r,time:s,bodyPart:n,target:c}=e,a=document.createElement("li");return a.className="exercise-item",a.id=`${t}`,a.innerHTML=`
    <div class="exercise-item-wrapper">
      <div class="exercise-item-firth-wrapper">
        <p class="exercise-item-workout">WORKOUT</p>

        <button type="button" class="exercise-item-button-delete" data-exercise-id="${t}">
          <svg class="exercise-item-trash-icon" width="16" height="16">
            <use href="${d}#trash"></use>
          </svg>
        </button>

        <button type="button" class="exercise-item-button">
          Start&nbsp;&nbsp;
          <svg class="exercise-item-arrow" width="16" height="16">
            <use href="${d}#arrow-right"></use>
          </svg>
        </button>
      </div>
      <div class="exercise-item-second-wrapper">
        <div class="exercise-item-run-box">
          <svg class="exercise-item-run" width="16" height="16">
            <use href="${d}#run"></use>
          </svg>
        </div>
        <h3 class="exercise-item-subtitle">${o}</h3>
      </div>
      <ul class="exercise-item-list">
        <li class="exercise-item-list-information">
          <p class="information-text">
            Burned calories:<span class="information-text-span">${r} / ${s} min</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Body part:<span class="information-text-span">${n}</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Target:<span class="information-text-span">${c}</span>
          </p>
        </li>
      </ul>
    </div>
  `,a}document.addEventListener("DOMContentLoaded",L);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");F(t)}});function F(e){const o=(f.load(h)||[]).filter(r=>r!==e);f.save(h,o),L()}export{d as a,q as b,j as c,H as f,K as p,i as r,f as s};
//# sourceMappingURL=favorites-a97a7640.js.map
