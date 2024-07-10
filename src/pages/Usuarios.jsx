
const Usuarios = () => {
    const pessoas = [
    { nome: "Ana", idade: 25, peso: 68 },
    { nome: "Bruno", idade: 30, peso: 80 },
    { nome: "Carla", idade: 22, peso: 55 },
    { nome: "Daniel", idade: 35, peso: 90 },
    { nome: "Eduarda", idade: 28, peso: 62 },
    { nome: "Felipe", idade: 40, peso: 85 },
    { nome: "Gabriela", idade: 27, peso: 58 },
    { nome: "Hugo", idade: 32, peso: 75 },
    { nome: "Isabela", idade: 26, peso: 63 },
    { nome: "João", idade: 29, peso: 70 },
    { nome: "João", idade: 25, peso: 70 },
    { nome: "Maria", idade: 31, peso: 58 },
    { nome: "Pedro", idade: 42, peso: 85 },
    { nome: "Ana", idade: 28, peso: 62 },
    { nome: "Luiz", idade: 35, peso: 75 },
    { nome: "Julia", idade: 22, peso: 55 },
    { nome: "Ricardo", idade: 48, peso: 90 },
    { nome: "Beatriz", idade: 26, peso: 65 },
    { nome: "Carlos", idade: 39, peso: 80 },
    { nome: "Fernanda", idade: 24, peso: 60 },
    { nome: "Gabriel", idade: 30, peso: 72 },
    { nome: "Helena", idade: 45, peso: 95 },
    { nome: "Igor", idade: 27, peso: 68 },
    { nome: "Jéssica", idade: 33, peso: 78 },
    { nome: "Kátia", idade: 29, peso: 63 },
    { nome: "Leonardo", idade: 41, peso: 88 },
    { nome: "Mariana", idade: 23, peso: 59 },
    { nome: "Nelson", idade: 36, peso: 82 },
    { nome: "Olivia", idade: 25, peso: 71 },
    { nome: "Patrícia", idade: 32, peso: 76 },
    { nome: "Rafael", idade: 44, peso: 92 },
    { nome: "Sandra", idade: 26, peso: 67 },
    { nome: "Thiago", idade: 38, peso: 84 },
    { nome: "Ursula", idade: 24, peso: 61 },
    { nome: "Vitor", idade: 29, peso: 73 },
    { nome: "Wagner", idade: 43, peso: 91 },
    { nome: "Ximena", idade: 27, peso: 69 },
    { nome: "Yara", idade: 34, peso: 79 },
    { nome: "Zélia", idade: 28, peso: 64 }
      ];

  return (
    <>
        <h1>Usuarios</h1>
        <div>
            {
                pessoas.map((pessoa,id)=>(
                <p key={id}>{`${id+1} - Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, peso: ${pessoa.peso}`}</p>
            )
        )
            }
        </div>
    
    </>
  )
}

export default Usuarios