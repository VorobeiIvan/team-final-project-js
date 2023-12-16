import{a as m,i as M,d as j,e as D,b as K}from"./vendor-5fe488fb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();m.defaults.baseURL="https://your-energy.b.goit.study/api";const z="filters",R="exercises",Q="subscription",Ee=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>m.get(`/${z}?filter=${s}&page=${e}&limit=${t}`).then(o=>o.data),G=({page:e=1,perPage:t=12,filter:s={}}={})=>m.get(`/${R}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(o=>o.data),J=e=>m.get(`/${R}/${e}`).then(t=>t.data),Y=async()=>{try{const{data:e}=await m.get("/quote");return e}catch{console.log('Error request "/quote"')}},Se=e=>m.post(`/${Q}`,{email:e}).then(t=>t.data),V=(e,t)=>m.patch(`/${R}/${e}/rating`,t,{headers:{"content-type":"application/json"}}).then(s=>s.data),W=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function T(e){return e.toString().padStart(2,"0")}function Z(e){return[e.getFullYear(),T(e.getMonth()+1),T(e.getDate())].join("-")}const k=e=>M.show({title:"Error",message:e,position:"topRight",color:"red"}),X=e=>M.show({title:"Success",message:e,position:"topRight",color:"green"}),ee={email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,review:/^.+$/},A="quoteData",B=Z(new Date),te=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(A));(!e||e.date!==B)&&(e=await Y(),localStorage.setItem(A,JSON.stringify({date:B,...e}))),te.insertAdjacentHTML("beforeend",W(e))})();const a={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),modalIconHeart:document.querySelector(".modal-icon-heart"),sun:document.querySelectorAll(".sun"),moon:document.querySelectorAll(".moon")},x={LIGHT:"light-theme",DARK:"dark-theme"};a.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",se)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(q(x.LIGHT),a.sun.forEach(s=>s.classList.remove("visible")),a.moon.forEach(s=>s.classList.add("visible")),a.body.classList.remove("dark-theme"),a.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(a.sun.forEach(s=>s.classList.add("visible")),a.moon.forEach(s=>s.classList.remove("visible")),a.buttonTheme.forEach(s=>s.checked=!0),a.body.classList.add("dark-theme"))})();function se(){return localStorage.getItem("theme")==="dark-theme"?(a.buttonTheme.forEach(t=>t.checked=!1),q(x.LIGHT),a.sun.forEach(t=>t.classList.remove("visible")),a.moon.forEach(t=>t.classList.add("visible")),a.body.classList.remove("dark-theme")):(a.buttonTheme.forEach(t=>t.checked=!0),a.sun.forEach(t=>t.classList.add("visible")),a.moon.forEach(t=>t.classList.remove("visible")),q(x.DARK),a.body.classList.add("dark-theme"))}function q(e){localStorage.setItem("theme",e)}const b="/team-final-project-js/assets/sprite-59e25010.svg",oe=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},ne=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},h={save:oe,load:ne},$="favorites-list",ae=({targetElement:e,width:t,height:s,disableScroll:o=!1}={})=>{const n=e||document.body,r=document.createElement("div");r.classList.add("loader-container");const i=document.createElement("div");return i.classList.add("loader"),i.style.width=t||"100px",i.style.height=s||"100px",{setLoader:()=>{o&&j(document.body),r.appendChild(i),n.appendChild(r)},deleteLoader:()=>{n.removeChild(r),o&&D(document.body)}}},f="invalid-input-form",l=document.querySelector(".rating-feedback-form"),{allStars:E,number:S,ratingStarsRef:y,closeButtonRef:re}={ratingStarsRef:l.querySelector(".rating-stars"),number:l.querySelector(".rating-number"),allStars:l.querySelectorAll(".star"),closeButtonRef:l.querySelector(".close-rating-btn-icon")},ie=e=>{document.querySelector(".give-a-rating").addEventListener("click",s=>{s.preventDefault(),l.classList.remove("is-hidden"),l.setAttribute("id",e),document.querySelector(".modal-main").classList.add("is-hidden")})},w=()=>{l.reset(),l.classList.add("is-hidden"),S.textContent="0.0",E.forEach(e=>e.classList.remove("star-active")),E.forEach(e=>e.classList.remove("star-checked")),document.querySelector(".modal-main").classList.remove("is-hidden")},O=(e,t)=>{S.textContent=Number(e).toFixed(1),E.forEach((s,o)=>{o<=Number(e)-1?s.classList.add(t):s.classList.remove(t)})},N=()=>E.forEach(e=>e.classList.remove("star-active"));y.addEventListener("click",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;t&&(O(t,"star-checked"),N())});y.addEventListener("mouseover",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;l.classList.remove(f),t&&(S.textContent=Number(t).toFixed(1),O(t,"star-active"))});const C=e=>{e.target.classList.remove(f),e.target.removeEventListener("input",C)};l.addEventListener("submit",async e=>{var p;e.preventDefault();const t=((p=y.querySelector(":checked"))==null?void 0:p.value)||0,s=Object.entries(ee),o={};let n=!1;s.forEach(([d,g])=>{const L=l.elements[d];g.test(L.value.trim())?(o[d]=L.value,L.classList.remove(f)):(n=!0,L.classList.add(f),L.addEventListener("input",C),k(`Please enter a valid ${d}`))});const r=Number(t);if(r<=0)return k("Please enter a start rating"),l.classList.add(f);if(n)return;const{setLoader:i,deleteLoader:c}=ae({targetElement:l});o.rate=r;try{i();const d=l.getAttribute("id");await V(d,o),X("Rating submitted successfully"),w()}catch(d){d&&([...l.elements].forEach(g=>{d.response.data.message.includes(g.name)&&(g.classList.add(f),g.addEventListener("input",C))}),k(d.response.data.message))}finally{c()}});re.addEventListener("click",()=>w());y.addEventListener("mouseout",e=>{var s,o;const t=((s=y.querySelector(":checked"))==null?void 0:s.value)||0;S.textContent=(o=Number(t))==null?void 0:o.toFixed(1),N()});a.divCategories.addEventListener("click",de);let u;const ce=`Remove from favorites
        <svg class='modal-icon-heart' width='24' height='24'>
          <use href='./images/sprite.svg#trash'></use>
        </svg>`,le=`Add to favorites
        <svg class='modal-icon-heart' width='24' height='24'>
          <use href='./images/sprite.svg#heart'></use>
        </svg>`,P=(e,t)=>e.find(s=>(s==null?void 0:s._id)===t),_=()=>{const e=h.load($)||[];if(!!P(e,u==null?void 0:u._id)){document.querySelector(".add-to-favorites").innerHTML=ce;return}document.querySelector(".add-to-favorites").innerHTML=le};function de(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&ue(t.id)}function ue(e){J(e).then(t=>{u=t,ve(t),ie(e),_()}),a.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),a.backdrop.classList.add("scroll"),fe()}const me=document.querySelector(".modal-close-btn"),v=e=>{(e.target===a.backdrop||e.key==="Escape"||e.target===me)&&(w(),a.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),a.backdrop.classList.remove("scroll"),document.removeEventListener("click",v),document.removeEventListener("keydown",v),a.closeModalBtn.removeEventListener("click",v),a.addFavorite.removeEventListener("click",H))};function fe(){a.backdrop.addEventListener("click",v),document.addEventListener("keydown",v),a.closeModalBtn.addEventListener("click",v),a.addFavorite.addEventListener("click",H)}function H(){const e=h.load($)||[],t=!!P(e,u==null?void 0:u._id);h.save($,t?e.filter(s=>s._id!==(u==null?void 0:u._id)):[...e,u]),_(),M.show({message:t?"Removed from favorites":"Added to favorites"})}function ve(e){const t=e.gifUrl,s=e.name,o=Number(e.rating).toFixed(1),n=e.target,r=e.bodyPart,i=e.equipment,c=e.popularity,p=e.burnedCalories,d=e.description;a.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${s}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${s}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${o}</p>
          <svg class='modal-icon-star'>
            <use href='${b}#star'></use>
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
              <p class='count'>${i}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Popular</p>
              <p class='count'>${c}</p>
            </div>
            <div class='info-element'>
              <p class='info-item'>Burned Calories</p>
              <p class='count'>${p}</p>
            </div>
          </div>
          <p class='about-info'>${d}</p>
        </div>`}document.addEventListener("DOMContentLoaded",he);const F=e=>"/"+e.split("/").pop();function he(){const e=F(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const o=F(new URL(s.href).pathname);o===e||e==="/"&&o==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function pe(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".nav-burger-menu-link");function n(){const c=e.classList.contains("is-open");t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),K[c?"enableBodyScroll":"disableBodyScroll"](document.body)}function r(){e.classList.contains("is-open")&&n()}function i(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),D(document.body))}t.addEventListener("click",n),s.addEventListener("click",n),o.forEach(function(c){c.addEventListener("click",r)}),matchMedia("(min-width: 768px)").addEventListener("change",i)}document.addEventListener("DOMContentLoaded",pe);const I=a.FAVORITES_KEY;async function U(){const e=h.load(I)||[],t=a.favorites,s=document.querySelector(".favorites-list-notification");if(e.length===0)s.classList.remove("is-hidden"),t.innerHTML="";else{const o=await G();ge(o.results,e),s.classList.add("is-hidden")}}function ge(e,t){const s=a.favorites,o=document.querySelector(".favorites-exercise-list");o.innerHTML="",e.forEach(n=>{if(t.includes(n._id)){const r=Le(n);o.appendChild(r)}}),s.classList.remove("is-hidden")}function Le(e){const{_id:t,name:s,burnedCalories:o,time:n,bodyPart:r,target:i}=e,c=document.createElement("li");return c.className="exercise-item",c.id=`${t}`,c.innerHTML=`
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${t}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${b}#trash'></use>
          </svg>
        </button>

        <button id='${t}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${b}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${b}#run'></use>
          </svg>
        </div>
        <h3 class='exercise-item-subtitle'>${s}</h3>
      </div>
      <ul class='exercise-item-list'>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Burned calories:<span class='information-text-span'>${o} / ${n} min</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Body part:<span class='information-text-span'>${r}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${i}</span>
          </p>
        </li>
      </ul>
    </div>
  `,c}document.addEventListener("DOMContentLoaded",U);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const t=e.target.getAttribute("data-exercise-id");ye(t)}});function ye(e){const s=(h.load(I)||[]).filter(o=>o!==e);h.save(I,s),U()}export{f as I,Ee as a,X as b,G as f,k as g,ae as l,Se as p,a as r,b as s,ee as v};
//# sourceMappingURL=favorites-a6996fa9.js.map
