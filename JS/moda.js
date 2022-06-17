const listaModa = [
    1,
    3,
    4,
    1,
    2,
    3,
    2,
    5,
    3,
    4,
]
// Esto para convertir la lista en Objeto
const listaModaCount = {};

listaModa.map(
    function (elemento) {
        if (listaModaCount[elemento]) {
            listaModaCount[elemento] += 1;
        } else {
            listaModaCount[elemento] = 1;
        }
    }
);

// Object.entries le enviamos un argumento para que lo convierta en array
const listaModaArray = Object.entries(listaModaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);

const moda = listaModaArray[listaModaArray.length - 1];
