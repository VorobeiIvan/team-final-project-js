import"./assets/burger-menu-5139967a.js";/* empty css                      */import{a as d,P as f,i as c}from"./assets/vendor-61000f44.js";d.defaults.baseURL="https://your-energy.b.goit.study/api";const v="filters",E="subscription",w=async({page:e=1,perPage:s=12,filter:o="Muscles"}={})=>await d.get(`/${v}?filter=${o}&page=${e}&limit=${s}`).then(t=>t.data),q=async()=>{try{const{data:e}=await d.get("/quote");return e}catch{console.log('Error request "/quote"')}},b=async e=>await d.post(`/${E}`,{email:e}).then(s=>s.data);function g(e){return e.toString().padStart(2,"0")}function C(e){return[e.getFullYear(),g(e.getMonth()+1),g(e.getDate())].join("-")}const T=({quote:e,author:s})=>`
  <div class="quote-container">
    <div class="quote-wrap">
      <div class="quote-wrapper">
        <div class="quote-svg-wrap">
          <svg class="quote-svg" width="34" height="32">
            <use href="../../../img/sprite.svg#run"></use>
          </svg>
        </div>
        <div>
          <div class="quote-title">
            <h3>Quote of the day</h3>
            <svg class="quote-title-svg" width="25" height="25">
              <use href="../../../img/sprite.svg#commas"></use>
            </svg>
          </div>
          <p class="quote-text">${e}</p>
          <p class="quote-author">${s}</p>
        </div>
      </div>
      <img class="quote-img" src="../../../images/exercise-mobile@2x.jpg" alt="exercise" />
    </div>
    <div class="quote-wrapper article">
      <div class="quote-svg-wrap article">
        <svg class="quote-svg" width="34" height="32">
          <use href="../../../img/sprite.svg#fluent-food"></use>
        </svg>
      </div>
      <div>
        <div class="quote-title article">
          <h3>110 min</h3>
        </div>
        <p class="quote-text article">Daily  norm of sports</p>
        <p class="quote-author article">The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.</p>
      </div>
    </div>
  </div>
`;const p="quoteData",h=new Date,M=async()=>{let e=JSON.parse(localStorage.getItem(p));return(!e||e.date!==h)&&(e=await q(),localStorage.setItem(p,JSON.stringify({date:C(h),...e}))),e},B=async()=>{const e=document.getElementById("js-quote"),s=await M();e.insertAdjacentHTML("beforeend",T(s))},I=(e,s,o)=>{const t=document.getElementById("tui-pagination-container"),i=s<5?s:5,n={totalItems:e*s,itemsPerPage:e,visiblePages:i,centerAlign:!0,page:o},a=new f(t,n);return i<=1?t.style.display="none":t.style.display="block",a},l={divQuote:document.getElementById("result-quote"),getQuoteButton:document.getElementById("quote"),divCategories:document.getElementById("categories"),filtersRef:document.getElementById("filters"),divExercises:document.getElementById("exercises"),footerForm:document.querySelectorAll(".footer-form")};async function m(e,s){const o=document.getElementById("categories-loader"),t=document.getElementById("categories-wrapper");o.style.display="block",t.style.display="none",l.divCategories.innerHTML="";try{B();const i=await w({page:s,perPage:12,filter:e});I(12,i.totalPages,s).on("afterMove",({page:a})=>{m(e,a)});const n=i.results.map(a=>{const r=L(a);return r.addEventListener("click",function(){console.log("Li element clicked!")}),r});l.divCategories.append(...n)}catch(i){if(i.response&&i.response.status===409){const a={title:"Error",message:i.response.data.message,position:"topRight",color:"red"};return c.show(a)}const n={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return c.show(n)}finally{setTimeout(()=>{o.style.display="none",t.style.display="flex"},500)}}function L({name:e,filter:s,imgURL:o}){const t=document.createElement("li");t.className="category-item";const i=document.createElement("img");i.className="category-item-img",i.src=o,i.alt="Category",i.loading="lazy";const n=document.createElement("div");n.className="category-item-bg";const a=document.createElement("p");a.className="category-item-title",a.textContent=k(e);const r=document.createElement("p");return r.className="category-item-subtitle",r.textContent=s,n.appendChild(a),n.appendChild(r),t.appendChild(i),t.appendChild(n),t}function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}const y=["Muscles","Body parts","Equipment"];m(y[0],1);const R=S(y);l.filtersRef.append(...R);function S(e){return e.map(s=>{const o=document.createElement("li");o.setAttribute("id",s),s==="Muscles"&&o.classList.add("filter-selected");const t=document.createElement("button");return t.innerHTML=s,t.addEventListener("click",()=>{x(s,o)}),o.appendChild(t),o})}function x(e,s){const o=document.getElementsByClassName("filter-selected");o[0]&&(o[0].classList.remove("filter-selected"),s.classList.add("filter-selected"),l.divCategories.innerHTML="",m(e,1))}const A=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),D=e=>{e.preventDefault();const{email:s}=e.currentTarget.elements;if(!A(s.value.trim())){const t={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return c.show(t)}const o=s.value.trim();b(o).then(t=>{if(t.message){const i={title:"Success",message:t.message,position:"topRight",color:"green"};return c.show(i)}}).catch(t=>{if(t.response&&t.response.status===409){const n={title:"Error",message:t.response.data.message,position:"topRight",color:"red"};return c.show(n)}const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return c.show(i)}).finally(()=>l.footerForm.forEach(t=>t.reset()))};l.footerForm.forEach(e=>e.addEventListener("submit",D));const u=document.getElementById("myBtn");window.onscroll=function(){F()};function F(){document.body.scrollTop>0||document.documentElement.scrollTop>0?u.style.display="block":u.style.display="none"}u.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
