var arreglo4 = new Array(1,2,3,4,5);
var arreglo41 = [1,2,3,4];

function sumasLocas(arr){
    var lon = arr.length;
    var resul = new Array();
    for(let i = 0; i < lon/2; i++){
        resul.push(arr[i]+arr[(lon-1)-i])
    }
    console.log(resul)
}