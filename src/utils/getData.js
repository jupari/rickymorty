const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const url = id ? `${API}${id}` : `${API}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();
    return data;
}

export default getData;