"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./classes/persona");
const persona = new persona_1.Persona("John", "Doe", 23);
const user = persona.determinarCandidato();
console.log(user);
