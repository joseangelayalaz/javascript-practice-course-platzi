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
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diamtero * PI;
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
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
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
    resultTriangulo.innerText = "El perimetro del triangulo es " + perimetro;
}

function calcularAreaTriangulo() {
    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const base = Number(InputTrianguloBase.value);

    const InputTrianguloAltura = document.getElementById("InputTrianguloAltura");
    const altura = Number(InputTrianguloAltura.value);
    
    const area = areaTriangulo(base, altura);
    const resultTriangulo = document.getElementById("resultTriangulo");
    resultTriangulo.innerText = "El área del triangulo es " + area;
}




