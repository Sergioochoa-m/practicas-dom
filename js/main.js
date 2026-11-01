//VARIABLES

//Crear array para las imagenes del header
const arrayHeader = [ {
    imagen: "assets/banner/1.jpg",
    alt: "Atardecer",
    descripcion: "Atardecer en el pantano"
},
{
    imagen: "assets/banner/2.jpg ",
    alt: "Globos",
    descripcion: "Globos en cielo despejado"

},
{
    imagen: "assets/banner/3.jpg",
    alt: "Nubes",
    descripcion: "Atardecer entre nubes"

},
{
    imagen: "assets/banner/4.jpg",
    alt: "Campo de trigos",
    descripcion: "Globos en un campo de trigos"

},
{
    imagen: "assets/banner/5.jpg",
    alt: "Luna",
    descripcion: "Luna escondiendose entre las nubes"

},
{
    imagen: "assets/banner/6.jpg",
    alt: "Montaña nevada",
    descripcion: "Bonita montaña nevada"

},
{
    imagen: "assets/banner/7.jpg",
    alt: "Pajaros",
    descripcion: "Grupo de pajaros volando"

},
{
    imagen: "assets/banner/8.jpg",
    alt: "Rama",
    descripcion: "Polen blanco en la rama"

},]
const arrayCard = [{
    imagen: "assets/viajes/viajes-1.jpg",
    alt:"mujer en amaca",
    descripcion:"Mujer disfrutando sus vacaciones en cancun"
},
    {imagen:"assets/viajes/viajes-2.jpg",
    alt:"casetas sobre agua maldivas",
    descripcion:"Alojamientos en las maldivas sobre el agua"
},
{
    imagen:"assets/viajes/viajes-3.jpg",
    alt:"carteles señalando ciudades",
    descripcion:"multiples carteles señalando la direccion en la que se encuentran las ciudades"
},
{
    imagen:"assets/viajes/viajes-4.jpg",
    alt:"plaza españa de sevilla",
    descripcion:"La plaza españa de la ciudad de Sevilla, edificio"

},
{
    imagen:"assets/viajes/viajes-5.jpg",
    alt:"Puente sobre rio",
    descripcion:"Puente sobre el rio de la plaza españa de Sevilla"

},
{
    imagen: "assets/viajes/viajes-6.jpg",
    alt:"Tunel en carretera al lado del mar",
    descripcion:"Tunel en la carretera de Zumaia a Getaria"

},
{
    imagen: "assets/viajes/viajes-7.jpg",
    alt:"Antigua muralla",
    descripcion:"Antigua muralla situada en un pueblo de andalucia"

}]

function imagenesHeader () {
    const imagenAleatoria = Math.floor(Math.random() * arrayHeader.length)
    const imagenSel = arrayHeader[imagenAleatoria];

    const imagenCabecera = document.getElementById ("headerImg")

    imagenCabecera.setAttribute("src", imagenSel.imagen)
    imagenCabecera.setAttribute("alt",imagenSel.alt)

}
imagenesHeader();

//Dentro del array añadir los objetos con las propiedades de las imagenes
//Define otro array con las URLs de las imágenes de la galería y sus descripciones.
//


//----------------------------------------------------------------------------------------------------------------//


//EVENTOS



//FUNCIONES
/* funcion crearBanner
//funcion para crear header
//Meter la informacion en el src + en el alt


//Crear tarjetas(card) de la galeria
//Que tenga todo esto

        - crear un contenedor
        - crear el div para meter la imagen
        - crear elemento img cons sus atributos (alt,src)
        - crer la descripcion

        - meter la imagen en el div
        - meter en div, la descripcion

//Crear un bucle


//INVOCAR LA FUNCION

//nombre y ()*/
