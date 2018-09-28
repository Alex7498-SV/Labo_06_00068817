var arreglo = new Array(1,2,3,1,3,4,1,352,56,4,23,52,1,2,12,23,1);

function contRep(arreglo,a){
    var contador = 0;
    for(let i= 0; i<= arreglo.length; i++){
        if(arreglo[i] == a){
            contador++;
        }
    }
    console.log("El numero "+a+" se repite "+contador+" veces");
}