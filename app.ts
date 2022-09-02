import { Persona } from "./classes/persona";

const persona = new Persona("John", "Doe", 23);

const user = persona.determinarCandidato();
console.log( user );