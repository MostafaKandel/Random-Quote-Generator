const articlesData = [
    {
        article: '“Be yourself; everyone else is already taken.”',
        author: 'Oscar Wilde'
    },
    {
        article: '“So many books, so little time.”',
        author: 'Frank Zappa'
    },
    {
        article: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        author: 'Albert Einstein'
    },
    {
        article: '“A room without books is like a body without a soul.”',
        author: 'Marcus Tullius Cicero'
    },
    {
        article: '“Be the change that you wish to see in the world.”',
        author: 'Mahatma Gandhi'
    },
    {
        article: '“In three words I can sum up everything I have learned about life: it goes on.”',
        author: 'Robert Frost'
    },
    {
        article: '“A friend is someone who knows all about you and still loves you.”',
        author: 'Elbert Hubbard'
    },
    {
        article: '“To live is the rarest thing in the world. Most people exist, that is all.”',
        author: 'Oscar Wilde'
    },
    {
        article: '“We accept the love we think we deserve.”',
        author: 'Stephen Chbosky, The Perks of Being a Wallflower'
    },
    {
        article: '“It does not do to dwell on dreams and forget to live.”',
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone"
    },
    {
        article: '“We are all in the gutter, but some of us are looking at the stars.”',
        author: "Oscar Wilde, Lady Windermere's Fan"
    }
];







var lastRandomNumber = null
function getRandomArticle() {
    
    var randomNumber = Math.floor(Math.random() * articlesData.length)
    if (randomNumber === lastRandomNumber && randomNumber===0) {
        randomNumber = randomNumber + 1;
    }
    else if (randomNumber === lastRandomNumber && randomNumber !== 0 ){
        randomNumber=randomNumber-1
    }

    lastRandomNumber = randomNumber;
     
    const articleDisplayed = articlesData[randomNumber];
     
    const cartona = `
        <p>${articleDisplayed.article}</p>
        <p>--${articleDisplayed.author}</p>
    `;

    document.getElementById('article').innerHTML = cartona;
}


