// Código del cuadrado

console.group("Cuadrado");
// const ladoCuadrado = 7;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd("Cuadrado");

//código del triangulo

console.group("Triangulo");

// const lado1Triangulo = 5;
// const lado2Triangulo = 7;
// const baseTriangulo = 10;
// console.log("Los lados del Triangulo miden: " 
// + lado1Triangulo +  "cm, " 
// + lado2Triangulo + "cm, " 
// + baseTriangulo +"cm, " )  

// const alturaTriangulo = 15;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

// const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm")

// const areaTriángulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es de: " + areaTriángulo + "cm^2")
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriángulo(base, altura){
    return base * altura / 2;
}

console.groupEnd("Triangulo");

// Código del Círculo
console.group("Círculos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm")


// Díametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo mide: " + diametroCirculo + "cm")
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
// const perimetroCirculo = PI * diametroCirculo;
// console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm")

// Área
// const areaCirculo = PI * (radioCirculo * radioCirculo); 
// console.log("El área del circulo mide: " + areaCirculo + "cm^2")
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

