const preguntas = [
    {
        pregunta: "1. ¿Que funcion realiza la Unidad de Control dentro de la CPU?",
        respuestas: [
            "Lee las instrucciones y genera señales de control",
            "Ejecuta instrucciones y almacena resultados",
            "Lee datos y los convierte en señales eléctricas",
            "Controla el acceso a la memoria principal"
        ],
        correcta: 0
    },
{
        pregunta: "2. ¿Como trabaja la ALU para ejecutar operaciones?",
        respuestas: [
            "Realiza calculos y operaciones logicas",
            "Interpreta instrucciones y gestiona el flujo de datos",
            "Almacena datos y controla dispositivos externos",
            "Ejecuta programas y gestiona la memoria"
        ],
        correcta: 0
    },
    {
        pregunta: "3. ¿Que papel cumple el banco de registros durante la ejecucion de instrucciones?",
        respuestas: [
            "Almacena datos temporalmente durante la ejecucion de instrucciones",
            "Coordina el acceso a los buses de datos",
            "Ejecuta operaciones lógicas y aritméticas",
            "Controla el almacenamiento permanente de datos"
        ],
        correcta: 0
    },
    {
        pregunta: "4. ¿Que tipo de informacion almacena la memoria principal y por que es esencial para el funcionamiento del sistema?",
        respuestas: [
            "Almacena intrucciones y datos. Es esencial porque permite ejecutar programas y gestionar la informacion",
            "Almacena archivos multimedia. Es esencial porque permite reproducir contenido sin interrupciones",
            "Almacena datos gráficos. Es esencial porque mejora el rendimiento visual del sistema",
            "Almacena configuraciones del sistema. Es esencial porque mantiene la estabilidad del equipo"
        ],
        correcta: 0
    },
    {
        pregunta: "5. ¿Que hacen los dispositivos de E/S?",
        respuestas: [
            "Permiten la comunicacion entre el equipo y el exterior",
            "Ejecutan instrucciones del sistema operativo",
            "Controlan el flujo de energía entre componentes",
            "Almacenan datos en la memoria principal"
        ],
        correcta: 0
    },
    {
        pregunta: "6. ¿Que tipos de informacion transportan los buses?",
        respuestas: [
            "Transporta datos, direcciones y señales de control",
            "Transporta instrucciones y resultados finales",
            "Transmite energía y señales de audio",
            "Gestiona el acceso a dispositivos externos"
        ],
        correcta: 0
    },
    {
        pregunta: "7. ¿Que es un programa?",
        respuestas: [
            "Conjunto de instrucciones almacenadas secuencialmente en memoria",
            "Grupo de datos que se procesan automáticamente",
            "Archivo que contiene imágenes y sonidos",
            "Sistema que gestiona el hardware del equipo"
        ],
        correcta: 0
    },
 {
        pregunta: "8. ¿Como consigue el equipo recibir y procesar el audio?",
        respuestas: [
            "Convierte las ondas sonoras en señales electricas",
            "Convierte señales eléctricas en datos visuales",
            "Codifica imágenes en formato binario",
            "Transforma datos en instrucciones para el sistema operativo"
        ],
        correcta: 0
    },
 {
        pregunta: "9. ¿Como consigue el equipo recibir y procesar el video?",
        respuestas: [
            "Convierte cada frame en pixeles codificados en binario para que el sistema los procese",
            "Convierte cada píxel en señales eléctricas para el monitor",
            "Almacena el vídeo directamente en la memoria ROM",
            "Codifica el vídeo en formato hexadecimal para su reproducción"
        ],
        correcta: 0
    },
 {
        pregunta: "10. ¿Que funcion cumple el firmware dentro del hardware?",
        respuestas: [
            "Traducir ordenes externas para que el HW las ejecute",
            "Ejecutar instrucciones del sistema operativo directamente",
            "Controlar la velocidad de procesamiento de la CPU",
            "Convertir señales eléctricas en datos binarios para la memoria"
        ],
        correcta: 0
    },
 {
        pregunta: "11. ¿Que tareas realiza el sistema operativo en un equipo informatico?",
        respuestas: [
            "Gestiona el HW, ejecuta programas y permite la interaccion con el usuario",
            "Controla el flujo eléctrico, gestiona la refrigeración y activa el monitor",
            "Ejecuta instrucciones de la BIOS y almacena datos en la ROM",
            "Coordina la red, imprime documentos y apaga el sistema automáticamente"
        ],
        correcta: 0
    },
 {
        pregunta: "12. ¿Que necesita una aplicacion para poder ejecutarse correctamente?",
        respuestas: [
            "Requiere de un SO, espacio en disco duro, procesador y RAM",
            "Necesita una tarjeta gráfica, conexión a internet y sistema de refrigeración",
            "Requiere acceso al BIOS, batería externa y disco óptico",
            "Solo necesita espacio en disco y una fuente de alimentación"
        ],
        correcta: 0
    },
 {
        pregunta: "13. ¿Que aspectos regula una licencia software?",
        respuestas: [
            "Numero de copias permitidas, derechos del usuario sobre el programa, responsabilidad del proveedor ante fallos",
            "Condiciones de instalación, compatibilidad con el hardware y frecuencia de actualizaciones del sistema",
            "Tipos de archivos que puede abrir, duración de la sesión y velocidad de ejecución del programa",
            "Acceso a funciones avanzadas, soporte técnico incluido y requisitos mínimos de red para su uso"
        ],
        correcta: 0
    },
 {
        pregunta: "14. ¿Que diferencia hay entre licencia permisiva y no permisiva de codigo abierto?",
        respuestas: [
            "Permisiva: Se puede modificar y crear derivados sin tener la misma licencia | No Permisivas: La modificacion tienen que conservar la licencia original",
            "Permisiva: Permite distribuir sin modificar | No permisiva: Solo permite uso personal sin distribución",
            "Permisiva: La modificacion tienen que conservar la licencia original | No Permisivas: Se puede modificar y crear derivados sin tener la misma licencia",
            "Permisiva: Se puede usar en cualquier sistema | No permisiva: Solo se permite en sistemas certificados"
        ],
        correcta: 0
    },
 {
        pregunta: "15. ¿Que ofrece el software libre al usuario?",
        respuestas: [
            "Permite ejecutar, copiar, modificar y distribuir sin restricciones",
            "Permite usar el software solo en modo lectura",
            "Permite modificar el hardware del equipo",
            "Permite acceder al sistema operativo sin contraseña"
        ],
        correcta: 0
    },
 {
        pregunta: "16. ¿Que restricciones impone el software propietario al usuario?",
        respuestas: [
            "Limita el uso, copia, modificacion, redistribucion y sin acceso al codigo",
            "Permite modificar el código y compartirlo libremente",
            "Solo impide la instalación en sistemas antiguos",
            "Limita el acceso a internet y al hardware externo"
        ],
        correcta: 0
    },
{
        pregunta: "17. ¿Que caracteristicas tienen el freeware, shareware y el software de dominio publico?",
        respuestas: [
            "Freeware: Gratuito, sin acceso al codigo y no modificable | Shareware: Version de prueba | Dominio publico: Sin restricciones",
            "Freeware: Sin restricciones | Shareware: Gratuito, sin acceso al codigo y no modificable | Dominio público: Version de prueba",
            "Freeware: Version de prueba | Shareware: Sin restricciones | Dominio público: Gratuito, sin acceso al codigo y no modificable",
            "Freeware: Modificable | Shareware: Gratuito completo | Dominio público: Requiere registro"
        ],
        correcta: 0
    },
{
        pregunta: "18. ¿Que modalidades de comercializacion existen para el software propietario?",
        respuestas: [
            "Retail, OEM, licencias por volumen",
            "Libre, compartido, comunitario",
            "Beta, Alfa, Gamma",
            "Básico, avanzado, premium"
        ],
        correcta: 0
    },
{
        pregunta: "19. ¿Que beneficios ofrece el software libre?",
        respuestas: [
            "Mayor seguridad, rapida solucion de fallos, acceso al codigo fuente, instalacion ilimitada, economico",
            "Menor coste, acceso limitado a funciones, posibilidad de compartir en redes locales, soporte parcial",
            "Instalación sencilla, interfaz amigable, acceso a manuales, compatibilidad con periféricos básicos",
            "Actualizaciones automáticas, uso sin conexión, control de usuarios, soporte en varios idiomas"
        ],
        correcta: 0
    },
{
        pregunta: "20. ¿Que desventajas puede tener el software libre?",
        respuestas: [
            "Problemas con drivers, menor presencia en el mercado, mayor esfuerzo formativo, menor disponibilidad de juegos",
            "Requiere conexión constante, no permite instalación en discos externos, interfaz poco personalizable",
            "No incluye manuales, necesita licencia adicional, solo funciona en sistemas antiguos",
            "Limitado a tareas básicas, sin acceso a redes, no compatible con formatos multimedia populares"
        ],
        correcta: 0
    },
{
        pregunta: "21. ¿Que es el chasis para el equipo?",
        respuestas: [
            "Estructura que contiene todos los componentes",
            "Compartimento que almacena los datos del sistema operativo",
            "Dispositivo que regula la temperatura interna del equipo",
            "Elemento que permite la conexión entre periféricos y el sistema"
        ],
        correcta: 0
    },
{
        pregunta: "22. ¿Que tarea realiza la fuente de alimentacion en el equipo?",
        respuestas: [
            "Convertir corriente alterna (externa) en corriente continua (interna)",
            "Convertir corriente continua (externa) en corriente continua (interna)",
            "Distribuir energía entre los dispositivos de entrada y salida",
            "Controlar el flujo de datos entre el procesador y la memoria"
        ],
        correcta: 0
    },
{
        pregunta: "23. ¿Para que se utiliza la refrigeracion y que 2 tipos existen?",
        respuestas: [
            "Para evitar el sobrecalentamiento de componentes. Aire o liquida",
            "Para mantener la velocidad del procesador. Interna o externa",
            "Para enfriar la pantalla y el disco duro. Aire o liquida",
            "Para reducir el ruido del sistema. Aire o liquida"
        ],
        correcta: 0
    },
{
        pregunta: "24. ¿Que es la placa base?",
        respuestas: [
            "Es el componente donde se conectan el resto de componentes HW",
            "Es el dispositivo que almacena los datos del sistema operativo",
            "Es el sistema que controla la entrada y salida de datos",
            "Es el componente que convierte señales eléctricas en imágenes"
        ],
        correcta: 0
    },
{
        pregunta: "25. ¿Que funcion cumple la BIOS en el equipo?",
        respuestas: [
            "Se encarga de iniciar el HW y cargar el SO",
            "Controla la velocidad del ventilador y la temperatura del procesador",
            "Ejecuta las aplicaciones instaladas en el disco duro",
            "Gestiona la conexión a internet y los periféricos externos"
        ],
        correcta: 0
    },
{
        pregunta: "26. ¿Porque la BIOS utiliza una pila?",
        respuestas: [
            "Se utiliza para guardar la configuracion del sistema",
            "Para alimentar el procesador durante el arranque",
            "Para mantener encendida la pantalla cuando el equipo está apagado",
            "Para almacenar archivos temporales del sistema operativo"
        ],
        correcta: 0
    },
{
        pregunta: "27. ¿Que funcion tiene el microprocesador?",
        respuestas: [
            "Es el encargado de ejecutar instrucciones y coordinar el funcionamiento del sistema",
            "Controla la energía que recibe cada componente y regula la temperatura",
            "Almacena los datos del usuario y gestiona el disco duro",
            "Se encarga de mostrar imágenes y sonidos en el monitor"
        ],
        correcta: 0
    },
{
        pregunta: "28. ¿Que funcion cumple la memoria RAM?",
        respuestas: [
            "Almacenar temporalmente los datos en uso",
            "Guardar permanentemente los archivos del sistema operativo",
            "Procesar señales eléctricas para generar imágenes",
            "Ejecutar instrucciones de la BIOS durante el arranque"
        ],
        correcta: 0
    },
{
        pregunta: "29. ¿Que contiene la memoria ROM?",
        respuestas: [
            "Contiene datos esenciales para el arranque",
            "Almacena archivos multimedia y documentos del usuario",
            "Guarda datos temporales mientras se ejecutan programas",
            "Procesa instrucciones del sistema operativo en tiempo real"
        ],
        correcta: 0
    },
{
        pregunta: "30. ¿Que funcion tiene la memoria cache?",
        respuestas: [
            "Almacenar temporalmente datos e instrucciones y actuar de intermediario entre procesador y RAM",
            "Almacenar permanentemente los programas instalados y enviarlos directamente al procesador cuando se necesiten",
            "Gestionar la transferencia bancaria entre el disco duro y la memoria principal para acelerar el arranque del sistema",
            "Almacenar permanentemente configuraciones del sistema y archivos de usuario"
        ],
        correcta: 0
    },
{
        pregunta: "31. ¿Que tarea realiza una tarjeta grafica?",
        respuestas: [
            "Transformar datos en imagenes",
            "Procesar instrucciones del sistema operativo para generar sonido",
            "Convertir señales eléctricas en datos binarios para la memoria",
            "Ejecutar programas y controlar el acceso a la red"
        ],
        correcta: 0
    },
{
        pregunta: "32. ¿Como funciona un HDD de forma fisica y logica?",
        respuestas: [
            "Fisico: Usan platos y cabezales para leer y escribir datos | Logico: Organiza datos en sectores y pistas",
            "Fisico: Organiza datos en sectores y pistas | Logico: Usan platos y cabezales para leer y escribir datos",
            "Físico: Usa ventiladores para mover los datos | Lógico: Agrupa los archivos por tipo y tamaño",
            "Físico: Utiliza láseres para grabar datos | Lógico: Divide la información en bloques de memoria RAM"
        ],
        correcta: 0
    },
{
        pregunta: "33. ¿Como funcionan los dispositivos de almacenamiento optico?",
        respuestas: [
            "Utilizan un laser para leer/escribir guardando la informacion en pits y lands",
            "Usan cabezales magnéticos para grabar datos en discos duros",
            "Emplean corriente eléctrica para almacenar datos en módulos de RAM",
            "Utilizan sensores de calor para modificar la superficie del disco"
        ],
        correcta: 0
    },
{
        pregunta: "34. ¿Que supone cambiar el color del laser?",
        respuestas: [
            "Afecta a la capcidad de lectura y escritura del dispositivo",
            "Mejora la velocidad de conexión entre periféricos y el sistema operativo",
            "Permite almacenar datos en formato binario directamente en la memoria RAM",
            "Cambia la resolución de imagen en pantallas conectadas al equipo"
        ],
        correcta: 0
    },
{
        pregunta: "35. ¿Que elemento permite que los perifericos se comuniquen con el SO?",
        respuestas: [
            "Drivers",
            "BIOS",
            "Tarjeta gráfica",
            "Fuente de alimentación"
        ],
        correcta: 0
    },
{
        pregunta: "36. ¿Que es el direccionamiento inmmediato?",
        respuestas: [
            "El dato esta directamente en la instruccion",
            "La instruccion contiene la direccion exacta del dato",
            "Contiene una direccion que apunta a otra donde esta el dato",
            "Es la direccion efectiva que se obtiene sumando un valo fijo a una base"
        ],
        correcta: 0
    },
{
        pregunta: "37. ¿Que es el direccionamiento directo?",
        respuestas: [
            "La instruccion contiene la direccion exacta del dato",
            "El dato esta directamente en la instruccion",
            "Contiene una direccion que apunta a otra donde esta el dato",
            "Es la direccion efectiva que se obtiene sumando un valo fijo a una base"
        ],
        correcta: 0
    },
{
        pregunta: "38. ¿Que es el direccionamiento indirecto?",
        respuestas: [
            "Contiene una direccion que apunta a otra donde esta el dato",
            "El dato esta directamente en la instruccion",
            "La instruccion contiene la direccion exacta del dato",
            "Es la direccion efectiva que se obtiene sumando un valo fijo a una base"
        ],
        correcta: 0
    },
{
        pregunta: "39. ¿Que es el direccionamiento relativo?",
        respuestas: [
            "Es la direccion efectiva que se obtiene sumando un valo fijo a una base",
            "El dato esta directamente en la instruccion",
            "La instruccion contiene la direccion exacta del dato",
            "Contiene una direccion que apunta a otra donde esta el dato"
        ],
        correcta: 0
    },

];

// Función para barajar un array
function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Barajar el orden de las preguntas
barajarArray(preguntas);

// Barajar las respuestas dentro de cada pregunta y actualizar la respuesta correcta
preguntas.forEach(pregunta => {
    const respuestas = [...pregunta.respuestas];
    const correcta = pregunta.correcta;
    barajarArray(respuestas);
    pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
    pregunta.respuestas = respuestas;
});

let indicePregunta = 0;
let preguntaActual = 1;
let respuestasCorrectas = 0;

// Función para mostrar la pregunta y las respuestas
function mostrarPregunta() {
    const preguntaContainer = document.getElementById('pregunta');
    const respuestasContainer = document.getElementById('respuestas-container');
    const inputContainer = document.getElementById('input-container');
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const contadorPregunta = document.getElementById('contador-pregunta');

    preguntaContainer.innerText = preguntas[indicePregunta].pregunta;
    respuestasContainer.innerHTML = '';
    respuestaBox.style.display = 'none';
    contadorPregunta.innerText = `Pregunta ${preguntaActual} de ${preguntas.length}`;
    inputContainer.style.display = 'none';

    preguntas[indicePregunta].respuestas.forEach((respuesta, index) => {
        const respuestaElement = document.createElement('div');
        respuestaElement.classList.add('respuesta');
        respuestaElement.innerText = respuesta;
        respuestaElement.onclick = () => seleccionarRespuesta(index);
        respuestasContainer.appendChild(respuestaElement);
    });
}

// Función para seleccionar la respuesta
function seleccionarRespuesta(respuestaUsuario) {
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const respuestasContainer = document.getElementById('respuestas-container');
    const respuestaCorrecta = preguntas[indicePregunta].correcta;
    const opciones = respuestasContainer.children;

    for (let i = 0; i < opciones.length; i++) {
        if (i === respuestaCorrecta) {
            opciones[i].classList.add('correcta');
        } else {
            opciones[i].classList.add('incorrecta');
        }
        opciones[i].onclick = null;
    }

    if (respuestaUsuario === respuestaCorrecta) {
        respuestaText.innerText = "¡Correcto!";
        respuestasCorrectas++;
    } else {
        respuestaText.innerText = `Incorrecto. Respuesta correcta: ${preguntas[indicePregunta].respuestas[respuestaCorrecta]}`;
    }

    respuestaBox.style.display = 'block';
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    indicePregunta++;
    preguntaActual++;

    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        alert(`Has completado todas las preguntas.\nRespuestas correctas: ${respuestasCorrectas} / ${preguntas.length}`);
        // Reiniciar el cuestionario
        indicePregunta = 0;
        preguntaActual = 1;
        respuestasCorrectas = 0;
        barajarArray(preguntas); // Rebarajar preguntas
        preguntas.forEach(pregunta => {
            const respuestas = [...pregunta.respuestas];
            const correcta = pregunta.correcta;
            barajarArray(respuestas);
            pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
            pregunta.respuestas = respuestas;
        });
        mostrarPregunta();
    }
}

// Inicializar la primera pregunta al cargar la página
window.onload = function() {
    mostrarPregunta();
};
