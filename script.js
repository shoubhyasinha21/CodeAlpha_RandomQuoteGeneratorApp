const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
];

const colors = ["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#A0C4FF","#BDB2FF","#FFC6FF"];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const body = document.body;

function generateQuote() {
    // Random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Fade out
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        quoteText.textContent = `“${quote.text}”`;
        quoteAuthor.textContent = `- ${quote.author}`;

        // Fade in
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 200);

    // Random background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

// Show quote on page load
window.onload = generateQuote;

// Show new quote on button click
newQuoteBtn.addEventListener('click', generateQuote);
