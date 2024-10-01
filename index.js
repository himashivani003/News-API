document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Josh Schafer",
                title: "A critical labor report meets a stock market at record highs: What to know this week",
                description: "The September jobs report highlights the coming trading week as investors search for clues on how rapidly the labor market is cooling.",
                url: "https://finance.yahoo.com/news/a-critical-labor-report-meets-a-stock-market-at-record-highs-what-to-know-this-week-113035514.html/",
                urlToImage: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                publishedAt: "2024-09-29T11:30:35Z",
                content: "For the week, the S&amp;P 500 and Dow Jones Industrial Average (^DJI) were up about 0.7%..."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "marketbeat.com",
                title: "Silver Lake Advisory LLC Acquires New Position in Tesla, Inc. (NASDAQ:TSLA)",
                description: "Silver Lake Advisory LLC bought a new position in Tesla, Inc. in the 2nd quarter, according to the company in its most recent disclosure...",
                url: "https://biztoc.com/x/5f2638e60c125b7d",
                urlToImage: "https://biztoc.com/cdn/5f2638e60c125b7d_s.webp",
                publishedAt: "2024-09-29T11:28:47Z",
                content: "Silver Lake Advisory LLC bought a new position in Tesla, Inc..."
            },
            {
                source: { id: null, name: "fox6now.com" },
                author: "Jenna Sachs",
                title: "Used car brand rankings",
                description: "Used car brand rankingsfox6now.com",
                url: "https://www.fox6now.com/news/used-car-brand-rankings",
                urlToImage: "https://images.foxtv.com/static.fox6now.com/www.fox6now.com/content/uploads/2024/09/1280/720/C6-CR-USED-CAR-BRAND-RANKINGS-PKG_00.00.17.48.jpg?ve=1&tl=1",
                publishedAt: "2024-09-30T21:38:08Z",
                content: "New car prices now average nearly a whopping $50,000. Maybe that sticker shock has you thinking long and hard about a used car..."
            },
            {
                source: { id: null, name: "Fark.com" },
                author: null,
                title: "Coastal Florida family dodges ruin with just a few inches of floodwater in their garage due to Hurricane Helene...",
                description: "Turns out this is just enough salt water to make their Tesla burst into flames a few days later and burn the house to the ground.",
                url: "https://www.fark.com/comments/13411942/Coastal-Florida-family-dodges-ruin-with-just-a-few-inches-of-floodwater-in-their-garage-due-to-Hurricane-Helene-Turns-out-this-is-just-enough-salt-water-to-make-their-Tesla-burst-into-flames-a-few-days-later-burn-house-to-ground",
                urlToImage: "https://usrimg-full.fark.net/u/uV/fark_uVA0zdaB65OiJkkvN7VVo3x-BQI.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1728273600&Signature=MWXHeryCPqi8g32UgIkSDYxMZaQ%3D",
                publishedAt: "2024-09-30T21:36:08Z",
                content: "Salt water and electronics do not play well..."
            },
            {
                source: { id: null, name: "ETF Daily News" },
                author: "MarketBeat News",
                title: "Brown Shipley& Co Ltd Sells 3,879 Shares of Tesla, Inc. (NASDAQ:TSLA)",
                description: "Brown Shipley& Co Ltd reduced its stake in Tesla, Inc. (NASDAQ:TSLA – Free Report) by 13.7% in the 2nd quarter...",
                url: "https://www.etfdailynews.com/2024/09/30/brown-shipley-co-ltd-sells-3879-shares-of-tesla-inc-nasdaqtsla/",
                urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                publishedAt: "2024-09-30T21:28:50Z",
                content: "Brown Shipley&amp; Co Ltd reduced its stake in Tesla, Inc..."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);
});