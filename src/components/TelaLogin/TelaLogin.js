import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const login = () => {
    // validação de login ainda será visto mais pra frente no curso
    alert("Login bem sucedido, mas falta fazer a prática 3 e remover esse alerta")
  }

  const mostrarTelaCadastro = () => {
    alert("Faça a prática 2 e remova esse alerta")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={()=>props.trocarDeTela(2)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;

/* Sempre que eu quiser usar uma função no onClick por exemplo, e essa função pedir um parâmetro, eu preciso antes passar uma função anônima. Por quê isso? Porque o React é muito apressado, e se não passarmos essa função anônima antes, o React vai ficar executando essa função o tempo todo, mesmo a gente não clicando. 

 Como eu sei se a função tem um parâmetro? Vejamos um exemplo: 
 
 const trocarDeTela = (tela) => {
    setTela(tela)
  } 
  
  Neste caso tem parâmetro porque o parâmetro foi inserido no primeiro parênteses da função - (tela). Se o parênteses da função estivesse vazio não precisaríamos passar uma função anônima no onClick.
  
  Repetindo: Sempre que a função tiver um parâmetro e nós precisarmos usar essa função, por exemplo, no onClick, a gente chama antes, no onClick, uma função anônima, que é, dentro das chaves, abrir parênteses e setinha {()=>} */
