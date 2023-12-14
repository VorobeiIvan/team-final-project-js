import{a as m,P as k,i as u,b as w,e as C}from"./vendor-ddeddc50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();m.defaults.baseURL="https://your-energy.b.goit.study/api";const M="filters",$="exercises",q="subscription",B=async({page:e=1,perPage:t=12,filter:n="Muscles"}={})=>await m.get(`/${M}?filter=${n}&page=${e}&limit=${t}`).then(s=>s.data),I=async({page:e=1,perPage:t=12,filter:n={}}={})=>await m.get(`/${$}?${new URLSearchParams(n).toString()}&page=${e}&limit=${t}`).then(s=>s.data),T=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},R=async e=>await m.post(`/${q}`,{email:e}).then(t=>t.data),A=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function y(e){return e.toString().padStart(2,"0")}function N(e){return[e.getFullYear(),y(e.getMonth()+1),y(e.getDate())].join("-")}const h="quoteData",v=new Date,O=async()=>{let e=JSON.parse(localStorage.getItem(h));return(!e||e.date!==v)&&(e=await T(),localStorage.setItem(h,JSON.stringify({date:N(v),...e}))),e},P=async()=>{const e=document.querySelector(".quote-title-wrap"),t=await O();e.insertAdjacentHTML("beforeend",A(t))},D=(e,t,n)=>{const s=document.getElementById("tui-pagination-container"),o=t<5?t:5,i={totalItems:e*t,itemsPerPage:e,visiblePages:o,centerAlign:!0,page:n},r=new k(s,i);return o<=1?s.style.display="none":s.style.display="block",r},p="/team-final-project-js/assets/sprite-c789443a.svg",l={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper")};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",F);function F(e){const t=e.target.value;(e.keyCode===13||e.code==="Enter")&&L(t)}async function L(e=""){const t=await JSON.parse(sessionStorage.getItem("category"));if(!t){console.log("not active category!!!");return}e&&(t.keyword=e);try{const n=await I({page:1,perPage:10,filter:t}),s=U(n.results);l.divCategories.innerHTML=s,l.divCategories.classList.add("exercises-list")}catch{console.log("ooops!!!")}}function U(e){return e.map(({name:t,target:n,rating:s,burnedCalories:o,time:i,_id:r,bodyPart:a})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${s}</p>
              <svg class="exercise-item-star" width="18" height="18" >
                <use href="${p}#star"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${r}>
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
                    >${o} / ${i} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${a}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${n}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}let b=!1;async function f(e,t){const n=document.getElementById("categories-loader"),s=document.getElementById("categories-wrapper");n.style.display="block",s.style.display="none",l.divCategories.innerHTML="",l.divCategories.classList.remove("exercises-list");try{b||(P(),b=!0);const o=await B({page:t,perPage:12,filter:e});D(12,o.totalPages,t).on("afterMove",({page:r})=>{f(e,r)});const i=o.results.map(r=>{const a=j(r);return a.addEventListener("click",()=>{H(a)}),a});l.divCategories.append(...i)}catch(o){if(o.response&&o.response.status===409){const r={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return u.show(r)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return u.show(i)}finally{setTimeout(()=>{n.style.display="none",s.style.display="flex"},500)}}function j({name:e,filter:t,imgURL:n}){const s=document.createElement("li");s.className="category-item";const o=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+o,e);const i=document.createElement("img");i.className="category-item-img",i.src=n,i.alt="Category",i.loading="lazy";const r=document.createElement("div");r.className="category-item-bg";const a=document.createElement("p");a.className="category-item-title",a.textContent=Q(e);const d=document.createElement("p");return d.className="category-item-subtitle",d.textContent=t,r.appendChild(a),r.appendChild(d),s.appendChild(i),s.appendChild(r),s}function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function H(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),l.divExSearch.classList.remove("is-hidden"),L()}const x=["Muscles","Body parts","Equipment"];f(x[0],1);const J=_(x);l.filtersRef.append(...J);function _(e){return e.map(t=>{const n=document.createElement("li");n.setAttribute("id",t),t==="Muscles"&&n.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{z(t,n)}),n.appendChild(s),n})}function z(e,t){const n=document.getElementsByClassName("filter-selected");n[0]&&(n[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),l.divCategories.innerHTML="",l.exSearch.value="",l.divCategories.classList.remove("exercises-list"),l.divExSearch.classList.add("is-hidden"),f(e,1))}const K=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),W=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!K(t.value.trim())){const s={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return u.show(s)}const n=t.value.trim();R(n).then(s=>{if(s.message){const o={title:"Success",message:s.message,position:"topRight",color:"green"};return u.show(o)}}).catch(s=>{if(s.response&&s.response.status===409){const i={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return u.show(i)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return u.show(o)}).finally(()=>l.footerForm.forEach(s=>s.reset()))};l.footerForm.forEach(e=>e.addEventListener("submit",W));const c={galleryRef:document.querySelector(".gallery"),closeBtn:document.querySelector(".modal_close_btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),cardRef:document.querySelector(".card")};console.log("refs.modalContainer: ",c.modalContainer);c.cardRef.addEventListener("click",G);async function Y(e){return await(await fetch("https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2")).json()}function G(e){Y().then(t=>{Z(t)}),c.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),c.backdrop.classList.add("scroll"),X()}function X(){document.addEventListener("click",e=>{e.target===c.backdrop&&(c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll"))}),c.closeBtn.addEventListener("click",()=>{c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll")})}function Z(e){const t=e.gifUrl,n=e.name,s=Number(e.rating).toFixed(1),o=e.target,i=e.bodyPart,r=e.equipment,a=e.popularity,d=e.burnedCalories,S=e.description;return c.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${t}" alt="${n}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${n}</h3>
        <div class="rating-element">
            <p class="rating-count" id="vote">${s}</p>
            <p class="info-item">******</p>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${o}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${i}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${a}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${d}</p>
            </div>
          </div>
          <p class="about-info">${S}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
          </button>
          <button class="button give-a-rating" type="button">Give a rating</button>
        </div>
      </div>`}const g=document.getElementById("scroll-up-btn");window.onscroll=function(){V()};function V(){document.body.scrollTop>0||document.documentElement.scrollTop>0?g.style.display="block":g.style.display="none"}g.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});document.addEventListener("DOMContentLoaded",ee);const E=e=>"/"+e.split("/").pop();function ee(){const e=E(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(n){const s=E(new URL(n.href).pathname);s===e||e==="/"&&s==="/index.html"?n.classList.add("active-page"):n.classList.remove("active-page")})}function te(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".nav-burger-menu-link");function o(){const a=e.classList.contains("is-open");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),w[a?"enableBodyScroll":"disableBodyScroll"](document.body)}function i(){e.classList.contains("is-open")&&o()}function r(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),C(document.body))}t.addEventListener("click",o),n.addEventListener("click",o),s.forEach(function(a){a.addEventListener("click",i)}),matchMedia("(min-width: 768px)").addEventListener("change",r)}document.addEventListener("DOMContentLoaded",te);
//# sourceMappingURL=burger-menu-fa21535a.js.map
