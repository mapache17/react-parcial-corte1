class RickAndMortyService {

	constructor() {
        this.CharactersFromAPI = 'https://rickandmortyapi.com/api/character';
    }

	async getAllCharacters() {
        console.log("Holaaaaaaaaaa")

        try { 
            const response = await fetch(this.CharactersFromAPI);
            if (!response.ok) {
                throw new Error('Ocurrió un error trayendo los datos de la API');
            } else {
                const data = await response.json();
                
                const characters = data.results.map(character => ({
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    firstSeen: character.origin.name,
                    location: character.location.name,
                    image: character.image,
                    student: "María José Casanova Becerra",
                    code: "0000223374"
                }));
                return characters;
            }
        } catch (error) {
            console.error('Ha ocurrido un error:', error);
            throw error;
        }
	}
}
export default RickAndMortyService;