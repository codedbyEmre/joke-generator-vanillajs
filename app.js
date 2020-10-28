const form = document.getElementById('form');
const category = document.getElementById('category');
const joke = document.getElementById('joke');

// Event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    const term = category.value;

    getJokeByCategory(term);
})

// Fetching jokes by their categories
const getJokeByCategory = async term => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${term}`);
    const data = await res.json();

    console.log(data);

    joke.innerHTML = data.value;
}