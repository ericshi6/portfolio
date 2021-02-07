//Endpoints: https://developers.giphy.com/docs/api/endpoint#search

var apiKey ='J8fRct3OW7QU4jMboikDWt88lbtNWlfY';
var url = 'api.giphy.com/v1/gifs/';
var search = 'search?';
//var cors ='https://cors-anywhere.herokuapp.com/'
//var trending = 'trending?';
var gifResults = "";

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');
const limitField = document.querySelector('#limit');
const clear = document.querySelector('#clear');

// Renders response before it is modified
const RawGifResponse = (res) => {
    console.log(res);
  }

const RenderGif = (res) => {
    var temp;
    var temp1;
    var gifUrls = "";

    for (var i = 0; i < limitField.value; i++) {
        //temp = res.data[i].images.downsized.url;
        temp = res.data[i].images.preview_gif.url;
        temp1 = res.data[i].images.original.url;
        gifUrls += `<div class="carouselImage"">
        <a href=${temp1} target ="_blank"><img src=${temp}></a></div>`;
    }
    gifResults += `
    <p>See ${limitField.value} gifs for: <span class="term">${inputField.value}</span></p>
    <div class="scrollmenu">${gifUrls}</div>
    <hr>`;
    responseField.innerHTML = gifResults;

}

/* const RenderError = () => {
  gifResults += `<p>Error. Try again.</p>`
  responseField.innerHTML = gifResults;

} */

const clearGifs = () =>{
    responseField.innerHTML = "";
    gifResults = "";
}

const getSuggestions = async () => {
    const gifQuery = inputField.value;
    const limit = limitField.value;
    const endpoint = `${url}${search}api_key=${apiKey}&q=${gifQuery}&limit=${limit}`;  
    
    try{
      const response =  await fetch(endpoint);
      if(response.ok){
        let jsonResponse = await response.json();
              RawGifResponse(jsonResponse);
              //clearGifs();
              RenderGif(jsonResponse);
      }
    }
    catch(error){
      console.log(error);
      //RenderError();
    }
  }

  const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
  }
  
  submit.addEventListener('click', displaySuggestions);
  clear.addEventListener('click', clearGifs);
