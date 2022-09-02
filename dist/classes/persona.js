"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    determinarCandidato() {
        if (this.edad >= 18) {
            return `Eres candidato, ${this.getNombreCompleto()}`;
        }
        else {
            return `No Eres candidato, ${this.getNombreCompleto()}`;
            ;
        }
    }
}
exports.Persona = Persona;
