# Mód. 18 - Automação de Tarefas com Grunt

## Como usar:

Abra o terminal na pasta do repositório e digite os comandos:

    > 'npm run grunt compless' <-- Para compilar arquivos .less em .css;
    > 'npm run grunt minjs' <-- Para minificar arquivos .js;

Para editar o local de saída dos arquivos, abra o 'gruntfile.js' e edite os files conforme sua necessidade.

Ex.:  
    files: {
    'local de saída': 'local onde está localizado o arquivo fonte'
    }


### Requisitos:

Criar um arquivo gruntfile, que execute as tarefas:
    > Compilação do LESS; - OK
    > Minificar JS; - OK
