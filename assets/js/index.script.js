class Contato {
    constructor(nome, telfix, telcll, url, data, email, cep, cidade, ig, github) {
        this.nome = nome;
        this.telfix = telfix;
        this.telcll = telcll;
        this.url = url;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.ig = ig;
        this.github = github;
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
    }

    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.data);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;

    }

    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

class Contatos {
    constructor() {
        this.contatos = [];
    }
    adicionar(contato) {
        if (isAnyInputEmpty()) {
            sendMsg("Preencha todos os campos!")
        } else if (!isURLValida) {
            sendMsg("Insira URL válida!")
        } else if (validaNumero()) {
            sendMsg("Insira número válido!")
        } else if (validaCEP()) {
            sendMsg("Insira CEP válido!")
        } else {
            this.contatos.push(contato);
            clearInputs();
        }
    }
}

const contatos = new Contatos();

function criarContato() {
    const nome = document.getElementById("nome-input").value;
    const telfix = document.getElementById("telfix-input").value;
    const telcll = document.getElementById("telcll-input").value;
    const url = document.getElementById("url-input").value;
    const data = document.getElementById("data-input").value;
    const email = document.getElementById("email-input").value;
    const cep = document.getElementById("cep-input").value;
    const cidade = document.getElementById("cidade-input").value;
    const ig = document.getElementById("ig-input").value;
    const github = document.getElementById("github-input").value;

    const contato = new Contato(nome, telfix, telcll, url, data, email, cep, cidade, ig, github);

    contatos.adicionar(contato);

    renderizarctt()
}

function isAnyInputEmpty() {
    console.log("Passou pela funcao isAnyInputEmpty()");

    let nome = document.getElementById("nome-input").value;
    let telfix = document.getElementById("telfix-input").value;
    let telcll = document.getElementById("telcll-input").value;
    let url = document.getElementById("url-input").value;
    let data = document.getElementById("data-input").value;
    let email = document.getElementById("email-input").value;
    let cep = document.getElementById("cep-input").value;
    const cidade = document.getElementById("cidade-input").value;
    let ig = document.getElementById("ig-input").value;
    let github = document.getElementById("github-input").value;

    if (nome == "" || telfix == "" || telcll == "" || url == "" || data == "" || email == "" || cep == "" || cidade == "" || ig == "" || github == "") {
        return true;
    } else {
        return false;
    }
}


function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function sendMsg(texto) {
    alert(texto);
}

function formatedCellphone(telcll) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = telcll.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function formatedCellphone(telfix) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = telfix.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function clearInputs() {
    document.getElementById("nome-input").value = "";
    document.getElementById("telfix-input").value = "";
    document.getElementById("telcll-input").value = "";
    document.getElementById("url-input").value = "";
    document.getElementById("data-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("cep-input").value = "";
    document.getElementById("cidade-input").value;
    document.getElementById("ig-input").value = "";
    document.getElementById("github-input").value = "";
}

function dateinPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function validaNumero() {
    let telfix = document.getElementById("telfix-input").value;
    let telcll = document.getElementById("telcll-input").value;
    let telfixtamanho = telfix.length;
    let telclltamanho = telcll.length;

    if (telclltamanho != 11 || telfixtamanho != 11) {
        return true;
    } else {
        return false;
    }
}

function validaCEP() {
    let cep = document.getElementById("cep-input").value;
    let ceptamanho = cep.length;

    if (ceptamanho != 8) {
        return true;
    } else {
        return false;
    }
}

function formatedCEP(cep) {
    console.log("Passou pela funcao formatedCellphone()");

    let cepArray = cep.split("");
    let cepFormated = cellphoneArray[0] + cellphoneArray[1] +
        + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4] + "-"
        + cellphoneArray[5] + cellphoneArray[6]
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cepFormated;
}

function dateinPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}


function renderizarctt() {
    const listHTML = document.getElementById('ctt-box');
    listHTML.innerHTML = '';
    let array = contatos.contatos;
    let cttDiv = '';

    array.forEach(contato => {
        cttDiv += `
        <div class="card" onclick="renderizardetalhe()">
        <img src="${contato.url}">
        <h3>${contato.nome}</h3>
        <p>Telefone fixo: ${formatedCellphone(contato.telfix)}</p>
        <p>Telefone celular: ${formatedCellphone(contato.telcll)}</p>
    </div>
        `;
        listHTML.innerHTML += cttDiv;
    });
}

function createID(){
    let id = parseInt(Math.random() * 998);
    let tag = "";
    
    return id+=tag;
}

function renderizardetalhe() {
    const listHTML = document.getElementById('detalhe-box');
    listHTML.innerHTML = '';
    let array = contatos.contatos;
    let detalheDiv = '';

    array.forEach(contato => {
        detalheDiv += `
            <div class="card-detalhe">
            <img src="${contato.url}">
            <p> ID: ${createID.id}</p>
            <h3>${contato.nome}</h3>
            <p>Telefone fixo: ${formatedCellphone(contato.telfix)}</p>
            <p>Telefone celular: ${formatedCellphone(contato.telcll)}</p>
            <p>Data de nascimento: ${dateinPTBR(contato.data)}</p>
            <p>Idade: ${contato.age}</p>
            <p>Signo: ${contato.zodiacSign}</p>
            <p>Email: ${contato.email}</p>
            <p>CEP: ${contato.cep}</p>
            <p>Cidade: ${contato.cidade}</p>
            <p>Instagram: ${contato.ig}</p>
            <p>Github: ${contato.github}</p>
            <div class="incons-box">
            <img src="assets/images/wpp.png">
            <img src="assets/images/ig.png">
            <img src="assets/images/github.png">
        </div>
        </div>
            `;
        listHTML.innerHTML += detalheDiv;
    });

}