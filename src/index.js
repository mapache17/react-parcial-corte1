import RickAndMortyService from './service';


// acá deberás crear una instancia del servicio RickAndMortyService
// const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

function createCharacterList() {
    // llamar primero createCharacterCard(character);
    // llamar segundo addCharacterListeners(character);
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(character) {}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(character) {}


// por último se llama la función y se renderiza la vista
createCharacterList();
