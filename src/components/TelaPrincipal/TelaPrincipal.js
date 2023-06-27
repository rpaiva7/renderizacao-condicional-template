import { Div, Titulo } from "./styled";

function TelaPrincipal(props) {
 /*  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso
    alert("Sessão encerrada com sucesso, mas falta fazer a prática 3 e remover esse alerta")
  } */

  return (
      <Div>
          <Titulo>Muito bem, você concluiu o cadastro!</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={()=> props.trocarDeTela(1)}>Voltar ao início</button>
      </Div>
  )
}

export default TelaPrincipal;