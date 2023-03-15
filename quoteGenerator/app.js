let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person= document.querySelector(".person");

const quotes = [{
    quote:`"The best way to find yourself is loose to yourself in the service of others"`,
    person:`Mahatma Gandhi`
},{
    quote:`"If you want to live happy life, tie it to a goal, not the people or things"`,
    person:`Albert Einsten`
},
{
    quote:`"Your time is limited, so dont waste to talking about others instead learn from others"`,
    person:`Stev Jobs`
}
    
]

btn.addEventListener("click", (e=>{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}))