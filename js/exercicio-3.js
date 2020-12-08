function exemplo(){ 
    //document.write("Escrevendo na tela");
    
    document.getElementById("mensagem").innerHTML = "<b>Escrevendo na tela</b>";
    
    document.getElementById("numero").value = "teste";
    
    console.log(document.getElementById("mensagem").innerHTML);
    
    
    let numero = document.getElementById("numero").value;
    }
    
    function Trocar(){
    let numero = document.getElementById("numero").value;
    
    if(numero<100){
    document.getElementById("mensagem").innerText = "Menor que 100";
    }
    else if(numero==100)
    {
        document.getElementById("mensagem").innerText = "100";
    }
    else
    {
        document.getElementById("mensagem").innerText = "Maior que 100";
    }
    
    
    }