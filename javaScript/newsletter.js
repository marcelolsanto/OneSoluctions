var tentativas = 3;

function enviar() {
    var email = in_email.value;
    var email_invalido = (email == "");

    if (email_invalido && tentativas > 2) {
        tentativas--;
        p.style.display = 'none';
        mensagem.innerHTML = `<h3>Digite seu email corretamente!</h3><br>Você tem mais ${tentativas} tentativas!`;
    } else if (email_invalido && tentativas > 1) {
        tentativas--;
        p.style.display = 'none';
        mensagem.innerHTML = `<h3>Digite seu email corretamente!</h3><br>Você tem mais ${tentativas} tentativas!`;
    } else if (email_invalido && tentativas > 0) {
        tentativas--;
        p.style.display = 'none';
        in_email.style.display = 'none';
        btn1.style.display = 'none';
        mensagem.innerHTML = `<h3>Recarregue a página e tente outra vez!</h3>`;
    } else {
        alert('Seu e-mail foi enviado com sucesso!');
        mensagem.innerHTML = `<h3>Aguarde nosso o contato!</h3>`;
        in_email.style.display = 'none';
        btn1.style.display = 'none';
        p.style.display = 'none';
        window.location.href='sobre.html';
     }

    }