# Mód. 17 - Introdução ao LESS

## Requisitos:
  Converter o estilo do projeto disponibilizado na plataforma para o LESS;- OK
  Utilize os recursos do LESS que aprendemos durante o módulo, como as variáveis, divisão dos arquivos, escapings e os mapas; - OK

## Bonus track:
  No 'var.less' adicionei uma lista de variáveis, padronizando os tamanhos de margins e paddings, de maneira similar ao Bootstrap, mas possibilitando o uso com LESS.
  Assim, o desenvolvedor consegue ganhar um pouco de tempo, e diminuirá o tamanho do código.
  
 - Sem 'var.less': 
  
  section {
    margin-bottom: 16px;
  }
 
 - Com 'var.less':
  
  section {
    margin: @mb-2;
  }
