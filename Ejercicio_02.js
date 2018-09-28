var arreglo1 = new Array(1,2,3,4,5,6,7,8,9);

function suprom(arr){
    var prom = 0;
    var sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log("La sumatoria del arreglo es: "+sum);
    prom = sum/arr.length;
    console.log("El promedio del arreglo es: "+prom);
}