import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
        //this.consultarAPI();
    }

    consultarAPI(){
        //const url = 'https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}';
        const url2 = 'cancion.json';
        fetch(url2)
            .then(respuesta =>respuesta.json())
            .then(resultado =>{
                if(resultado.letra){
                    const {letra} = resultado;
                    UI.divResultado.textContent = letra;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                }else{
                    UI.divMensajes.textContent = 'La canción no existe, prueba con otra búsqueda';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove();
                    }, 3000);
                }
                
            })
    }
}

export default API;