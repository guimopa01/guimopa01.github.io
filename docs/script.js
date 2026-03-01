const preguntas = [
  {
    pregunta: "1. ¿Cuál hace que el contenido sea más grande?\n\n*{\n  box-sizing: border-box;\n}\n\n.modificar1{\n  box-sizing: border-box;\n}\n\n.modificar2{\n  box-sizing: content-box;\n}"
,
    respuestas: [
      "*{ box-sizing: border-box; }",
      ".modificar1{ box-sizing: border-box; }",
      ".modificar2{ box-sizing: content-box; }",
      "Ninguna, todas ocupan lo mismo"
    ],
    correcta: 2
  },

  {
    pregunta: "2. ¿Qué selector aplica el estilo a todos los párrafos de la página?",
    respuestas: [
      "Selector de clase",
      "Selector de tipo",
      "Selector de id",
      "Selector universal"
    ],
    correcta: 0
  },

  {
    pregunta: "3. ¿Qué selector se usa para aplicar estilo a todos los elementos de la página?",
    respuestas: [
      "Selector universal",
      "Selector de tipo",
      "Selector de clase",
      "Selector descendiente"
    ],
    correcta: 0
  },

  {
    pregunta: "4. ¿Qué selector se usa para aplicar estilo a un único elemento con un identificador concreto?",
    respuestas: [
      "Selector de clase",
      "Selector de id",
      "Selector de tipo",
      "Selector de atributo"
    ],
    correcta: 1
  },

  {
   pregunta: "5. ¿Qué opción describe mejor el uso de class en este ejemplo?\n\n<p class=\"alerta advertencia-roja\">Peligro, esta acción no se puede deshacer.</p>\n\n.alerta {\n  border: 2px solid red;\n}\n\n.advertencia-roja {\n  color: red;\n}"
,
    respuestas: [
      "Un elemento solo puede tener una clase",
      "Un elemento puede tener varias clases separadas por espacios",
      "Las clases solo se pueden usar en <p>",
      "Las clases deben ser únicas en todo el documento"
    ],
    correcta: 1
  },

  {
    pregunta: "6. ¿Qué selector aplica estilo solo a los enlaces dentro de un li?",
    respuestas: [
      "Selector de hijo directo",
      "Selector descendiente",
      "Selector de id",
      "Selector de clase"
    ],
    correcta: 1
  },

  {
    pregunta: "7. ¿Qué selector selecciona solo los li que son hijos directos de un ul?",
    respuestas: [
      "ul li",
      "ul + li",
      "ul > li",
      "ul ~ li"
    ],
    correcta: 2
  },

  {
    pregunta: "8. ¿Qué pseudo-clase se aplica cuando el ratón pasa por encima de un párrafo?",
    respuestas: [
      ":active",
      ":visited",
      ":hover",
      ":focus"
    ],
    correcta: 2
  },

  {
    pregunta: "9. ¿Qué pseudo-clase selecciona el primer párrafo dentro de su contenedor?",
    respuestas: [
      ":first-child",
      ":first-of-type",
      ":nth-child(1)",
      ":only-child"
    ],
    correcta: 1
  },

  {
    pregunta: "10. ¿Qué propiedad controla el espacio entre líneas de texto?",
    respuestas: [
      "letter-spacing",
      "line-height",
      "text-spacing",
      "text-height"
    ],
    correcta: 1
  },

  {
    pregunta: "11. ¿Qué propiedad elimina el subrayado de los enlaces?",
    respuestas: [
      "text-style",
      "decoration",
      "text-decoration",
      "underline:none"
    ],
    correcta: 2
  },

  {
    pregunta: "12. ¿Qué propiedad define el color de fondo de un elemento?",
    respuestas: [
      "color",
      "background",
      "background-color",
      "bg-color"
    ],
    correcta: 2
  },

  {
    pregunta: "13. ¿Qué hace background-image?",
    respuestas: [
      "Cambia el color del fondo de la imagen",
      "Coloca una imagen como fondo del elemento",
      "Inserta una imagen dentro del contenido",
      "Cambia el borde del elemento"
    ],
    correcta: 1
  },

  {
    pregunta: "14. ¿Qué hace background-size en este ejemplo?\n\n.imagen-cover {\n  background-image: url('imagenes/coliseo-roma.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}"
,
    respuestas: [
      "Ajusta la imagen para que se vea completa aunque queden huecos",
      "Repite la imagen hasta llenar el contenedor",
      "Escala la imagen para cubrir todo el contenedor aunque se recorte",
      "Centra la imagen sin cambiar su tamaño"
    ],
    correcta: 2
  },

  {
    pregunta: "15. ¿Qué hace background-size en este ejemplo?\n\n.imagen-contain {\n  background-image: url('imagenes/coliseo-roma.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n}"
,
    respuestas: [
      "La imagen cubre todo el contenedor aunque se recorte",
      "La imagen se escala para ser completamente visible, aunque queden espacios vacíos",
      "La imagen se repite en mosaico",
      "La imagen se estira sin mantener proporciones"
    ],
    correcta: 1
  },

  {
    pregunta: "16. ¿Qué hace background-position aquí?\n\n.imagen-posicion {\n  background-image: url('imagenes/coliseo-roma.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n}"
,
    respuestas: [
      "Coloca la imagen en la esquina superior izquierda",
      "Centra la imagen horizontal y verticalmente",
      "Repite la imagen en el centro",
      "Mueve la imagen al fondo de la página"
    ],
    correcta: 1
  },

  {
    pregunta: "17. ¿Qué propiedad controla el grosor, estilo y color del borde en una sola línea?",
    respuestas: [
      "border-style",
      "border-width",
      "border-color",
      "border"
    ],
    correcta: 3
  },

  {
    pregunta: "18. ¿Qué propiedad redondea las esquinas de una caja?",
    respuestas: [
      "border-round",
      "border-radius",
      "corner-radius",
      "round-corners"
    ],
    correcta: 1
  },

  {
    pregunta: "19. ¿Qué unidad es relativa al tamaño de fuente del elemento raíz (html)?",
    respuestas: [
      "em",
      "rem",
      "px",
      "%"
    ],
    correcta: 1
  },

  {
    pregunta: "20. ¿Qué unidad representa un porcentaje del ancho de la ventana del navegador?",
    respuestas: [
      "vh",
      "vw",
      "%",
      "vmin"
    ],
    correcta: 1
  },

  {
    pregunta: "21. ¿Qué valor de display hace que un elemento ocupe todo el ancho disponible y empiece en una nueva línea?",
    respuestas: [
      "inline",
      "block",
      "inline-block",
      "flex"
    ],
    correcta: 1
  },

  {
    pregunta: "22. ¿Qué valor de display hace que el elemento fluya con el texto y no acepte width ni height?",
    respuestas: [
      "block",
      "inline",
      "flex",
      "grid"
    ],
    correcta: 1
  },

  {
    pregunta: "23. ¿Qué valor de position es el valor por defecto (no se saca del flujo normal)?",
    respuestas: [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    correcta: 3
  },

  {
    pregunta: "24. ¿Qué hace position: fixed?",
    respuestas: [
      "Se mueve con el scroll",
      "Se posiciona respecto a su contenedor padre",
      "Se queda fija respecto a la ventana, aunque hagas scroll",
      "Desaparece del flujo y no se ve"
    ],
    correcta: 2
  },

  {
    pregunta: "25. ¿Qué propiedad activa Flexbox en un contenedor?",
    respuestas: [
      "flex-direction",
      "display:flex",
      "flex:1",
      "justify-content"
    ],
    correcta: 1
  },

  {
    pregunta: "26. ¿Qué hace justify-content: center?",
    respuestas: [
      "Centra los items verticalmente",
      "Centra los items horizontalmente en el eje principal",
      "Los pega a la izquierda",
      "Los reparte con espacio entre ellos y los extremos"
    ],
    correcta: 1
  },

  {
    pregunta: "27. ¿Qué hace align-items: center?",
    respuestas: [
      "Alinea los items en el eje principal",
      "Alinea los items en el eje cruzado (vertical por defecto)",
      "Los distribuye con espacio entre ellos",
      "Los manda al final del contenedor"
    ],
    correcta: 1
  },

  {
    pregunta: "28. En este ejemplo de box model, ¿qué propiedad define el espacio entre el contenido y el borde?\n\n.caja {\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin: 10px;\n  gap: 20px;\n}"
,
    respuestas: [
      "margin",
      "padding",
      "border",
      "gap"
    ],
    correcta: 1
  },

  {
    pregunta: "29. En este ejemplo, ¿qué propiedad define el espacio entre la caja y otros elementos?\n\n.caja {\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin: 10px;\n}"
,
    respuestas: [
      "margin",
      "padding",
      "border",
      "outline"
    ],
    correcta: 0
  },

  {
    pregunta: "30. ¿Qué forma de conectar CSS con HTML se está usando aquí?\n\n<head>\n  <link rel=\"stylesheet\" href=\"estilos.css\">\n</head>"
,
    respuestas: [
      "CSS interno",
      "CSS externo",
      "CSS en línea",
      "CSS incrustado en el body"
    ],
    correcta: 1
  },

  {
    pregunta: "31. ¿Qué forma de conectar CSS con HTML se usa en este ejemplo?\n\n<head>\n  <style>\n    p { color: blue; }\n  </style>\n</head>"
,
    respuestas: [
      "CSS externo",
      "CSS interno",
      "CSS en línea",
      "CSS global"
    ],
    correcta: 1
  },

  {
    pregunta: "32. ¿Qué tipo de CSS se aplica aquí?\n\n<p style=\"font-size: 20px; color: red;\">Hola</p>"
,
    respuestas: [
      "CSS interno",
      "CSS externo",
      "CSS en línea",
      "CSS universal"
    ],
    correcta: 2
  },

  {
    pregunta: "33. ¿Qué selector selecciona SOLO el primer hijo de un contenedor?",
    respuestas: [
      ":first-of-type",
      ":first-child",
      ":nth-child(1)",
      ":only-child"
    ],
    correcta: 1
  },

  {
    pregunta: "34. ¿Qué selector selecciona SOLO el último párrafo dentro de un div?",
    respuestas: [
      "p:last-of-type",
      "p:last-child",
      "p:nth-last(1)",
      "p:end"
    ],
    correcta: 0
  },

  {
    pregunta: "35. ¿Qué selector selecciona los párrafos pares?",
    respuestas: [
      "p:nth-child(even)",
      "p:nth-child(odd)",
      "p:first-child",
      "p:last-child"
    ],
    correcta: 0
  },

  {
    pregunta: "36. ¿Qué selector selecciona los párrafos impares?",
    respuestas: [
      "p:nth-child(even)",
      "p:nth-child(odd)",
      "p:first-child",
      "p:last-child"
    ],
    correcta: 1
  },

  {
    pregunta: "37. ¿Qué pseudo‑clase se activa cuando un checkbox está marcado?",
    respuestas: [
      ":active",
      ":focus",
      ":checked",
      ":selected"
    ],
    correcta: 2
  },

  {
    pregunta: "38. ¿Qué selector selecciona el primer párrafo del tipo <p> aunque no sea el primer hijo?",
    respuestas: [
      ":first-child",
      ":first-of-type",
      ":nth-child(1)",
      ":only-of-type"
    ],
    correcta: 1
  },

  {
    pregunta: "39. ¿Qué unidad depende del tamaño de fuente del elemento padre?",
    respuestas: [
      "px",
      "rem",
      "em",
      "vh"
    ],
    correcta: 2
  },

  {
    pregunta: "40. ¿Qué unidad ocupa un porcentaje del alto de la ventana?",
    respuestas: [
      "vw",
      "vh",
      "vmin",
      "vmax"
    ],
    correcta: 1
  },

  {
    pregunta: "41. ¿Qué unidad usa el lado más corto del viewport?",
    respuestas: [
      "vmax",
      "vmin",
      "vh",
      "vw"
    ],
    correcta: 1
  },

  {
    pregunta: "42. ¿Qué unidad usa el lado más largo del viewport?",
    respuestas: [
      "vmin",
      "vmax",
      "vh",
      "vw"
    ],
    correcta: 1
  },

  {
    pregunta: "43. ¿Qué valor de display oculta completamente un elemento?",
    respuestas: [
      "block",
      "inline",
      "none",
      "hidden"
    ],
    correcta: 2
  },

  {
    pregunta: "44. ¿Qué valor de display permite aplicar width y height pero se comporta como inline?",
    respuestas: [
      "inline",
      "block",
      "inline-block",
      "flex"
    ],
    correcta: 2
  },

  {
    pregunta: "45. ¿Qué propiedad define la dirección de los elementos en flexbox?",
    respuestas: [
      "justify-content",
      "align-items",
      "flex-direction",
      "flex-wrap"
    ],
    correcta: 2
  },

  {
    pregunta: "46. ¿Qué propiedad permite que los elementos flex salten a otra línea?",
    respuestas: [
      "wrap-items",
      "flex-wrap",
      "wrap-content",
      "flex-direction"
    ],
    correcta: 1
  },

  {
    pregunta: "47. ¿Qué propiedad controla el espacio entre los elementos flex?",
    respuestas: [
      "margin",
      "padding",
      "gap",
      "spacing"
    ],
    correcta: 2
  },

  {
    pregunta: "48. ¿Qué valor de position se pega arriba al hacer scroll?",
    respuestas: [
      "fixed",
      "sticky",
      "absolute",
      "relative"
    ],
    correcta: 1
  },

  {
    pregunta: "49. ¿Qué valor de position se posiciona respecto al padre posicionado?",
    respuestas: [
      "static",
      "absolute",
      "fixed",
      "sticky"
    ],
    correcta: 1
  },

  {
    pregunta: "50. ¿Qué valor de position se mueve respecto a su posición original?",
    respuestas: [
      "static",
      "relative",
      "absolute",
      "fixed"
    ],
    correcta: 1
  },

  {
    pregunta: "51. ¿Qué propiedad añade sombra a una tarjeta?",
    respuestas: [
      "shadow",
      "border-shadow",
      "box-shadow",
      "drop-shadow"
    ],
    correcta: 2
  },

  {
    pregunta: "52. ¿Qué propiedad define un borde decorativo en la izquierda?",
    respuestas: [
      "left-border",
      "border-left",
      "border-side",
      "border-start"
    ],
    correcta: 1
  },

  {
    pregunta: "53. ¿Qué propiedad define el espacio interior de un elemento?",
    respuestas: [
      "margin",
      "padding",
      "border",
      "gap"
    ],
    correcta: 1
  },

  {
    pregunta: "54. ¿Qué propiedad define el espacio exterior de un elemento?",
    respuestas: [
      "padding",
      "border",
      "margin",
      "outline"
    ],
    correcta: 2
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



