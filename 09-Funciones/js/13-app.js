// Setter y Getter

const reproductor = {
    cancion:'',
    reproducir: (id) => console.log(`Reproduciendo pista ${id}...`),
    pausar: () => console.log('Reproducción pausada'),
    borrar: (id) => console.log(`Borrando canción ${id}`),
    crearPlaylist: (nombre) => console.log(`Creando Playlist ${nombre}...`),
    reproducirPlaylist: (playlist) => console.log(`Reproduciendo playlist ${playlist}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion