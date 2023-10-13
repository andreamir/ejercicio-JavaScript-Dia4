console.log('Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.');

function resta(a,b) {
    return a - b
}
console.log(resta(45334,43524));

console.log('Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, te devuelva la clasificación.');
function grade(num) {
    switch (true) {
        case num <= -1 || num >=11:
            return "Inserte una nota entre 0 al 10"
            break;
        case num <= 4:
            return "Insuficiente"
            break;
        case num >= 5 && num <= 6:
            return "Suficiente"
            break;
        case num >=7 && num <= 8:
            return "Notable"
            break;
        case num >= 9 && num <= 10:
            return "Sobresaliente"
        default: 
        return "Error"
            break;
    }
}
console.log(grade(2));
console.log(grade(6));
console.log(grade(7));
console.log(grade(9));

console.log('Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido.');

function duplicaNumero(num) {
    if (typeof num == "number") {
        return num*num
    }
    else {
        return "Debo ser ejecutada con un número"
    }
}
console.log(duplicaNumero(434));
// console.log(duplicaNumero(true));

console.log("Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter.");

function caracterInicial(string) {
    if (string == "") {
        return 'Debo ser ejecutada con un string no vacío'
    }
   else if (typeof string == "string") {
        return string[0]
    }
    else {
        return 'Debo ser ejecutada con un string'
}   
}
console.log(caracterInicial('Waldo'));

console.log('Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.');


function ultimoCaracter(string) {
    if (string == "") {
        return 'Debo ser ejecutada con un string no vacío'
    }
   else if (typeof string == "string") {
        return string.split('')[string.length - 1]
    }
    else {
        return 'Debo ser ejecutada con un string'
} 
}
console.log(ultimoCaracter('Lorelay'));

console.log('Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de carácteres.');

function cuentaCaracteres(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string."
    }
    return string.length
}
console.log(cuentaCaracteres('Ashley Frangipane'));

console.log('Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.');

function esPalindromo(str) {
    if (str == "" || typeof str !== "string") {
        return "No es un formato correcto."
    };
    const string = str.replace(/[\W_]/g, "").toLowerCase();
   const stringReves = string.split("").reverse().join("");
   return stringReves === stringReves ? "es palindromo" : "no es palindromo"
}

console.log(esPalindromo("Ali tomo tila"));

console.log('Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales.');

function getPrecioMostrar(string) {
    if (typeof string !== "number") {
       return "Inserta un número"
    }
    else {
        return `${string.toFixed(2)} €.`
    }
   

}
console.log(getPrecioMostrar(3.5678));

console.log('Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.');

function division(a,b) {
    return a/b
}
console.log(division(25,2));

console.log("Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más.");

function moreThanFive(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] >=5) {
            newArray.push(array[index]);
        }   
    }
return newArray
}

console.log(moreThanFive([3,6,8,2]));

console.log('Crea una aplicación que nos pida un número por prompt y, con un método, se lo pasemos por parámetro para que nos indique si es o no un número primo. Debe devolver true si es primo, sino false.');

let num = prompt('Dame un número');

function numPrimo(number) {
    if (number <= 1){
        return false;
    }
    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        }
    }
    return true  
}
console.log(numPrimo(num));