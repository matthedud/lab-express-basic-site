const ImageResElement = document.querySelector('#image-result')

const gifiAPIKey = "mao8tAWKt4OrDjGJxJeI98LKcewRlPpp"

function updateWeatherInfo() {

  // When we use fetch() we're given a Promise to fulfill the request
  // We don't know when it will finish (because we don't know how slow the server is)

  const gifResponse = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${gifiAPIKey}&q=rickandmorty`)
    gifResponse
    .then((res) => {
      return res.json()
    })
    .then((gifLinks) => {
      ImageResElement.innerHTML =''
      for (let i =0; i<gifLinks.data.length; i++){
        const newImage = new Image()
        newImage.src = gifLinks.data[i].images.fixed_height.url
        ImageResElement.appendChild(newImage)
      }
    })
}

updateWeatherInfo()



