
const button = document.querySelector('#botao');
randomdogfoto = (json) => {
    let section = document.querySelector('#container');
        section.innerHTML = ""
    let photo = json[0].url
    section.classList.add('dogs')
    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random_dog')
    image.alt = photo;
    section.appendChild(image);
};
async function generateDog() {
    try {
        
        const url = 'https://api.thedogapi.com/v1/images/search'
        let myHeaders = new Headers()
        const response = await self.fetch(url);
        const json = await response.json();
        console.log("JSON:", json);
        return randomdogfoto(json);
    } catch (e) {
        console.log("Um erro ocorreu");
        console.log(e);
    }
}
