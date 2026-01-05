
# 📝 Todo List em React — Hooks Avançados, Context API e Performance

Projeto desenvolvido com **React + Vite** com foco em **boas práticas modernas**, organização de código, reuso de lógica e otimização de performance.

Este repositório faz parte de um exercício prático para consolidar conceitos avançados de React.

---

## 🎯 Objetivo do Projeto

Desenvolver uma aplicação de **Lista de Tarefas (Todo List)** utilizando:

* Hooks nativos do React
* Context API para estado global
* Hooks customizados
* Memoization para performance
* Persistência de dados no navegador
* HTML semântico, acessível e responsivo (Mobile First)

---

## 🚀 Funcionalidades

* ➕ Adicionar novas tarefas
* ✅ Marcar tarefas como concluídas
* ❌ Remover tarefas
* 🔍 Filtrar tarefas:

  * Todas
  * Pendentes
  * Concluídas
* 💾 Persistência com `localStorage`

---

## 🧠 Conceitos Aplicados

### Hooks

* `useState` — controle de estado local
* `useEffect` — sincronização com `localStorage`
* `useContext` — acesso ao estado global
* `useMemo` — otimização de filtros

### Context API

* Centralização do estado da aplicação
* Evita *prop drilling*

### Hook Customizado

* Encapsula a lógica de persistência no `localStorage`

### Memoization

* `React.memo` aplicado em itens da lista
* Evita renderizações desnecessárias

---

## 🧱 Arquitetura de Componentes

```
src/
 ├── App.jsx
 ├── TodoContext.jsx
 ├── TodoForm.jsx
 ├── TodoFilters.jsx
 ├── TodoList.jsx
 ├── TodoItem.jsx
 ├── useLocalStorage.js
 ├── main.jsx
 └── styles.css
```

### Descrição dos Componentes

* **TodoProvider** → Gerencia o estado global das tarefas
* **TodoForm** → Criação de novas tarefas
* **TodoFilters** → Filtros de visualização
* **TodoList** → Renderização da lista
* **TodoItem** → Item individual (memoizado)

---

## 🛠️ Tecnologias Utilizadas

* React 18
* Vite
* JavaScript (ES6+)
* CSS (Mobile First)
* React Developer Tools

---

## 📦 Instalação e Execução

### Pré-requisitos

* Node.js (versão LTS)
* npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/Li-code1/todo-react-avancado.git

# Acesse o projeto
cd todo-react

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 🧪 Testes Manuais

### Funcionais

* Adicionar tarefas
* Concluir tarefas
* Remover tarefas
* Filtrar tarefas

### Persistência

* Recarregar a página
* Verificar manutenção das tarefas

### Performance

* Monitorar renderizações com `console.log`
* Validar uso de `useMemo` e `React.memo`

---

## 🔍 Ferramentas de Apoio

* **React Developer Tools**

  * Inspeção de hooks
  * Visualização do Context API

* **DevTools do Navegador**

  * Testes de responsividade
  * Inspeção do `localStorage`

---

## ♿ Acessibilidade

* Uso de HTML semântico
* Labels associados aos inputs
* Navegação via teclado
* Atributos `aria-*` aplicados

---

## 📱 Responsividade

* Abordagem **Mobile First**
* Layout funcional em dispositivos móveis e desktop

---

## 📌 Possíveis Evoluções

* Versionar com TypeScript
* Integração com backend
* Testes automatizados (Jest / Testing Library)
* Animações com Framer Motion
* Autenticação de usuário

---

## 👩‍💻 Autoria

Projeto desenvolvido para fins educacionais e prática avançada em React.

---

⭐ Se este projeto te ajudou, considere deixar uma estrela no repositório!
