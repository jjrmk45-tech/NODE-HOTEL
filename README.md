# Sistema de Check-in de Hotel - Node.js

## Instruções de Instalação e Execução

### Requisitos

* Node.js instalado no computador
* Prompt de Comando (CMD) ou Terminal

### Instalação

1. Crie uma pasta para o projeto.
2. Salve o arquivo principal como `index.js`.
3. Abra o terminal na pasta do projeto.
4. Execute o comando:

```bash
npm init -y
```

### Execução

No terminal, execute:

```bash
node index.js
```

O sistema será iniciado e exibirá o menu principal.

---

## Funcionalidades Implementadas

### Cadastro de Hóspedes

Permite cadastrar novos hóspedes informando:

* Nome
* CPF
* Telefone

### Check-in

Permite associar um hóspede cadastrado a um quarto disponível.

### Check-out

Permite liberar um quarto ocupado.

### Listagem de Quartos

Exibe todos os quartos do hotel com:

* Número do quarto
* Tipo (Standard ou Luxo)
* Status (Livre ou Ocupado)

### Busca de Hóspedes

Permite localizar em qual quarto um hóspede está hospedado.

### Listagem de Hóspedes

Exibe todos os hóspedes cadastrados no sistema.

### Gerenciamento de Quartos

O sistema possui 110 quartos numerados de 001 a 110:

* Quartos 001 a 055: Standard
* Quartos 056 a 110: Luxo

---

## Exemplo de Saída Esperada no Console

```text
==================================
       HOTEL NODE SYSTEM
==================================

HÓSPEDES CADASTRADOS:

1. João Silva
2. Maria Souza
3. Carlos Santos
4. Ana Oliveira
5. Pedro Lima

----------------------------------
1 - Cadastrar Hóspede
2 - Fazer Check-in
3 - Fazer Check-out
4 - Listar Quartos
5 - Buscar Hóspede
6 - Listar Hóspedes
0 - Sair

Escolha uma opção:
```

### Exemplo de Check-in

```text
Nome do hóspede: João Silva
Número do quarto (001-110): 001

Check-in realizado com sucesso!
Hóspede: João Silva
Quarto: 001
Tipo: Standard
```

### Exemplo de Listagem de Quartos

```text
Quarto 001 | Standard | Ocupado por João Silva
Quarto 002 | Standard | Livre
Quarto 003 | Standard | Livre
Quarto 004 | Standard | Livre
```

### Exemplo de Check-out

```text
Número do quarto: 001

Check-out realizado para João Silva
```

---

## Tecnologias Utilizadas

* JavaScript
* Node.js
* Módulo Readline

---

## Autor

Gedson Eber Ribeiro Silva 
(01770703)

Julio Ferreira da Silva Neto (01808964)

Iarlley Oliveira França (01812784)

Wendel Alexandre Pereira do Nascimento (01800433)

Paulo Adriano Carvalho de Oliveira (0180384)

Cleydson Barbosa da Silva Lima (01786045)

