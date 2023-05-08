function seccionar(e){
    let i=0;
    for(let opc of arr_opc){
        if(opc===e){
            arr_indicador[i].setAttribute("style","background:blue")
        }
        else{
            arr_indicador[i].setAttribute("style","background:none")
        }
        i++;
    }
}

let lupa = document.getElementById("lupa");
let bars = document.getElementById("bars");
let nom_opc = document.getElementsByClassName("nom-opc");
let menu = document.getElementById("menu");
let arr_opc = document.getElementsByClassName("opcion");
let arr_indicador = document.getElementsByClassName("indicador");
arr_indicador[0].setAttribute("style","background:blue");
let buscar = document.querySelector(".buscador");
let barras = document.getElementsByClassName("barra");


barras[0].setAttribute("style","min-height:55%;");
barras[1].setAttribute("style","min-height:72%;");
barras[2].setAttribute("style","min-height:77%;");
barras[3].setAttribute("style","min-height:23%; background-color:rgb(88, 181, 251);");
barras[4].setAttribute("style","min-height:58%;");
barras[5].setAttribute("style","min-height:27%; background-color:rgb(88, 181, 251);");
barras[6].setAttribute("style","min-height:55%;");
bars.addEventListener("click",function(){
    for(let opc of nom_opc){
        opc.classList.toggle("ocultar");
    }
    menu.classList.toggle("extendido");

});
for(let opc of arr_opc){
    opc.addEventListener("click",()=>{
        seccionar(opc);
    });
}
lupa.addEventListener("click",()=>{
    buscar.focus();
    buscar.setAttribute("style","border:1px solid #A2A7B0;background-color:#1D4372")

});
buscar.addEventListener("blur",()=>{
    console.log("22")
    buscar.setAttribute("style","border:none;");
});