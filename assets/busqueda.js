function arreglo(){
    var vector = new Array(100000);
    // Llenar el vector con números aleatorios entre 1 y 100,000
    for (var i = 0; i < vector.length; i++) {
        vector[i] = Math.floor(Math.random() * 100000) + 1;
    }
    return vector;
}

function elemento(){
    var elemento = 0;
    elemento = Math.floor(Math.random() * 100000) + 1;
    return elemento;
}

function busquedaLineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i; // El elemento fue encontrado, devuelve el índice
        }
    }
    return "No encontrado"; // El elemento no fue encontrado en el arreglo
}

function busquedaBinariaIterativa(arr, elemento) {
    let inicio = 0;
    let fin = arr.length - 1;
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (arr[medio] === elemento) {
            return medio; // El elemento fue encontrado, devuelve el índice
        } else if (arr[medio] < elemento) {
            inicio = medio + 1; // Busca en la mitad derecha del arreglo
        } else {
            fin = medio - 1; // Busca en la mitad izquierda del arreglo
        }
    }
    return "No encontrado"; // El elemento no fue encontrado en el arreglo
}

function busquedaBinariaRecursiva(arr, elemento, inicio = 0, fin = arr.length - 1) {
    if (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (arr[medio] === elemento) {
            return medio; // El elemento fue encontrado, devuelve el índice
        } else if (arr[medio] < elemento) {
            // Busca en la mitad derecha del arreglo
            return busquedaBinariaRecursiva(arr, elemento, medio + 1, fin);
        } else {
            // Busca en la mitad izquierda del arreglo
            return busquedaBinariaRecursiva(arr, elemento, inicio, medio - 1);
        }
    }
    return "No encontrado"; // El elemento no fue encontrado en el arreglo
}

function ejecucionLineal(arr,elemento){
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    var posicion = busquedaLineal(arr,elemento);
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return [endTime2,posicion];//retorna el tiempo de ejecución y el indice de busqueda
}

function ejecucionIterativa(arr,elemento){
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    var posicion = busquedaBinariaIterativa(arr,elemento);
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return [endTime2,posicion];//retorna el tiempo de ejecución y el indice de busqueda
}

function ejecucionRecursiva(arr,elemento){
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    var posicion = busquedaBinariaRecursiva(arr,elemento);
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return [endTime2,posicion];//retorna el tiempo de ejecución y el indice de busqueda
}

function ejecutar() {
    var vector1=arreglo();
    var vector2=arreglo().sort(function(a, b){return a - b});
    var vector3=arreglo().sort(function(a, b){return a - b});

    var elemento1=elemento();
    var elemento2=elemento();
    var elemento3=elemento();

    var dato1=ejecucionLineal(vector1,elemento1);
    var dato2=ejecucionIterativa(vector2,elemento2);
    var dato3=ejecucionRecursiva(vector3,elemento3);


    //agregar valore a ala tabla 
    // Obtén la referencia a la tabla
    var tabla = document.getElementById('miTabla');
    // Obtén la referencia al cuerpo de la tabla
    var cuerpoTabla = tabla.querySelector('tbody');
    // Datos que quieres agregar (pueden ser generados dinámicamente)
    var datos = [
    ['1', vector1[0], vector2[0],vector3[0]],
    ['2', vector1[1], vector2[1],vector3[1]],
    ['3', vector1[2], vector2[2],vector3[2]],
    ['4', vector1[3], vector2[3],vector3[3]],
    ['5', vector1[4], vector2[4],vector3[4]],
    ['6', vector1[5], vector2[5],vector3[5]],
    ['7', vector1[6], vector2[6],vector3[6]],
    ['8', vector1[7], vector2[7],vector3[7]],
    ['9', vector1[8], vector2[8],vector3[8]],
    ['10', vector1[9], vector2[9],vector3[9]],
    ['Numero a encontrar: ', elemento1, elemento2, elemento3],
    ['Encontrado en el índice:  ', dato1[1], dato2[1], dato3[1]],
    ['Tiempo ejecucion (ms):  ', dato1[0], dato2[0], dato3[0]],
    ];
    //vacia todos los datos que contiene la tabla, en dado caso que contenga algo
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
    
    // Datos para el gráfico
    var data = {
        labels: ["Lineal", "Binaria iterativa", "Binaria recursiva"],//datos de X
        datasets: [
            {
                label: 'Tiempo ejecución en milisegundos',
                data:[dato1[0],dato2[0],dato3[0]], // Los valores de tu gráfico
                borderColor: 'blue', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                //fill: true, // Rellenar el área debajo de la línea
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
        type: 'bar',
        data: data
        //options: options
    });
}