function onClickCalcularMediana() {
    const Inputnumber1 = document.getElementById("num1");
    const num1 = Number(Inputnumber1.value);

    const Inputnumber2 = document.getElementById("num2");
    const num2 = Number(Inputnumber2.value);

    const Inputnumber3 = document.getElementById("num3");
    const num3 = Number(Inputnumber3.value);

    const Inputnumber4 = document.getElementById("num4");
    const num4 = Number(Inputnumber4.value);

    const Inputnumber5 = document.getElementById("num5");
    const num5 = Number(Inputnumber5.value);

    const Inputnumber6 = document.getElementById("num6");
    const num6 = Number(Inputnumber6.value);


    // funcion calcular media aritmetica
    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
                
            }
        );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

   let lista1 = [num1, num2, num3, num4, num5, num6];
   lista1.sort((a,b) => a - b);
    
    const mitadLista1 = parseInt(lista1.length / 2);

    let mediana; 

    function esPar(numerito) {
        if (numerito % 2 === 0 ) {
        return true;
        } else {
        return false;
        }
    }

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1]; 

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    
    } else {
        mediana = lista1[mitadLista1];
    
    }
    
    const resultMediana = document.getElementById("resultMediana");
    resultMediana.innerText = "La mediana de tu lista es " + mediana;

}



    



