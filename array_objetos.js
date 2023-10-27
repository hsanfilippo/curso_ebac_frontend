function gerarNota() {
    const nota = Math.floor(Math.random() * 11);
    return nota; 
}

function mostraAprovados() {
    console.log('\n\n--- Listagem de alunos aprovados --- \n');
    console.log(alunosAprovados, '\n');
    console.log('--- Alunos em Recuperação --- \n');
    console.log(alunosRecuperacao, '\n');
    console.log('--- Fim --- \n');
}

const alunos = [
    {
        Nome: "João",
        Nota: gerarNota()
    },
    {
        Nome: "Maria",
        Nota: gerarNota()
    },
    {
        Nome: "Zézinho",
        Nota: gerarNota()
    },
    {
        Nome: "Ana",
        Nota: gerarNota()
    },
    {
        Nome: "Julia",
        Nota: gerarNota()
    },
    {
        Nome: "Rubão",
        Nota: gerarNota()
    },
    {
        Nome: "Pablo",
        Nota: gerarNota()
    },
    {
        Nome: "Henrique",
        Nota: gerarNota()
    }
]

const alunosAprovados = alunos.filter(alunos => alunos.Nota >= 6);
const alunosRecuperacao = alunos.filter(alunos => alunos.Nota < 6);

mostraAprovados()
