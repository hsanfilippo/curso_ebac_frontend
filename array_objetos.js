class Alunos {
    constructor(id, nome, nota) {
        this.Id = id;
        this.Nome = nome;
        this.Nota = nota;
    }
}

const joao = new Alunos(123, 'João', 7);
const paula = new Alunos(124, 'Paula', 6);
const maria = new Alunos(125, 'Maria', 5);
const ana = new Alunos(126, 'Ana', 8);

let alunos = [joao, paula, maria, ana]

function confereAprovados() {
    console.log('\nLista de alunos aprovados (nota de corte: 6)');
    for (i = 0; i < alunos.length; i++) {
        const valueNotas = alunos[i].Nota;
        if (valueNotas >= 6) {
            console.log(`${alunos[i].Nome} tirou ${alunos[i].Nota}`);
        }
    }
}

function confereReprovados() {
    console.log('\nLista de alunos reprovados (nota de corte: 6)');
    for (i = 0; i < alunos.length; i++) {
        const valueNotas = alunos[i].Nota;
        if (valueNotas <= 5) {
            console.log(`${alunos[i].Nome} tirou ${alunos[i].Nota}`);
        }
    }
}

confereAprovados();
confereReprovados();