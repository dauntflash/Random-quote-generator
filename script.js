const new_quote=document.getElementById('new_quote');
const quote=document.getElementById('quote');
const author=document.getElementById('author');


function newQuote(){
    let quotes=[]
    let authors=[]
    fetch('./assets/mydata.json')
        .then(res=>res.json())
        .then(data=>{
            data.forEach(quote => {
                quotes.push(quote.text);
                authors.push(quote.author);
            });

            console.log(quotes.length)
            let randomNumber=Math.floor(Math.random()*quotes.length);
            quote.innerText=quotes[randomNumber];
            author.innerText= "- "+authors[randomNumber];
        })
        
}
