const catImage = document.getElementById("catImg")
const catAPI = "https://api.thecatapi.com/v1/images/search"
const msg = document.getElementById("msg")


function fetchCatImg() {
    catImage.style.display = 'none'
    msg.style.display = 'block'
    msg.innerText = 'Carregando imagem...'
    fetch(catAPI)
        .then(response => response.json())
        .then(data => {
            let imgUrl = data[0]["url"];
            catImage.src = imgUrl;
            catImage.style.display = 'block';
            msg.style.display = 'none';
        })
        .catch(error => console.log(error));
}
catImage.onclick = fetchCatImg;

fetchCatImg();