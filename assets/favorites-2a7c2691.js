import{a as l,i as m,b as S,e as x}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();l.defaults.baseURL="https://your-energy.b.goit.study/api";const k="filters",b="exercises",$="subscription",V=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>l.get(`/${k}?filter=${s}&page=${e}&limit=${t}`).then(n=>n.data),C=({page:e=1,perPage:t=12,filter:s={}}={})=>l.get(`/${b}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(n=>n.data),q=e=>l.get(`/${b}/${e}`).then(t=>t.data),F=async()=>{try{const{data:e}=await l.get("/quote");return e}catch{console.log('Error request "/quote"')}},j=e=>l.post(`/${$}`,{email:e}).then(t=>t.data),I=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function p(e){return e.toString().padStart(2,"0")}function O(e){return[e.getFullYear(),p(e.getMonth()+1),p(e.getDate())].join("-")}const g="quoteData",h=O(new Date),A=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(g));(!e||e.date!==h)&&(e=await F(),localStorage.setItem(g,JSON.stringify({date:h,...e}))),A.insertAdjacentHTML("beforeend",I(e))})();const M=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},w=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},c={save:M,load:w},u="/team-final-project-js/assets/sprite-c789443a.svg",o={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),closeModalBtn:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),FAVORITES_KEY:"favorites-list",favorites:document.querySelector(".favorites-list")};o.divCategories.addEventListener("click",R);o.favorites.addEventListener("click",handleFavoritesCardClick);function R(e,t){e.preventDefault();const s=e.target.closest(".exercise-item");s&&T(s.id)}function T(e){q(e).then(t=>{N(t)}),o.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),o.backdrop.classList.add("scroll"),B()}function B(){document.addEventListener("click",e=>{e.target===o.backdrop&&(o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll"))}),o.closeModalBtn.addEventListener("click",()=>{o.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),o.backdrop.classList.remove("scroll")})}o.addFavorite.addEventListener("click",e=>{if(e.target.textContent=="Remove from favorites"){const t=c.load(o.FAVORITES_KEY);for(let s=0;s<t.length;s++)JSON.stringify(t[s])===JSON.stringify(data)&&(t.splice(s,1),console.log(t),c.save(o.FAVORITES_KEY,t),m.show({message:"Removed from favorites"}),o.addFavorite.textContent="Add to favorites",o.addFavorite.style.backgroundColor="#fff",o.addFavorite.style.color="#000")}else{if(!c.load(o.FAVORITES_KEY)||c.load(o.FAVORITES_KEY).length===0){c.save(o.FAVORITES_KEY,[data]),m.show({message:"Added to favorites"}),o.addFavorite.textContent="Remove from favorites",o.addFavorite.style.backgroundColor="#ff6b01",o.addFavorite.style.color="#fff";return}const t=c.load(o.FAVORITES_KEY);t.push(data),c.save(o.FAVORITES_KEY,t),m.show({message:"Added to favorites"}),o.addFavorite.textContent="Remove from favorites",o.addFavorite.style.backgroundColor="#ff6b01",o.addFavorite.style.color="#fff"}o.addFavorite.removeEventListener});function N(e){const t=e.gifUrl,s=e.name,n=Number(e.rating).toFixed(1),i=e.target,a=e.bodyPart,d=e.equipment,r=e.popularity,v=e.burnedCalories,E=e.description;return o.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${t}" alt="${s}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${s}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${n}</p>
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
              <p class="count">${d}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${v}</p>
            </div>
          </div>
          <p class="about-info">${E}</p>
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
      </div>`}document.addEventListener("DOMContentLoaded",D);const y=e=>"/"+e.split("/").pop();function D(){const e=y(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const n=y(new URL(s.href).pathname);n===e||e==="/"&&n==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function K(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".nav-burger-menu-link");function i(){const r=e.classList.contains("is-open");t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),S[r?"enableBodyScroll":"disableBodyScroll"](document.body)}function a(){e.classList.contains("is-open")&&i()}function d(r){r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))}t.addEventListener("click",i),s.addEventListener("click",i),n.forEach(function(r){r.addEventListener("click",a)}),matchMedia("(min-width: 768px)").addEventListener("change",d)}document.addEventListener("DOMContentLoaded",K);const f=o.FAVORITES_KEY;async function L(){const e=c.load(f)||[],t=o.favorites,s=document.querySelector(".favorites-list-notification");if(e.length===0)s.classList.remove("is-hidden"),t.innerHTML="";else{const n=await C();_(n.results,e),s.classList.add("is-hidden")}}function _(e,t){const s=o.favorites,n=document.querySelector(".favorites-exercise-list");n.innerHTML="",e.forEach(i=>{if(t.includes(i._id)){const a=P(i);n.appendChild(a)}}),s.classList.remove("is-hidden")}function P(e){const{_id:t,name:s,burnedCalories:n,time:i,bodyPart:a,target:d}=e,r=document.createElement("li");return r.className="exercise-item",r.id=`${t}`,r.innerHTML=`
    <div class="exercise-item-wrapper">
      <div class="exercise-item-firth-wrapper">
        <p class="exercise-item-workout">WORKOUT</p>

        <button type="button" class="exercise-item-button-delete" data-exercise-id="${t}">
          <svg class="exercise-item-trash-icon" width="16" height="16">
            <use href="${u}#trash"></use>
          </svg>
        </button>

        <button type="button" class="exercise-item-button">
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
            Burned calories:<span class="information-text-span">${n} / ${i} min</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Body part:<span class="information-text-span">${a}</span>
          </p>
        </li>
        <li class="exercise-item-list-information">
          <p class="information-text">
            Target:<span class="information-text-span">${d}</span>
          </p>
        </li>
      </ul>
    </div>
  `,r}document.addEventListener("DOMContentLoaded",L);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");Y(t)}});function Y(e){const s=(c.load(f)||[]).filter(n=>n!==e);c.save(f,s),L()}export{V as a,C as f,j as p,o as r,u as s};
//# sourceMappingURL=favorites-2a7c2691.js.map
