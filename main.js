$(document).ready(function(){
    
    let inputCadastro = $('.input-cadastro').val();
    let emailInput = $('#email').val();
    
    function limpaInput() {
        $('.input-cadastro').val('');
    };

    function alertFalhaCadastro() {}

    $('#tel').mask('(00) 00000-00000');

    $('.concluir').on('click', function(e) {
        e.preventDefault();
        console.log('aaa');
        let falhaInput = $('.alert-danger input').val();

        if (
            (($('#nome').val()) 
            && ($('#sobrenome').val()) 
            && ($('#email').val()) 
            && ($('#tel').val()) 
            != (''))
        ) {
            let formAlerta = $('form .alerta');
            $(`
                <div class="alert alert-success alert-dismissible">
                Um e-mail de confirmação foi enviado. </br>Prossiga com o cadastro à partir do link enviado para você.
                </div>
            `).appendTo(formAlerta);

            $('.alert').fadeOut(7000);

            limpaInput();
        } else if (
            (($('#nome').val('')) 
            || ($('#sobrenome').val('')) 
            || ($('#email').val('')) 
            || ($('#tel').val('')) 
            && ((falhaInput) == ('')))
            ) {
                let formAlerta = $('form .alerta');

                $(`
                    <div class="alert alert-danger alert-dismissible">
                    Todos os campos precisam ser preenchidos.
                    <input type="text">
                    </div>
                `).appendTo(formAlerta);

                $('.alert').fadeOut(7000);
            }
    });


})