import getData from '../utils/getData'

const Home = async () =>{
    const characters = await getData()
    const view=`
        <div class="Characters">
            ${characters.results.map(({id,image,name})=>(
                `
                    <article class="Character-item">
                        <a href="#/${id}/">
                            <img src="${image}" alt="${name}">
                        </a>
                        <h2>${name}</h2>
                    </article>
                `
            ))}
        </div>      
    `;
    return view;
}

export default Home;