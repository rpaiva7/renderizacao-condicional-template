import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(3)

  const trocarDeTela = (tela) => {
    setTela(tela)
  }

  // 1 -> TelaLogin
  // 2 -> TelaCadastro

  // 2 formas de fazer essa condicional: com if ou ternário. Ternário geralmente é melhor pq é mais simples e direto, porém não é uma boa prática ternários com mais de 2 condições/opções de resposta.

  //CONDICIONAL COM IF

   /*  if (tela === 1) {
      return (
        <MainContainer>
        <GlobalStyled />
        <TelaLogin trocarDeTela={trocarDeTela} />
      </MainContainer>
    )
    }
  
    else if (tela === 2) {
      return (
        <MainContainer>
        <GlobalStyled />
        <TelaCadastro trocarDeTela={trocarDeTela} />
      </MainContainer>
    )
    }

    else {
      return (
        <MainContainer>
        <GlobalStyled />
        <TelaPrincipal trocarDeTela={trocarDeTela} />
      </MainContainer>
    )
    } */

  // CONDICIONAL COM TERNÁRIO

  return (
    <MainContainer >
      <GlobalStyled />
      {
        tela === 1 ? 
        <TelaLogin /> //TelaLogin é igual a 1? Se sim, retorna TelaLogin, se não, retorna TelaCadastro.
        : 
        tela === 2 ? 
        <TelaCadastro /> //TelaCadastro é igual a 2? Se sim, retorna TelaCadastro, se não, retorna TelaPrincipal.
        :
        <TelaPrincipal /> 
      }
      
    </MainContainer>
  );
}

export default App;

/* Renderização Condicional

# **Expressions 1️⃣**

- **Resultam** ou **são** um valor
- Um jeito fácil de lembrar: algo que pode ser atribuído a uma variável ou aparecer dentro do console.log()
- Exemplos:
    - Um valor em si: "texto", 2, {name: "João"}, [1,2,3]
    - Operações: 3 * 5, "Hello" + "World"
    - Chamadas de Funções: minhaFuncao()
    
    # **Statements 🔁**

- Não resultam em valores, são apenas instruções
- Exemplos:
    - Condicionais comuns (if, else)
    - Loops (while, for)
- Um jeito fácil de lembrar: algo que não pode ser atribuído a uma variável

# **Expressões Condicionais💡**

- **Expressões Condicionais** definem um valor dependendo de uma condição
- Até agora, vimos três tipos de condicionais: **if/else**, **while**, **switch case.** Essas condicionais **não** podem se tornar uma expressão.
- Veremos mais dois tipos de condicionais: **Ternários** e **Curto Circuito**
- A diferença: **São expressões**, ou seja, podem se tornar um **único valor**!

# **Ternário 🔨**

- É como "transformar" um **if/else** em uma expressão
- A estrutura de um ternário depende de três coisas:
    - Condição
    - Expressão verdadeira
    - Expressão falsa

    https://file.notion.so/f/s/1ebc55e0-6286-489c-ab72-1484aa7297bf/5._REESTRUTURADO_-_Renderizacao_Condicional.svg?id=5aa211b0-d6f3-4055-a761-2b5db6a8253e&table=block&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&expirationTimestamp=1687833296132&signature=5MBSL45Qrvb3tB0fFX7zJxbVRDCla91jcpc6_oyUC-M&downloadName=5.+%5BREESTRUTURADO%5D+-+Renderizac%CC%A7a%CC%83o+Condicional.svg
    
    ❌ Antes não podíamos alocar if/else em variáveis 
    
    const condicao = if (n1 > 0 && n2 > 0){...}
    
    ✅ Agora nossa condicional pode ser alocada dentro de uma variável!
    
    const condicao = n1 > 0 && n2 > 0 ? console.log("As duas expressões são verdadeiras") : console.log("Uma das expressões não é verdadeira")
    
    
    # **Curto Circuito 🔧**

- No Curto Circuito, usamos operadores lógicos para definir a condição
- Ao fazer operações com operadores lógicos **&&** e **||**, a linguagem "para de executar" assim que **já sabe o resultado**
- Isso permite que usemos esses operadores para criar expressões condicionais

## ****Curto Circuito - && 🔧****

- O operador && retorna true somente quando **ambos os valores são true**
- Portanto, se o primeiro valor é ***falsy***, não é necessário olhar para o segundo valor
- Assim, é possível usá-lo para executar uma expressão condicionalmente somente quando algum valor específico for ***truthy***

## ****Curto Circuito - || 🔧****

- O operador || retorna false somente quando **ambos os valores são false.**
- Portanto, se o primeiro valor é ***truthy***, não é necessário nem olhar para o segundo valor
- Assim, é possível usá-lo para **executar uma expressão** condicionalmente somente quando algum valor específico for ***falsy***

# Renderização Condicional

## **Conceito 🔀**

- Queremos modificar o que é renderizado na tela com base em **parâmetros**, normalmente, vindos de **estado** ou **props**
- Vamos usar **condicionais** Javascript para determinar o JSX a ser retornado

## **Estratégia 🔀**

- Existem várias formas de retornar JSX diferentes com base nas diferentes formas que temos de fazer **condicionais** **em Javascript**
- Vamos ver alguns exemplos:

- if/else
- Switch case
- Expressões condicionais (ternários e curto circuítos)

*/