import{r as a,l as v,f as E,s as d,a as b,I as g,g as p,p as w,b as L,v as C}from"./assets/favorites-a6996fa9.js";/* empty css                      */import{P as S,i as m}from"./assets/vendor-5fe488fb.js";const y=(e,t,i)=>{const s=document.getElementById("tui-pagination-container"),n=t<5?t:5,o={totalItems:e*t,itemsPerPage:e,visiblePages:n,centerAlign:!0,page:i},r=new S(s,o);return n<=1?s.style.display="none":s.style.display="block",r};a.exSearch.addEventListener("input",T);a.exSearch.addEventListener("keydown",I);function T(e){e.target.value===""?a.exSearchImg.classList.remove("is-hidden"):a.exSearchImg.classList.add("is-hidden"),e.inputType===void 0&&u()}function I(e){const t=e.target.value;e.code==="Enter"&&u(t)}function k(){return window.innerWidth<768?8:10}async function u(e="",t=1){const i=await JSON.parse(sessionStorage.getItem("category"));if(!i){const r={title:"Error",message:"Oops, not active category",position:"topRight",color:"red"};return m.show(r)}e&&(i.keyword=e);const s=k(),{setLoader:n,deleteLoader:o}=v({disableScroll:!0});try{n();const r=await E({page:t,perPage:s,filter:i});y(s,r.totalPages,t).on("afterMove",({page:l})=>{u(e,l),a.divCategoriesContainer.scrollIntoView()});let c="";r.results.length?(c=M(r.results),a.divCategories.classList.remove("exercises-list-bed-requast"),a.divCategories.classList.add("exercises-list")):(c=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${d}#BadRequast'></use>
          </svg>
        </div></li>`,a.divCategories.classList.add("exercises-list-bed-requast")),a.divCategories.innerHTML=c}catch{const r={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(r)}finally{setTimeout(()=>{o()},100)}}function M(e){return e.map(({name:t,target:i,rating:s,burnedCalories:n,time:o,_id:r,bodyPart:c})=>`
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${s.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${d}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${r}'>
                Start&nbsp;&nbsp;
                <svg class='exercise-item-arrow' width='16' height='16'>
                  <use href='${d}#arrow-right'></use>
                </svg>
              </button>
            </div>
            <div class='exercise-item-second-wrapper'>
              <div class='exercise-item-run-box'>
                <svg class='exercise-item-run' width='16' height='16'>
                  <use href='${d}#run'></use>
                </svg>
              </div>
              <h3 class='exercise-item-subtitle'>${t}</h3>
            </div>
            <ul class='exercise-item-list'>
              <li class='exercise-item-list-information'>
                <p class='information-text burned-calories'>
                  Burned calories:<span class='information-text-span'>${n} / ${o} min</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text body-part'>
                  Body part:<span class='information-text-span'>${c}</span>
                </p>
              </li>
              <li class='exercise-item-list-information'>
                <p class='information-text target'>
                  Target:<span class='information-text-span'>${i}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function h(e,t){a.divCategories.innerHTML="";const{setLoader:i,deleteLoader:s}=v({disableScroll:!0});try{i();const n=await b({page:t,perPage:12,filter:e});y(12,n.totalPages,t).on("afterMove",({page:r})=>{h(e,r),a.divCategoriesContainer.scrollIntoView()});const o=n.results.map(r=>{const c=N(r);return c.addEventListener("click",()=>{$(c)}),c});a.divCategories.append(...o)}catch(n){if(n.response&&n.response.status===409){const r={title:"Error",message:n.response.data.message,position:"topRight",color:"red"};return m.show(r)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(o)}finally{setTimeout(()=>{s()},100)}}function N({name:e,filter:t,imgURL:i}){const s=document.createElement("li");s.className="category-item";const n=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+n,e);const o=document.createElement("img");o.className="category-item-img",o.src=i,o.alt="Category",o.loading="lazy";const r=document.createElement("div");r.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=P(e);const l=document.createElement("p");return l.className="category-item-subtitle",l.textContent=t,r.appendChild(c),r.appendChild(l),s.appendChild(o),s.appendChild(r),s}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),a.divExSearch.classList.remove("is-hidden"),u()}const x=["Muscles","Body parts","Equipment"];h(x[0],1);const B=F(x);a.filtersRef.append(...B);function F(e){return e.map(t=>{const i=document.createElement("li");i.setAttribute("id",t),t==="Muscles"&&i.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{R(t,i)}),i.appendChild(s),i})}function R(e,t){const i=document.getElementsByClassName("filter-selected");i[0]&&(i[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),a.divCategories.innerHTML="",a.exSearch.value="",a.divCategories.classList.remove("exercises-list"),a.divCategories.classList.remove("exercises-list-bed-requast"),a.divExSearch.style.display="none",h(e,1))}const O=e=>C.email.test(e),q=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!O(t.value.trim()))return t.classList.add(g),p("The email must be in format test@gmail.com");const i=t.value.trim();w(i).then(s=>{if(s.message)return L(s.message)}).catch(s=>s.response&&s.response.status===409?(t.classList.remove(g),p(s.response.data.message)):p("Oops, something went wrong, try again later")).finally(()=>a.footerForm.forEach(s=>s.reset()))};a.footerForm.forEach(e=>e.addEventListener("submit",q));a.footerForm.forEach(e=>{const{email:t}=e.elements;t.addEventListener("input",()=>t.classList.remove(g))});const f=document.getElementById("scroll-up-btn");window.onscroll=function(){A()};function A(){document.body.scrollTop>0||document.documentElement.scrollTop>0?f.style.display="block":f.style.display="none"}f.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
