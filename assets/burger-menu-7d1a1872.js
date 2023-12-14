import{a as m,P as S,i as u,b as k,e as w}from"./vendor-ddeddc50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();m.defaults.baseURL="https://your-energy.b.goit.study/api";const C="filters",M="exercises",q="subscription",$=async({page:e=1,perPage:t=12,filter:o="Muscles"}={})=>await m.get(`/${C}?filter=${o}&page=${e}&limit=${t}`).then(s=>s.data),B=async({page:e=1,perPage:t=12,filter:o={}}={})=>await m.get(`/${M}?${new URLSearchParams(o).toString()}&page=${e}&limit=${t}`).then(s=>s.data),T=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},I=async e=>await m.post(`/${q}`,{email:e}).then(t=>t.data);function y(e){return e.toString().padStart(2,"0")}function R(e){return[e.getFullYear(),y(e.getMonth()+1),y(e.getDate())].join("-")}const h="quoteData",v=new Date,A=async()=>{let e=JSON.parse(localStorage.getItem(h));return(!e||e.date!==v)&&(e=await T(),localStorage.setItem(h,JSON.stringify({date:R(v),...e}))),e},N=async()=>{const e=document.querySelector(".quote-text"),t=document.querySelector(".quote-author"),o=await A();e.textContent=o.quote,t.textContent=o.author},O=(e,t,o)=>{const s=document.getElementById("tui-pagination-container"),n=t<5?t:5,i={totalItems:e*t,itemsPerPage:e,visiblePages:n,centerAlign:!0,page:o},r=new S(s,i);return n<=1?s.style.display="none":s.style.display="block",r},p="/team-final-project-js/assets/sprite-984a0ff0.svg",l={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper")};document.querySelector(".exercises-search-wrapper input").addEventListener("keydown",P);function P(e){const t=e.target.value;(e.keyCode===13||e.code==="Enter")&&E(t)}async function E(e=""){const t=await JSON.parse(sessionStorage.getItem("category"));if(!t){console.log("not active category!!!");return}e&&(t.keyword=e);try{const o=await B({page:1,perPage:10,filter:t}),s=D(o.results);l.divCategories.innerHTML=s,l.divCategories.classList.add("exercises-list")}catch{console.log("ooops!!!")}}function D(e){return e.map(({name:t,target:o,rating:s,burnedCalories:n,time:i,_id:r,bodyPart:a})=>`
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
                    >${n} / ${i} min</span
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
                  Target:<span class="information-text-span">${o}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}async function f(e,t){const o=document.getElementById("categories-loader"),s=document.getElementById("categories-wrapper");o.style.display="block",s.style.display="none",l.divCategories.innerHTML="";try{N();const n=await $({page:t,perPage:12,filter:e});O(12,n.totalPages,t).on("afterMove",({page:r})=>{f(e,r)});const i=n.results.map(r=>{const a=F(r);return a.addEventListener("click",()=>{j(a)}),a});l.divCategories.append(...i)}catch(n){if(n.response&&n.response.status===409){const r={title:"Error",message:n.response.data.message,position:"topRight",color:"red"};return u.show(r)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return u.show(i)}finally{setTimeout(()=>{o.style.display="none",s.style.display="flex"},500)}}function F({name:e,filter:t,imgURL:o}){const s=document.createElement("li");s.className="category-item";const n=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+n,e);const i=document.createElement("img");i.className="category-item-img",i.src=o,i.alt="Category",i.loading="lazy";const r=document.createElement("div");r.className="category-item-bg";const a=document.createElement("p");a.className="category-item-title",a.textContent=U(e);const d=document.createElement("p");return d.className="category-item-subtitle",d.textContent=t,r.appendChild(a),r.appendChild(d),s.appendChild(i),s.appendChild(r),s}function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}function j(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),l.divExSearch.classList.remove("is-hidden"),E()}const L=["Muscles","Body parts","Equipment"];f(L[0],1);const Q=H(L);l.filtersRef.append(...Q);function H(e){return e.map(t=>{const o=document.createElement("li");o.setAttribute("id",t),t==="Muscles"&&o.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{J(t,o)}),o.appendChild(s),o})}function J(e,t){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),l.divCategories.innerHTML="",l.exSearch.value="",l.divCategories.classList.remove("exercises-list"),l.divExSearch.classList.add("is-hidden"),f(e,1))}const z=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),_=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!z(t.value.trim())){const s={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return u.show(s)}const o=t.value.trim();I(o).then(s=>{if(s.message){const n={title:"Success",message:s.message,position:"topRight",color:"green"};return u.show(n)}}).catch(s=>{if(s.response&&s.response.status===409){const i={title:"Error",message:s.response.data.message,position:"topRight",color:"red"};return u.show(i)}const n={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return u.show(n)}).finally(()=>l.footerForm.forEach(s=>s.reset()))};l.footerForm.forEach(e=>e.addEventListener("submit",_));const c={galleryRef:document.querySelector(".gallery"),closeBtn:document.querySelector(".modal_close_btn"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),cardRef:document.querySelector(".card")};console.log("refs.modalContainer: ",c.modalContainer);c.cardRef.addEventListener("click",W);async function K(e){return await(await fetch("https://your-energy.b.goit.study/api/exercises/64f389465ae26083f39b17a2")).json()}function W(e){K().then(t=>{G(t)}),c.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),c.backdrop.classList.add("scroll"),Y()}function Y(){document.addEventListener("click",e=>{e.target===c.backdrop&&(c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll"))}),c.closeBtn.addEventListener("click",()=>{c.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),c.backdrop.classList.remove("scroll")})}function G(e){const t=e.gifUrl,o=e.name,s=Number(e.rating).toFixed(1),n=e.target,i=e.bodyPart,r=e.equipment,a=e.popularity,d=e.burnedCalories,x=e.description;return c.modalContainer.innerHTML=`
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
          <p class="about-info">${x}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
          </button>
          <button class="button give-a-rating" type="button">Give a rating</button>
        </div>
      </div>`}const g=document.getElementById("scroll-up-btn");window.onscroll=function(){X()};function X(){document.body.scrollTop>0||document.documentElement.scrollTop>0?g.style.display="block":g.style.display="none"}g.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});document.addEventListener("DOMContentLoaded",V);const b=e=>"/"+e.split("/").pop();function V(){const e=b(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(o){const s=b(new URL(o.href).pathname);s===e||e==="/"&&s==="/index.html"?o.classList.add("active-page"):o.classList.remove("active-page")})}function Z(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".nav-burger-menu-link");function n(){const a=e.classList.contains("is-open");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),k[a?"enableBodyScroll":"disableBodyScroll"](document.body)}function i(){e.classList.contains("is-open")&&n()}function r(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),w(document.body))}t.addEventListener("click",n),o.addEventListener("click",n),s.forEach(function(a){a.addEventListener("click",i)}),matchMedia("(min-width: 768px)").addEventListener("change",r)}document.addEventListener("DOMContentLoaded",Z);
//# sourceMappingURL=burger-menu-7d1a1872.js.map
