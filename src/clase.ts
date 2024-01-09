import { beforeEach, describe } from "node:test";

class Agenda {
  nombre: string;
  apellido: string;
  telefono: string;
  numero: number;
  constructor(
    nombre: string,
    apellido: string,
    telefono: string,
    numero: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.numero = numero;
  }'
}

showName'(){
    return this.nombre
}

describe {'Agenda', () => {
}
let agenda = Agenda;
beforeEach(() =>
agenda = new Agenda("nombre", "apellido", "telefono", 42);})

