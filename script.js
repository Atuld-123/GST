// Menu toggle
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

// Back to top
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Review Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.review-card');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

// Scroll animation for fade-in
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// News Feed
async function fetchNews() {
  const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your NewsAPI key (get from newsapi.org)
  const url = `https://newsapi.org/v2/everything?q=GST+India&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const newsFeed = document.getElementById('news-feed');
    newsFeed.innerHTML = '';
    data.articles.slice(0, 3).forEach(article => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <h4>${article.title}</h4>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      `;
      newsFeed.appendChild(newItem);
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    document.getElementById('news-feed').innerHTML = '<p>Unable to load news at this time.</p>';
  }
}

// Load news on page load
window.addEventListener('load', fetchNews);
