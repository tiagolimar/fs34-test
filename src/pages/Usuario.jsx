import { useParams } from "react-router-dom"

const Usuario = () => {
  const {nome} = useParams();
  return (
    <div>{`Seja Bem-Vindo usuário ${nome}!`}</div>
    // <div>Seja Bem-vindo aluno {nome}!</div>
  )
}

export default Usuario