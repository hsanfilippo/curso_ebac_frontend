$(document).ready(function(){

    $('.menu-hamb').click(function() {
        $('#menu-expand').slideToggle();
        console.log('aaaaaa')
    });

    $('#inputTelefone').mask('(00) 00000-0000', {
        placeholder: '(11) 91234-1234'
    });

    $('#inputCpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
        
    $('#inputCep').mask('00000-000', {
        placeholder: 'XXXXX-XXX'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                tel: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            estado: {
                required: true
            },
            cidade: {
                required: true
            },
            rua: {
                required: true
            },
            numRua: {
                required: true
            }
        },
        messages: {
            nome: "*",
            sobrenome: "*",
            email: "*",
            telefone: "*",
            cpf: "*",
            cep: "*",
            estado: "*",
            cidade: "*",
            rua: "*",
            numRua: "*"
        },
        submitHandler: function(form) {
            alert('Seu cadastro foi concluído com sucesso! Boa sorte!');
        },
        invalidHandler: function(evento, validador) {
            let numPendentes = validador.numberOfInvalids();
                if (numPendentes) {
                    alert(`Existem ${numPendentes} campo(s) incorreto(s).`);
                };
            },
    });
});