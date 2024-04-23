const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

var rating_val = 0;

async function showMovieRating(url){
    const res_rat = await fetch(url);
    const data_rat = await res_rat.json();
    
    show_ExtraInfo(data_rat);
}
function getRating(movies){
    movies.forEach((movie)=>{
        const url_rat = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=3e2e844`;
        showMovieRating(url_rat)
    })
}
async function fill_movies(url){
    const fill_res = await fetch(url);
    const fill_data = await fill_res.json();
    show_fill_movie(fill_data)
}
async function getMovies(URL){
    const res = await fetch(URL);
    const data = await res.json();
    const searchData = data.Search;
    show_movies(searchData)
    getRating(searchData)
}

function show_movies(movies){
    main.innerHTML = '';
    movies.forEach((movie)=>{
        const movieEl = document.createElement('div');
        const overview_id = "ov"+movie.imdbID;
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${movie.Poster}">
                    <div class="movie-info" id="${movie.imdbID}">
                        <h3>${movie.Title}</h3>
                    </div>
                    <div class="overview" id="${overview_id}">
                    <h3>Overview</h3>
                    </div>
        `;
        main.appendChild(movieEl)
    })
}

function show_ExtraInfo(movie_data){
    const movie_info = document.getElementById(movie_data.imdbID);
    const overview_id = "ov"+movie_data.imdbID;
    const overview_info = document.getElementById(overview_id);

    //Creating Rating 
    const span_item = document.createElement('span');
    const para_item = document.createElement('p');
    span_item.innerText = `${movie_data.imdbRating}`;
    para_item.innerText = `${movie_data.Plot}`;

    if(parseFloat(movie_data.imdbRating) >= 7.5){
        span_item.classList.add('green');
    }
    else if(parseFloat(movie_data.imdbRating) >= 5.5){
        span_item.classList.add('orange');
    }
    else{
        span_item.classList.add('red');
    }

    movie_info.appendChild(span_item);
    overview_info.appendChild(para_item);

}

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm && searchTerm !== ''){
        const searchUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=3e2e844`;
        getMovies(searchUrl);
        search.value = '';
    }
})

function populate_recent_movies(){
    var start = 3895188;
    var end = 3895198;
    for(i=start;i<=end;i+=2){
        const id = "tt"+i;
        const url = `http://www.omdbapi.com/?i=${id}&apikey=3e2e844`;
        fill_movies(url);
    }
    start = start + 100;
    end = end +100;
    for(i=start;i<=end;i+=2){
        const id = "tt"+i;
        const url = `http://www.omdbapi.com/?i=${id}&apikey=3e2e844`;
        fill_movies(url);
    }
    start = start + 100;
    end = end +100;
    for(i=start;i<=end;i+=2){
        const id = "tt"+i;
        const url = `http://www.omdbapi.com/?i=${id}&apikey=3e2e844`;
        fill_movies(url);
    }
}
function show_fill_movie(fill_data){
    const movie_el = document.createElement('div');
    movie_el.classList.add('movie');
    overview_id = "ov"+fill_data.imdbID;
    
    var Poster = "";
    if(fill_data.imdbID){
        if(fill_data.Poster === "N/A")
        {
            Poster = "https://img.lovepik.com/element/40021/7866.png_1200.png";
        }
        else{
            Poster = fill_data.Poster;
        }
        movie_el.innerHTML = `<img src="${Poster}">
    <div class="movie-info" id="${fill_data.imdbID}">
        <h3>${fill_data.Title}</h3>
    </div>
    <div class="overview" id="${overview_id}">
    <h3>Overview</h3>
    </div>
`;
        main.appendChild(movie_el);
        const movie_info = document.getElementById(fill_data.imdbID);
        const overview_info = document.getElementById(overview_id);
        const span_item = document.createElement('span');
        const para_item = document.createElement('p');
        span_item.innerText = `${fill_data.imdbRating}`;
        para_item.innerText = `${fill_data.Plot}`;

        if(parseFloat(fill_data.imdbRating) >= 7.5){
            span_item.classList.add('green');
        }
        else if(parseFloat(fill_data.imdbRating) >= 5.5){
            span_item.classList.add('orange');
        }
        else{
            span_item.classList.add('red');
        }
        movie_info.appendChild(span_item);
        overview_info.appendChild(para_item);
    }
   


}
//Populate Rescords first 30 movies
populate_recent_movies();
