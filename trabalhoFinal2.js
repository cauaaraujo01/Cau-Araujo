const ask = require("readline-sync")

let nomesDosDoadores = []
let idade = []
let pesoDosDoadores = []
let tipoSanguineo
let ultumaDoacaoDeSangue = []
let op

function main() {
    let sustentaMenu = true
    while (sustentaMenu) {
        console.clear()
        console.log(`
            [1] - Cadastrar Doador                   
            [2] - Listar Doadores                    
            [3] - Buscar Doador Por Tipo Sanguíneo
            [4] - Buscar Doador Por Data Da Última Doação
            [5] - Sair
            Escolha uma opção: `)

        let op = Number(ask.question())

        switch (op) {
            case 1:
                console.clear()
                cadastroDeDoadores()
                break
            case 2:
                console.clear()
                listaDeDoadores()
                break
            case 5:
                sustentaMenu = false
                break
            
            default:
                console.log("Opção inválida. Tente novamente.")
                break
        }
    }
}


        function cadastroDeDoadores() {
            console.clear()
            let nome = ask.question('Digite seu nome: ')
            let idade = Number(ask.question("Qual sua idade? "))
            let peso = Number(ask.question("Qual seu peso? "))
            let tipoSanguineo = ask.question("Qual seu tipo sanguineo? ")
            let ultimaDoacao = ask.question("Qual foi sua ultima doacao? ")
        
            let novoDoador = {
                nome: nome,
                idade: idade,
                peso: peso,
                tipoSanguineo: tipoSanguineo,
                ultimaDoacao: ultimaDoacao
            }
        
            doadores.push(novoDoador)
            console.clear()
            ask.question('Doador cadastrado. Tecle enter para continuar...')
        }

        function listaDeDoadores() {
            console.log(`
            ----------------------------------------------------------------------------------------------
             Nome      |    Idade      |     Peso      |     Tipo Sanguineo     |     ultima Doacao 
            ----------------------------------------------------------------------------------------------`)
            
            doadores.for(doador => {
                console.log(` ${doador.nome}   |  ${doador.idade}  |     ${doador.peso}      |    ${doador.tipoSanguineo}     |   ${doador.ultimaDoacao}`)
            })
        
            console.log("----------------------------------------------------------------------------------------------")
            ask.question('Tecle enter para continuar...')
        }
        
        function listadedoadores(){
            for(let doador of dodores){
                if(doador.tipoSanguineo === 'o+'){
                    console.log(`${doador.nome} | ${doador.idade} | ${doador.tipoSanguineo}`)
                }
            }
        }


main()


