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
    'Lurdeh y Noelia subiendo una cuesta con un coche que no tira', 'Tocar el ukelele', 'Dora la exploradora', 'Bob Esponja', 'Doraemon', 'Matrix', 'Los otros (VICTORRRR)',
    'Ducharse', 'Inflar una rueda', 'Cocinar espaguetis', 'Montar una tienda de campaña', 'Poner la lavadora', 'Escribir en coreano', 'Estar en un tussam y que de un frenazo',   
    'Walking Dead', 'Narcos', 'Aquí no hay quién viva', 'Your name']

var telepatias = ['Marca de ropa', 'Comida', 'Bebida', 'Bebida alcohólica', 'Marca de zapatos', 'Marca deportiva', 'Marca de comida', 'Sabor de helado', 
    'Sabor de té', 'Bebida sin azúcar', 'Deporte', 'Deporte acuático', 'Deporte con pelota', 'Juego de mesa', 'Videojuego', 'Lenguaje de programación', 
    'Asignatura de CAV', 'Marca de tecnología', 'Dispositivo electrónico', 'Marca de relojes', 'Marca de joyería', 'Centro comercial', 'Supermercado', 'Tienda de muebles', 
    'Un actor coreano', 'Actor español', 'Actriz española', 'Actor americano', 'Actiz amerciana', 'Director de cine', 'Profesor de CAV', 'Amiga de Dochenta', 
    'Marca de coche', 'Marca de moto', 'Cantante', 'Grupo coreano', 'Actor coreano', 'Actriz coreana', 'Canción', 'País europeo', 'País asiático', 'País americano', 'País sudamericano','Continente', 
    'Juguete', 'Ejercicio de fuertaco', 'Canción de los 2000', 'Película', 'Serie coreana', 'Serie', 'Aplicación para ligar', 'Programa de Adobe', 'Programa de edición',
    'Aplicación de chat', 'Aplicación del móvil', 'Red social', 'Etiqueta de HTML', 'Plato coreano', 'Plato típico andaluz', 'Color', 'Provincia de España', 'Ciudad de España',
    'Provincia de Andalucía', 'Plataforma streaming', 'Instrumento musical', 'Parte del cuerpo', 'Hueso', 'Músculo', 'Manera de morir', 'Dibujitos de la infancia', 'Cómic',
    'Ciudad coreana', 'Tipo de plano', 'Palabra en coreano', 'Una palabra que empiece por vocal', 'Festival de música', 'Río', 'Mar', 'Océano', 'Un artículo de papelería', 
    'Un utensilio de maquillaje', 'Un utensilio de cocina', 'Electrodoméstico', 'Árbol', 'Insecto', 'Mamífero', 'Ave', 'Reptil', 'Anfibio', 'Plato italiano', 'Plato chino', 'Plato francés']

var dibujos = ['Vaca', 'Caballo', 'Delfín', 'Voldemort', 'Noelia en el atasco de las carretas del Rocío', 'El anfiteatro de la FCOM', 'El comedor de la FCOM', 'El juego del Calamar',
    'Bocaíllo del Juan', 'Botella de Ilerna', 'Teclado', 'Ratón', 'Pulpo', 'Oveja', 'Mapa', 'Regadera', 'Brújula', 'Mariposa', 'Caramelo', 'Monopatín', 'Patín eléctrico',
    'Bicicleta', 'Pollo asao de Lepe', 'Kayak', 'Paddle Surf', 'Mariquita', 'Matamoscas', 'Lavavajillas', 'Lavadora', 'Secadora', 'Sartén', 'Batido gordo de la Sendai',
    'El samurái de Coria', 'La barca que lleva los coches de Coria', 'Overcooked', 'La Plaza España', 'La Giralda', 'Las Setas', 'Palacio coreano', 'La brisa de Nathaly', 
    'Bianca', 'Lurdeh', 'Noelia', 'Laura', 'Nathaly', 'Kuiky', 'Marta', 'Cuña de las melonas', 'Empanada de Bianca', 'Torres Simón dirigiendo una orquesta', 'Cobo enseñándonos guión', 
    'El Greco poniéndonos un 9', 'Test COVID', 'Mascarilla', 'Lurdeh tocando la guitarra', 'Laura con el bañador enganchado en el kayak', 'Erizo', 'Laura y Noelia en el concierto de Camilo', 
    'Cebra', 'Nathaly con sus patines de 4 ruedas', 'Jugando al Jungle en la sala de lectura', 'Bicicleta', 'Huevo frito', 'En la feria dándolo todo', 'Los cócteles de Halloween',
    'Laura Reggetonera dando un concierto', 'Lurdeh partiéndose la paleta con el botellín', 'Un día en el Alamillo', 'Laura con la gorra cani', 'El sake de la Noe']


var imitar = ['Acento: argentino', 'Acento: cubano', 'Acento: vasco', 'Acento: andaluz', 'Acento: mexicano', 'Acento: gallego', 'Acento: portugués', 'Acento: catalán', 'Acento: un reggetonero, mi amol', 
    'Imitación: Sebastián Yatra', 'Acento: un chino hablando español', 'Acento: un inglés hablando español', 'Acento: un francés hablando español', 'Acento: coreano', 'Imitación: Gloria Serra', 
    'Imitación:Manuel Carrasco', 'Imitación: Rajoy', 'Imitación: Juan Carlos I ', 'Acento: venezolano', 'Acento: cordobés', 'Acento: madrileño', 'Acento: un ruso hablando español', 'Imitación: Shakira', 'Imitación: Amaia Montero',
    'Imitación: Dani Martín', 'Imitación: Voldemort','Imitación: Pikachu', 'Acento: italiano', 'Imitación: Mickey Mouse', 'Imitación: Shin Chan', 'Imitación: Miguel Bosé', 'Imitación: Homer', 'Imitación: Matías Pratts',
    'Imitación: Belén Esteban', 'Imitación: Raphael', 'Imitación: Yoda', 'Acento: un turco hablando español', 'Imitación: Michael Jackson', 'Imitación: Camilo', 'Imitación: Duquesa de Alba', 'Imitación: Mario Vaquerizo', 
    'Imitación: Boris Izaguirre', 'Imitación: Jack Sparrow', 'Imitación: Rafa Nadal', 'Imitación: BTS', 'Imitación: la muñeca del Juego del Calamar', 'Imitación: Er juan y el Migué', 'Imitación: Ed Sheeran', 
    'Imitación: Bruno Mars', 'Imitación: la Rosalía', 'Imitación: Fernando Simón', 'Imitación: Sergio Peinado', 'Imitación: Patry Jordan', 'Imitación: Dark Vather', 'Imitación: Pablo Escobar', 'Acento: gitano']

var canciones = ['Zapatillas, El canto del loco', 'Nada que perder, Pignoise', 'Cuando zarpa el amor, Camela', 'Como Camarón, Estopa', 'Por la raja de tu falda, Estopa', 
    'Caminando por la vida, Melendi', 'Tacones Rojos, Sebastián Yatra',  'Perfect, Ed Sheeran', 'Shape of you, Ed Sheeran', 'Talking to the moon, Bruno Mars', 'Física o química, Despistaos', 
    'El universo sobre mí, Amaral', 'El himno del Sevilla, El Arrebato', 'Princesas, Pereza', 'Sevilla tiene un color especial, Los del Río', 'Money, money, money, BTS', 'Nunca volverá, El sueño de Morfeo', 
    'La Macarena, Los del Río', 'La Playa, La Oreja de Van Gogh', 'Me colé en una fiesta, Mecano', '1+1 son 7, Fran Perea', 'Corazón partío, Alejandro Sanz', 'La Flaca, Jarabe de Palo', 'Vida de Rico, Camilo', 'Mi estrella Blanca, Fondo Flamenco', 
    'Tiroteo, Marc Seguí', 'Mmmh, KAI', 'I want it that way, Backstreets Boys', 'Suerte, Shakira', 'Opa, yo viacé un corrá, El Koala', 'Hola mi bebebé, WRS', 'Todo de ti, Rawl Alejandro', 'Malamente, Rosalía', 'Tú me dejaste de querer, C Tangana', 
    'Millones, Camilo', 'Me rehúso, Danny Ocean', 'Terriblemente Cruel, Leiva', 'Dónde está mi Nata, Nolabi', 'Danza Kuduro, Don Omar', 'Dont start now, Dua Lipa', 'Propuesta Indecente, Romeo Santos', 'Días de verano, Amaral', 'The Lazy Song, Bruno Mars', 
    'Ram pam pam, Natti Natasha feat. Becky G', 'Alejandro, Lady Gaga', 'Tusa, Karol G feat. Nicki Minaj', 'bad guy, Billie Ellish','EVERYDAY, WINNER', 'Toxic, Britney Spears', 'Llamado de emergencia, Daddy Yankee', 'La casa por el tejado, Fito y Fitipaldis',
    'Mala mujer, C. Tangana', 'Aserejé, Las Ketchup', 'Antes muerta que sencilla, María Isabel', 'Veneno pa tu piel, La Veneno', 'Si veo a tu mamá, Bad Bunny', 'Last Day on Earth, Tai Verdes', 'Ibas sola, Juanmi', '20 de abril, Celtas Cortos', 
    'Sarandonga, Lolita Flores', 'Sin pijama, Natti Nattasha feat. Becky G', 'A quién le impolta lo que yo venda, la polisía aquí no entla, si quiele te puedo conseguí lo que tú quiela, pol DOOCHENTA, Bianchi', 'Wannabe, Spice Girls', 'Under pressure, Queen',
    'Come, Jain', 'Búscate un hombre que te quiera, El Arrebato', 'Thats what I like, Bruno Mars', 'Una vaina loca, Fuego', 'Pasado Pisado, Comando Tiburón', 'Gasolina, Daddy Yankee', 'Las divinas, Patito Feo']

var spoty = ['"https://open.spotify.com/embed/track/42VgiRyg0YjtRVLiPFNxPJ?utm_source=generator"', /*Zapatillas*/
    '"https://open.spotify.com/embed/track/0YSaKC66FGCWLxM9SoQA1f?utm_source=generator"', /*Nada q */
    '"https://open.spotify.com/embed/track/0GzQB5WXavUEU8tfTCAd8m?utm_source=generator"', /*Cuando zarpa*/
    '"https://open.spotify.com/embed/track/1VB4sadHjFcFklHcZuoROi?utm_source=generator"', /*Como camarón*/
    '"https://open.spotify.com/embed/track/5OaqffbeQyVVqtnA71Ci7K?utm_source=generator"',/*por la raja*/
    '"https://open.spotify.com/embed/track/3v1dCP3hk2djfWryqfp7sx?utm_source=generator"', /*caminando*/
    '"https://open.spotify.com/embed/track/0Be7sopyKMv8Y8npsUkax2?utm_source=generator"', /*tacones*/
    '"https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator"',/*perfect*/
    '"https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3?utm_source=generator"',/*shape*/
    '"https://open.spotify.com/embed/track/1wVuPmvt6AWvTL5W2GJnzZ?utm_source=generator"',/*talking*/
    '"https://open.spotify.com/embed/track/79eUc9cUUoUOO1b5znphiU?utm_source=generator"',/*fisica*/
    '"https://open.spotify.com/embed/track/1jJn6iK6o2Vg7iUKHztRTk?utm_source=generator"',/*el universo*/
    '"https://open.spotify.com/embed/track/4UqHkgithEYNr32AbABaDr?utm_source=generator"',/*himno*/
    '"https://open.spotify.com/embed/track/3hlWUNjAlbZ6nOjAbrivBv?utm_source=generator"',/*princess*/
    '"https://open.spotify.com/embed/track/1x8tjll0oP07qkZWVtm8ap?utm_source=generator"',/*sevilla tiene*/
    '"https://open.spotify.com/embed/track/2u54HNQamwFuOMLSuhSRom?utm_source=generator"',/*bts*/
    '"https://open.spotify.com/embed/track/3TZiiTNmVhLRMhPksHqk8M?utm_source=generator"',/*nunca volver*/
    '"https://open.spotify.com/embed/track/4Y6cDd4EPHcEbiUKdyvNwM?utm_source=generator"', /*la macarena*/
    '"https://open.spotify.com/embed/track/2DNyZP4Py6f4zMASLBnIu6?utm_source=generator"',/*la playa*/
    '"https://open.spotify.com/embed/track/4JOsL8WntMIwDeNQlKAwdA?utm_source=generator"', /*me colé*/
    '"https://open.spotify.com/embed/track/3Af6XfS90PAZaC4Q2AjPtg?utm_source=generator"',/*1+1*/
    '"https://open.spotify.com/embed/track/0wQCKR9OFjYu5Kzrk7WivJ?utm_source=generator"',//Corazon partio
    '"https://open.spotify.com/embed/track/2LsbizbOeNa4x6qsi2jAMb?utm_source=generator"', /*La flaca*/
    '"https://open.spotify.com/embed/track/4nTduFjaTmGysc9WKNuCcs?utm_source=generator"', /*vida de rico*/
    '"https://open.spotify.com/embed/track/15h9quQgltWsgYsdqSyPNb?utm_source=generator"', /*fondo*/
    '"https://open.spotify.com/embed/track/05HpBFLrHBjWpgV0DSPUAv?utm_source=generator"',/*tiroteo*/
    '"https://open.spotify.com/embed/track/5dntGTbUtmUO239wQ0k3yM?utm_source=generator"',/*mmmh*/
    '"https://open.spotify.com/embed/track/47BBI51FKFwOMlIiX6m8ya?utm_source=generator"',/*that way*/
    '"https://open.spotify.com/embed/track/3TY1PFZXmYeiLcXygB74My?utm_source=generator"', /*shakira*/
    '"https://open.spotify.com/embed/track/29xwXTI483gmpvr6pKSag0?utm_source=generator"', /*opá*/
    '"https://open.spotify.com/embed/track/3n9qn38IhqkC7DcdIRaM9q?utm_source=generator"', /* mi bebebé*/
    '"https://open.spotify.com/embed/track/4fSIb4hdOQ151TILNsSEaF?utm_source=generator"', /*todo d ti*/
    '"https://open.spotify.com/embed/track/5zOAudPQIs5U8zP6LQGHmH?utm_source=generator"', /*malamente*/
    '"https://open.spotify.com/embed/track/5ddFjrPG8NgQQ6xlOQIVd2?utm_source=generator"', /*tu me dejaste*/
    '"https://open.spotify.com/embed/track/3YAnNBdk0uHyakXXzMbNJq?utm_source=generator"',/*millones*/
    '"https://open.spotify.com/embed/track/6De0lHrwBfPfrhorm9q1Xl?utm_source=generator"',/*me rehúso*/
    '"https://open.spotify.com/embed/track/0XPayKZFFZA2PwSRNi1pVU?utm_source=generator"',//terriblemente cruel
    '"https://open.spotify.com/embed/track/7COfe3P7KgfwDwIRB8LIDw?utm_source=generator"',//donde está mi gente
    '"https://open.spotify.com/embed/track/4sCSUQnWQ6HJsOMjfPicdn?utm_source=generator"', //danza kuduro
    '"https://open.spotify.com/embed/track/6WrI0LAC5M1Rw2MnX2ZvEg?utm_source=generator"', //dont start now
    '"https://open.spotify.com/embed/track/5PycBIeabfvX3n9ILG7Vrv?utm_source=generator"', //propuesta indecente
    '"https://open.spotify.com/embed/track/3JhllUTyXy2ceSTzNSErBC?utm_source=generator"', //dias de verano    
    '"https://open.spotify.com/embed/track/386RUes7n1uM1yfzgeUuwp?utm_source=generator"', //lazy song
    '"https://open.spotify.com/embed/track/4DHDIdeayp8xvlyg22wREO?utm_source=generator"', //ram pam 
    '"https://open.spotify.com/embed/track/3clsCV1f1E9u1Fge9ntulk?utm_source=generator"', //lady gaga
    '"https://open.spotify.com/embed/track/7k4t7uLgtOxPwTpFmtJNTY?utm_source=generator"', //tusa
    '"https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m?utm_source=generator"', //billie 
    '"https://open.spotify.com/embed/track/42rziXmwGA04hNSMi2MliA?utm_source=generator"', //everyday
    '"https://open.spotify.com/embed/track/6I9VzXrHxO9rA9A5euc8Ak?utm_source=generator"', //toxica
    '"https://open.spotify.com/embed/track/59IfP78j5ihHCkBsEU5F4U?utm_source=generator"', //112
    '"https://open.spotify.com/embed/track/428cFrawSqeLoyooQjAW9d?utm_source=generator"',//x tejado
    '"https://open.spotify.com/embed/track/6puxHBNwu2Nmm7uD3Rd2MP?utm_source=generator"', //mala muje
    '"https://open.spotify.com/embed/track/6yCM4N4v44c3xoMORrhLwW?utm_source=generator"', //aserejé
    '"https://open.spotify.com/embed/track/3QncI2MDoSto39bT8SJtKK?utm_source=generator"', //antes muerta
    '"https://open.spotify.com/embed/track/0L200jJnjlpQPmK9x6fd7j?utm_source=generator"', //veneno
    '"https://open.spotify.com/embed/track/41wtwzCZkXwpnakmwJ239F?utm_source=generator"',//bad bunny
    '"https://open.spotify.com/embed/track/0fVDu1evgjX9CFD0cmuRrM?utm_source=generator"', // last day
    '"https://open.spotify.com/embed/track/77cpf2fi3P2jxYKOCtmlUI?utm_source=generator"', //ibas sola
    '"https://open.spotify.com/embed/track/7ifOnwJC0oH7cfbJQbUye1?utm_source=generator"', //20
    '"https://open.spotify.com/embed/track/2zNDRGoRkNEkMhO5fcGTMv?utm_source=generator"', //Sarandonga
    '"https://open.spotify.com/embed/track/2ijef6ni2amuunRoKTlgww?utm_source=generator"' //pijama
    ,'"https://open.spotify.com/embed/track/7Eb5AYiiGWItBNddlmxvnh?utm_source=generator"', //a quién
    '"https://open.spotify.com/embed/track/1Je1IMUlBXcx1Fz0WE7oPT?utm_source=generator"', //wannabe
    '"https://open.spotify.com/embed/track/2fuCquhmrzHpu5xcA1ci9x?utm_source=generator"', //underpressure
    '"https://open.spotify.com/embed/track/1YrC8s6yZWw23QxW6rfM9f?utm_source=generator"', //come
    '"https://open.spotify.com/embed/track/4ppxWzgjvst4Mv1Kpwooeh?utm_source=generator"', //arrebato
    '"https://open.spotify.com/embed/track/0KKkJNfGyhkQ5aFogxQAPU?utm_source=generator"', //what i like
    '"https://open.spotify.com/embed/track/3zb856RMKFjdvWre0TKcmA?utm_source=generator"', //una vaina loca
    '"https://open.spotify.com/embed/track/5RZTA3NhiHR2408da3HMNz?utm_source=generator"', //pasado pisado
    '"https://open.spotify.com/embed/track/228BxWXUYQPJrJYHDLOHkj?utm_source=generator"', //gasolina
    '"https://open.spotify.com/embed/track/5CLOvp3vpHLX929j3omI0G?utm_source=generator"', //las divinas
    ] 

var frases = ['Eso está hecho, Migué', 'Sujétame el cubata', 'Oleee, eso está chupao', 'Enga, enga', 'AEAEAE', '¿Solo eso? Va', 'Te vas a cagá', 
    'Ponme algo más difíci, mi arma', 'Hubiera preferido un mori apá', 'Con los ojos serraos, chavá', 'Y haciendo el pino si quieres', 'Tas colao',
    'Hasta luego, Mari Carmen', 'Okey makey', 'Chao pescao', 'Pero despué me trae un bocaíllo, Juan', 'Illa, qué tóxica', '¡Me encanta!']

var tarareoHecho = []; 
var mimicaHecha = []; 
var telepatiaHecha = []; 
var dibujarHecho = []; 
var imitaHecho = [];
var sergio = "files/sergio.wav";

function mimica(){

    let mimica = Math.floor(Math.random()*mimicas.length);
    
    if (mimicaHecha.length === mimicas.length){
        mimicaHecha = []; 
    }

    while (!comprobar(mimica, mimicaHecha)){
        mimica = Math.floor(Math.random()*mimicas.length);
    }

    ventana(mimicas, mimica);

    
    mimicaHecha.push(mimica);
    console.log("Mimica: " + mimicas.length + "telepatía: " + telepatias.length + "dibujo: " + dibujos.length + 'canciones: ' + canciones.length + " imitaciones: " + imitar.length);
}

function telepatia(){
    let telepatia = Math.floor(Math.random()*telepatias.length);

    if (telepatiaHecha.length === telepatias.length){
        telepatiaHecha = []; 
    }

    while (!comprobar(telepatia, telepatiaHecha)){
        telepatia = Math.floor(Math.random()*telepatias.length);
    }

    ventana(telepatias, telepatia);

    telepatiaHecha.push(telepatia);
}

function dibujar(){
    let dibuja = Math.floor(Math.random()*dibujos.length);

    if (dibujarHecho.length === dibujos.length){
        dibujarHecho = []; 
    }

    while (!comprobar(dibuja, dibujarHecho)){
        dibuja = Math.floor(Math.random()*dibujos.length);
    }
    
    ventana(dibujos, dibuja);

      dibujarHecho.push(dibuja);
  }

function tararear(){

    let imitaOtararea = Math.random() < 0.5; 
    
    if (imitaOtararea){
        let cancion = Math.floor(Math.random()*canciones.length);

        if (tarareoHecho.length === canciones.length){
            tarareoHecho = []; 
        }
        
        while (!comprobar(cancion, tarareoHecho)){
            cancion = Math.floor(Math.random()*canciones.length);
        }

        ventana2(canciones, cancion, '<iframe style="border-radius:12px" src=' + spoty[cancion] + ' width="100%" height="380" frameBorder="0" allowfullscreen="""></iframe>');
    
          tarareoHecho.push(cancion);
    }else{

        let imitacion = Math.floor(Math.random()*imitar.length);

        if (imitaHecho.length === imitar.length){
            imitaHecho = []; 
        }
        
        while (!comprobar(imitacion, imitaHecho)){
            imitacion = Math.floor(Math.random()*imitar.length);
        }
    
        ventana(imitar, imitacion);
    
        imitaHecho.push(imitacion);
    }
    
  }

function comprobar(elemento, hecho){
    let booleano = true; 
    
    for (let i = 0; i < hecho.length; i++){
        if (hecho[i] === elemento){
            booleano = false;
            break; 
        }
    }

    return booleano; 
}


  function ventana(categoria, i){

    let timerInterval; 

    Swal.fire({      
        title: categoria[i],
        html: '<strong></strong><br/>' +        
        '</button><br/>' +
        '<button id="start" class = "start">' + frases[Math.floor(Math.random()*frases.length)] + '</button></br>',
        showCancelButton: false, 
        showConfirmButton: false,
        timer: 30000,
    didOpen: () => {
        
        swal.stopTimer()        
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
        const start = $('#start')
        
        start.addEventListener('click', () => {
            Swal.resumeTimer()      
        })

        timerInterval = setInterval(() => {
        Swal.getHtmlContainer().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
            .toFixed(0)
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval);
    },      
    })


  }

  function ventana2(categoria, i, cancion){

    let timerInterval; 

    Swal.fire({   
        title: categoria[i],
        html: cancion + '<strong></strong><br/>' +        
        '<button id="start" class = "start">' + frases[Math.floor(Math.random()*frases.length)] + '</button></br>',
        showCancelButton: false, 
        showConfirmButton: false,
        timer: 30000,
    didOpen: () => {
        swal.stopTimer()        
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
        const start = $('#start')             
        
        start.addEventListener('click', () => {
            Swal.resumeTimer()   
            var audplay = new Audio(sergio)
             audplay.play();   
        })

        timerInterval = setInterval(() => {            
        Swal.getHtmlContainer().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
            .toFixed(0)
        }, 100)
        
        
    },
    willClose: () => {   
        clearInterval(timerInterval);
    },      
            
    })


  }