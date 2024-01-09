




let lista:String = "";
let valor:String = "";

function buscar(valor:String){
    let getNombre: string = "";
  let encontrado: boolean = false;
  let indice =-1;
  let i = 0;
  let vueltas = lista.length;
  const valorMin: string = valor.toLowerCase();

      while(i<vueltas && !encontrado){
          const nombreMin = lista[i].getNombre().toLowerCase();
          if (valorMin === nombreMin){
              indice = i;
              encontrado = true;
          }
          i++;
      }

  console.log("Función buscar - Valor:", valor);
  console.log("Función buscar - Índice encontrado:", indice);
 return indice;}

 class lista {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
  
    // Getters
    getNombre: string() {
        return this.nombre;
    }}
