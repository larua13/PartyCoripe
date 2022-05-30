var mimicas = ['Spiderman', 'El juego del Calamar', 'Piratas del Caribe', 'Harry Potter y la piedra Filosofal', 
    'BTS en la feria de Sevilla', 'La casa de Papel', 'Tiburón', 'Titanic', 'Star Wars', 'Grease', 'Indiana Jones',
    'E.T', 'Isla Mágica', 'La FCOM', 'Pretty Woman', 'Solo en casa', 'Terminator', 'Jurassic Park', 'Toy Story', 'Nemo', 
    'Haz twerk', 'Shrek', 'Avatar', '8 Apellidos Vascos', 'La clase de Navarrete', 'Viendo una peli de crítica del cine', 'Torres Simón',
    'Pulp Fiction', 'Un perro andaluz', 'Náufrago', 'El Resplandor', 'Un lugar tranquilo: (la peli esa en la que los monstruos te escuchaban)',
    'Cristobalina plantando un ecohuerto', 'James Bond', 'Cuando casi llegamos a Marruecos con la barca a pedales', 'Cuando Laura pensaba que sabía brasileño', 
    'Noelia creyendo que le habían destrozado el coche', 'Noelia llegando tarde', 'Nathaly y su abrigo de 20 pounds', 'Bianca siendo una drogadicta en el corto', 
    'Noelia robando el pan del comedor', 'Noelia en el concierto de BTS', 'El dinosaurio del Google sin internet', 'Volar', 'Montaña rusa', 'Momia', 
    'Crepúsculo', 'High School Musical', 'Inside Out', 'The Boy', 'El señor de los anillos', 'Pepe tirando el foco', 'Camp Rock', 'Estás viendo Disney Channel', 
    'Barranquismo', 'Rafting', 'Escalada', 'Prueba de alcoholemia', 'Traficar droguita', 'Comer con palillos', 'Ed Sheeran con el burro en Coria', 'Una serpiente',
    'Lurdeh y Noelia subiendo una cuesta con un coche que no tira']

var telepatias = ['Marca de ropa', 'Comida', 'Bebida', 'Bebida alcohólica', 'Marca de zapatos', 'Marca deportiva', 'Marca de comida', 'Sabor de helado', 
    'Sabor de té', 'Bebida sin azúcar', 'Deporte', 'Deporte acuático', 'Deporte con pelota', 'Juego de mesa', 'Videojuego', 'Lenguaje de programación', 
    'Asignatura de CAV', 'Marca de tecnología', 'Dispositivo electrónico', 'Marca de relojes', 'Marca de joyería', 'Centro comercial', 'Supermercado', 'Tienda de muebles', 
    'Un actor coreano', 'Actor español', 'Actriz española', 'Actor americano', 'Actiz amerciana', 'Director de cine', 'Profesor de CAV', 'Amiga de Dochenta', 
    'Marca de coche', 'Marca de moto', 'Cantante', 'Grupo coreano', 'Actor coreano', 'Actriz coreana', 'Canción', 'País europeo', 'País asiático', 'País americano', 'País sudamericano','Continente', 
    'Juguete', 'Ejercicio de fuertaco', 'Canción de los 2000', 'Película', 'Serie coreana', 'Serie', 'Aplicación para ligar', 'Programa de Adobe', 'Programa de edición',
    'Aplicación de chat', 'Aplicación del móvil', 'Red social', 'Etiqueta de HTML', 'Plato coreano', 'Plato típico andaluz', 'Color', 'Provincia de España', 'Ciudad de España',
    'Provincia de Andalucía']

var dibujos = ['Vaca', 'Caballo', 'Delfín', 'Voldemort', 'Noelia en el atasco de las carretas del Rocío', 'El anfiteatro de la FCOM', 'El comedor de la FCOM', 'El juego del Calamar',
    'Bocaíllo del Juan', 'Botella de Ilerna', 'Teclado', 'Ratón', 'Pulpo', 'Oveja', 'Mapa', 'Regadera', 'Brújula', 'Mariposa', 'Caramelo', 'Monopatín', 'Patín eléctrico',
    'Bicicleta', 'Pollo asao de Lepe', 'Kayak', 'Paddle Surf', 'Mariquita', 'Matamoscas', 'Lavavajillas', 'Lavadora', 'Secadora', 'Sartén', 'Batido gordo de la Sendai',
    'El samurái de Coria', 'La barca que lleva los coches de Coria', 'Overcooked', 'La Plaza España', 'La Giralda', 'Las Setas', 'Palacio coreano', 'La brisa de Nathaly', 
    'Bianca', 'Lurdeh', 'Noelia', 'Laura', 'Nathaly', 'Kuiky', 'Cuña de las melonas', 'Empanada de Bianca', 'Torres Simón dirigiendo una orquesta', 'Cobo enseñándonos guión', 
    'El Greco poniéndonos un 9', 'Test COVID', 'Mascarilla', 'Lurdeh tocando la guitarra', 'Laura con el bañador enganchado en el kayak', 'Erizo', 'Laura y Noelia en el concierto de Camilo', 
    'Cebra', 'Nathaly con sus patines de 4 ruedas', 'Jugando al Jungle en la sala de lectura', 'Bicicleta', 'Huevo frito', 'En la feria dándolo todo', 'Los cócteles de Halloween',
    'Laura Reggetonera dando un concierto', 'Lurdeh partiéndose la paleta con el botellín', 'Un día en el Alamillo', 'Laura con la gorra cani', 'El sake de la Noe']

var frases = ['Eso está hecho, Migué', 'Sujétame el cubata', 'Oleee, eso está chupao', 'Enga, enga', 'AEAEAE', '¿Solo eso? Va', 'Te vas a cagá', 
    'Ponme algo más difíci, mi arma', 'Hubiera preferido un mori apá', 'Con los ojos serraos, chavá', 'Y haciendo el pino si quieres', 'Tas colao',
    'Hasta luego, Mari Carmen', 'Okey makey', 'Chao pescao', 'Pero despué me trae un bocaíllo, Juan']

var imitar = ['Acento: argentino', 'Acento: cubano', 'Acento: vasco', 'Acento: andaluz', 'Acento: mexicano', 'Acento: gallego', 'Acento: portugués', 'Acento: catalán', 'Acento: un reggetonero, mi amol', 
    'Imitación: Sebastián Yatra', 'Acento: un chino hablando español', 'Acento: un inglés hablando español', 'Acento: un francés hablando español', 'Acento: coreano', 'Imitación: Gloria Serra', 
    'Imitación:Manuel Carrasco', 'Imitación: Rajoy', 'Imitación: ', 'Acento: venezolano', 'Acento: cordobés', 'Acento: madrileño', 'Acento: un ruso hablando español', 'Imitación: Shakira', 'Imitación: La Oreja de Van Gogh',
    'Imitación: Dani Martín', 'Imitación: Voldemort','Imitación: ']

var canciones = ['Zapatillas, El canto de el loco', 'Nada que perder, Pignoise', /*'Cuando zarpa el amor, Camela', 'Como Camarón, Estopa', 'Por la raja de tu falda, Estopa', 
    'Caminando por la vida, Melendi', 'Tacones Rojos, Sebastián Yatra', 'Perfect, Ed Sheeran', 'Shape of you, Ed Sheeran', 'Talking to the moon, Bruno Mars', 'Física o química, Despistaos', 
    'El universo sobre mí, Amaral', 'El himno del Sevilla, El Arrebato', 'Princesas, Pereza', 'Sevilla tiene un color especial, Los del Río', 'Money, money, money, BTS', 'Nunca volverá, El sueño de Morfeo', 
    'La Macarena, Los del Río', 'La Playa, La Oreja de Van Gogh', 'Me colé en una fiesta, Mecano', '1+1 son 7, Fran Perea', 'Corazón partío, Alejandro Sanz', 'La Flaca, Jarabe de Palo', 'Vida de Rico, Camilo', 'Mi estrella Blanca, Fondo Flamenco', 
    'Tiroteo, Marc Seguí', 'Mmmh, KAI', 'I want it that way, Backstreets Boys', 'Suerte, Shakira', 'Opa, yo viacé un corrá, El Koala', 'Hola mi bebebé, WRS', 'Todo de ti, Rawl Alejandro', 'Malamente, Rosalía', 'Tú me dejaste de querer, C Tangana', 
    'Millones, Camilo', 'Me rehúso, Danny Ocean', 'Terriblemente Cruel, Leiva', 'Dónde está mi Nata, Nolabi', 'Danza Kuduro, Don Omar', 'Dont start now, Dua Lipa', 'Propuesta Indecente, Romeo Santos', 'Días de verano, Amaral', 
'The Lazy Song, Bruno Mars', ''*/]

var spoty = ['<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/42VgiRyg0YjtRVLiPFNxPJ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0YSaKC66FGCWLxM9SoQA1f?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>']

function mimica(){
    Swal.fire({
        title: mimicas[Math.floor(Math.random()*mimicas.length)],
        confirmButtonText: frases[Math.floor(Math.random()*frases.length)]
        
    })
    console.log("Mimica: " + mimicas.length + "telepatía: " + telepatias.length + "dibujo: " + dibujos.length);
}

function telepatia(){
  Swal.fire({
      title: telepatias[Math.floor(Math.random()*telepatias.length)],
      confirmButtonText: frases[Math.floor(Math.random()*frases.length)],
    })
}

function dibujar(){
    Swal.fire({
        title: dibujos[Math.floor(Math.random()*dibujos.length)],
        confirmButtonText: frases[Math.floor(Math.random()*frases.length)],
      })
  }

function tararear(){
    let cancion = [Math.floor(Math.random()*canciones.length)]
    Swal.fire({
        title: canciones[cancion],
        confirmButtonText: frases[Math.floor(Math.random()*frases.length)],
        html: spoty[cancion]
      })
  }