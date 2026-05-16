<<<<<<< HEAD
const selectDiasProduccion = document.getElementById('id-select-dias');
const btncargarProduccion = document.getElementById('id-btn-cargar-produccion');
const btnPresentarProduccion = document.getElementById('id-btn-presentar-produccion');
const txtlistadoProduccion = document.getElementById('id-listado-produccion');

const btnAnalizar = document.getElementById('id-btn-analizar');
const txtResultados = document.getElementById('id-resultados');

let vectorProduccion = []
const diasSemana = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

btncargarProduccion.addEventListener('click', function (e) {

    const dimesion = selectDiasProduccion.value

    cargarProduccion(dimesion)

})

btnPresentarProduccion.addEventListener('click', function (e) {

    txtlistadoProduccion.value = vectorProduccion.join(',')

})

btnAnalizar.addEventListener('click', function (e) {

    analizarProduccion()

})

function cargarProduccion(dimesion) {

    for (let i = 0; i < dimesion; i++) {

        const numeroaleatorio = Math.ceil(Math.random() * 1000);

        vectorProduccion[i] = numeroaleatorio;

    }

}

function analizarProduccion() {

    let total = 0

    let mayor = vectorProduccion[0]
    let menor = vectorProduccion[0]

    let diaMayor = 0
    let diaMenor = 0

    let promedio = 0

    let diasAltos = 0

    let diasCriticos = 0

    for (let i = 0; i < vectorProduccion.length; i++) {

        total = total + vectorProduccion[i]

        if (vectorProduccion[i] > mayor) {

            mayor = vectorProduccion[i]
            diaMayor = i

        }

        if (vectorProduccion[i] < menor) {

            menor = vectorProduccion[i]
            diaMenor = i

        }

        if (vectorProduccion[i] < 100) {

            diasCriticos++

        }

    }

    promedio = total / vectorProduccion.length

    for (let i = 0; i < vectorProduccion.length; i++) {

        if (vectorProduccion[i] > promedio) {

            diasAltos++

        }

    }

    txtResultados.value =
        'Produccion Total: ' + total + '\n' +
        'Mayor Produccion: ' + mayor + '\n' +
        'Dia Mayor: ' + diasSemana[diaMayor] + '\n' +
        'Menor Produccion: ' + menor + '\n' +
        'Dia Menor: ' + diasSemana[diaMenor] + '\n' +
        'Promedio: ' + promedio.toFixed(2) + '\n' +
        'Dias sobre promedio: ' + diasAltos + '\n' +
        'Dias criticos: ' + diasCriticos

=======
const selectDiasProduccion = document.getElementById('id-select-dias');
const btncargarProduccion = document.getElementById('id-btn-cargar-produccion');
const btnPresentarProduccion = document.getElementById('id-btn-presentar-produccion');
const txtlistadoProduccion = document.getElementById('id-listado-produccion');

const btnAnalizar = document.getElementById('id-btn-analizar');
const txtResultados = document.getElementById('id-resultados');

let vectorProduccion = []
const diasSemana = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

btncargarProduccion.addEventListener('click', function (e) {

    const dimesion = selectDiasProduccion.value

    cargarProduccion(dimesion)

})

btnPresentarProduccion.addEventListener('click', function (e) {

    txtlistadoProduccion.value = vectorProduccion.join(',')

})

btnAnalizar.addEventListener('click', function (e) {

    analizarProduccion()

})

function cargarProduccion(dimesion) {

    for (let i = 0; i < dimesion; i++) {

        const numeroaleatorio = Math.ceil(Math.random() * 1000);

        vectorProduccion[i] = numeroaleatorio;

    }

}

function analizarProduccion() {

    let total = 0

    let mayor = vectorProduccion[0]
    let menor = vectorProduccion[0]

    let diaMayor = 0
    let diaMenor = 0

    let promedio = 0

    let diasAltos = 0

    let diasCriticos = 0

    for (let i = 0; i < vectorProduccion.length; i++) {

        total = total + vectorProduccion[i]

        if (vectorProduccion[i] > mayor) {

            mayor = vectorProduccion[i]
            diaMayor = i

        }

        if (vectorProduccion[i] < menor) {

            menor = vectorProduccion[i]
            diaMenor = i

        }

        if (vectorProduccion[i] < 100) {

            diasCriticos++

        }

    }

    promedio = total / vectorProduccion.length

    for (let i = 0; i < vectorProduccion.length; i++) {

        if (vectorProduccion[i] > promedio) {

            diasAltos++

        }

    }

    txtResultados.value =
        'Produccion Total: ' + total + '\n' +
        'Mayor Produccion: ' + mayor + '\n' +
        'Dia Mayor: ' + diasSemana[diaMayor] + '\n' +
        'Menor Produccion: ' + menor + '\n' +
        'Dia Menor: ' + diasSemana[diaMenor] + '\n' +
        'Promedio: ' + promedio.toFixed(2) + '\n' +
        'Dias sobre promedio: ' + diasAltos + '\n' +
        'Dias criticos: ' + diasCriticos

>>>>>>> 122a2ad630fdd861d85f87c0cb91689d1a93a054
}