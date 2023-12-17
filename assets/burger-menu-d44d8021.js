import{a as v,i as E,d as I,e as x}from"./vendor-a3df9737.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();v.defaults.baseURL="https://your-energy.b.goit.study/api";const K="filters",T="exercises",Q="subscription",be=({page:e=1,perPage:t=12,filter:s="Muscles"}={})=>v.get(`/${K}?filter=${s}&page=${e}&limit=${t}`).then(o=>o.data),Ee=({page:e=1,perPage:t=12,filter:s={}}={})=>v.get(`/${T}?${new URLSearchParams(s).toString()}&page=${e}&limit=${t}`).then(o=>o.data),G=e=>v.get(`/${T}/${e}`).then(t=>t.data),J=async()=>{try{const{data:e}=await v.get("/quote");return e}catch{console.log('Error request "/quote"')}},Se=e=>v.post(`/${Q}`,{email:e}).then(t=>t.data),Y=(e,t)=>v.patch(`/${T}/${e}/rating`,t,{headers:{"content-type":"application/json"}}).then(s=>s.data),V=({quote:e,author:t})=>`
  <p class="quote-text">${e}</p>
  <p class="quote-author">${t}</p>
`;function F(e){return e.toString().padStart(2,"0")}function W(e){return[e.getFullYear(),F(e.getMonth()+1),F(e.getDate())].join("-")}const M=e=>E.show({title:"Error",message:e,position:"topRight",color:"red"}),Z=e=>E.show({title:"Success",message:e,position:"topRight",color:"green"}),X={email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,review:/^.+$/},D="quoteData",O=W(new Date),ee=document.querySelector(".quote-title-wrap");(async()=>{let e=JSON.parse(localStorage.getItem(D));(!e||e.date!==O)&&(e=await J(),localStorage.setItem(D,JSON.stringify({date:O,...e}))),ee.insertAdjacentHTML("beforeend",V(e))})();const r={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),divCategoriesContainer:document.querySelector(".categories-container"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form"),exTitel:document.querySelector(".exercises-title"),exSearch:document.getElementById("exercises-search"),divExSearch:document.getElementById("search-wrapper"),btnSearch:document.querySelector(".exercises-search-button"),exSearchImg:document.getElementById("search-img"),closeModalBtn:document.querySelector(".modal-close-btn"),modalMainRef:document.querySelector(".modal-main"),backdrop:document.querySelector(".backdrop"),modalContainer:document.querySelector(".modal-container"),addFavorite:document.querySelector(".add-to-favorites"),giveRating:document.querySelector(".give-a-rating"),favorites:document.querySelector(".favorites-list"),buttonTheme:document.querySelectorAll(".theme-switch"),body:document.querySelector("body"),sun:document.querySelectorAll(".sun"),moon:document.querySelectorAll(".moon"),modalMain:document.querySelector(".modal-main")},R={LIGHT:"light-theme",DARK:"dark-theme"};r.buttonTheme.forEach(e=>{localStorage.getItem("Theme:")==="dark-theme"&&(e.checked=!0),e.addEventListener("click",te)});(function(){const t=localStorage.getItem("theme");t===null||t==="light-theme"?(w(R.LIGHT),r.sun.forEach(s=>s.classList.remove("visible")),r.moon.forEach(s=>s.classList.add("visible")),r.body.classList.remove("dark-theme"),r.buttonTheme.forEach(s=>s.checked=!1)):t==="dark-theme"&&(r.sun.forEach(s=>s.classList.add("visible")),r.moon.forEach(s=>s.classList.remove("visible")),r.buttonTheme.forEach(s=>s.checked=!0),r.body.classList.add("dark-theme"))})();function te(){return localStorage.getItem("theme")==="dark-theme"?(r.buttonTheme.forEach(t=>t.checked=!1),w(R.LIGHT),r.sun.forEach(t=>t.classList.remove("visible")),r.moon.forEach(t=>t.classList.add("visible")),r.body.classList.remove("dark-theme")):(r.buttonTheme.forEach(t=>t.checked=!0),r.sun.forEach(t=>t.classList.add("visible")),r.moon.forEach(t=>t.classList.remove("visible")),w(R.DARK),r.body.classList.add("dark-theme"))}function w(e){localStorage.setItem("theme",e)}const se=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},oe=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},m={save:se,load:oe},f="favorites-list",P=({targetElement:e,width:t,height:s,disableScroll:o=!1}={})=>{const n=e||document.body,a=document.createElement("div");a.classList.add("loader-container");const i=document.createElement("div");return i.classList.add("loader"),i.style.width=t||"100px",i.style.height=s||"100px",{setLoader:()=>{o&&I(document.body),a.appendChild(i),n.appendChild(a)},deleteLoader:()=>{n.removeChild(a),o&&x(document.body)}}},g="invalid-input-form",d=document.querySelector(".rating-feedback-form"),{allStars:q,number:$,ratingStarsRef:S,closeButtonRef:ne}={ratingStarsRef:d.querySelector(".rating-stars"),number:d.querySelector(".rating-number"),allStars:d.querySelectorAll(".star-icon-rating"),closeButtonRef:d.querySelector(".close-rating-btn-icon")},re=e=>{document.querySelector(".give-a-rating").addEventListener("click",s=>{s.preventDefault(),d.classList.remove("is-hidden"),d.setAttribute("id",e),document.querySelector(".modal-main").classList.add("is-hidden")})},B=()=>{d.reset(),d.classList.add("is-hidden"),$.textContent="0.0",q.forEach(e=>e.classList.remove("star-active")),q.forEach(e=>e.classList.remove("star-checked")),document.querySelector(".modal-main").classList.remove("is-hidden")},_=(e,t)=>{$.textContent=Number(e).toFixed(1),q.forEach((s,o)=>{o<=Number(e)-1?s.classList.add(t):s.classList.remove(t)})},H=()=>q.forEach(e=>e.classList.remove("star-active"));S.addEventListener("click",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;t&&(_(t,"star-checked"),H())});S.addEventListener("mouseover",e=>{var s,o;const t=(o=(s=e.target.closest("label"))==null?void 0:s.dataset)==null?void 0:o.value;d.classList.remove(g),t&&($.textContent=Number(t).toFixed(1),_(t,"star-active"))});const A=e=>{e.target.classList.remove(g),e.target.removeEventListener("input",A)};d.addEventListener("submit",async e=>{var L;e.preventDefault();const t=((L=S.querySelector(":checked"))==null?void 0:L.value)||0,s=Object.entries(X),o={};let n=!1;s.forEach(([l,y])=>{const b=d.elements[l];y.test(b.value.trim())?(o[l]=b.value,b.classList.remove(g)):(n=!0,b.classList.add(g),b.addEventListener("input",A),M(`Please enter a valid ${l}`))});const a=Number(t);if(a<=0)return M("Please enter a start rating"),d.classList.add(g);if(n)return;const{setLoader:i,deleteLoader:c}=P({targetElement:d});o.rate=a;try{i();const l=d.getAttribute("id");await Y(l,o),Z("Rating submitted successfully"),B()}catch(l){l&&([...d.elements].forEach(y=>{l.response.data.message.includes(y.name)&&(y.classList.add(g),y.addEventListener("input",A))}),M(l.response.data.message))}finally{c()}});ne.addEventListener("click",()=>B());S.addEventListener("mouseout",e=>{var s,o;const t=((s=S.querySelector(":checked"))==null?void 0:s.value)||0;$.textContent=(o=Number(t))==null?void 0:o.toFixed(1),H()});const h="/team-final-project-js/assets/sprite-59e25010.svg",k=document.querySelector(".favorites-list-notification"),ae=e=>{const t=e.target.getAttribute("data-exercise-id"),s=m.load(f);m.save(f,s.filter(o=>o._id!==t))};async function C(){const e=m.load(f)||[],t=r.favorites,s=document.querySelector(".favorites-list-notification");s&&(e.length===0&&s?(s.classList.contains("is-hidden")&&s.classList.remove("is-hidden"),t.innerHTML=""):(ie(e),document.querySelectorAll(".exercise-item-button-delete").forEach(o=>{o.addEventListener("click",ae)})))}C();function ie(e){const t=document.querySelector(".favorites-exercise-list");t&&(t.innerHTML="",e.forEach(s=>{const o=ce(s);t.appendChild(o)}),k.classList.add("is-hidden"))}function ce(e){const{_id:t,name:s,burnedCalories:o,time:n,bodyPart:a,target:i}=e,c=document.createElement("li");return c.className="exercise-item",c.id=`${t}`,c.innerHTML=`
    <div class='exercise-item-wrapper'>
      <div class='exercise-item-firth-wrapper'>
        <p class='exercise-item-workout'>WORKOUT</p>

        <button type='button' class='exercise-item-button-delete' data-exercise-id='${t}'>
          <svg class='exercise-item-trash-icon' width='16' height='16'>
            <use href='${h}#trash'></use>
          </svg>
        </button>

        <button id='${t}' type='button' class='exercise-item-button'>
          Start&nbsp;&nbsp;
          <svg class='exercise-item-arrow' width='16' height='16'>
            <use href='${h}#arrow-right'></use>
          </svg>
        </button>
      </div>
      <div class='exercise-item-second-wrapper'>
        <div class='exercise-item-run-box'>
          <svg class='exercise-item-run' width='16' height='16'>
            <use href='${h}#run'></use>
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
            Body part:<span class='information-text-span'>${a}</span>
          </p>
        </li>
        <li class='exercise-item-list-information'>
          <p class='information-text'>
            Target:<span class='information-text-span'>${i}</span>
          </p>
        </li>
      </ul>
    </div>
  `,c}document.addEventListener("DOMContentLoaded",C);document.addEventListener("click",e=>{if(e.target.classList.contains("exercise-item-button-delete")){const s=e.target.getAttribute("data-exercise-id");de(s)}(m.load(f)||[]).length===0&&k&&k.classList.contains("is-hidden")&&k.classList.remove("is-hidden")});function de(e){const s=(m.load(f)||[]).filter(o=>o!==e);m.save(f,s),C()}r.divCategories.addEventListener("click",me);let u;const le=`Remove from favorites
        <svg class='modal-icon-favorites'>
          <use href='${h}#trash'></use>
        </svg>`,ue=`Add to favorites
        <svg class='modal-icon-favorites'>
          <use href='${h}#heart'></use>
        </svg>`,U=(e,t)=>e.find(s=>(s==null?void 0:s._id)===t),j=()=>{const e=m.load(f)||[];if(!!U(e,u==null?void 0:u._id)){document.querySelector(".add-to-favorites").innerHTML=le;return}document.querySelector(".add-to-favorites").innerHTML=ue};function me(e){e.preventDefault();const t=e.target.closest(".exercise-item-button");t&&fe(t.id)}async function fe(e){const{setLoader:t,deleteLoader:s}=P({disableScroll:!0});try{t();const o=await G(e);u=o,he(o),re(e),j()}catch(o){if(o.response&&o.response.status===409){const a={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return E.show(a)}const n={title:"Error",message:"Oops, something went wrong, try again later",color:"red"};return E.show(n)}finally{s()}r.backdrop.classList.remove("is-hidden"),r.modalMain.classList.remove("inactive"),I(document.body),ge()}const ve=document.querySelector(".modal-close-btn"),p=e=>{(e.target===r.backdrop||e.key==="Escape"||e.target===ve)&&(B(),r.backdrop.classList.add("is-hidden"),r.modalMain.classList.add("inactive"),x(document.body),document.removeEventListener("click",p),document.removeEventListener("keydown",p),r.closeModalBtn.removeEventListener("click",p),r.addFavorite.removeEventListener("click",z))};function ge(){r.backdrop.addEventListener("click",p),document.addEventListener("keydown",p),r.closeModalBtn.addEventListener("click",p),r.addFavorite.addEventListener("click",z)}function z(){const e=m.load(f)||[],t=!!U(e,u==null?void 0:u._id);m.save(f,t?e.filter(s=>s._id!==(u==null?void 0:u._id)):[...e,u]),j(),C(),E.show({message:t?"Removed from favorites":"Added to favorites"})}function he(e){const t=e.gifUrl,s=e.name,o=Number(e.rating).toFixed(1),n=e.target,a=e.bodyPart,i=e.equipment,c=e.popularity,L=e.burnedCalories,l=e.description;r.modalContainer.innerHTML=`
      <div class='modal-img'>
        <img src='${t}' alt='${s}' class='image' />
      </div>
      <div class='modal-rest'>
        <h3 class='modal-title'>${s}</h3>
        <div class='rating-element'>
          <p class='rating-count' id='vote'>${o}</p>
          <svg class='modal-icon-star'>
            <use href='${h}#star'></use>
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
              <p class='count'>${a}</p>
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
              <p class='count'>${L}</p>
            </div>
          </div>
          <p class='about-info'>${l}</p>
        </div>`}document.addEventListener("DOMContentLoaded",pe);const N=e=>"/"+e.split("/").pop();function pe(){const e=N(location.pathname);[...document.querySelectorAll(".header-nav-link"),...document.querySelectorAll(".nav-burger-menu-link")].forEach(function(s){const o=N(new URL(s.href).pathname);o===e||e==="/"&&o==="/index.html"?s.classList.add("active-page"):s.classList.remove("active-page")})}function Le(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".nav-burger-menu-link");function n(){const c=e.classList.contains("is-open");t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),(c?x:I)(document.body)}function a(){e.classList.contains("is-open")&&n()}function i(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))}t.addEventListener("click",n),s.addEventListener("click",n),o.forEach(function(c){c.addEventListener("click",a)}),matchMedia("(min-width: 768px)").addEventListener("change",i)}document.addEventListener("DOMContentLoaded",Le);export{g as I,be as a,Z as b,Ee as f,M as g,P as l,Se as p,r,h as s,X as v};
//# sourceMappingURL=burger-menu-d44d8021.js.map
