import{r as t,f as p,s as a,a as d}from"./assets/favorites-7929b6b4.js";/* empty css                      */import{i}from"./assets/vendor-5fe488fb.js";t.divCategories.addEventListener("click",u);t.favorites.addEventListener("click",handleFavoritesCardClick);function u(s,o){s.preventDefault();const e=s.target.closest(".exercise-item");e&&g(e.id)}function g(s){p(s).then(o=>{E(o)}),t.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),t.backdrop.classList.add("scroll"),b()}function b(){document.addEventListener("click",s=>{s.target===t.backdrop&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&(t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll"))}),t.closeModalBtn.addEventListener("click",()=>{t.backdrop.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),t.backdrop.classList.remove("scroll")})}t.addFavorite.addEventListener("click",s=>{if(s.target.textContent=="Remove from favorites"){const o=a.load(t.FAVORITES_KEY);for(let e=0;e<o.length;e++)JSON.stringify(o[e])===JSON.stringify(data)&&(o.splice(e,1),console.log(o),a.save(t.FAVORITES_KEY,o),i.show({message:"Removed from favorites"}),t.addFavorite.textContent="Add to favorites",t.addFavorite.style.backgroundColor="#fff",t.addFavorite.style.color="#000")}else{if(!a.load(t.FAVORITES_KEY)||a.load(t.FAVORITES_KEY).length===0){a.save(t.FAVORITES_KEY,[data]),i.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff";return}const o=a.load(t.FAVORITES_KEY);o.push(data),a.save(t.FAVORITES_KEY,o),i.show({message:"Added to favorites"}),t.addFavorite.textContent="Remove from favorites",t.addFavorite.style.backgroundColor="#ff6b01",t.addFavorite.style.color="#fff"}t.addFavorite.removeEventListener});function E(s){const o=s.gifUrl,e=s.name,n=Number(s.rating).toFixed(1),r=s.target,l=s.bodyPart,c=s.equipment,v=s.popularity,f=s.burnedCalories,m=s.description;return t.modalContainer.innerHTML=`
      <div class="modal-img">
        <img src="${o}" alt="${e}" class="image" />
      </div>
      <div class="modal-rest">
        <h3 class="modal-title">${e}</h3>
        <div class="rating-element">
          <p class="rating-count" id="vote">${n}</p>
          <svg class="modal-icon-star">
            <use href="${d}#star"></use>
          </svg>
        </div>
        <div class="modal-info">
          <div class="modal-table">
            <div class="info-element">
              <p class="info-item">Target</p>
              <p class="count">${r}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Body part</p>
              <p class="count">${l}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Equipment</p>
              <p class="count">${c}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Popular</p>
              <p class="count">${v}</p>
            </div>
            <div class="info-element">
              <p class="info-item">Burned Calories</p>
              <p class="count">${f}</p>
            </div>
          </div>
          <p class="about-info">${m}</p>
        </div>
        <div class="buttons">
          <button class="button add-to-favorites" type="button">
            Add to favorites
            <svg class="modal-icon-heart">
              <use href="${d}#heart"></use>
            </svg>
          </button>
          <button class="button give-a-rating" type="button">
            Give a rating
          </button>
        </div>
      </div>`}
//# sourceMappingURL=commonHelpers.js.map
