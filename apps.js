let page = 1;
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click', () => {
    if(page < 500){
        page++
        cargarPeliculas()
    }
})

btnAnterior.addEventListener('click', () => {
    if(page >= 1){
        page--
        cargarPeliculas()
    }
})

const cargarPeliculas = async() => {
    try{
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b0b2acd48ea5dd81eed178be61c78809&page=' + page;
    
        const response =  await fetch(url);

        //Si la respuesta es correcta
        if(response.status == 200){
            const data = await response.json()

            console.log(data)

            let movies = '';
            data.results.forEach(movie => {
                movies += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                        <h3 class="titulo">${movie.title}</h3>
                    </div>
                            
                `;
            })

            document.getElementById('contenedor').innerHTML = movies; 
        }



        
    } catch(error){
        console.log(error);
    }
    

}

const pelicula = async () => {
    const url = 'https://api.themoviedb.org/3/movie/550/videos?api_key=b0b2acd48ea5dd81eed178be61c78809';
    const response =  await fetch(url);
    const video = await response.json()
    console.log(video)
    console.log('response')
}

cargarPeliculas()
