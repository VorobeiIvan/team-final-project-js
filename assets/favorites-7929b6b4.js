import{a as c,b as S,e as x}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();c.defaults.baseURL="https://your-energy.b.goit.study/api";const L="filters",h="exercises",b="subscription",N=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>c.get(`/${L}?filter=${s}&page=${e}&limit=${t}`).then(n=>n.data),E=({page:e=1,perPage:t=12,filter:s={}}={})=>c.get(`/${h}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(n=>n.data),D=e=>c.get(`/${h}/${e}`).then(t=>t.data),q=async()=>{try{const{data:e}=await c.get("/quote");return e}catch{console.log('Error request "/quote"')}},P=e=>c.post(`/${b}`,{email:e}).then(t=>t.data),$=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function f(e){return e.toString().padStart(2,"0")}function I(e){return[e.getFullYear(),f(e.getMonth()+1),f(e.getDate())].join("-")}const p="quoteData",g=I(new Date),M=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(p));(!e||e.date!==g)&&(e=await q(),localStorage.setItem(p,JSON.stringify({date:g,...e}))),M.insertAdjacentHTML("beforeend",$(e))})();const k=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},w=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},d={save:k,load:w},l="/team-final-project-js/assets/sprite-c789443a.svg",m={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),closeModalBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),FAVORITES_KEY:"favorites-list",favorites:document.querySelector(".favorites-list")};document.addEventListener("DOMContentLoaded",O);const v=e=>"/"+e.split("/").pop();function O(){const e=v(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const n=v(new URL(s.href).pathname);n===e||e==="/"&&n==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function B(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".nav-burger-menu-link");function o(){const i=e.classList.contains("is-open");t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open"),S[i?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&o()}function a(i){i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))}t.addEventListener("click",o),s.addEventListener("click",o),n.forEach(function(i){i.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",a)}document.addEventListener("DOMContentLoaded",B);const u=m.FAVORITES_KEY;async function y(){const e=d.load(u)||[],t=m.favorites,s=document.querySelector(".favorites-list-notification");if(e.length===0)s.classList.remove("is-hidden"),t.innerHTML="";else{const n=await E();A(n.results,e),s.classList.add("is-hidden")}}function A(e,t){const s=m.favorites,n=document.querySelector(".favorites-exercise-list");n.innerHTML="",e.forEach(o=>{if(t.includes(o._id)){const r=C(o);n.appendChild(r)}}),s.classList.remove("is-hidden")}function C(e){const{_id:t,name:s,burnedCalories:n,time:o,bodyPart:r,target:a}=e,i=document.createElement("li");return i.className="exercise-item",i.id=`${t}`,i.innerHTML=`
    <div class="exercise-item-wrapper">
      <div class="exercise-item-firth-wrapper">
        <p class="exercise-item-workout">WORKOUT</p>

        <button type="button" class="exercise-item-button-delete" data-exercise-id="${t}">
          <svg class="exercise-item-trash-icon" width="16" height="16">
            <use href="${l}#trash"></use>
          </svg>
        </button>

        <button type="button" class="exercise-item-button">
          Start&nbsp;&nbsp;
          <svg class="exercise-item-arrow" width="16" height="16">
            <use href="${l}#arrow-right"></use>
          </svg>
        </button>
      </div>
      <div class="exercise-item-second-wrapper">
        <div class="exercise-item-run-box">
          <svg class="exercise-item-run" width="16" height="16">
            <use href="${l}#run"></use>
          </svg>
        </div>
        <h3 class="exercise-item-subtitle">${s}</h3>
      </div>
      <ul class="exercise-item-list">
        <li class="exercise-item-list-information">
          <p class="information-text">
            Burned calories:<span class="information-text-span">${n} / ${o} min</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Body part:<span class="information-text-span">${r}</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Target:<span class="information-text-span">${a}</span>
          </p>
        </li>
      </ul>
    </div>
  `,i}document.addEventListener("DOMContentLoaded",y);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");T(t)}});function T(e){const s=(d.load(u)||[]).filter(n=>n!==e);d.save(u,s),y()}export{l as a,E as b,N as c,D as f,P as p,m as r,d as s};
//# sourceMappingURL=favorites-7929b6b4.js.map
