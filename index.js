const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// =====================
// HÓSPEDES CADASTRADOS
// =====================

const hospedes = [
  {
    nome: "João Silva",
    cpf: "123.456.789-00",
    telefone: "(81) 99999-1111"
  },
  {
    nome: "Maria Souza",
    cpf: "987.654.321-00",
    telefone: "(81) 99999-2222"
  },
  {
    nome: "Carlos Santos",
    cpf: "111.222.333-44",
    telefone: "(81) 99999-3333"
  },
  {
    nome: "Ana Oliveira",
    cpf: "555.666.777-88",
    telefone: "(81) 99999-4444"
  },
  {
    nome: "Pedro Lima",
    cpf: "777.888.999-00",
    telefone: "(81) 99999-5555"
  }
];

// =====================
// CRIAÇÃO DOS QUARTOS
// =====================

const quartos = [];

for (let i = 1; i <= 110; i++) {
  quartos.push({
    numero: i.toString().padStart(3, "0"),
    tipo: i <= 55 ? "Standard" : "Luxo",
    hospede: null
  });
}

// =====================
// MENU PRINCIPAL
// =====================

function menu() {
  console.log("\n==============================");
  console.log("      HOTEL NODE SYSTEM");
  console.log("==============================");
  console.log("1 - Cadastrar Hóspede");
  console.log("2 - Fazer Check-in");
  console.log("3 - Fazer Check-out");
  console.log("4 - Listar Quartos");
  console.log("5 - Buscar Hóspede");
  console.log("6 - Listar Hóspedes");
  console.log("0 - Sair");

  rl.question("\nEscolha uma opção: ", (opcao) => {

    switch (opcao) {
      case "1":
        cadastrarHospede();
        break;

      case "2":
        fazerCheckIn();
        break;

      case "3":
        fazerCheckOut();
        break;

      case "4":
        listarQuartos();
        break;

      case "5":
        buscarHospede();
        break;

      case "6":
        listarHospedes();
        break;

      case "0":
        console.log("\nSistema encerrado.");
        rl.close();
        break;

      default:
        console.log("\nOpção inválida.");
        menu();
    }
  });
}

// =====================
// CADASTRAR HÓSPEDE
// =====================

function cadastrarHospede() {

  rl.question("Nome: ", (nome) => {

    rl.question("CPF: ", (cpf) => {

      rl.question("Telefone: ", (telefone) => {

        hospedes.push({
          nome,
          cpf,
          telefone
        });

        console.log("\nHóspede cadastrado com sucesso!");

        menu();
      });

    });

  });

}

// =====================
// CHECK-IN
// =====================

function fazerCheckIn() {

  rl.question("Nome do hóspede: ", (nome) => {

    const hospede = hospedes.find(
      h => h.nome.toLowerCase() === nome.toLowerCase()
    );

    if (!hospede) {
      console.log("\nHóspede não cadastrado.");
      return menu();
    }

    rl.question("Número do quarto (001-110): ", (numero) => {

      const quarto = quartos.find(
        q => q.numero === numero
      );

      if (!quarto) {
        console.log("\nQuarto não encontrado.");
        return menu();
      }

      if (quarto.hospede) {
        console.log("\nQuarto já está ocupado.");
        return menu();
      }

      quarto.hospede = hospede.nome;

      console.log("\nCheck-in realizado com sucesso!");
      console.log(`Hóspede: ${hospede.nome}`);
      console.log(`Quarto: ${quarto.numero}`);
      console.log(`Tipo: ${quarto.tipo}`);

      menu();

    });

  });

}

// =====================
// CHECK-OUT
// =====================

function fazerCheckOut() {

  rl.question("Número do quarto: ", (numero) => {

    const quarto = quartos.find(
      q => q.numero === numero
    );

    if (!quarto) {
      console.log("\nQuarto não encontrado.");
      return menu();
    }

    if (!quarto.hospede) {
      console.log("\nQuarto já está livre.");
      return menu();
    }

    console.log(
      `\nCheck-out realizado para ${quarto.hospede}`
    );

    quarto.hospede = null;

    menu();

  });

}

// =====================
// LISTAR QUARTOS
// =====================

function listarQuartos() {

  console.log("\n========== QUARTOS ==========\n");

  quartos.forEach(q => {

    console.log(
      `Quarto ${q.numero} | ${q.tipo} | ${
        q.hospede
          ? "Ocupado por " + q.hospede
          : "Livre"
      }`
    );

  });

  menu();

}

// =====================
// BUSCAR HÓSPEDE
// =====================

function buscarHospede() {

  rl.question("Nome do hóspede: ", (nome) => {

    const quarto = quartos.find(
      q =>
        q.hospede &&
        q.hospede.toLowerCase() === nome.toLowerCase()
    );

    if (quarto) {

      console.log(
        `\n${nome} está hospedado no quarto ${quarto.numero}`
      );

    } else {

      console.log(
        "\nHóspede não está hospedado ou não foi encontrado."
      );

    }

    menu();

  });

}

// =====================
// LISTAR HÓSPEDES
// =====================

function listarHospedes() {

  console.log("\n========== HÓSPEDES ==========\n");

  hospedes.forEach((h, i) => {

    console.log(
      `${i + 1}. ${h.nome} | CPF: ${h.cpf} | Telefone: ${h.telefone}`
    );

  });

  menu();

}

// =====================
// INICIAR SISTEMA
// =====================

menu();