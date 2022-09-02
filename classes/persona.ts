

export class Persona {

    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number
    ){
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
    }

    public getNombreCompleto(): string {
        return this.nombre + " " + this.apellido;
    }

    public getEdad(): number {
        return this.edad;
    }

    public determinarCandidato() {
        if (this.edad >= 18) {
            return `Eres candidato, ${this.getNombreCompleto()}`;
        } else {
            return `No Eres candidato, ${this.getNombreCompleto()}`;;
        }
    }

}