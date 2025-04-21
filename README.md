# 🚀 Backend Challenge

Este repositório contém a solução para o desafio de backend. Siga os passos abaixo para rodar o projeto localmente e utilizar as funcionalidades disponíveis.

---

## 🛠️ Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

---

## 📆 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevDanielOB/Backend-challenge.git
   cd backend-challenge
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   ou, se estiver usando yarn:
   ```bash
   yarn
   ```

---

## ▶️ Rodando o Projeto

### Com npm
```bash
npm run start
```

### Com yarn
```bash
yarn start
```

---

## 📂 Funcionalidades Disponíveis
- OBS: Adicione o Exemplo de uso dentro do arquivo que deseja testar ou execute o arquivo usage-examples.ts com 
yarn ts-node usage-examples.ts

### 1. **TypeScript**

#### 📌 `calculate.ts`
Realiza operações matemáticas.

**Exemplo de uso:**
```bash
yarn ts-node src/typescript/calculate.ts
```
```ts
console.log(calculate('multiply', 1, 5));
```

#### 📌 `extractValues.ts`
Extrai valores de uma chave específica de um array de objetos.

**Exemplo de uso:**
```bash
yarn ts-node src/typescript/extractValues.ts
```
```ts
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const result = extractValues(data, 'name');
console.log(result); // ['Alice', 'Bob']
```

#### 📌 `makeAllPositive.ts`
Transforma todos os números de um array em positivos.

**Exemplo de uso:**
```bash
yarn ts-node src/typescript/makeAllPositive.ts
```
```ts
console.log(makeAllPositive([1, -2, 3, -4, 5]));
```

---

### 2. **Clean Code**

#### 📌 `calculateDiscount.ts`
Calcula o desconto com base no tipo de cliente.

**Exemplo de uso:**
```bash
yarn ts-node src/clean-code/calculateDiscount.ts
```
```ts
const price = 110;
const isPremiumCustomer = true;
const finalPrice = applyDiscount(price, isPremiumCustomer);
console.log(`Final price: ${finalPrice}`);
```

#### 📌 `doubleEvenNumbers.ts`
Dobra todos os números pares de um array.

**Exemplo de uso:**
```bash
yarn ts-node src/clean-code/doubleEvenNumbers.ts
```
```ts
const numbers = [1, 2, 3, 4, 5, 6];
const doubledEvens = doubleEvenNumbers(numbers);
console.log(doubledEvens); // [4, 8, 12]
```

#### 📌 `processItems.ts`
Processa uma lista de itens com base em seu preço.

**Exemplo de uso:**
```bash
yarn ts-node src/clean-code/processItems.ts
```
```ts
const items: Item[] = [
  { name: 'Banana', price: 50 },
  { name: 'Apple', price: 150 },
  { name: 'Orange', price: 250 },
];

processItems(items);
```

---

## 🧲 Rodando os Testes

Execute os testes automatizados com:

### Com yarn:
```bash
yarn test
```

### Com npm:
```bash
npm run test
```

---

## 📌 Observações

- Verifique o arquivo `package.json` para mais scripts e comandos disponíveis.

---

