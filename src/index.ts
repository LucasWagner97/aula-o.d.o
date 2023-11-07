// import { transaction } from "./classes/transaction"
// import { C6Bank } from "./classes/BankAccount"


// const lucas1 = new C6Bank("Lucas", 9082192018, 1)
// const julio1 = new C6Bank("Julio", 2897192872, 2)

// function realizaTransacao (valores: number, idDestin: number, idRemem: number){
//     const tr1 = new transaction(valores, idDestin, idRemem)

//     return tr1
// }
// console.log (realizaTransacao(100, 9082192018, 2897192872))


const viajante = {
    nome: "Lucas",
    idade: 23,
    nacionalidade: "brasileiro",
   
    visitar (lugar: string) {
        console.log("Visitou o", lugar)
    }

//     embarcar () {
//         console.log("Embarcou para o próximo destino")

//        }

}

viajante.visitar("Brasil")