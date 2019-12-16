class Medico {//Classe médico
    constructor() {//construtor dos parametros
        this.nome = "";
        this.crm = 0;
        this.telefone = 0;
        this.especialidade = "";

        if(!localStorage.getItem('Medico')){
            let adicionar = {
                medicos: [{}],
            }

            localStorage.setItem('Medico', JSON.stringify(adicionar))
        }
    }
    cadastrar(nnome, ccrm, ttelefone, eespec)   { // metodo cadastrar recebe os parametros do form

        let pegando = localStorage.getItem('Medico');
        pegando = JSON.parse(pegando) 
        

        let med = { // transformando o array e json para armazenar
            nome: nnome,
            crm: ccrm,
            telefone: ttelefone,
            especialidade: eespec
        }

        pegando.medicos.push(med); // acrescentando no array medico o json
        localStorage.setItem("Medico", JSON.stringify(pegando)); //salvando em local storage
        alert("Cadastro realizado!") // alerta para certificar que foi cadastrado
    }
}



class Paciente {//Classe paciente
    constructor() {//construtor dos parametros
        this.nome = "";
        this.cpf = 0;
        this.telefone = 0;
        this.email = "";
        
        if(!localStorage.getItem('Paciente')){
            let adc = {
                paciente: [{}],
            }
            localStorage.setItem('Paciente', JSON.stringify(adc))
        }
    }
    
    cadastrar(nnome, ccrm, ttelefone, eemail) { // metodo cadastrar recebe os parametros do form
        let pegar = localStorage.getItem('Paciente')
        pegar = JSON.parse(pegar)

        let pac = { // transformando o array e json para armazenar
            nome: nnome,
            crm: ccrm,
            telefone: ttelefone,
            email: eemail
        }
        pegar.paciente.push(pac); // acrescentando no array paciente o json
        localStorage.setItem("Paciente", JSON.stringify(pegar)); //salvando em local storage
        alert("Cadastro realizado!")
    }
}

class Consultar{
    
}

function cadMed() {
    let nome = document.getElementById("medicoNome").value;
    let crm = document.getElementById("medicoCRM").value;
    let tel = document.getElementById("medicoTelefone").value;
    let esp = document.getElementById("medicoEspecialidade").value;
    if (esp.value == "clinica") {
      esp = "Clinica Medica"
    } else if (esp.value == "dermatologia") {
      esp = "Dermatologista"
    } else if (esp.value == "oftalmologia") {
      esp = "Oftalmologista"
    } else if (esp.value == "ortopedia") {
      esp = "Ortopedista"
    } else if (esp.value == "pediatria") {
      esp = "Pediatra"
    }

    let teste = new Medico()
    teste.cadastrar(nome, crm, tel, esp)



  }
  function cadPac() {
    let nome = document.getElementById("clienteNome").value;
    let cpf = document.getElementById("clienteCPF").value;
    let tel = document.getElementById("clienteTelefone").value;
    let email = document.getElementById("clienteEmail").value;
    let teste = new Paciente()
    teste.cadastrar(nome, cpf, tel, email)
  }

/* TYPESCRIPT

class Medico {
    nome: string = ""
    crm: number = 0
    telefone: number = 0
    especialidade: string = ""
    cdMedico: Array<any> =[]
    cadastrar(nnome: string, ccrm: number, ttelefone: number, eespec: string): void {
        let med = JSON.stringify({
            nome : nnome,
            crm : ccrm,
            telefone : ttelefone,
            especialidade : eespec
        })
        this.cdMedico.push(med)
        localStorage.setItem("Medico", JSON.stringify(this.cdMedico))
    }
}

class Paciente {
    nome: string = ""
    cpf: number = 0
    telefone: number = 0
    email: string = ""
    cdPaciente: Array<any> =[]
    cadastrar(nnome: string, ccrm: number, ttelefone: number, email: string): void {
        let pac = JSON.stringify({
            nome : nnome,
            cpf : ccrm,
            telefone : ttelefone,
            email : email
        })
        this.cdPaciente.push(pac)
        localStorage.setItem("Paciente", JSON.stringify(this.cdPaciente))
    }
}

*/