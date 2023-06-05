/**N refers to the number of random elements generated on the array */
function arraysVacios(){
    let info = document.getElementById('val_ingresados');
    let rta = document.getElementById('respuesta1');
    let N = prompt('cuantos numeros aleatorios quieres');
    let arr = new Array(N);
    for(let i= 0;i < N; i++){
        arr[i] = Math.round(Math.random()*10);
    }
    console.log(arr);
    info.innerHTML = "la cantidad de valores es "+N;
    rta.innerHTML = "["+arr+"]";
}
function getNumbers(){
    let info2 = document.getElementById('val_ingresados2');
    let rta2 = document.getElementById('respuesta2');
    let numList = prompt('dame una lista de numeros separados por comas');
    const result = numList.split(',');
    numbers = Object.values(result);
    console.log(numList);
    console.log(numbers);
    info2.innerHTML = "el array original es "+numList;
    rta2.innerHTML = "["+numbers+"]"+ "  ver en la consola el resultado. ";
}
function sortValues(){
    let info3 = document.getElementById('val_ingresados3');
    let rta3 = document.getElementById('respuesta3');
    let numList2 = prompt('dame una lista de numeros separados por comas');
    const numbers = numList2.split(',');
    let valuesSorted = numbers.sort((a,b)=>a-b);
    console.log(valuesSorted);
    info3.innerHTML = "el array original es ["+numList2+"]";
    rta3.innerHTML = "["+valuesSorted+"]"+" además el maximo y el minimo son respectivamente = ["+valuesSorted[0]+","+valuesSorted[valuesSorted.length-1]+"].";
}
