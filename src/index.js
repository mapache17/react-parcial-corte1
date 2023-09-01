import RickAndMortyService from './service.js'; 

const service = new RickAndMortyService();

function createCharacterCard(character) {
    return `
        <div class="card">
            <div class="photo">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="text">
                <h2>${character.name}</h2>
                <p class="bring">${character.status} - ${character.species}</p>
                <p class="static">Last known location:</p>
                <p class="bring">${character.location}</p>
                <p class="static">First seen location: </p>
                <p class="bring">${character.firstSeen}</p>
            </div>
        </div>
    `;
}

function clickCharacter(character, characterElement) {
    characterElement.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

function createCharacterList() {
    console.log("Holaaaaaaaaaa")
    const container = document.querySelector('.character-list');
    service.getAllCharacters()
        .then(characters => {
            characters.forEach(character => {
                
                const characterCard = createCharacterCard(character);
                const characterElement = document.createElement('div');
                characterElement.innerHTML = characterCard;
                container.appendChild(characterElement);
                clickCharacter(character, characterElement);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

createCharacterList();
