export interface IUsuarios{
    id?: number,
    nombres?: string,
    apellidos?: string,
    email?: string,
    cargo?: string,
    empresa?: string,
    direccion?: string,
    pais?: string,
    ciudad?: string
}

export class Usuarios implements IUsuarios {

    constructor(
        public id?: number,
        public nombres?: string,
        public apellidos?: string,
        public email?: string,
        public cargo?: string,
        public empresa?: string,
        public direccion?: string,
        public pais?: string,
        public ciudad?: string
    ){ }
}
