/**
 * Factory function to create article objects
 * 
 * @param {HTMLElement} articleElement container for a single article object
 * @return {Object}
 */
const createArticle = function(articleElement) {
  const article = {
    __proto__: articleProto,
    articleElement,
    expandButton: articleElement.querySelector('.expandButton'),
  };

  article.expandButton.textContent = 'Expand';
  article.registerEventHandlers();

  return article;
};

// article object prototype
const articleProto = {
  registerEventHandlers() {
    this.articleElement.addEventListener('click', this.toggleExpandArticle);
  },

  toggleExpandArticle(event) {
    if (event.target.classList.contains('expandButton')) {
      event.currentTarget.classList.toggle('article-open');
    }
  }
};

// Create array of articles
const articles = [...document.querySelectorAll('.article')].map(elem => {
  return createArticle(elem);
});
