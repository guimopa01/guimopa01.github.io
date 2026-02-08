const preguntas = [
    {
    pregunta: "1. Un caso de prueba representativo es…",
    respuestas: [
        "Un caso que detecta fallos sin probar todo",
        "Un caso inválido al azar",
        "El conjunto completo de entradas",
        "Una prueba no documentada"
    ],
    correcta: 0
},
{
    pregunta: "2. ¿Qué indica un ArrayIndexOutOfBoundsException?",
    respuestas: [
        "Se ha intentado acceder a una posición fuera del rango válido del array",
        "El bucle for no tiene condición de salida",
        "El método main no gestiona correctamente excepciones",
        "El array contiene valores nulos"
    ],
    correcta: 0
},
{
    pregunta: "3. En análisis de valores límite se prueban…",
    respuestas: [
        "Valores aleatorios",
        "Solo valores dentro del rango",
        "Valores en los límites y fuera de ellos",
        "Valores no numéricos"
    ],
    correcta: 2
},
{
    pregunta: "4. Detectar un defecto en pruebas es…",
    respuestas: [
        "Una razón para abandonar el proyecto",
        "Un indicador de incompetencia",
        "Un fracaso del equipo",
        "Un éxito porque permite mejorar el software"
    ],
    correcta: 3
},
{
    pregunta: "5. Las particiones equivalentes buscan…",
    respuestas: [
        "Probar solo límites",
        "Ignorar clases inválidas",
        "Probar todos los valores",
        "Reducir pruebas usando valores representativos"
    ],
    correcta: 3
},
{
    pregunta: "6. ¿Cuál es el propósito principal de un depurador?",
    respuestas: [
        "Optimizar automáticamente el código fuente",
        "Compilar el programa con mayor eficiencia",
        "Analizar el rendimiento del hardware",
        "Ejecutar el programa de forma controlada para identificar y corregir errores"
    ],
    correcta: 3
},
{
    pregunta: "7. ¿Qué ocurre si se inicia el depurador sin puntos de interrupción?",
    respuestas: [
        "El programa se ejecuta normalmente sin detenerse",
        "El depurador lanza un error",
        "El programa se detiene al inicio automáticamente",
        "El depurador fuerza un breakpoint inicial"
    ],
    correcta: 0
},
{
    pregunta: "8. Class Filter permite…",
    respuestas: [
        "Activar un breakpoint solo en una clase concreta",
        "Analizar el tiempo de ejecución de cada clase",
        "Modificar métodos comunes",
        "Activar breakpoints en todas las clases"
    ],
    correcta: 0
},
{
    pregunta: "9. ¿Cuál es la función de un breakpoint?",
    respuestas: [
        "Detener la ejecución del programa en una línea específica",
        "Compilar el código por partes",
        "Optimizar rutas de ejecución",
        "Eliminar errores automáticamente"
    ],
    correcta: 0
},
{
    pregunta: "10. Un watchpoint se activa cuando…",
    respuestas: [
        "Se lanza cualquier excepción",
        "Se llama a un método estático",
        "Se lee o modifica un atributo",
        "Se ejecuta un bucle for"
    ],
    correcta: 2
},
{
    pregunta: "11. La complejidad ciclomática indica…",
    respuestas: [
        "El número de caminos independientes",
        "La memoria utilizada",
        "La cantidad de líneas",
        "La profundidad de los bucles"
    ],
    correcta: 0
},
{
    pregunta: "12. ¿Para qué sirve un Instance Filter?",
    respuestas: [
        "Crear nuevas instancias del objeto",
        "Optimizar uso de memoria",
        "Detectar excepciones globales",
        "Restringir un breakpoint a instancias específicas"
    ],
    correcta: 3
},
{
    pregunta: "13. La concentración de defectos implica que…",
    respuestas: [
        "No se deben revisar zonas ya testeadas",
        "Si hay uno no puede haber más",
        "Los fallos suelen agruparse en las mismas áreas",
        "Los fallos siempre se distribuyen uniformemente"
    ],
    correcta: 2
},
{
    pregunta: "14. La validación confirma que…",
    respuestas: [
        "El software cumple requisitos del usuario",
        "El código sigue estándares",
        "Los módulos están aislados",
        "La memoria se gestiona bien"
    ],
    correcta: 0
},
{
    pregunta: "15. La cobertura de condiciones verifica…",
    respuestas: [
        "Que todo el código compila",
        "Que no existan rutas redundantes",
        "Que todas las condiciones se evalúan a true y false",
        "Que se ejecuten todos los bucles"
    ],
    correcta: 2
},
{
    pregunta: "16. La cobertura de rutas busca…",
    respuestas: [
        "Reducir el número de pruebas",
        "Validar solo rutas críticas",
        "Probar todas las combinaciones posibles de caminos",
        "Medir complejidad temporal"
    ],
    correcta: 2
},
{
    pregunta: "17. ¿Qué técnica pertenece a caja blanca?",
    respuestas: [
        "Pruebas aleatorias",
        "Análisis del camino básico",
        "Valores límite",
        "Particiones equivalentes"
    ],
    correcta: 1
},
{
    pregunta: "18. Step Over (F8) ejecuta…",
    respuestas: [
        "Desde el inicio del método",
        "La siguiente línea sin entrar en métodos",
        "Todo el bloque de una vez",
        "La siguiente línea entrando en métodos"
    ],
    correcta: 1
},
{
    pregunta: "19. Las pruebas de caja negra se centran en…",
    respuestas: [
        "Estructura del código",
        "Entradas y salidas según especificación",
        "Control de memoria",
        "Métricas de cobertura"
    ],
    correcta: 1
},
{
    pregunta: "20. Las pruebas de estrés buscan…",
    respuestas: [
        "Elevar la carga hasta fallo",
        "Analizar usabilidad",
        "Medir accesibilidad",
        "Comprobar base de datos"
    ],
    correcta: 0
},
{
    pregunta: "21. NO es recomendación de Myers:",
    respuestas: [
        "Usar datos válidos e inválidos",
        "Asumir defectos",
        "Realizar pruebas sin documentación",
        "Definir resultados esperados"
    ],
    correcta: 2
},
{
    pregunta: "22. Pass Count activa un breakpoint…",
    respuestas: [
        "Solo la primera vez que se ejecuta",
        "Cuando la variable cambia de tipo",
        "Tras alcanzarse un número determinado de veces",
        "Solo cuando hay excepciones"
    ],
    correcta: 2
},
{
    pregunta: "23. Las pruebas de picos comprueban…",
    respuestas: [
        "Errores sintácticos",
        "Optimización SQL",
        "Variaciones súbitas de carga",
        "Carga constante"
    ],
    correcta: 2
},
{
    pregunta: "24. “Evaluate and Log” permite…",
    respuestas: [
        "Registrar información sin detener el programa",
        "Modificar el código fuente en caliente",
        "Detener el programa siempre que se ejecute la línea",
        "Ignorar completamente el breakpoint"
    ],
    correcta: 0
},
{
    pregunta: "25. Un método breakpoint se activa…",
    respuestas: [
        "Solo con excepciones",
        "Al compilar",
        "Cuando un método se sobrescribe",
        "Al entrar o salir de un método indicado"
    ],
    correcta: 3
},
{
    pregunta: "26. La verificación se centra en…",
    respuestas: [
        "Ver si el usuario está satisfecho",
        "Medir tiempos de respuesta",
        "Comprobar que el software se construye correctamente según especificaciones",
        "Probar solo la interfaz"
    ],
    correcta: 2
},
{
    pregunta: "27. Las pruebas de carga se centran en…",
    respuestas: [
        "Evaluar comportamiento bajo carga esperada",
        "Verificar interfaz",
        "Optimizar la CPU",
        "Romper el sistema"
    ],
    correcta: 0
},
{
    pregunta: "28. Una prueba de unidad evalúa…",
    respuestas: [
        "Un módulo pequeño de código",
        "La seguridad del servidor",
        "Todo el sistema",
        "La base de datos completa"
    ],
    correcta: 0
},
{
    pregunta: "29. Mute Breakpoints permite…",
    respuestas: [
        "Crear breakpoints automáticos",
        "Desactivar temporalmente todos los breakpoints",
        "Eliminarlos permanentemente",
        "Reiniciar la depuración"
    ],
    correcta: 1
},
{
    pregunta: "30. Step Out sirve para…",
    respuestas: [
        "Detener el programa por completo",
        "Ejecutar lentamente el método",
        "Entrar en métodos privados",
        "Salir del método actual y volver al llamador"
    ],
    correcta: 3
},
{
    pregunta: "31. Una prueba de integración verifica…",
    respuestas: [
        "El diseño del usuario",
        "El funcionamiento conjunto de componentes",
        "La interfaz gráfica",
        "El rendimiento del hardware"
    ],
    correcta: 1
},
{
    pregunta: "32. ¿Qué prueba detecta mejor errores de lógica interna?",
    respuestas: [
        "Prueba funcional",
        "Aleatoria",
        "Prueba estructural",
        "Picos"
    ],
    correcta: 2
},
{
    pregunta: "33. La prueba de sistema comprueba…",
    respuestas: [
        "Solo rendimiento",
        "Partes aisladas",
        "El funcionamiento completo del software",
        "Seguridad exclusivamente"
    ],
    correcta: 2
},
{
    pregunta: "34. Las pruebas aleatorias buscan…",
    respuestas: [
        "Cubrir todas las rutas",
        "Detectar errores en escenarios impredecibles",
        "Medir rendimiento",
        "Verificar requisitos"
    ],
    correcta: 1
},
{
    pregunta: "35. ¿Qué prueba detecta mejor errores respecto a requisitos?",
    respuestas: [
        "Pico",
        "Caja blanca",
        "Prueba funcional",
        "Estrés"
    ],
    correcta: 2
},
{
    pregunta: "36. ¿Qué mide la cobertura de sentencias?",
    respuestas: [
        "La satisfacción del usuario",
        "El rendimiento de cada módulo",
        "La cantidad de excepciones",
        "Si todas las líneas de código se ejecutan"
    ],
    correcta: 3
},
{
    pregunta: "37. La opción “Condition” en un breakpoint permite…",
    respuestas: [
        "Convertir el breakpoint en un watchpoint",
        "Ignorar excepciones conocidas",
        "Detener la ejecución solo si se cumple una condición",
        "Ejecutar el código más rápido"
    ],
    correcta: 2
},
{
    pregunta: "38. Objetivo principal de la prueba de software:",
    respuestas: [
        "Optimizar el código automáticamente",
        "Detectar defectos y verificar requisitos",
        "Añadir funcionalidades",
        "Sustituir al programador"
    ],
    correcta: 1
},
{
    pregunta: "39. Myers recomienda que…",
    respuestas: [
        "Solo haya pruebas automáticas",
        "El programador no pruebe su propio código",
        "Se pruebe al final del proyecto",
        "Nunca usar datos inválidos"
    ],
    correcta: 1
},
{
    pregunta: "40. ¿Qué muestra la pila de llamadas?",
    respuestas: [
        "El flujo de métodos que han llevado al punto actual",
        "Las variables globales del programa",
        "Los errores no capturados",
        "El uso de CPU por método"
    ],
    correcta: 0
},
 {
    pregunta: "41. La prueba exhaustiva es…",
    respuestas: [
        "Requerida por estándares",
        "Obligatoria antes de entregar el software",
        "Fácil de lograr con automatización",
        "Impracticable incluso en programas pequeños"
    ],
    correcta: 3
},
{
    pregunta: "42. Las pruebas de regresión sirven para…",
    respuestas: [
        "Medir producción",
        "Detectar errores introducidos por cambios",
        "Probar unidades",
        "Validar solo nuevas funciones"
    ],
    correcta: 1
},
{
    pregunta: "43. Las pruebas de estabilidad analizan…",
    respuestas: [
        "Si la aplicación rinde durante largos periodos",
        "Calidad gráfica",
        "Velocidad de compilación",
        "Cumplimiento legal"
    ],
    correcta: 0
},
{
    pregunta: "44. Step Into (F7) permite…",
    respuestas: [
        "Ejecutar el programa hasta el final",
        "Ignorar métodos auxiliares",
        "Detener solo en recursividad",
        "Entrar dentro de un método llamado en esa línea"
    ],
    correcta: 3
},
{
    pregunta: "45. El modo “Remove once hit” hace que el breakpoint…",
    respuestas: [
        "No pueda desactivarse",
        "Se elimine automáticamente tras activarse una vez",
        "Se ejecute dos veces por ciclo",
        "Se convierta en permanente"
    ],
    correcta: 1
},
{
    pregunta: "46. “Disable until hitting the following breakpoint” se usa para…",
    respuestas: [
        "Ejecutar el programa sin depurar",
        "Ignorar todos los breakpoints anteriores",
        "Desactivar un breakpoint hasta alcanzar otro específico",
        "Invertir el orden de los breakpoints"
    ],
    correcta: 2
},
{
    pregunta: "47. El camino básico requiere primero…",
    respuestas: [
        "Analizar el código",
        "Consultar al cliente",
        "Generar datos aleatorios",
        "Dividir entradas en clases"
    ],
    correcta: 0
},
{
    pregunta: "48. Caller Filter sirve para…",
    respuestas: [
        "Detectar fugas de memoria",
        "Registrar accesos a variables estáticas",
        "Restringir un breakpoint según el método que realiza la llamada",
        "Controlar concurrencia"
    ],
    correcta: 2
},
{
    pregunta: "49. “No se demuestra ausencia de errores” implica…",
    respuestas: [
        "Los errores son inevitables",
        "Las pruebas siempre fallan",
        "Probar no sirve",
        "Aun sin fallos, pueden existir errores"
    ],
    correcta: 3
}   
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

