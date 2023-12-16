import{r as i,l as v,f as E,s as d,a as b,I as g,g as p,p as w,b as L,v as C}from"./assets/favorites-f01da6c5.js";/* empty css                      */import{P as S,i as m}from"./assets/vendor-5fe488fb.js";const y=(e,t,r)=>{const s=document.getElementById("tui-pagination-container"),n=t<5?t:5,o={totalItems:e*t,itemsPerPage:e,visiblePages:n,centerAlign:!0,page:r},a=new S(s,o);return n<=1?s.style.display="none":s.style.display="block",a};i.exSearch.addEventListener("input",T);i.exSearch.addEventListener("keydown",I);function T(e){e.target.value===""?i.exSearchImg.classList.remove("is-hidden"):i.exSearchImg.classList.add("is-hidden"),e.inputType===void 0&&u()}function I(e){const t=e.target.value;e.code==="Enter"&&u(t)}function k(){return window.innerWidth<768?8:10}async function u(e="",t=1){const r=await JSON.parse(sessionStorage.getItem("category"));if(!r){const a={title:"Error",message:"Oops, not active category",position:"topRight",color:"red"};return m.show(a)}e&&(r.keyword=e);const s=k(),{setLoader:n,deleteLoader:o}=v({disableScroll:!0});try{n();const a=await E({page:t,perPage:s,filter:r});y(s,a.totalPages,t).on("afterMove",({page:l})=>{u(e,l),i.divCategoriesContainer.scrollIntoView()});let c="";a.results.length?(c=M(a.results),i.divCategories.classList.remove("exercises-list-bed-requast"),i.divCategories.classList.add("exercises-list")):(c=`<li><div class='categories-bad-requast'>
          <svg class='bad-requast' width='335' height='300'>
            <use href='${d}#BadRequast'></use>
          </svg>
        </div></li>`,i.divCategories.classList.add("exercises-list-bed-requast")),i.divCategories.innerHTML=c}catch{const a={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(a)}finally{setTimeout(()=>{o()},100)}}function M(e){return e.map(({name:t,target:r,rating:s,burnedCalories:n,time:o,_id:a,bodyPart:c})=>`
        <li class='exercise-item'>
          <div class='exercise-item-wrapper'>
            <div class='exercise-item-firth-wrapper'>
              <p class='exercise-item-workout'>WORKOUT</p>
              <p class='exercise-item-rating'>${s.toFixed(1)}</p>
              <svg class='exercise-item-star' width='18' height='18'>
                <use href='${d}#star'></use>
              </svg>
              <button type='button' class='exercise-item-button' id='${a}'>
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
                  Target:<span class='information-text-span'>${r}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `).join("")}async function h(e,t){i.divCategories.innerHTML="";const{setLoader:r,deleteLoader:s}=v({disableScroll:!0});try{r();const n=await b({page:t,perPage:12,filter:e});y(12,n.totalPages,t).on("afterMove",({page:a})=>{h(e,a),i.divCategoriesContainer.scrollIntoView()});const o=n.results.map(a=>{const c=N(a);return c.addEventListener("click",()=>{$(c)}),c});i.divCategories.append(...o)}catch(n){if(n.response&&n.response.status===409){const a={title:"Error",message:n.response.data.message,position:"topRight",color:"red"};return m.show(a)}const o={title:"Error",message:"Oops, something went wrong, try again later",position:"topRight",color:"red"};return m.show(o)}finally{setTimeout(()=>{s()},100)}}function N({name:e,filter:t,imgURL:r}){const s=document.createElement("li");s.className="category-item";const n=t==="Body parts"?"bodypart":t;s.setAttribute("data-"+n,e);const o=document.createElement("img");o.className="category-item-img",o.src=r,o.alt="Category",o.loading="lazy";const a=document.createElement("div");a.className="category-item-bg";const c=document.createElement("p");c.className="category-item-title",c.textContent=P(e);const l=document.createElement("p");return l.className="category-item-subtitle",l.textContent=t,a.appendChild(c),a.appendChild(l),s.appendChild(o),s.appendChild(a),s}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e){sessionStorage.setItem("category",JSON.stringify(e.dataset)),i.divExSearch.style.display="flex",u()}const x=["Muscles","Body parts","Equipment"];h(x[0],1);const B=F(x);i.filtersRef.append(...B);function F(e){return e.map(t=>{const r=document.createElement("li");r.setAttribute("id",t),t==="Muscles"&&r.classList.add("filter-selected");const s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",()=>{R(t,r)}),r.appendChild(s),r})}function R(e,t){const r=document.getElementsByClassName("filter-selected");r[0]&&(r[0].classList.remove("filter-selected"),t.classList.add("filter-selected"),i.divCategories.innerHTML="",i.exSearch.value="",i.divCategories.classList.remove("exercises-list"),i.divCategories.classList.remove("exercises-list-bed-requast"),i.divExSearch.style.display="none",i.exSearchImg.classList.remove("is-hidden"),h(e,1))}const O=e=>C.email.test(e),q=e=>{e.preventDefault();const{email:t}=e.currentTarget.elements;if(!O(t.value.trim()))return t.classList.add(g),p("The email must be in format test@gmail.com");const r=t.value.trim();w(r).then(s=>{if(s.message)return L(s.message)}).catch(s=>s.response&&s.response.status===409?(t.classList.remove(g),p(s.response.data.message)):p("Oops, something went wrong, try again later")).finally(()=>i.footerForm.forEach(s=>s.reset()))};i.footerForm.forEach(e=>e.addEventListener("submit",q));i.footerForm.forEach(e=>{const{email:t}=e.elements;t.addEventListener("input",()=>t.classList.remove(g))});const f=document.getElementById("scroll-up-btn");window.onscroll=function(){A()};function A(){document.body.scrollTop>0||document.documentElement.scrollTop>0?f.style.display="block":f.style.display="none"}f.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});
//# sourceMappingURL=commonHelpers2.js.map
