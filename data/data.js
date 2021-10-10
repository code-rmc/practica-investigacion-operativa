export const data = [
    {
        pregunta: '¿Qué clase de problemas trata de resolver la programación lineal?',
        img: '',
        opciones: [
            'Problemas para intentar determinar una utilización optima de recursos',
            'Problemas donde la simulación no puede ayudar',
            'Problemas con solo una o dos dimensiones'
        ],
        respuesta: 1
    },
    {
        pregunta: 'Según la notación Kendal, cual sería la clasificacion correcta para representar un consultorio medico? Ej.Medico que atiende 1 paciente cada 20 minutos y los pacientes llegan cada 30 minutos.',
        img: '',
        opciones: [
            'MD1',
            'MG1',
            'MM1'
        ],
        respuesta: 3
    },
    {
        pregunta: '¿Qué tipo de problemas resolvemos con el método SIMPLEX?',
        img: '',
        opciones: [
            'Problemas de planeación de actividades con resultado optimo de 1 dimensiones',
            'Problemas de planeación de actividades con resultado optimo cuando tenemos una actividad',
            'Problemas de planeación de actividades con resultado optimo de N dimensiones'
        ],
        respuesta: 3
    },
    {
        pregunta: 'Siendo la sección pintada de celeste la Región Factible ¿Cuál de las siguientes afirmaciones es verdadera?',
        img: './img/img1.jpg',
        opciones: [
            'La región factible esta acotada por la función objetivo',
            'La región factible no esta acotada',
            'Existen restricciones de no negatividad',
            'No hay restricciones redundantes'
        ],
        respuesta: 3
    },
    {
        pregunta: 'Siendo la sección pintada de celeste la Región Factible ¿Cuál de las siguientes afirmaciones es verdadera?',
        img: './img/img1.jpg',
        opciones: [
            'Se trata de un problema de grafos',
            'La región factible esta super acotada por la función objetivo',
            'Existen restricciones redundantes'
        ],
        respuesta: 3
    },
    {
        pregunta: '¿Cuál de las siguientes afirmaciones es verdadera?',
        img: '',
        opciones: [
            'CPM es un método basado en grafos',
            'CPM es un método que se basa en la expansión mínima',
            'CPM es un método que se basa en el flujo máximo',
            'CPM es un método con un enfoque probabilístico'
        ],
        respuesta: 1
    },
    {
        pregunta: '¿Cuál de las siguientes afirmaciones es verdadera?',
        img: '',
        opciones: [
            'En un problema resuelto por simplex puedo encontrar una solución sin realizar iteraciones',
            'En un problema resuelto por simplex no puedo encontrar múltiples solucione',
            'En un problema resuelto por simplex cuando me encuentro con un empate en la variable entrante puedo continuar escogiendo una de esas variables al azar.'
        ],
        respuesta: 3
    },
    {
        pregunta: 'En el primer paso de la aplicación del método SIMPLEX tabular lo que hacemos es buscar',
        img: '',
        opciones: [
            'el valor más grande de la fila Z',
            'el valor más negativo de la fila Z',
            'el valor más pequeño del resultado de la división entre la columna resultado y la columna pivot'
        ],
        respuesta: 2
    },
    {
        pregunta: '¿Que tipo de problemas es ideal para aplcar el metodo de grafos expansion minima?',
        img: '',
        opciones: [
            'Cuando intentamos minimizar el costo de un nodo origen a uno destino',
            'Cuando intentamos minimizar los nodos adyacentes partiendo de un origen',
            'Cuando intentamos minimizar el costo de conexion de todos los nodods de una red'
        ],
        respuesta: 3
    },
    {
        pregunta: 'Considerando Expansión Mínima indique la opción incorrecta (Considerando que se continua desde lo marcado en negrita)',
        img: './img/img2.png',
        opciones: [
            'Se puede continuar incorporando el Nodo A',
            'Se puede continuar incorporando el Nodo E',
            'Se puede continuar incorporando el Nodo C',
            'El resultado final puede variar si se comienza desde otro nodo (distinto a B)',
            'No se puede continuar incorporando el Nodo D'
        ],
        respuesta: 4
    },
    {
        pregunta: 'Seleccione la opción correcta considerando Flujo Máximo y la siguiente trayectoria de aumento: O - B - D - T ¿Cuál será el flujo residual en el arco B- D ?¿y el Flujo Total enviado hasta el momento considerando que en las trayectorias anteriores se acumula 5 ?',
        img: './img/img3.png',
        opciones: [
            'luego de la pasada será 5 y 5 respectivamente',
            'luego de la pasada será 7 y 12 respectivamente',
            'luego de la pasada será 0 y 9 respectivamente',
            'No hay trayectorias de aumento posible',
            'No hay flujo residual posible'
        ],
        respuesta: 3
    },
    {
        pregunta: 'Responda indicando la opción correcta aplicando BFS: (considere S como nodo inicio y F como nodo final)',
        img: './img/img4.png',
        opciones: [
            'El árbol resultante tendrá 5 niveles (0-1-2-3-4)',
            'El árbol resultante tendrá 4 niveles (0-1-2-3)',
            'El árbol resultante tendrá 3 niveles (0-1-2)',
            'Un resultado no se puede expresar como árbol porque tiene más de n-1 aristas'
        ],
        respuesta: 3
    },
    {
        pregunta: 'Responda la opción correcta considerando Flujo Máximo y la siguiente trayectoria de aumento: O - B - D - T ¿Cuál será el flujo residual en el arco B- D ?¿y el Flujo Total enviado hasta el momento considerando que en las trayectorias anteriores se acumula 5 ?',
        img: './img/img5.png',
        opciones: [
            'luego de la pasada será 4 y 9 respectivamente',
            'luego de la pasada será 1 y 12 respectivamente',
            'luego de la pasada será 0 y 13 respectivamente',
            'No hay trayectorias de aumento posible',
            'No hay flujo residual posible'
        ],
        respuesta: 1
    },
    {
        pregunta: 'Indique la respuesta correcta considerando shortest Path (camino más corto)',
        img: './img/img6.png',
        opciones: [
            'No se requiere nodo de inicio ni nodo de fin para comenzar',
            'Dado el paso indicado el próximo nodo a incorporar DEBE ser D',
            'Dado el paso indicado el próximo nodo a incorporar DEBE ser E',
            'El nodo de inicio puede ser seleccionado al azar',
            'Dado el paso indicado el próximo nodo a incorporar puede ser E o D',
            'Todas las otras opciones'
        ],
        respuesta: 5
    },
    {
        pregunta: 'Considerando PERT como herramienta de trabajo. ¿Cuál de las opciones le parece correcta respecto de la formula que se muestra para calculo de tiempo estimado?',
        img: './img/img7.png',
        opciones: [
            'La formula es incorrecta porque se debe ponderar con 4 el tiempo medio',
            'La formula indica mayor ponderación para el tiempo medio',
            'El divisor debe ser seis para promediar correctamente',
            'Las tres estimaciones deben ser ponderadas en partes iguales'
        ],
        respuesta: 2
    },
    {
        pregunta: 'Teniendo en cuenta que en Teoría de Colas se da la siguiente situación cuando comparamos Costos por Espera Vs Costo del Nivel de Servicio: Indique la opción INCORRECTA',
        img: './img/img8.png',
        opciones: [
            'Siempre que aumenta el nivel de servicio el costo de espera disminuye',
            'Cuando el costo de espera aumenta el nivel de servicio disminuye',
            'El equilibrio entre el Costo por espera y el Costo de proporcionar el servicio es el nivel óptimo en cuanto a Costos',
            'La mejor opción siempre es aumentar el nivel de servicio porque de este se obtiene el costo óptimo'
        ],
        respuesta: 4
    },
    {
        pregunta: 'El ascensor de un edificio con planta baja y dos pisos realiza viajes de uno a otro piso. El piso en el que finaliza el viaje n- ésimo del ascensorsigue una cadena de Markov.Se sabe que 2, 5 de 10 viajes que parten de planta baja se dirigen al segundo piso, mientras que si un viaje comienzaen el primer piso, el 75 % de las veces finaliza en el segundo. Finalmente, si un trayecto comienza en el segundo piso, siempre finaliza en plantabaja.Indique la imagen que se condice con el enunciado',
        img: './img/img9.png',
        opciones: [
            'A',
            'B',
            'C',
            'D',
            'Ninguna es correcta'
        ],
        respuesta: 2
    },
    {
        pregunta: 'Para el siguiente diagrama indique la opción correcta.',
        img: './img/img10.png',
        opciones: [
            'El diagrama contiene dos clases irreducibles',
            'Hay estados absorbentes',
            'Hay estados transitorios',
            'La clase irreducible es periódica',
            'Cumple con la condición de irreducible y ergódica',
            'Ninguna es correcta'
        ],
        respuesta: 5
    },
    {
        pregunta: 'Un avión tarda unos 10 minutos de media en despegar a partir del momento en que la torre de control le da el permiso. Si los despegues de losaviones se producen por término medio, a razón de 3 por hora y siguiendo un proceso de exponencial. Indique la opción correcta(en minutos)',
        img: '',
        opciones: [
            'Corresponde a un MM1 con lambda igual a 0,05 y mu igual 0,1',
            'Corresponde a un MD1 con lambda igual a 0,05 y mu igual 0,1',
            'Corresponde a un MM3 con lambda igual a 0,05 y mu igual 0,1',
            'No se puede resolver ya que no cumple con la condición de estado estable'
        ],
        respuesta: 1
    },
    {
        pregunta: 'Para el siguiente diagrama indique la opción correcta.',
        img: './img/img11.png',
        opciones: [
            'MD1',
            'MG1',
            'MM2',
            'MD2',
            'Ninguna de las opciones'
        ],
        respuesta: 4
    },
    {
        pregunta: 'Responda considerando Expansión Mínima (La imagen solo acompaña alguna de las opciones)',
        img: './img/img12.png',
        opciones: [
            'No es una variación del algoritmo shortest path',
            'Se consideran flujos residuales en cada iteración',
            'La imagen no puede ser el resultado de Expansión Mínima',
            'funcionalmente no importa si son nodos hijos o nodos padres mientras exista una conexión entre cada nodo',
            'Todas son incorrectas'
        ],
        respuesta: 4
    },
    {
        pregunta: 'NO ESTA CHEQUEADO -> Siendo la sección sombreada en celeste la Región Factible ¿Cuál de las siguientesafirmaciones es verdadera?',
        img: './img/img13.png',
        opciones: [
            'La recta "2x + y <= 100" es restricción redundante',
            'La recta "x <= 40" es restricción redundante',
            'La recta "x + y <= 80" no es restricción redundante',
            'Es un problema en el que hay dos recursos limitados para distribuir entre dosactividades',
            'La región factible esta acotada',
            'El punto (80,0) es una posible solución factible',
            'Es un problema que no se puede resolver mediante simplex',
            'Todas son correctas',
            'Todas son incorrectas'
        ],
        respuesta: 3
    }
]
