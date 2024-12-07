//Para Exibir data e hora automatico pegando do computador
function exibirDataHora () {
    const agora = new Date();
    const dia = agora.getDate();
    const mes = agora.getMonth() + 1; //mês inicia em 0
    const ano = agora.getFullYear();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segudos = agora.getSeconds();


    //Formato da data e hora
    const dataFormatada = `${dia}/${mes}/${ano}`
    const horaFormatada = `${horas}:${minutos}:${segudos}`

    //Exibir os elementos na tela
    document.getElementById("data").textContent = dataFormatada;
    document.getElementById("hora").textContent = horaFormatada;
}