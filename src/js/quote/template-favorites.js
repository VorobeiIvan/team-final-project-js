const getQuoteMarkupFavorites = ({ quote, author }) => `
  <div class="quote-container-favorites">
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
          <p class="quote-text">${quote}</p>
          <p class="quote-author">${author}</p>
        </div>
      </div>
      
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
        <p class="quote-text article">Daily norm of sports</p>
      </div>

      <img class="quote-img" src="../../../images/favorites-mobile@2x.jpg" alt="exercise" />
    </div>
  </div>
`;

export default getQuoteMarkup;
