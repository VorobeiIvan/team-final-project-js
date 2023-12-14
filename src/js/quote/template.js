const getQuoteMarkup = ({ quote, author }) => `
  <div class="quote-container">
    <div class="quote-wrap">
      <div class="quote-wrapper">
        <div class="quote-svg-wrap">
          <svg class="quote-svg" width="34" height="32">
            <use href="./img/sprite.svg#run"></use>
          </svg>
        </div>
        <div>
          <div class="quote-title">
            <h3>Quote of the day</h3>
            <svg class="quote-title-svg" width="25" height="25">
              <use href="./img/sprite.svg#commas"></use>
            </svg>
          </div>
          <p class="quote-text">${quote}</p>
          <p class="quote-author">${author}</p>
        </div>
      </div>
      <img class="quote-img" src="./images/exercise-mobile@2x.jpg" alt="exercise" />
    </div>
    <div class="quote-wrapper article">
      <div class="quote-svg-wrap article">
        <svg class="quote-svg" width="34" height="32">
          <use href="./img/sprite.svg#fluent-food"></use>
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
`;

export default getQuoteMarkup;
