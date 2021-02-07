// information to reach Rebrandly API
const apiKey = '77106d0fa7854371bc66bc0dfb2dab05';
const rebrandlyEndpoint = 'https://api.rebrandly.com/v1/links';

// element selector
const shortenButton = document.querySelector('#shortenBtn');
const inputField = document.querySelector('#url');
const responseField = document.querySelector('#responseField');

const renderByteResponse = (res) => {
    if(res.errors){
      // Will change the HTML to show this error message if the response had an error
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // If there was no error, then the HTML will show this message
      responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
  }

// AJAX functions
const shortenUrl = async () =>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  try{
    const response =  await fetch(rebrandlyEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        "Content-type": "application/json",
        'apikey': apiKey
      }
    })
    if(response.ok){
      const jsonResponse = await response.json();
		renderByteResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}
shortenButton.addEventListener('click', displayShortUrl);
