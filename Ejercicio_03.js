var desm = ["a", 1, "bs", 2.4, true, false];

function tipoDe(arr){
    var tipo = new Array();

    for (let i = 0; i< arr.length; i++){
        if(!tipo.includes(typeof(arr[i]))){
            tipo.push(typeof(arr[i]));
        }
        console.log(tipo); 
    }

    for(let j = 0; j < tipo.length; j++){
        let cont = 0;
        for(let k = 0; k < arr.length; k++){
            if (tipo[j] == typeof(arr[k])){
                cont++;
            }
        }
        console.log("El arreglo tiene "+cont+" elemenntos del tipo "+tipo[j]);
    }
}