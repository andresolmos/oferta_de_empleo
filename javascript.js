function maxoflist() {
    //defino la lista
    var arraylist = [13,2,4,35,1];
    //saco el maximo
    var max = Math.max(...arraylist);
    // lo envio a html
    create("h1",max,"mayor");
}

function longest() {
    //defino la lista
    var arraylist = [1,2,2,4,5,6,7,8,8,8];
    //saco el maximo
    var max = Math.max(...arraylist);
    //saco la longitud de la lista
    var length = arraylist.length;
    // l es el acomulador que agrupa la lista
    var l = 0;
    // h es la lista que usare para guardar el acomulado
    var h = [];
    // con este for creo espacio en la lista h y sumo el acomulador
    for (let o = 0; o < max; o++) {
    l =l +1 ;
    h.push(0);
        //con este for recorro la lista
        for (let i = 0; i < length; i++) {
         const element = arraylist[i];
         // con este if busco los que estan repetidos
            if (element == l) {
                h[o] = h[o] + 1;
            }             
}
}
//saco el maximo de los acomulados
var maxh = Math.max(...h)
//saco el la moda de h buscando el indice del mas grande
var moda = h.indexOf(maxh) + 1;
// lo mand al html
create("h2" , moda , "moda"); 
create("h1" , "numero" + ":","moda");
create("h2" , maxh , "moda");   
create("h1" , "repeticiones" + ":","moda");

}

function histogram() {
    //defino la lista
    var arraylist = [1,2,1,3,3,1,2,1,5,1];
    //saco la longitud de la lista
    var length = arraylist.length;
    // l es el acomulador que agrupa la lista
    var l = 0;
    // h es la lista que usare para guardar el acomulado en este caso solo deben ser de 5 por el enunciado del problema
    var h = [0,0,0,0,0];
    // con este for  sumo el acomulador
    for (let o = 0; o < 5; o++) {
    l =l +1 ;
    //con este for recorro la lista
        for (let i = 0; i < length; i++) {
         const element = arraylist[i];
         // con este if busco los que estan repetidos
            if (element == l) {
                h[o] = h[o] + 1;
            } 
}
// lo envio a html
// con este for creo la dinamica de los asteriscos pare representar los acomulados
for (let s = 0; s < h[o]; s++) {
create("h2" ,  "*", "histograma");   
}
create("h1" ,  l + ":","histograma");
}}

function create(elem,text,on) {
 var newDiv = document.createElement(elem);
var newContent = document.createTextNode(text);
newDiv.appendChild(newContent); 
//añade texto al div creado.
// añade el elemento creado y su contenido al DOM
var currentDiv = document.getElementById(on);
document.body.insertBefore(newDiv, currentDiv);

}