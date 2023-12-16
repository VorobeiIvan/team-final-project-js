import{r as n,b as v,a as m,c as x,p as E}from"./assets/favorites-695bf1c4.js";/* empty css                      */import{P as b,d as w,e as C,i as l}from"./assets/vendor-5fe488fb.js";const h=(e,s,r)=>{const t=document.getElementById("tui-pagination-container"),o=s<5?s:5,a={totalItems:e*s,itemsPerPage:e,visiblePages:o,centerAlign:!0,page:r},i=new b(t,a);return o<=1?t.style.display="none":t.style.display="block",i},f=({targetElement:e,width:s,height:r,disableScroll:t=!1}={})=>{const o=e||document.body,a=document.createElement("div");a.classList.add("loader-container");const i=document.createElement("div");return i.classList.add("loader"),i.style.width=s||"100px",i.style.height=r||"100px",{setLoader:()=>{t&&w(document.body),a.appendChild(i),o.appendChild(a)},deleteLoader:()=>{o.removeChild(a),t&&C(document.body)}}};n.exSearch.addEventListener("input",L);n.exSearch.addEventListener("keydown",S);function L(e){e.target.value===""?n.exSearchImg.classList.remove("is-hidden"):n.exSearchImg.classList.add("is-hidden"),e.inputType===void 0&&p()}function S(e){const s=e.target.value;e.code==="Enter"&&p(s)}function T(){return window.innerWidth<768?8:10}async function p(e="",s=1){const r=await JSON.parse(sessionStorage.getItem("category"));if(!r){const i={title:"Error",message:"Oops, not active category",position:"topRight",color:"red"};return l.show(i)}e&&(r.keyword=e);const t=T(),{setLoader:o,deleteLoader:a}=f({disableScroll:!0});try{o();const i=await v({page:s,perPage:t,filter:r});h(t,i.totalPages,s).on("afterMove",({page:d})=>{p(e,d),n.divCategoriesContainer.scrollIntoView()});let c="";i.results.length?(c=M(i.results),n.divCategories.classList.remove("exercises-list-bed-requast"),n.divCategories.classList.add("exercises-list")):(c=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${m}#BadRequast'></use>
          </svg>
        </div></li>`,n.divCategories.classList.add("exercises-list-bed-requast")),n.divCategories.innerHTML=c}catch{const i={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(i)}finally{setTimeout(()=>{a()},100)}}function M(e){return e.map(({name:s,target:r,rating:t,burnedCalories:o,time:a,_id:i,bodyPart:c})=>`
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${t.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${m}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${i}'>
                Start&nbsp;&nbsp;
                <svg class='exercise-item-arrow' width='16' height='16'>
                  <use href='${m}#arrow-right'></use>
                </svg>
              </button>
            </div>
            <div class='exercise-item-second-wrapper'>
              <div class='exercise-item-run-box'>
                <svg class='exercise-item-run' width='16' height='16'>
                  <use href='${m}#run'></use>
                </svg>
              </div>
              <h3 class='exercise-item-subtitle'>${s}</h3>
            </div>
            <ul class='exercise-item-list'>
              <li class='exercise-item-list-information'>
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${o} / ${a} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${c}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${r}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function g(e,s){n.divCategories.innerHTML="";const{setLoader:r,deleteLoader:t}=f({disableScroll:!0});try{r();const o=await x({page:s,perPage:12,filter:e});h(12,o.totalPages,s).on("afterMove",({page:i})=>{g(e,i),n.divCategoriesContainer.scrollIntoView()});const a=o.results.map(i=>{const c=R(i);return c.addEventListener("click",()=>{$(c)}),c});n.divCategories.append(...a)}catch(o){if(o.response&&o.response.status===409){const i={title:"Error",message:o.response.data.message,position:"topRight",color:"red"};return l.show(i)}const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(a)}finally{setTimeout(()=>{t()},100)}}function R({name:e,filter:s,imgURL:r}){const t=document.createElement("li");t.className="category-item";const o=s==="Body parts"?"bodypart":s;t.setAttribute("data-"+o,e);const a=document.createElement("img");a.className="category-item-img",a.src=r,a.alt="Category",a.loading="lazy";const i=document.createElement("div");i.className="category-item-bg",n.divExSearch.style.display="none";const c=document.createElement("p");c.className="category-item-title",c.textContent=k(e);const d=document.createElement("p");return d.className="category-item-subtitle",d.textContent=s,i.appendChild(c),i.appendChild(d),t.appendChild(a),t.appendChild(i),t}function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),n.divExSearch.style.display="flex",p()}const y=["Muscles","Body parts","Equipment"];g(y[0],1);const B=I(y);n.filtersRef.append(...B);function I(e){return e.map(s=>{const r=document.createElement("li");r.setAttribute("id",s),s==="Muscles"&&r.classList.add("filter-selected");const t=document.createElement("button");return t.innerHTML=s,t.addEventListener("click",()=>{P(s,r)}),r.appendChild(t),r})}function P(e,s){const r=document.getElementsByClassName("filter-selected");r[0]&&(r[0].classList.remove("filter-selected"),s.classList.add("filter-selected"),n.divCategories.innerHTML="",n.exSearch.value="",n.divCategories.classList.remove("exercises-list"),n.divCategories.classList.remove("exercises-list-bed-requast"),n.divExSearch.style.display="none",g(e,1))}const N=e=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e),F=e=>{e.preventDefault();const{email:s}=e.currentTarget.elements;if(!N(s.value.trim())){const t={title:"Error",message:"The email must be in format test@gmail.com",position:"topRight",color:"red"};return l.show(t)}const r=s.value.trim();E(r).then(t=>{if(t.message){const o={title:"Success",message:t.message,position:"topRight",color:"green"};return l.show(o)}}).catch(t=>{if(t.response&&t.response.status===409){const a={title:"Error",message:t.response.data.message,position:"topRight",color:"red"};return l.show(a)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return l.show(o)}).finally(()=>n.footerForm.forEach(t=>t.reset()))};n.footerForm.forEach(e=>e.addEventListener("submit",F));const u=document.getElementById("scroll-up-btn");window.onscroll=function(){O()};function O(){document.body.scrollTop>0||document.documentElement.scrollTop>0?u.style.display="block":u.style.display="none"}u.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
