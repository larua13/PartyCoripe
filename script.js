var mimicas = ['Spiderman', 'Piratas del Caribe', 'Harry Potter', 'La casa de Papel', 'Tiburón', 'Titanic', 'Star Wars', 'Grease', 'Indiana Jones',
    'E.T', 'Isla Mágica', 'La Warner', 'Terminator', 'Jurassic Park', 'Toy Story', 'Nemo', 'Haz twerk', 'Shrek', 'Avatar', '8 Apellidos Vascos', '8 Apellidos Catalanes', 
    'Padre no hay más que uno', 'A Todo Tren', 'Náufrago', 'El Resplandor', 'James Bond', 'El dinosaurio del Google sin internet', 'Volar', 'Montaña rusa', 'Momia', 
    'Crepúsculo', 'High School Musical', 'Inside Out', 'El señor de los anillos', 'Pepe montando a Irene en los contenedores', 'Escalada', 'Prueba de alcoholemia', 
    'Coger el AVE', 'Comer con palillos', 'Pablo López tocando el piano', 'Una serpiente', 'Victoria haciendo telas aéreas', 'Tocar el ukelele', 'Dora la exploradora', 
    'Bob Esponja', 'Doraemon', 'Matrix', 'La patrulla canina', 'Lady Bug', 'Mascotas', 'Los increíbles', 'Jugar al parchís con Paco y Juan', 'Toro de fuego', 'Quema del judas', 
    'Ducharse', 'Inflar una rueda', 'Cocinar espaguetis', 'Montar una tienda de campaña', 'Poner la lavadora', 'Hablar sordomudo como Chary y Victoria', 'Estar en un autobús y que de un frenazo',   
    'Los Sanfermines', 'Montar en bici', 'Tirarse de bomba a la piscina', 'Bailar un chotis', 'Ayuso en el balcón', 'Jugar a las palas en la playa', 'Chary y Mila comprando sandías', 
    'Victoria, Irene y Laura jugando al FIFA', 'La gymkhaja de los Reyes 2021', 'Irene patinando', 'Laura pinchándose con los erizos de la playa', 'Chary dando un mitin', 'Chary dando clase', 
    'Mila, Loren y Chary en el mercadillo', 'Pepe construyendo una maquinita', 'Victoria, Irene y Laura subiendo a la Giralda', 'Charlie y la fábrica de chocolate', 'Cortometraje El Pozo',
    'Cepillo Party', 'Jugando al party', 'Irene se despierta y tiene un gato en la cama', 'Hacerse una PCR', 'Jugar al bingo', 'Comer piquislabis en la playa', 'This is us', 'Matar moscas', 
    'Te pica un mosquito', 'Atar un hiscalillo', 'Clavar la sombrilla en la arena', 'Jugar con globos de agua', 'Victoria pescando con el tito Juan', 'Hacer ejercicio en casa', 'Nosotros en la nocturna',
    'Hacer buñuelos', 'Noche de karaoke', 'Mamma mia', 'Luca', 'Los minions', 'Saltar las olas', 'Comer churros en la pepa', 'Hacer croché', 'Nosotros haciendo la nocturna', 'Carmina o Revienta',
    'Jugar al basketwater en Barbate', 'Perder el bikini en la playa', 'Hacer snorkel', 'Oliver y Benji', 'Ir al Guadalpark', 'Tomar el fresco', 'Nadar a mariposa', 'Nadar a braza']

var telepatias = ['Marca de ropa', 'Comida', 'Bebida', 'Bebida alcohólica', 'Marca de zapatos', 'Marca deportiva', 'Marca de comida', 'Sabor de helado', 
    'Sabor de té', 'Bebida sin azúcar', 'Deporte', 'Deporte acuático', 'Deporte con pelota', 'Juego de mesa', 'Videojuego', 'Asignatura del cole', 'Marca de tecnología', 
    'Dispositivo electrónico', 'Marca de relojes', 'Marca de joyería', 'Centro comercial', 'Supermercado', 'Tienda de muebles', 'Actor español', 'Actriz española', 
    'Actor extranjero', 'Actriz extranjera', 'Director de cine', 'Marca de coche', 'Marca de moto', 'Cantante', 'Canción', 'País europeo', 'País asiático', 'País americano', 
    'País sudamericano','Continente', 'Grupo de cantantes', 'Dúo de cantantes', 'Cómico', 'Juguete', 'Canción de los 2000', 'Película', 'Serie', 'Aplicación de chat', 
    'Aplicación del móvil', 'Red social', 'Plato típico andaluz', 'Plato típico de Alcalá de Henares', 'Color', 'Provincia de España', 'Ciudad de España', 'Pueblo de Madrid',
    'Provincia de Andalucía', 'Plataforma streaming', 'Instrumento musical', 'Parte del cuerpo', 'Hueso', 'Músculo', 'Manera de morir', 'Dibujitos', 'Cómic',
    'Una palabra que empiece por vocal', 'Festival de música', 'Río', 'Mar', 'Océano', 'Un artículo de papelería', 'Un utensilio de maquillaje', 'Un utensilio de cocina', 
    'Electrodoméstico', 'Árbol', 'Insecto', 'Mamífero', 'Ave', 'Reptil', 'Anfibio', 'Plato italiano', 'Plato chino', 'Plato francés', 'Destino nuestro de vacaciones', 'Un contenedor',
    'Piedra, papel, tijera', 'Un familiar', 'Un primo', 'Una prima', 'Un tito', 'Una tita', 'Un pueblo de Mallorca', 'Un color del parchís', 'Un juego de cartas', 'Un palo de la baraja',
    'Una canción de Casa Piscinita', 'Un juego de la switch', 'Una videoconsola', 'Un sabor de aceitunas', 'Un partido político', 'Un político', 'Una verdura del huerto del Paco', 'Un embutido', 
    'Un parque de atracciones', 'Una amiga de Victoria', 'Un jugador del Sevilla', 'Un jugador del Madrid', 'Un pueblo de Cádiz', 'Un pueblo de Sevilla', 'Un sabor de helado']

var dibujos = ['Vaca', 'Caballo', 'Delfín', 'Voldemort', 'Teclado', 'Ratón', 'Pulpo', 'Oveja', 'Mapa', 'Regadera', 'Brújula', 'Mariposa', 'Caramelo', 'Monopatín', 'Patín eléctrico',
    'Bicicleta', 'Pollo asao', 'Kayak', 'Paddle Surf', 'Mariquita', 'Matamoscas', 'Lavavajillas', 'Lavadora', 'Secadora', 'Sartén', 'Overcooked', 'La Plaza España', 'La Giralda', 
    'Las Setas', 'Laura', 'Chary', 'Irene', 'Victoria', 'Pepe', 'Loren', 'Mila', 'Tito Paco', 'Tita Lourdes', 'Tito Juan', 'Prima María', 'Prima Sandra', 'Tita Cristina', 'Tito Pepe', 'Tita Silvia', 'Paella del tito Pepe',  
    'Test COVID', 'Mascarilla', 'Erizo', 'Victoria en el concierto de Camilo', 'Cebra', 'Bicicleta', 'Huevo frito', 'Mojito de Casa Piscinita', 'Tita Mari', 'Tito Cristóbal', 'Primo Carlos', 'La gata Piruleta', 'Raquel, novia de Carlos',
    'Alcalá de Henares', 'Cervantes', 'Coripe', 'La Giralda', 'Quema del Judas', 'Cabezudos de Alcalá', 'Costrada', 'Coches locos', 'Toro mecánico', 'Una mahou fresquita', 'Pocoyó', 'La piedra de Matalascañas', 
    'Colchoneta del flamenco', 'Victoria haciendo la comunión', 'Pepe en la fábrica', 'Paso de semana santa', 'Feria de Sevilla', 'Mercado medieval', 'Queso', 'Jamón', 'Manuel Carrasco', 'Guitarra',
    'Chicharrón', 'Chicharrones', 'La piscina de Coripe', 'El huerto del Domingo de Resurreción', 'La casa de allá atrás', 'El limonero', 'Chary y Mila tomando el sol', 'Loren dormido en la playa',
    'Crucigrama', 'Pasapalabra', 'Snorkel', 'Juego Virus', 'Rotonda de la Tita Mari', 'Conejo', 'Cabra', 'Toro', 'Gato', 'Perro', 'Bobi', 'Gazpacho', 'Couscous', 'Mejillones rellenos', 'Abuela', 'Abuelo', 'Gallina',
    'Sweet California', 'Váter', 'Ducha', 'Lavabo', 'Coronavirus', 'Nevera', 'Sofá', 'Silla de escritorio', 'Flexo', 'Collar luna', 'Irene de fisio rehabilitando', 'Chary recibiendo punción seca',
    'Victoria marcando un gol', 'La nocturna de Coripe', 'El chalet de Barbate', 'Mosquito', 'El escudo del Sevilla', 'El escudo del Madrid', 'El escudo del Cádiz', 'Tirarse de bomba', 'Arcoíris (unicornio de Victoria)',
    'La Warner', 'Una chancla', 'Un cangrejo', 'Cine', 'El limonero de la abuela', 'La plaza de Coripe', 'Parchís', 'Ajedrez']

var imitar = ['Acento: argentino', 'Imitación: minion', 'Acento: cubano', 'Imitación: animal crossing', 'Acento: vasco', 'Acento: andaluz', 'Acento: mexicano', 'Acento: gallego', 'Acento: portugués', 'Acento: catalán', 'Acento: un reggetonero, mi amol', 
    'Imitación: Sebastián Yatra', 'Acento: un chino hablando español', 'Acento: un inglés hablando español', 'Acento: un francés hablando español', 'Imitación: Gloria Serra', 'Imitación: tito Paco', 'imitación: tito Juan',
    'Imitación:Manuel Carrasco', 'Imitación: Rajoy', 'Imitación: Juan Carlos I ', 'Acento: venezolano', 'Acento: cordobés', 'Acento: madrileño', 'Acento: un ruso hablando español', 'Imitación: Shakira', 'Imitación: Amaia Montero',
    'Imitación: Dani Martín', 'Imitación: Voldemort','Imitación: Pikachu', 'Acento: italiano', 'Imitación: Mickey Mouse', 'Imitación: Shin Chan', 'Imitación: Miguel Bosé', 'Imitación: Homer', 'Imitación: Matías Pratts',
    'Imitación: Belén Esteban', 'Imitación: Raphael', 'Imitación: Yoda', 'Acento: un turco hablando español', 'Imitación: Michael Jackson', 'Imitación: Camilo', 'Imitación: Duquesa de Alba', 'Imitación: Mario Vaquerizo', 
    'Imitación: Boris Izaguirre', 'Imitación: Jack Sparrow', 'Imitación: Rafa Nadal', 'Imitación: Ed Sheeran', 'Imitación: Pedro Sánchez', 'Imitación: Vanesa Martín', 'Imitación: Malú', 'Imitación: Pablo Alborán', 'Imitación: Pablo López'
    ,'Imitación: Sweet California', 'Imitación: la Rosalía', 'Imitación: Sergio Dalma' , 'Imitación: David Bisbal', 'Imitación: David Bustamante', 'Imitación: Fernando Simón', 'Imitación: Ayuso', 'Imitación: Dark Vather', 'Acento: gitano', 'Imitación: C Tangana']

var canciones = ['Zapatillas, El canto del loco', 'Nada que perder, Pignoise', 'Cuando zarpa el amor, Camela', 'Como Camarón, Estopa', 'Por la raja de tu falda, Estopa', 
    'Caminando por la vida, Melendi', 'Tacones Rojos, Sebastián Yatra',  'Perfect, Ed Sheeran', 'Shape of you, Ed Sheeran', 'Física o química, Despistaos', 
    'El himno del Sevilla, El Arrebato', 'Sevilla tiene un color especial, Los del Río','La Macarena, Los del Río', 'Me colé en una fiesta, Mecano', '1+1 son 7, Fran Perea', 
    'Corazón partío, Alejandro Sanz', 'La Flaca, Jarabe de Palo', 'Vida de Rico, Camilo', 'Mi estrella Blanca, Fondo Flamenco', 'Opa, yo viacé un corrá, El Koala', 'Hola mi bebebé, WRS', 
    'Todo de ti, Rawl Alejandro', 'Malamente, Rosalía', 'Tú me dejaste de querer, C Tangana', 'Millones, Camilo', 'Terriblemente Cruel, Leiva', 'Danza Kuduro, Don Omar', 'Dont start now, Dua Lipa', 'Propuesta Indecente, Romeo Santos', 'Días de verano, Amaral', 'The Lazy Song, Bruno Mars', 
    'Ram pam pam, Natti Natasha feat. Becky G', 'Alejandro, Lady Gaga', 'Tusa, Karol G feat. Nicki Minaj', 'bad guy, Billie Ellish', 'Toxic, Britney Spears', 'La casa por el tejado, Fito y Fitipaldis',
    'Mala mujer, C. Tangana', 'Aserejé, Las Ketchup', 'Antes muerta que sencilla, María Isabel', 'Veneno pa tu piel, La Veneno', 'Sarandonga, Lolita Flores', 'Sin pijama, Natti Nattasha feat. Becky G', 'A quién le importa, Alaska', 'Wannabe, Spice Girls', 'Under pressure, Queen',
    'Búscate un hombre que te quiera, El Arrebato', 'Pasado Pisado, Comando Tiburón', 'Gasolina, Daddy Yankee', 'Bailar Pegados, Sergio Dalma', 'Galilea, Sergio Dalma', 'Thriller, Michael Jackson', 'Smooth Criminal, Michael Jackson', 
    'Charycruuuz (Daddy Cool, Boney M.)', 'Mi gran noche, Raphael', 'Escándalo, Raphael', 'Marinero de Luces, Isabel Pantoja', 'Se me enamora el alma, Isabel Pantoja', 'Como una ola, Rocío Jurado', 'Ave María, David Bisbal', 'Si tú la quieres, David Bisbal y Aitana', 'Bulería, David Bisbal',
    'Bella Ciao', 'Youngblood, 5SOS', 'Qué bonito es querer, Manuel Carrasco', 'Mujer bruja, Lola Índigo', 'Noches de Bohemia, Navajita Plateá', 'El anillo, JLO', 'Volare, Gipsy Kings', 'Djobi, Djoba, Gipsy Kings', 'Bad romance, Lady Gaga', 'Mi persona Favorita, Alejandro Sanz y Camila Caballo',
    'El del medio de los chichos, Estopa', 'Mamma mia', 'Gimme! Gimme! Gimme!, Mamma mia', 'Ven conmigo Pepe, Christina Aguilera', 'Bad Habits, Ed Sheeran', 'City of Stars, La La Land', 'Horóscopo, David Rees', 'Mon amour, Aitana y Zoilo', 'Inventas, Vanesa Martín', 'Solamente tú, Pablo Alborán', 
    'El patio, Pablo López', 'Toda, Malú']

var spoty = ['"https://open.spotify.com/embed/track/42VgiRyg0YjtRVLiPFNxPJ?utm_source=generator"', /*Zapatillas*/
    '"https://open.spotify.com/embed/track/0YSaKC66FGCWLxM9SoQA1f?utm_source=generator"', /*Nada q */
    '"https://open.spotify.com/embed/track/0GzQB5WXavUEU8tfTCAd8m?utm_source=generator"', /*Cuando zarpa*/
    '"https://open.spotify.com/embed/track/1VB4sadHjFcFklHcZuoROi?utm_source=generator"', /*Como camarón*/
    '"https://open.spotify.com/embed/track/5OaqffbeQyVVqtnA71Ci7K?utm_source=generator"',/*por la raja*/
    '"https://open.spotify.com/embed/track/3v1dCP3hk2djfWryqfp7sx?utm_source=generator"', /*caminando*/
    '"https://open.spotify.com/embed/track/0Be7sopyKMv8Y8npsUkax2?utm_source=generator"', /*tacones*/
    '"https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator"',/*perfect*/
    '"https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3?utm_source=generator"',/*shape*/
    '"https://open.spotify.com/embed/track/79eUc9cUUoUOO1b5znphiU?utm_source=generator"',/*fisica*/
    '"https://open.spotify.com/embed/track/4UqHkgithEYNr32AbABaDr?utm_source=generator"',/*himno*/
    '"https://open.spotify.com/embed/track/1x8tjll0oP07qkZWVtm8ap?utm_source=generator"',/*sevilla tiene*/
    '"https://open.spotify.com/embed/track/4Y6cDd4EPHcEbiUKdyvNwM?utm_source=generator"', /*la macarena*/
    '"https://open.spotify.com/embed/track/4JOsL8WntMIwDeNQlKAwdA?utm_source=generator"', /*me colé*/
    '"https://open.spotify.com/embed/track/3Af6XfS90PAZaC4Q2AjPtg?utm_source=generator"',/*1+1*/
    '"https://open.spotify.com/embed/track/0wQCKR9OFjYu5Kzrk7WivJ?utm_source=generator"',//Corazon partio
    '"https://open.spotify.com/embed/track/2LsbizbOeNa4x6qsi2jAMb?utm_source=generator"', /*La flaca*/
    '"https://open.spotify.com/embed/track/4nTduFjaTmGysc9WKNuCcs?utm_source=generator"', /*vida de rico*/
    '"https://open.spotify.com/embed/track/15h9quQgltWsgYsdqSyPNb?utm_source=generator"', /*fondo*/
    '"https://open.spotify.com/embed/track/29xwXTI483gmpvr6pKSag0?utm_source=generator"', /*opá*/
    '"https://open.spotify.com/embed/track/3n9qn38IhqkC7DcdIRaM9q?utm_source=generator"', /* mi bebebé*/
    '"https://open.spotify.com/embed/track/4fSIb4hdOQ151TILNsSEaF?utm_source=generator"', /*todo d ti*/
    '"https://open.spotify.com/embed/track/5zOAudPQIs5U8zP6LQGHmH?utm_source=generator"', /*malamente*/
    '"https://open.spotify.com/embed/track/5ddFjrPG8NgQQ6xlOQIVd2?utm_source=generator"', /*tu me dejaste*/
    '"https://open.spotify.com/embed/track/3YAnNBdk0uHyakXXzMbNJq?utm_source=generator"',/*millones*/
    '"https://open.spotify.com/embed/track/0XPayKZFFZA2PwSRNi1pVU?utm_source=generator"',//terriblemente cruel
    '"https://open.spotify.com/embed/track/4sCSUQnWQ6HJsOMjfPicdn?utm_source=generator"', //danza kuduro
    '"https://open.spotify.com/embed/track/6WrI0LAC5M1Rw2MnX2ZvEg?utm_source=generator"', //dont start now
    '"https://open.spotify.com/embed/track/5PycBIeabfvX3n9ILG7Vrv?utm_source=generator"', //propuesta indecente
    '"https://open.spotify.com/embed/track/3JhllUTyXy2ceSTzNSErBC?utm_source=generator"', //dias de verano    
    '"https://open.spotify.com/embed/track/386RUes7n1uM1yfzgeUuwp?utm_source=generator"', //lazy song
    '"https://open.spotify.com/embed/track/4DHDIdeayp8xvlyg22wREO?utm_source=generator"', //ram pam 
    '"https://open.spotify.com/embed/track/3clsCV1f1E9u1Fge9ntulk?utm_source=generator"', //lady gaga
    '"https://open.spotify.com/embed/track/7k4t7uLgtOxPwTpFmtJNTY?utm_source=generator"', //tusa
    '"https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m?utm_source=generator"', //billie 
    '"https://open.spotify.com/embed/track/6I9VzXrHxO9rA9A5euc8Ak?utm_source=generator"', //toxica
    '"https://open.spotify.com/embed/track/428cFrawSqeLoyooQjAW9d?utm_source=generator"',//x tejado
    '"https://open.spotify.com/embed/track/6puxHBNwu2Nmm7uD3Rd2MP?utm_source=generator"', //mala muje
    '"https://open.spotify.com/embed/track/6yCM4N4v44c3xoMORrhLwW?utm_source=generator"', //aserejé
    '"https://open.spotify.com/embed/track/3QncI2MDoSto39bT8SJtKK?utm_source=generator"', //antes muerta
    '"https://open.spotify.com/embed/track/0L200jJnjlpQPmK9x6fd7j?utm_source=generator"', //veneno
    '"https://open.spotify.com/embed/track/2zNDRGoRkNEkMhO5fcGTMv?utm_source=generator"', //Sarandonga
    '"https://open.spotify.com/embed/track/2ijef6ni2amuunRoKTlgww?utm_source=generator"' //pijama
    ,'"https://open.spotify.com/embed/track/7Eb5AYiiGWItBNddlmxvnh?utm_source=generator"', //a quién
    '"https://open.spotify.com/embed/track/1Je1IMUlBXcx1Fz0WE7oPT?utm_source=generator"', //wannabe
    '"https://open.spotify.com/embed/track/2fuCquhmrzHpu5xcA1ci9x?utm_source=generator"', //underpressure
    '"https://open.spotify.com/embed/track/4ppxWzgjvst4Mv1Kpwooeh?utm_source=generator"', //arrebato
    '"https://open.spotify.com/embed/track/5RZTA3NhiHR2408da3HMNz?utm_source=generator"', //pasado pisado
    '"https://open.spotify.com/embed/track/228BxWXUYQPJrJYHDLOHkj?utm_source=generator"', //gasolina
    '"https://open.spotify.com/embed/track/4QkQmdvFjEVvjc1ONi6t6N?utm_source=generator"', //bailar pegados
    '"https://open.spotify.com/embed/track/1V7FkKnkA3Gq1fkGayioSI?utm_source=generator"', //galilea
    '"https://open.spotify.com/embed/track/3S2R0EVwBSAVMd5UMgKTL0?utm_source=generator"', //thriller
    '"https://open.spotify.com/embed/track/2bCQHF9gdG5BNDVuEIEnNk?utm_source=generator"', //smooth
    '"https://open.spotify.com/embed/track/3WMbD1OyfKuwWDWMNbPQ4g?utm_source=generator"', //daddy cool
    '"https://open.spotify.com/embed/track/6Tnnk7MAnZiDx67DJN2hnx?utm_source=generator"', //mi gran noche
    '"https://open.spotify.com/embed/track/3xbymP6jIcdN0O2PB420bz?utm_source=generator"', //escándalo
    '"https://open.spotify.com/embed/track/24UBqV1xJwNUns7nJVIbDu?utm_source=generator"', //marinero de luse
    '"https://open.spotify.com/embed/track/0XkGZePDg5JLvDRUFj4ALH?utm_source=generator"', //se me enamora
    '"https://open.spotify.com/embed/track/4x1SuI9nPq9tWeEbaRDUsM?utm_source=generator"', //como una ola
    '"https://open.spotify.com/embed/track/5U4pDBaeq2Jl2dKuWWUSsh?utm_source=generator"', //ave maría
    '"https://open.spotify.com/embed/track/5agt9CgF8dTRXgNtn1zflm?utm_source=generator"', //si tú la quieres
    '"https://open.spotify.com/embed/track/2s7WJ9IRON5zalNbfFY1xa?utm_source=generator"', //bulería
    '"https://open.spotify.com/embed/track/5XYPTwya4YqPystALy9cLJ?utm_source=generator"', //bella ciao
    '"https://open.spotify.com/embed/track/2iUXsYOEPhVqEBwsqP70rE?utm_source=generator"', //5sos,
    '"https://open.spotify.com/embed/track/6uzGmmQ4CuG9HvZktEy0LF?utm_source=generator"', //Q bontio
    '"https://open.spotify.com/embed/track/4R8TsvDoKSSDVERlaphNBA?utm_source=generator"', //mujer bruja
    '"https://open.spotify.com/embed/track/1JpZMDDAkfhnrO6nXIQZ2g?utm_source=generator"', //noches bohenmia
    '"https://open.spotify.com/embed/track/2SpfMQ5TuKsMj1trNwrLVA?utm_source=generator"', //El anillo
    '"https://open.spotify.com/embed/track/4OjJAGDDZTLlTNeOMBl7UM?utm_source=generator"', //volare
    '"https://open.spotify.com/embed/track/2Mz7HwloqFNdA6iZeZk5PJ?utm_source=generator"', //djobi
    '"https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn?utm_source=generator"', //bad romance
    '"https://open.spotify.com/embed/track/3eB9M6owEHwk4nNrZRNUwd?utm_source=generator"', //favorita
    '"https://open.spotify.com/embed/track/4UMCpYrmgZv9CsyLvrws4F?utm_source=generator"', //chichos
    '"https://open.spotify.com/embed/track/717z018DWodjJnW6DE7t4z?utm_source=generator"', //mamma mia
    '"https://open.spotify.com/embed/track/3vkQ5DAB1qQMYO4Mr9zJN6?utm_source=generator"', //gimme
    '"https://open.spotify.com/embed/artist/1l7ZsJRRS8wlW3WfJfPfNS?utm_source=generator"', //conmigo pepe
    '"https://open.spotify.com/embed/track/6PQ88X9TkUIAUIZJHW2upE?utm_source=generator"', //bad habits
    '"https://open.spotify.com/embed/track/6XQHlsNu6so4PdglFkJQRJ?utm_source=generator"', //city stars
    '"https://open.spotify.com/embed/track/51L4d8YoozF4dmqxmAQtVN?utm_source=generator"', //horoscoppo    
    '"https://open.spotify.com/embed/track/5TMLavqGRKNxgzMBrVpC9R?utm_source=generator"', //mon amour
    '"https://open.spotify.com/embed/track/48eeeHvDzNvtJiQh5XDs2N?utm_source=generator"', //inventas
    '"https://open.spotify.com/embed/track/7sRXhReWmJF5pqyg3uUTES?utm_source=generator"', //solamente tú
    '"https://open.spotify.com/embed/track/5Z2OHghVzPn8qyCyIbDy4m?utm_source=generator"', //patio
    '"https://open.spotify.com/embed/track/7fJzhcQYEa1NlmQiUcEDkd?utm_source=generator"', //toda
]  

var frases = ['Vamoh ratona', 'Sujétame la fanta', 'Oleee, eso está chupao', 'Enga, enga', 'Amonoh', '¿Solo eso? Va', 'Te vas a cagá', 
    'Ponme algo más difíci, mi arma', 'Hubiera preferido caerme por Despeñaperros', 'Con los ojos serraos, chavá', 'Y haciendo el pino si quieres', 'Tas colao',
    'Hasta luego, Mari Carmen', 'Hasta luego, Mari Lolo', 'Okey makey', 'Chao pescao', 'Easy peasy', 'Dale gaxi', 'Susto o muete', 'Me ayuda Piruleta', 'Y después un piquislabis', '¡Me encanta!']

var tarareoHecho = []; 
var mimicaHecha = []; 
var telepatiaHecha = []; 
var dibujarHecho = []; 
var imitaHecho = [];
var sergio = "files/30.wav";
var sergio90 = "files/90.wav";

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

  function final(){
    let mimica = Math.floor(Math.random()*mimicas.length);
    
    if (mimicaHecha.length === mimicas.length){
        mimicaHecha = []; 
    }

    while (!comprobar(mimica, mimicaHecha)){
        mimica = Math.floor(Math.random()*mimicas.length);
    }
    
    mimicaHecha.push(mimica);
    console.log("Mimica: " + mimicas.length + "telepatía: " + telepatias.length + "dibujo: " + dibujos.length + 'canciones: ' + canciones.length + " imitaciones: " + imitar.length);
    
    let telepatia = Math.floor(Math.random()*telepatias.length);

    if (telepatiaHecha.length === telepatias.length){
        telepatiaHecha = []; 
    }

    while (!comprobar(telepatia, telepatiaHecha)){
        telepatia = Math.floor(Math.random()*telepatias.length);
    }

    telepatiaHecha.push(telepatia);

    let dibuja = Math.floor(Math.random()*dibujos.length);

    if (dibujarHecho.length === dibujos.length){
        dibujarHecho = []; 
    }

    while (!comprobar(dibuja, dibujarHecho)){
        dibuja = Math.floor(Math.random()*dibujos.length);
    }

      dibujarHecho.push(dibuja);

      let imitaOtararea = Math.random() < 0.5; 
    
      if (imitaOtararea){
          let cancion = Math.floor(Math.random()*canciones.length);
  
          if (tarareoHecho.length === canciones.length){
              tarareoHecho = []; 
          }
          
          while (!comprobar(cancion, tarareoHecho)){
              cancion = Math.floor(Math.random()*canciones.length);
          }
  
          ventanaFinal(mimicas, mimica, telepatias, telepatia, dibujos, dibuja, canciones, cancion);
      
          tarareoHecho.push(cancion);
      }else{
  
          let imitacion = Math.floor(Math.random()*imitar.length);
  
          if (imitaHecho.length === imitar.length){
              imitaHecho = []; 
          }
          
          while (!comprobar(imitacion, imitaHecho)){
              imitacion = Math.floor(Math.random()*imitar.length);
          }
      
          imitaHecho.push(imitacion);

          ventanaFinal(mimicas, mimica, telepatias, telepatia, dibujos, dibuja, imitar, imitacion);
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
        '<div class = "flex"><button id="start" class = "start">' + frases[Math.floor(Math.random()*frases.length)] + '</button>' +
        '<button id = "salir" class = "salir"><i class = "material-icons">stop</i></button></div>',
        showCancelButton: false, 
        showConfirmButton: false,
        timer: 30000,
        allowOutsideClick: false,

        
    didOpen: () => {

        let audplay = new Audio(sergio);
        
        swal.stopTimer()        
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
        const start = $('#start')
        const salir = $('#salir')
        
        start.addEventListener('click', () => {
            Swal.resumeTimer()   
            audio(audplay, 1);   
        })

        salir.addEventListener('click', () =>{
            audio(audplay, 0);
            Swal.close();
        } )

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

function audio(audplay, boleana){
    if (boleana == true){        
        audplay.play();
    }else{
        audplay.pause();
    }
}

function ventana2(categoria, i, cancion){

    let timerInterval; 

    
    Swal.fire({      
        title: categoria[i],
        html: cancion + '<strong></strong><br/>' +        
        '</button><br/>' +
        '<div class = "flex"><button id="start" class = "start">' + frases[Math.floor(Math.random()*frases.length)] + '</button>' +
        '<button id = "salir" class = "salir"><i class = "material-icons">stop</i></button></div>',
        showCancelButton: false, 
        showConfirmButton: false,
        timer: 30000,
        allowOutsideClick: false,

        
    didOpen: () => {

        let audplay = new Audio(sergio);
        
        swal.stopTimer()        
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
        const start = $('#start')
        const salir = $('#salir')
        
        start.addEventListener('click', () => {
            Swal.resumeTimer()   
            audio(audplay, 1);   
        })

        salir.addEventListener('click', () =>{
            audio(audplay, 0);
            Swal.close();
        } )

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

  function ventanaFinal(categoria, i, categoria2, i2, categoria3, i3, categoria4, i4){

    let timerInterval; 
    
    Swal.fire({      
        title: '<span class = "categoria1">MÍMICA:</span></br>' + categoria[i] + 
        '</br><span class = "categoria2"></br>TELEPATÍA:</span></br> ' + categoria2[i2] + 
        '</br><span class = "categoria3"></br>DIBUJA: </span></br>' + categoria3[i3] + 
        '</br><span class = "categoria4"></br>IMITA O TARAREA:</span></br> ' + categoria4[i4],
        html: '<strong></strong><br/>' +        
        '</button><br/>' +
        '<div class = "flex"><button id="start" class = "start">' + frases[Math.floor(Math.random()*frases.length)] + '</button>' +
        '<button id = "salir" class = "salir"><i class = "material-icons">stop</i></button></div>',
        showCancelButton: false, 
        showConfirmButton: false,
        timer: 90000,
        allowOutsideClick: false,

    didOpen: () => {

        let audplay = new Audio(sergio90);
        
        swal.stopTimer()        
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
        const start = $('#start')
        const salir = $('#salir')
        
        start.addEventListener('click', () => {
            Swal.resumeTimer()   
            audio(audplay, 1);   
        })

        salir.addEventListener('click', () =>{
            audio(audplay, 0);
            Swal.close();
        } )

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


