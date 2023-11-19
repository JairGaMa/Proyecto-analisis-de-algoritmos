//funcion para obtener numeros randoms 
function randomNumero(max) {
    return Math.floor(Math.random() * max) + 1;
}

function borbuja(array) { //funcion para hacer el ordenamiento borbuja
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    for (let i = array.length - 1; i >= 0; i--) {//empieza a hacer el ordenamiento borbuja
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];//hace el cambio de elementos
            }
        }
    };
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return endTime2;//retorna el tiempo de ejecución 
}

function insercion(array) { //funcion para hacer el ordenamiento insercion
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    var i;
    var llave;
    for(var j=1; j <array.length; j++){
        llave=array[j];
        i=j-1;
        while(i>=0 && array[i]>llave){
            array[i+1]=array[i];
            i--;
        }
        array[i+1]=llave;
    }
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return endTime2;//retorna el tiempo de ejecución 
}

function seleccion(array) { //funcion para hacer el ordenamiento seleccion
    var i, j, k, menor;
    i=0;
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    while(i<array.length-1){
        menor=array[i];
        k=i;
        for(j=i+1; j<array.length;j++){
            if(array[j]<menor){
                menor=array[j];
                k=j;
            }
        }
        array[k]=array[i];
        array[i]=menor;
        i++;
    }
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return endTime2;//retorna el tiempo de ejecución 
}

function ordenamientoPorMezcla(unaLista) {
    if (unaLista.length > 1) {
        const mitad = Math.floor(unaLista.length / 2);
        const mitadIzquierda = unaLista.slice(0, mitad);
        const mitadDerecha = unaLista.slice(mitad);

        ordenamientoPorMezcla(mitadIzquierda);
        ordenamientoPorMezcla(mitadDerecha);

        let i = 0;
        let j = 0;
        let k = 0;
        while (i < mitadIzquierda.length && j < mitadDerecha.length) {
            if (mitadIzquierda[i] < mitadDerecha[j]) {
                unaLista[k] = mitadIzquierda[i];
                i++;
            } else {
                unaLista[k] = mitadDerecha[j];
                j++;
            }
            k++;
        }
        while (i < mitadIzquierda.length) {
            unaLista[k] = mitadIzquierda[i];
            i++;
            k++;
        }
        while (j < mitadDerecha.length) {
            unaLista[k] = mitadDerecha[j];
            j++;
            k++;
        }
    }
}

function mezcla(array) { //funcion para hacer el ordenamiento seleccion
 
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    ordenamientoPorMezcla(array);
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return endTime2;//retorna el tiempo de ejecución 
}

function quicksort(arreglo, izquierda, derecha) {
    if (izquierda < derecha) {
        const indiceParticion = particion(arreglo, izquierda, derecha);
        quicksort(arreglo, izquierda, indiceParticion);
        quicksort(arreglo, indiceParticion + 1, derecha);
    }
}

function particion(arreglo, izquierda, derecha) {
    const pivote = arreglo[izquierda];
    while (true) {
        while (arreglo[izquierda] < pivote) {
            izquierda++;
        }

        while (arreglo[derecha] > pivote) {
            derecha--;
        }

        if (izquierda >= derecha) {
            return derecha;
        } else {
            // Intercambio de elementos
            let temp = arreglo[izquierda];
            arreglo[izquierda] = arreglo[derecha];
            arreglo[derecha] = temp;

            izquierda++;
            derecha--;
        }
    }
}


function rapido(array) { //funcion para hacer el ordenamiento seleccion
 
    var startTime = performance.now();//toma el tiempo  inicial de ejecucion
    quicksort(array, 0, array.length - 1);
    var endTime = performance.now();//toma el tiempo final de ejecucion
    var endTime2=endTime-startTime;//calcula el tiempo total de milisegundos de ejecucion
    return endTime2;//retorna el tiempo de ejecución 
}

function vector(tamano, tamano2) {
    var arreglo=[tamano];
    for( var i=0; i<tamano;i++){
        arreglo[i]=randomNumero(tamano2);
    }
    return arreglo;
}


function calcular() {
    //obtine el valor ingresado en el elemento input del html
    var valor= document.getElementById("numero").value;
    var tamanoVector=new Array;
    var tiempoBorbuja=new Array;
    var tiempoInsercion=new Array;
    var tiempoSeleccion=new Array;
    var tiempoMezcla=new Array;
    var tiempoRapido=new Array;
    for(var i=0;i<10;i++){
        tamanoVector[i]=valor*(i+1);
        var arreglo=vector(tamanoVector[i],tamanoVector[0]*10);
        tiempoBorbuja[i]=borbuja(arreglo);
        tiempoInsercion[i]=insercion(arreglo);
        tiempoSeleccion[i]=seleccion(arreglo);
        tiempoMezcla[i]=[];//mezcla(arreglo);
        tiempoRapido[i]=rapido(arreglo);
    }



    //agregar valore a ala tabla 
    // Obtén la referencia a la tabla
    var tabla = document.getElementById('miTabla');
    // Obtén la referencia al cuerpo de la tabla
    var cuerpoTabla = tabla.querySelector('tbody');
    // Datos que quieres agregar (pueden ser generados dinámicamente)
    var datos = [];
    for (var i = 0; i <10; i++) {
        datos.push([
            'Vector ' + (i + 1), 
            tamanoVector[i], 
            tiempoBorbuja[i], 
            tiempoInsercion[i],
            tiempoSeleccion[i],
            tiempoMezcla[i],
            tiempoRapido[i]
        ]);
    }

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
        labels: ["Vector 1","Vector 2", "Vector 3" ,"Vector 4" ,"Vector 5" ,"Vector 6" ,"Vector 7","Vector 8","Vector 9", "Vector 10"],//datos de X
        datasets: [
            {
                label: 'Borbuja (ms)',
                data: tiempoBorbuja, // Los valores de tu gráfico
                borderColor: 'blue', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false, // Rellenar el área debajo de la línea
            },
            {
                label: 'Insercion (ms)',
                data: tiempoInsercion, // Los valores de tu gráfico
                borderColor: 'red', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false, // Rellenar el área debajo de la línea
            },
            {
                label: 'Seleccion (ms)',
                data: tiempoSeleccion, // Los valores de tu gráfico
                borderColor: 'green', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false, // Rellenar el área debajo de la línea
            },
            {
                label: 'Mezcla (ms)',
                data: tiempoMezcla, // Los valores de tu gráfico
                borderColor: 'orange', // Color de la línea
                borderWidth: 2, // Ancho de la línea
                fill: false, // Rellenar el área debajo de la línea
            },
            {
                label: 'Rapido (ms)',
                data: tiempoRapido, // Los valores de tu gráfico
                borderColor: 'purple', // Color de la línea
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