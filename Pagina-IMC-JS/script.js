let nombreUsuario = prompt("¿Cual es tu nombre?");
let peso = prompt("¿Cual es tu peso en Kg?");
let estatura = prompt("¿Cual es tu estatura? (ponla en decimales) EJEMPLO: 1.70");
const IMC = (peso / (estatura * estatura));

console.log("=== PERFIL DE USUARIO ===");
console.log("Nombre: " + nombreUsuario)
console.log("Peso: " + peso);
console.log("IMC: " + IMC);

let clasificacion = "";
    if (IMC < 18.5) {
        clasificacion = "Peso inferior al normal"
    } else if (IMC >=18.5 && IMC <= 24.9) {
        clasificacion = "Peso normal"
    } else if (IMC >= 25 && IMC <= 29.9) {
        clasificacion = "Sobrepeso"
    } else if (IMC >= 25 && IMC <= 34.9) {
        clasificacion = "Obesidad I"
    } else if (IMC >= 35 && IMC <= 39.9) {
        clasificacion = "Obesidad II"
    } else if (IMC >= 40) {
        clasificacion = "Obesidad III"
    }

alert("¡Hola " + nombreUsuario + "! Tienes un peso de " + peso + " y tu IMC es: " + IMC + " tienes " + clasificacion);
