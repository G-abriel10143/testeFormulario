function validar(){
    var nomeColocado = document.getElementById("nome");
    var emailColocado = document.getElementById("e-mail");
    var telefoneColocado = document.getElementById("telefone");
    var mensagemEscrita = document.getElementById("mensagem");

    if(nomeColocado.value == ""){
        alert("Nome não informado");
        nomeColocado.focus();
    }

    if(emailColocado.value == ""){
        alert("E-mail não informado");
        nomeColocado.focus();
    }

    if(!emailColocado.value.includes('@')){
        alert("E-mail invalido");
        emailColocado.focus();
    }

    if(!emailColocado.value.includes('.')){
        alert("E-mail invalido");
        emailColocado.focus();
    }

    if(telefoneColocado.value == ""){
        alert("Telefone não informado");
        telefoneColocado.focus();
    }

    if(mensagemEscrita.value == ""){
        alert("Mensagem não informado");
        mensagemEscrita.focus();
}
}
function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6LfH8hUgAAAAANFwQgDpCMj2KBwsCRyZcXSdl0c8', {action: 'submit'}).then(function(token) {
      });
    });
  }