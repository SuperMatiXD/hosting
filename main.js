function ocultar_mostrar(id){
    let div = document.getElementById(id);
    //uso el condicional IF para saber si esta oculto (display:none) o si esta visible
     if (div.style.display =="none"){
        div.style.display = "flex";
     }
     else {
        div.style.display ="none";
     }
}