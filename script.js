var mimicas = ['Spiderman', 'El juego del Calamar', 'Piratas del Caribe', 'Harry Potter y la piedra Filosofal', 
    'BTS en la feria de Sevilla', 'La casa de Papel', 'Tiburón', 'Titanic', 'Star Wars', 'Grease', 'Indiana Jones',
    'E.T', 'Isla Mágica', 'La FCOM', 'Pretty Woman', 'Solo en casa', 'Terminator', 'Jurassic Park', 'Toy Story', 'Nemo', 
    'Haz twerk', 'Shrek', 'Avatar', '8 Apellidos Vascos', 'La clase de Navarrete', 'Viendo una peli de crítica del cine', 'Torres Simón',
    'Pulp Fiction', 'Un perro andaluz', 'Laura con el bañador enganchado en el kayak', 'Náufrago', 'El Resplandor', 'Un lugar tranquilo: (la peli esa en la que los monstruos te escuchaban)',
    'Cristobalina plantando un ecohuerto', 'James Bond', 'Cuando casi llegamos a Marruecos con la barca a pedales', 'Cuando Laura pensaba que sabía brasileño', 
    'Noelia creyendo que le habían destrozado el coche', 'Noelia llegando tarde', 'Nathaly y su abrigo de 20 pounds', 'Bianca siendo una drogadicta en el corto', 
    'Noelia robando el pan del comedor']

var telepatias = ['Marca de ropa', 'Comida', 'Bebida', 'Bebida alcohólica', 'Marca de zapatos', 'Marca deportiva', 'Marca de comida', 'Sabor de helado', 
    'Sabor de té', 'Bebida sin azúcar', 'Deporte', 'Deporte acuático', 'Deporte con pelota', 'Juego de mesa', 'Videojuego', 'Lenguaje de programación', 
    'Asignatura de CAV', 'Marca de tecnología', 'Dispositivo electrónico', 'Marca de relojes', 'Marca de joyería', 'Centro comercial', 'Supermercado', 'Tienda de muebles', 
    'Un actor coreano', 'Actor español', 'Actriz española', 'Actor americano', 'Actiz amerciana', 'Director de cine', 'Profesor de CAV', 'Amiga de Dochenta', 
    'Marca de coche', 'Marca de moto', 'Cantante', 'Grupo coreano', 'Actor coreano', 'Actriz coreana', 'Canción', 'País europeo', 'País asiático', 'País americano', 'País sudamericano','Continente', 
    'Juguete', 'Ejercicio de fuertaco', 'Canción de los 2000', 'Película', 'Serie coreana', 'Serie', 'Aplicación para ligar', 'Programa de Adobe', 'Programa de edición',
    'Aplicación de chat', 'Aplicación del móvil', 'Red social', 'Etiqueta de HTML', 'Plato coreano', 'Plato típico andaluz', 'Color', 'Provincia de España', 'Ciudad de España',
    'Provincia de Andalucía']

var dibujos = ['Vaca', 'Caballo', 'Delfín', 'Voldemort', 'Carretas del Rocío', 'El anfiteatro de la FCOM', 'El comedor de la FCOM', 'El juego del Calamar',
    '']

var frases = ['Eso está hecho, Migué', 'Sujétame el cubata', 'Oleee, eso está chupao', 'Enga, enga', 'AEAEAE', '¿Solo eso? Va', 'Te vas a cagá', 
    'Ponme algo más difíci, mi arma', 'Hubiera preferido un mori apá', 'Con los ojos serraos, chavá', 'Y haciendo el pino si quieres', 'Tas colao',
    'Hasta luego, Mari Carmen', 'Okey makey', 'Chao pescao', 'Pero despué me trae un bocaíllo, Juan']

function mimica(){
    Swal.fire({
        title: mimicas[Math.floor(Math.random()*mimicas.length)],
        confirmButtonText: frases[Math.floor(Math.random()*frases.length)]
      })
}

function telepatia(){
  Swal.fire({
      title: telepatias[Math.floor(Math.random()*telepatias.length)],
      confirmButtonText: frases[Math.floor(Math.random()*frases.length)]
    })
}