
function randomNumero(max) {
    return Math.floor(Math.random() * max) + 1;
}

function borbuja(array) {
    var startTime = performance.now();
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    };
    var endTime = performance.now();
    var endTime2=endTime-startTime;
    return endTime2.toFixed(5);
}

function vector(tamano, tamano2) {
    var arreglo=[tamano];
    for( var i=0; i<tamano;i++){
        arreglo[i]=randomNumero(tamano2);
    }
    return arreglo;
}


function burbuja() {
    //obtine el valor ingresado en el elemento input del html
    var valor= document.getElementById("numero").value;
    var tamanoVector=new Array;
    var tiempoEjecucion=new Array;
    for(var i=0;i<10;i++){
        tamanoVector[i]=valor*(i+1);
        var arreglo=vector(tamanoVector[i],tamanoVector[0]*10);
        tiempoEjecucion[i]=borbuja(arreglo);
        //console.log(arreglo[i]);
        //console.log(tiempoEjecucion[1]);
    }


    //agregar valore a ala tabla 
    // Obtén la referencia a la tabla
    var tabla = document.getElementById('miTabla');
    // Obtén la referencia al cuerpo de la tabla
    var cuerpoTabla = tabla.querySelector('tbody');
    // Datos que quieres agregar (pueden ser generados dinámicamente)
    var datos = [
    ['Vector 1', tamanoVector[0], tiempoEjecucion[0]],
    ['Vector 2', tamanoVector[1], tiempoEjecucion[1]],
    ['Vector 3', tamanoVector[2], tiempoEjecucion[2]],
    ['Vector 4', tamanoVector[3], tiempoEjecucion[3]],
    ['Vector 5', tamanoVector[4], tiempoEjecucion[4]],
    ['Vector 6', tamanoVector[5], tiempoEjecucion[5]],
    ['Vector 7', tamanoVector[6], tiempoEjecucion[6]],
    ['Vector 8', tamanoVector[7], tiempoEjecucion[7]],
    ['Vector 9', tamanoVector[8], tiempoEjecucion[8]],
    ['Vector 10', tamanoVector[9], tiempoEjecucion[9]],
    // Agrega más filas y datos aquí
    ];
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
    // Recorre los datos y agrega las filas y celdas a la tabla
    for (var filaDatos of datos) {
    // Crea una nueva fila
    var fila = document.createElement('tr');
    // Recorre las celdas de la fila actual
    for (var dato of filaDatos) {
        // Crea una nueva celda
        var celda = document.createElement('td');
        // Agrega el dato a la celda
        celda.textContent = dato;
        // Agrega la celda a la fila
        fila.appendChild(celda);
    }
    // Agrega la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);
    }

    //graficar con los datos obstenidos
    // Obtén el contexto del lienzo (canvas)
    var ctx = document.getElementById('grafica').getContext('2d');
    var canvas = document.getElementById("grafica");
    
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Datos para el gráfico
    var data = {
        labels: ["Vector 1","Vector 2", "Vector 3" ,"Vector 4" ,"Vector 5" ,"Vector 6" ,"Vector 7","Vector 8","Vector 9", "Vector 10"],//datos de X
        datasets: [
            {
                label: 'Tiempo ejecución en milisegundos',
                data: tiempoEjecucion, // Los valores de tu gráfico
                borderColor: 'blue', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false, // Rellenar el área debajo de la línea
            }
        ]
    };
    // Verifica si ya existe una instancia de gráfico en el lienzo 'grafica'
    const existingChart = Chart.getChart('grafica');

    // Si existe un gráfico anterior, destrúyelo
    if (existingChart) {
        existingChart.destroy();
    }
    
    // Crea el gráfico de línea
    var miGrafico = new Chart(ctx, {
        type: 'line',
        data: data
        //options: options
    });
}