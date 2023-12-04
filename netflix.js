// api key from tmdb
const api="api_key=5b8a5e766b6ff8d238dbea20b751cc9a";

//base url
const base_url="https://api.themoviedb.org/3";

//banner url
const img_url="https://image.tmdb.org/t/p/w185";
const banner_url="https://image.tmdb.org/t/p/original";

//request movies

const req ={

    fetchTrend : `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginal : `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies : `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies : `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchMysteryMovies : `${base_url}/discover/movie?${api}&with_genres=9648`,
    fetchRomanceMovies : `${base_url}/discover/movie?${api}&with_genres=10749`,
};

//shorten the description of banner
function truncate(str, n){
    //use trnary operator

    return str.length >n ? str.substr(0 ,n-1)+ "..." : str;
}

fetch(req.fetchNetflixOriginal).then((res)=> res.json())

.then((data) => {
     
    //setMOVIE is going to store all data
    const setMovies = data.results[Math.floor(Math.random() * data.results.length-1)];

    var banner= document.getElementById("banner");
    var banner_title= document.getElementById("banner_title");
    var banner_description= document.getElementById("banner_description");


    //backdrop_path scene extracted from movie poster-drop = movie poster
    banner.style.backgroundImage="url("+banner_url+ setMovies.backdrop_path+")";
    banner_description.innerText= truncate(setMovies.overview , 120);
    banner_title.innerText = setMovies.name;

});

fetch(req.fetchNetflixOriginal)
.then((res) => res.json())
.then((data) => {
    
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="NETFLIX ORIGINALS";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s = movie.name.replace(/\s+/g,"");
         poster.id=s;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });
});

//fetch trending ones

fetch(req.fetchTrend).then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="TOP RATED";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s2 = movie.id;
         poster.id=s2;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });

});
//action 
fetch(req.fetchActionMovies).then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="ACTION MOVIES";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s3 = movie.id;
         poster.id=s3;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });

});
 //comedy
 fetch(req.fetchComedyMovies).then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="COMEDY MOVIES";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s4 = movie.id;
         poster.id=s4;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });

});

 //mystery
 fetch(req.fetchMysteryMovies).then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="MYSTERY MOVIES";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s5 = movie.id;
         poster.id=s5;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });

})

 //romance
 fetch(req.fetchRomanceMovies).then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("head_rows");
    const rows= document.createElement("div");
    rows.className="row";// name theclass
    rows.classList.add("netflixrow") ;
    headrow.appendChild(rows); //go on shiwijng list in horizontal

    const title= document.createElement("h3");
    title.className="row_title";
    title.innerText="ROMANCE MOVIES";
    rows.appendChild(title);

    //poster part

    const row_poster= document.createElement("div");
    row_poster.className="row_posters";
    rows.appendChild(row_poster);


// we need to add movies until our page isnt full
    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className="posterimage";
         
        //replace one after other
         var s6= movie.id;
         poster.id=s6;
         poster.src= img_url + movie.poster_path;
         row_poster.appendChild(poster);

        
    });

})
