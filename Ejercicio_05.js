var desm = ["a", 1, "bs", 2.4, 1, true, false];

function buscaTipos(arr, tipo){
    var result = new Array();

    for (let i = 0; i< arr.length; i++){
        if(tipo==(typeof(arr[i]))){
            result.push(arr[i]);
        }
        console.log(tipo); 
    }
    console.log(result);
}