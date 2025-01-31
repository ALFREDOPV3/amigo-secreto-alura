// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    
    console.log(document.getElementById("amigo").value);
    
    if (document.getElementById("amigo").value ==='')
        {
            alert("Ingresa un texto");
            
         }else{
    
    amigos.push(document.querySelector("#amigo").value);
    document.querySelector("#amigo").value = "";

   let text = "";
   amigos.forEach(imprimirLista);
   document.getElementById("listaAmigos").innerHTML = text;
   
   
    function imprimirLista(item){
        text +=  "<li>" + item + "</li>";
    }
         }
         
}

function sortearAmigo(){

    let aliatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[i];

    document.getElementById("resultado").innerHTML = elegido;
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}