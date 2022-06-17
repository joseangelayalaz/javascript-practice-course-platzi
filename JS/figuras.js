// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//código del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, lado2, base){
    if (lado1 == lado2){
        return Math. sqrt((lado1 * lado2) - (base * base / 4));
    }
    else {
        return console.log("No es un triangulo isoceles")
    }

}


function areaTriangulo(base, altura){
    return base * altura / 2;
}

// Código del Círculo
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El PI es igual a: " + PI)

// Circunferencia
function perimetroCirculo(diametro){
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd("Círculos");



// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const ResultadoCuadrado = document.getElementById("ResultadoCuadrado");
    ResultadoCuadrado.innerText = "The perimeter of the square is " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const ResultadoCuadrado = document.getElementById("ResultadoCuadrado");
    ResultadoCuadrado.innerText = "The area of the square is " + area;
}

function calcularPerimetroTriangulo() {
    const InputTrianguloSideA = document.getElementById("InputTrianguloSideA");
    const lado1 = Number(InputTrianguloSideA.value);

    const InputTrianguloSideB = document.getElementById("InputTrianguloSideB");
    const lado2 = Number(InputTrianguloSideB.value);

    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const base = Number(InputTrianguloBase.value);
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerText = "The perimeter of the triangle is " + perimetro;
}

function calcularAreaTriangulo() {
    const InputTrianguloSideA = document.getElementById("InputTrianguloSideA");
    const lado1 = Number(InputTrianguloSideA.value);

    const InputTrianguloSideB = document.getElementById("InputTrianguloSideB");
    const lado2 = Number(InputTrianguloSideB.value);

    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const base = Number(InputTrianguloBase.value);

    const altura = alturaTriangulo(lado1, lado2, base);
    
    const area = areaTriangulo(base, altura);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerText = "The area of the triangle is " + area;
}

function calcularAlturaTriangulo() {
    const InputTrianguloSideA = document.getElementById("InputTrianguloSideA");
    const lado1 = Number(InputTrianguloSideA.value);

    const InputTrianguloSideB = document.getElementById("InputTrianguloSideB");
    const lado2 = Number(InputTrianguloSideB.value);

    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const base = Number(InputTrianguloBase.value);
    
    const altura = alturaTriangulo(lado1, lado2, base);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerText = "The hieght of the triangle is " + altura;

}

function calcularAreaCirculo() {
    const InputCirculo = document.getElementById("inputRadioCirculo");
    const radio = InputCirculo.value;

    const area = areaCirculo(radio);
    const resultCirculo = document.getElementById("resultCirculo");
    resultCirculo.innerText = "The area of circle is " + area;

}

function calcularPerimetroCirculo() {
    const InputCirculo = document.getElementById("inputRadioCirculo");
    const radio = InputCirculo.value;

    const diametro = diametroCirculo(radio);
    const perimetro = perimetroCirculo(diametro);
    const resultCirculo = document.getElementById("resultCirculo");
    resultCirculo.innerText = "The perimeter of circle is " + perimetro;

}



