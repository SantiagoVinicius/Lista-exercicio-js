function exemplo(){ 
    //document.write("Escrevendo na tela");
    
    document.getElementById("mensagem").innerHTML = "<b>Escrevendo na tela</b>";
    
    document.getElementById("numero").value = "enviar";
    
    console.log(document.getElementById("mensagem").innerHTML);
    
    
    let numero = document.getElementById("numero").value;
    }
    
    function Trocar(){
    let numero = document.getElementById("numero").value;
    
    if(numero<18){
    document.getElementById("mensagem").innerText = "Menor";
    }
    else if(numero==18)
    {
        document.getElementById("mensagem").innerText = "Maior";
    }
    else
    {
        document.getElementById("mensagem").innerText = "Maior";
    }
    
    
    }