const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke(){
    
    const config = {
        headers: {
            Accept: 'application/json',
        }
    };

    const res = await fetch('https://icanhazdadjoke.com', config)
   
    const data = await res.json();
    
    jokeEl.innerHTML = data.joke;

    
}



// USING .then()
// function generateJoke(){
    // fetch('https://icanhazdadjoke.com', config)
    // .then(res => res.json())
    // .then(data => jokeEl.innerHTML = data.joke)
// }





















// const jokeEle = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn');

// // function generateJokes{
     
// // }

// jokeBtn.addEventListener('click', () => {
//     fetch('https://icanhazdadjoke.com/',{
//         headers:{
//             Accept: 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => jokeEle.innerHTML = data.joke)
// });