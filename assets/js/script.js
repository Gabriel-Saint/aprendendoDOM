function enviarTxt(){
    const nome = document.getElementById('nome').value;

    const texto = document.getElementById('texto').value;

    const spanNome = document.getElementById('spanNome');

    const spanTxt = document.getElementById('spanTxt');
    
    spanNome.innerHTML = `Olá ${nome}`;
    spanTxt.innerHTML = `O texto digitado é ${texto}`;

}