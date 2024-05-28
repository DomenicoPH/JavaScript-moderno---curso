const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo pista ${id}...`)
    },
    pausar: function(){
        console.log('Reproducción pausada')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}...`)
    },
    reproducirPlaylist: function(playlist){
        console.log(`Reproduciendo playlist ${playlist}`)
    }
}

reproductor.borrar = function(id){
    console.log('Borrado cancion...');
    console.log(`Canción ${id} borrada`)
}

reproductor.reproducir(1);
reproductor.reproducir(2);
reproductor.reproducir(3);
reproductor.pausar();
reproductor.borrar(3);
reproductor.borrar(6);
reproductor.crearPlaylist('Punk Rock');
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Grunge');
reproductor.reproducirPlaylist('Punk Rock');
reproductor.reproducirPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Grunge');
reproductor.reproducirPlaylist('Pop');

console.log(reproductor);