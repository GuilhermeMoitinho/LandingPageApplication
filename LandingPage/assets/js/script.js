const form = document.getElementById('form');
const campos1 = document.getElementById('Nome');
const campos2 = document.getElementById('Email');
const campos3 = document.getElementById('Celular');
const span1 = document.getElementById('span1Nome');
const span2 = document.getElementById('span2Email');
const span3 = document.getElementById('span3Celular');
const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 




function input1(){
    if (campos1.value.length < 3){
        campos1.style.border = '2px solid red';
        span1.style.display = 'block';
    }
    else{
        campos1.style.border = '2px solid green';
        span1.style.display = 'none';
    }
}

function validaremail(){
    if(!emailregex.test(campos2.value)){
        campos2.style.border = '2px solid red';
        span2.style.display = 'block';
    }
    else{
        campos2.style.border = '2px solid green';
        span2.style.display = 'none';
    }
}

function validatel(){
    if(campos3.value.length < 5){
        campos3.style.border = '2px solid red';
        span3.style.display = 'block';
    }
    else{
        campos3.style.border = '2px solid green';
        span3.style.display = 'none';   
    }
   
}



function fazPost(url, body, successCallback, errorCallback) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");

    request.onload = function() {
        if (request.status === 200) {
            // Sucesso: a solicitação POST foi bem-sucedida
            successCallback("Enviado com sucesso");
        } else {
            // Erro: algo deu errado na solicitação
            errorCallback("Houve um problema");
        }
    };

    request.onerror = function() {
        // Erro de rede ou falha na conexão
        errorCallback("Houve um problema de conexão");
    };

    request.send(JSON.stringify(body));
}

function cadastraUsuario() {
    event.preventDefault();
    let url = "http://localhost:5173/api/pessoa";
    let nomeInput = document.getElementById("Nome");
    let emailInput = document.getElementById("Email");
    let celularInput = document.getElementById("Celular");
    let interesseInput = document.getElementById("camp4");
    let nome = nomeInput.value;
    let email = emailInput.value;
    let celular = celularInput.value;
    let interesse = interesseInput.value;

    const ResultadoConsole = [nome, email, celular, interesse]

    body = {
        "Nome": nome,
        "Email": email,
        "Celular": celular,
        "Interesse": interesse
    };

    console.log(ResultadoConsole);

    fazPost(
        url,
        body,
        function(successMessage) {
            
            alert(successMessage);
            
            nomeInput.value = "";
            emailInput.value = "";
            celularInput.value = "";
            interesseInput.value = "";
        },
        function(errorMessage) {
            
            alert(errorMessage);
        }
    );
}