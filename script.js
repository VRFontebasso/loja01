function logar (){
    
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "login" && senha == "senha"){
        alert('Olá usuário');
        location.href = "doc.html";
    }

    else{
        alert('Usuario ou senha incorreto !');
    }

}